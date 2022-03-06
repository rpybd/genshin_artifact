import * as genshin from "genshin_panel";
import targetFunctionsFunc from "@asset/target_functions/func";
// import createCheckFunction from "./create_check_function";
import createFilterFunction from "./create_filter_function";
// import applyBuffs from "./apply_buffs";
import { getAttribute } from "@util/attribute";
// import artifactEff from "@const/artifact_eff";
import positions from "@const/positions";
import oldCompute, { calcHowMuchBonusPerTag, checkAttribute, getArtifactsSetInfo } from './compute_artifacts.js';

const RECORD_COUNT = 5;

function genPositionPermutation() {
    const result = [];
    const nPosi = positions.length;
    for (let p1 = 0; p1 < nPosi; p1++) {
        for (let p2 = p1 + 1; p2 < nPosi; p2++) {
            const pos1 = positions[p1], pos2 = positions[p2];
            const subResult = [];
            for (let p3 = 0; p3 < nPosi; p3++) {
                if (p3 === p1 || p3 === p2) {
                    continue;
                }
                for (let p4 = p3 + 1; p4 < nPosi; p4++) {
                    if (p4 === p1 || p4 === p2) {
                        continue;
                    }
                    let p5 = 0;
                    for (; p5 < nPosi; p5++) {
                        if (p5 !== p1 && p5 !== p2 && p5 !== p3 && p5 !== p4) {
                            break;
                        }
                    }
                    const pos3 = positions[p3], pos4 = positions[p4], pos5 = positions[p5];
                    subResult.push([pos3, pos4, pos5]);
                }
            }
            result.push([[pos1, pos2], subResult]);
        }
    }
    return result;
}

const POS_PERM = genPositionPermutation();

function getValueFunction(configObject) {
    let {
        character: c,
        weapon: w,
        targetFunc: tf,
        buffs,
        constraint,
        artifactsConfig,
    } = configObject;
    const parameters = [c, w, buffs, artifactsConfig];

    // get character and weapon
    const character = new genshin.Character(c.name, c.level, c.ascend, 0);
    const weapon = new genshin.Weapon(
        w.name,
        w.level,
        w.ascend,
        w.refine,
        w.args
    );

    // construct target function, given name and args
    let targetFunc = targetFunctionsFunc[tf.name];
    const targetFuncVersion = targetFunc.version ?? 1;
    let targetFuncContext = {};
    // if need context, artifacts info will be passed as argument during computing
    const needContext = targetFunc.needContext;

    let valueFunc;
    if (targetFuncVersion === 1) {
        if (targetFunc.needConfig) {
            // the target function need configuration
            targetFunc = targetFunc.func({
                character,
                weapon,
                cArgs: {
                    skill1: c.skill1,
                    skill2: c.skill2,
                    skill3: c.skill3,
                    constellation: c.constellation,
                    level: c.level,
                },
                // target function args
                tArgs: tf.args,
            });
        } else {
            targetFunc = targetFunc.func;
        }
        valueFunc = targetFunc;
    } else if (targetFuncVersion === 2) {
        targetFuncContext = {
            cArgs: {
                name: character.name,
                skill1: c.skill1,
                skill2: c.skill2,
                skill3: c.skill3,
                constellation: c.constellation,
                level: c.level,
                hasTalent1: character.hasTalent1,
                hasTalent2: character.hasTalent2,
            },
            wArgs: { name: weapon.name, refine: weapon.refine, level: weapon.level },
            tArgs: tf.args,
        };

        targetFunc = targetFunc.func;
        valueFunc = (attr, context) => targetFunc(attr, targetFuncContext, context);
    } else {
        valueFunc = targetFunc;
    }

    return (arts) => {
        let attribute = getAttribute(arts, c, w, buffs, artifactsConfig);
        if (!checkAttribute(constraint, attribute)) {
            return {
                value: null,
                combo: arts,
                attribute,
                valueFunction: null,
                parameters,
            };
        }

        let context = undefined;
        if (needContext) {
            context = {
                artifactSet: getArtifactsSetInfo(arts),
            };
        }
        return {
            value: valueFunc(attribute, context),
            combo: arts,
            attribute,
            valueFunction: attr => valueFunc(attr, context),
            parameters,
        };
    };
}

function getAllSetNames(artifacts) {
    const { flower, feather, sand, cup, head } = artifacts;
    const allArts = flower.concat(feather).concat(sand).concat(cup).concat(head);
    return Array.from(new Set(allArts.map(a => a.setName)));
}

function partitionArtifactsByMainTag(artifacts) {
    const result = {};
    for (const pos of positions) {
        const posResult = {};
        for (const art of artifacts[pos]) {
            const mainTag = art.mainTag.name;
            const tagResult = (posResult[mainTag] ??= {});
            const setName = art.setName;
            (tagResult[setName] ??= []).push(art);
            // (tagResult[null] ??= []).push(art);
        }
        result[pos] = posResult;
    }
    return result;
}

function genEmptyArtifact(position, mainTag, setName) {
    return {
        detailName: '',
        id: -1,
        level: 20,
        mainTag: {
            name: mainTag,
            value: 0,
        },
        normalTags: [],
        omit: true,
        position,
        setName: setName ?? 'prayersForWisdom',  // TODO: replace it with real empty one
        star: 5
    };
}

function mergeIdeal(dst, src) {
    dst.mainTag.value = Math.max(dst.mainTag.value, src.mainTag.value);
    for (const srcNormalTag of src.normalTags) {
        let exists = false;
        for (const dstNormalTag of dst.normalTags) {
            if (dstNormalTag.name === srcNormalTag.name) {
                dstNormalTag.value = Math.max(dstNormalTag.value, srcNormalTag.value);
                exists = true;
                break;
            }
        }
        if (!exists) {
            dst.normalTags.push(Object.assign({}, srcNormalTag));
        }
    }
}

function getIdealArtifacts(groupArts) {
    const result = {};
    for (const pos of positions) {
        const posResult = {};
        const posArts = groupArts[pos];
        for (const mainTag in posArts) {
            const posMainTagResult = {};
            const posMainTagArts = posArts[mainTag];
            const freeIdealArt = genEmptyArtifact(pos, mainTag, null);
            for (const setName in posMainTagArts) {
                const idealArt = genEmptyArtifact(pos, mainTag, setName);
                for (const art of posMainTagArts[setName]) {
                    mergeIdeal(idealArt, art);
                    mergeIdeal(freeIdealArt, art);
                }
                posMainTagResult[setName] = idealArt;
            }
            posMainTagResult[null] = freeIdealArt;
            posResult[mainTag] = posMainTagResult;
        }
        result[pos] = posResult;
    }
    return result;
}

class ResultRecorder {
    constructor(valueFunction) {
        this.valueFunction = valueFunction;
        this.maxRecord = [];
        this.minIndex = -1;
        this.artHash = new Set();
    }

    calcArtHash(arts) {
        return arts
            .map(a => String(a.id))
            .join(',');
    }

    push(arts) {
        arts = [arts.flower, arts.feather, arts.sand, arts.cup, arts.head];
        const hash = this.calcArtHash(arts);
        if (this.artHash.has(hash)) {
            return;
        }

        const record = this.valueFunction(arts);
        if (record.value === null) {
            return;
        }
        // console.log('push', record);
        const maxRecord = this.maxRecord;
        let minIndex = this.minIndex;
        if (maxRecord.length < RECORD_COUNT) {
            maxRecord.push(record);
        } else if (record.value > maxRecord[minIndex].value) {
            this.artHash.delete(this.calcArtHash(maxRecord[minIndex].combo));
            maxRecord[minIndex] = record;
        } else {
            return;
        }
        this.artHash.add(hash);
        minIndex = 0;
        for (let i = 1; i < maxRecord.length; i++) {
            if (maxRecord[i].value < maxRecord[minIndex].value) {
                minIndex = i;
            }
        }
        this.minIndex = minIndex;
    }

    checkHope(arts) {
        if (!Array.isArray(arts)) {
            arts = [arts.flower, arts.feather, arts.sand, arts.cup, arts.head];
        }
        if (arts.some(a => !a)) {
            return false;
        }
        // console.log('checkHope', arts);
        if (this.minIndex === -1) {
            return true;
        }
        const record = this.valueFunction(arts);
        return record.value && record.value > this.maxRecord[this.minIndex].value;
    }
}

function doEnumerate(filteredArts, originIdealArts, resultRecorder) {
    // console.log('doEnumerate', filteredArts, idealArts);
    const idealArts = Object.assign({}, originIdealArts);
    for (const pos of positions) {
        const setNames = Object.keys(filteredArts[pos]);
        if (setNames.length === 1) {
            idealArts[pos] = {
                ...originIdealArts[pos],
                [null]: originIdealArts[pos][setNames[0]],
            };
        }
    }

    const posOrder = positions.slice();
    const posArtCount = {};
    for (const pos of positions) {
        let cnt = 0;
        for (const artList of Object.values(filteredArts[pos])) {
            cnt += artList.length;
        }
        posArtCount[pos] = cnt;
    }
    posOrder.sort((a, b) => posArtCount[b] - posArtCount[a]);
    const [pos1, pos2, pos3, pos4, pos5] = posOrder;
    // console.log(posOrder);

    for (const sn1 in filteredArts[pos1]) {
        const arts10 = {
            [pos1]: idealArts[pos1][sn1],
            [pos2]: idealArts[pos2][null],
            [pos3]: idealArts[pos3][null],
            [pos4]: idealArts[pos4][null],
            [pos5]: idealArts[pos5][null],
        };
        if (!resultRecorder.checkHope(arts10)) {
            continue;
        }
        for (const art1 of filteredArts[pos1][sn1]) {
            const arts11 = {
                ...arts10,
                [pos1]: art1,
            };
            if (!resultRecorder.checkHope(arts11)) {
                continue;
            }

            for (const sn2 in filteredArts[pos2]) {
                const arts20 = {
                    ...arts11,
                    [pos2]: idealArts[pos2][sn2],
                };
                if (!resultRecorder.checkHope(arts20)) {
                    continue;
                }
                for (const art2 of filteredArts[pos2][sn2]) {
                    const arts21 = {
                        ...arts20,
                        [pos2]: art2,
                    };
                    if (!resultRecorder.checkHope(arts21)) {
                        continue;
                    }

                    for (const sn3 in filteredArts[pos3]) {
                        const arts30 = {
                            ...arts21,
                            [pos3]: idealArts[pos3][sn3],
                        };
                        if (!resultRecorder.checkHope(arts30)) {
                            continue;
                        }
                        for (const art3 of filteredArts[pos3][sn3]) {
                            const arts31 = {
                                ...arts30,
                                [pos3]: art3,
                            };
                            if (!resultRecorder.checkHope(arts31)) {
                                continue;
                            }

                            for (const sn4 in filteredArts[pos4]) {
                                const arts40 = {
                                    ...arts31,
                                    [pos4]: idealArts[pos4][sn4],
                                };
                                if (!resultRecorder.checkHope(arts40)) {
                                    continue;
                                }
                                for (const art4 of filteredArts[pos4][sn4]) {
                                    const arts41 = {
                                        ...arts40,
                                        [pos4]: art4,
                                    };
                                    if (!resultRecorder.checkHope(arts41)) {
                                        continue;
                                    }

                                    for (const sn5 in filteredArts[pos5]) {
                                        const arts50 = {
                                            ...arts41,
                                            [pos5]: idealArts[pos5][sn5],
                                        };
                                        if (!resultRecorder.checkHope(arts50)) {
                                            continue;
                                        }
                                        for (const art5 of filteredArts[pos5][sn5]) {
                                            const arts51 = {
                                                ...arts50,
                                                [pos5]: art5,
                                            };
                                            resultRecorder.push(arts51);
                                            // console.log('doEnumerate', filteredArts, idealArts);
                                            // console.log(posOrder);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

function do4(groupArts, idealArts, resultRecorder, allSetNames) {
    const flowerMainTag = Object.keys(groupArts.flower)[0];
    const featherMainTag = Object.keys(groupArts.feather)[0];
    for (const sandMainTag in groupArts.sand) {
        for (const cupMainTag in groupArts.cup) {
            for (const headMainTag in groupArts.head) {
                const tagGroupArts = {
                    flower: groupArts.flower[flowerMainTag],
                    feather: groupArts.feather[featherMainTag],
                    sand: groupArts.sand[sandMainTag],
                    cup: groupArts.cup[cupMainTag],
                    head: groupArts.head[headMainTag],
                };

                const tagIdealArts = {
                    flower: idealArts.flower[flowerMainTag],
                    feather: idealArts.feather[featherMainTag],
                    sand: idealArts.sand[sandMainTag],
                    cup: idealArts.cup[cupMainTag],
                    head: idealArts.head[headMainTag],
                };

                // console.log(sandMainTag, ' ', cupMainTag, ' ', headMainTag);
                // console.log(tagGroupArts);
                // console.log(tagIdealArts);

                // 4
                for (const setName of allSetNames) {
                    // console.log('set4 ', setName);
                    const setArts = {}, setIdealArts = {};
                    for (const pos of positions) {
                        setArts[pos] = { [setName]: tagGroupArts[pos][setName] };
                        setIdealArts[pos] = tagIdealArts[pos][setName];
                    }
                    for (const freePosi of positions) {
                        const arts = Object.assign({}, setIdealArts);
                        arts[freePosi] = tagIdealArts[freePosi][null];
                        // console.log('freePosi ', freePosi, arts);
                        if (!resultRecorder.checkHope(arts)) {
                            continue;
                        }
                        const filteredArts = Object.assign({}, setArts);
                        filteredArts[freePosi] = tagGroupArts[freePosi];
                        doEnumerate(filteredArts, tagIdealArts, resultRecorder);
                    }
                }
            }
        }
    }
}

function do22(groupArts, idealArts, resultRecorder, allSetNames, fixedSetName = null) {
    const flowerMainTag = Object.keys(groupArts.flower)[0];
    const featherMainTag = Object.keys(groupArts.feather)[0];
    for (const sandMainTag in groupArts.sand) {
        for (const cupMainTag in groupArts.cup) {
            for (const headMainTag in groupArts.head) {
                const tagGroupArts = {
                    flower: groupArts.flower[flowerMainTag],
                    feather: groupArts.feather[featherMainTag],
                    sand: groupArts.sand[sandMainTag],
                    cup: groupArts.cup[cupMainTag],
                    head: groupArts.head[headMainTag],
                };

                const tagIdealArts = {
                    flower: idealArts.flower[flowerMainTag],
                    feather: idealArts.feather[featherMainTag],
                    sand: idealArts.sand[sandMainTag],
                    cup: idealArts.cup[cupMainTag],
                    head: idealArts.head[headMainTag],
                };

                // 2 + 2
                const allDoubleArts = allSetNames
                    .concat(allSetNames)
                    .map(setName => genEmptyArtifact('flower', flowerMainTag, setName));
                for (let i = 0; i < allSetNames.length; i++) {
                    const setName1 = allSetNames[i];
                    if (fixedSetName !== null && setName1 !== fixedSetName) {
                        continue;
                    }
                    // console.log('set2+? ', setName1);
                    for (const [[pos1, pos2], subPos] of POS_PERM) {
                        const arts = allDoubleArts.slice();
                        arts[i] = tagIdealArts[pos1][setName1];
                        arts[i + allSetNames.length] = tagIdealArts[pos2][setName1];
                        for (const pos of subPos[0]) {
                            arts.push(tagIdealArts[pos][null]);
                        }
                        if (!resultRecorder.checkHope(arts)) {
                            continue;
                        }

                        for (let j = i + 1; j < allSetNames.length; j++) {
                            const setName2 = allSetNames[j];
                            // console.log('set2+2 ', setName1, ' ', setName2);
                            for (const [pos3, pos4, pos5] of subPos) {
                                const arts = {
                                    [pos1]: tagIdealArts[pos1][setName1],
                                    [pos2]: tagIdealArts[pos2][setName1],
                                    [pos3]: tagIdealArts[pos3][setName2],
                                    [pos4]: tagIdealArts[pos4][setName2],
                                    [pos5]: tagIdealArts[pos5][null],
                                };
                                if (!resultRecorder.checkHope(arts)) {
                                    continue;
                                }
                                // console.log('set2 [%s, %s, %s, %s, %s]', pos1, pos2, pos3, pos4, pos5, arts);

                                const filteredArts = {
                                    [pos1]: { [setName1]: tagGroupArts[pos1][setName1] },
                                    [pos2]: { [setName1]: tagGroupArts[pos2][setName1] },
                                    [pos3]: { [setName2]: tagGroupArts[pos3][setName2] },
                                    [pos4]: { [setName2]: tagGroupArts[pos4][setName2] },
                                    [pos5]: tagGroupArts[pos5],
                                };
                                doEnumerate(filteredArts, tagIdealArts, resultRecorder);
                            }
                        }
                    }
                }
            }
        }
    }
}

function do2(groupArts, idealArts, resultRecorder, allSetNames) {
    const flowerMainTag = Object.keys(groupArts.flower)[0];
    const featherMainTag = Object.keys(groupArts.feather)[0];
    for (const sandMainTag in groupArts.sand) {
        for (const cupMainTag in groupArts.cup) {
            for (const headMainTag in groupArts.head) {
                const tagGroupArts = {
                    flower: groupArts.flower[flowerMainTag],
                    feather: groupArts.feather[featherMainTag],
                    sand: groupArts.sand[sandMainTag],
                    cup: groupArts.cup[cupMainTag],
                    head: groupArts.head[headMainTag],
                };

                const tagIdealArts = {
                    flower: idealArts.flower[flowerMainTag],
                    feather: idealArts.feather[featherMainTag],
                    sand: idealArts.sand[sandMainTag],
                    cup: idealArts.cup[cupMainTag],
                    head: idealArts.head[headMainTag],
                };

                // 2
                for (let i = 0; i < allSetNames.length; i++) {
                    const setName1 = allSetNames[i];
                    // console.log('set2 ', setName1);
                    for (const [[pos1, pos2], subPos] of POS_PERM) {
                        const [pos3, pos4, pos5] = subPos[0];
                        const arts = {
                            [pos1]: tagIdealArts[pos1][setName1],
                            [pos2]: tagIdealArts[pos2][setName1],
                            [pos3]: tagIdealArts[pos3][null],
                            [pos4]: tagIdealArts[pos4][null],
                            [pos5]: tagIdealArts[pos5][null],
                        };
                        if (!resultRecorder.checkHope(arts)) {
                            continue;
                        }

                        const filteredArts = {
                            [pos1]: { [setName1]: tagGroupArts[pos1][setName1] },
                            [pos2]: { [setName1]: tagGroupArts[pos2][setName1] },
                            [pos3]: tagGroupArts[pos3],
                            [pos4]: tagGroupArts[pos4],
                            [pos5]: tagGroupArts[pos5],
                        };
                        doEnumerate(filteredArts, tagIdealArts, resultRecorder);
                    }
                }
            }
        }
    }
}

function doAny(groupArts, idealArts, resultRecorder) {
    const flowerMainTag = Object.keys(groupArts.flower)[0];
    const featherMainTag = Object.keys(groupArts.feather)[0];
    for (const sandMainTag in groupArts.sand) {
        for (const cupMainTag in groupArts.cup) {
            for (const headMainTag in groupArts.head) {
                const tagGroupArts = {
                    flower: groupArts.flower[flowerMainTag],
                    feather: groupArts.feather[featherMainTag],
                    sand: groupArts.sand[sandMainTag],
                    cup: groupArts.cup[cupMainTag],
                    head: groupArts.head[headMainTag],
                };

                const tagIdealArts = {
                    flower: idealArts.flower[flowerMainTag],
                    feather: idealArts.feather[featherMainTag],
                    sand: idealArts.sand[sandMainTag],
                    cup: idealArts.cup[cupMainTag],
                    head: idealArts.head[headMainTag],
                };

                doEnumerate(tagGroupArts, tagIdealArts, resultRecorder);
            }
        }
    }
}

export default function computeArtifacts(artifacts, configObject) {
    const valueFunction = getValueFunction(configObject);

    // filter artifacts
    const filterFunc = createFilterFunction(configObject.constraint);
    artifacts = filterFunc(artifacts);
    if (Object.values(artifacts).some(list => list.length === 0)) {
        return oldCompute(artifacts, configObject);
    }

    let allSetNames = getAllSetNames(artifacts);
    const oldAllSetNames = allSetNames;
    const groupArts = partitionArtifactsByMainTag(artifacts);
    const idealArts = getIdealArtifacts(groupArts);

    const resultRecorder = new ResultRecorder(valueFunction);

    const setConfig = configObject.constraint.constraintSet;
    switch (setConfig.mode) {
    case 'any':
        do4(groupArts, idealArts, resultRecorder, allSetNames);
        do22(groupArts, idealArts, resultRecorder, allSetNames);
        do2(groupArts, idealArts, resultRecorder, allSetNames);
        doAny(groupArts, idealArts, resultRecorder);
        break;
    case '2':
        allSetNames = [setConfig.setName1];
        do4(groupArts, idealArts, resultRecorder, allSetNames);
        do22(groupArts, idealArts, resultRecorder, oldAllSetNames, setConfig.setName1);
        do2(groupArts, idealArts, resultRecorder, allSetNames);
        break;
    case '22':
        allSetNames = [setConfig.setName2, setConfig.setName3];
        do22(groupArts, idealArts, resultRecorder, allSetNames);
        break;
    case '4':
        allSetNames = [setConfig.setName4];
        do4(groupArts, idealArts, resultRecorder, allSetNames);
        break;
    }

    const { maxRecord } = resultRecorder;
    // console.log(maxRecord);
    if (maxRecord.length === 0) {
        return {
            error: {
                reason:
                    "没有符合条件的圣遗物，请仔细检查过滤条件、限定条件（套装等），以及圣遗物导入是否有错误",
                code: 1000,
                isError: true,
            },
        };
    }

    maxRecord.sort((a, b) => {
        return b.value - a.value;
    });

    for (const record of maxRecord) {
        record.howMuchBonusPerTag = calcHowMuchBonusPerTag(record);
        delete record.attribute._lazyList;
        delete record.valueFunction;
    }

    return {
        record: maxRecord,
        error: {
            isError: false,
        },
    };
}
