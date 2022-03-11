import * as genshin from "genshin_panel";
import targetFunctionsFunc from "@asset/target_functions/func";
// import createCheckFunction from "./create_check_function";
import createFilterFunction from "./create_filter_function";
// import applyBuffs from "./apply_buffs";
import { getAttribute } from "@util/attribute";
import artifactEff from "@const/artifact_eff";
import positions from "@const/positions";
import oldCompute, { calcHowMuchBonusPerTag, checkAttribute, getArtifactsSetInfo } from './compute_artifacts.js';

const EMPTY_SET_NAME = 'prayersForWisdom';  // TODO: replace it with real empty one
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

function partitionArtifactsByMainTagAndSet(artifacts) {
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

function partitionArtifactsByMainTagAndTag(artifacts) {
    const tagThreshold = {};
    for (const tag in artifactEff['5']) {
        tagThreshold[tag] = artifactEff['5'][tag][1] * 4;
    }
    const result = {};
    for (const pos of positions) {
        const tags = {};
        for (const art of artifacts[pos]) {
            const mainTag = art.mainTag.name;
            const tagResult = (tags[mainTag] ??= []);
            tagResult.push(art);
        }
        const posResult = {};
        for (const mainTag in tags) {
            const mainTagResult = {};
            for (const art of tags[mainTag]) {
                const tag = art.normalTags.find(tag => tag.value >= tagThreshold[tag.name]);
                (mainTagResult[tag?.name ?? ''] ??= []).push(art);
            }
            posResult[mainTag] = mainTagResult;
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
        setName: setName ?? EMPTY_SET_NAME,
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

function getIdealArtifacts(groupSetArts, isSetName) {
    const result = {};
    for (const pos of positions) {
        const posResult = {};
        const posArts = groupSetArts[pos];
        for (const mainTag in posArts) {
            const posMainTagResult = {};
            const posMainTagArts = posArts[mainTag];
            const freeIdealArt = genEmptyArtifact(pos, mainTag, null);
            for (const setName in posMainTagArts) {
                const idealArt = genEmptyArtifact(pos, mainTag, isSetName ? setName : null);
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
    // console.log('doEnumerate', filteredArts, idealSetArts);
    const idealSetArts = Object.assign({}, originIdealArts);
    for (const pos of positions) {
        const setNames = Object.keys(filteredArts[pos]);
        if (setNames.length === 1) {
            idealSetArts[pos] = {
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
            [pos1]: idealSetArts[pos1][sn1],
            [pos2]: idealSetArts[pos2][null],
            [pos3]: idealSetArts[pos3][null],
            [pos4]: idealSetArts[pos4][null],
            [pos5]: idealSetArts[pos5][null],
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
                    [pos2]: idealSetArts[pos2][sn2],
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
                            [pos3]: idealSetArts[pos3][sn3],
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
                                    [pos4]: idealSetArts[pos4][sn4],
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
                                            [pos5]: idealSetArts[pos5][sn5],
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
                                            // console.log('doEnumerate', filteredArts, idealSetArts);
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

function do4(groupSetArts, idealSetArts, groupTagArts, idealTagArts, resultRecorder, allSetNames) {
    console.time('do4');
    const flowerMainTag = Object.keys(groupSetArts.flower)[0];
    const featherMainTag = Object.keys(groupSetArts.feather)[0];
    for (const sandMainTag in groupSetArts.sand) {
        for (const cupMainTag in groupSetArts.cup) {
            for (const headMainTag in groupSetArts.head) {
                const mTagSetArts = {
                    flower: groupSetArts.flower[flowerMainTag],
                    feather: groupSetArts.feather[featherMainTag],
                    sand: groupSetArts.sand[sandMainTag],
                    cup: groupSetArts.cup[cupMainTag],
                    head: groupSetArts.head[headMainTag],
                };
                const mTagSetIdealArts = {
                    flower: idealSetArts.flower[flowerMainTag],
                    feather: idealSetArts.feather[featherMainTag],
                    sand: idealSetArts.sand[sandMainTag],
                    cup: idealSetArts.cup[cupMainTag],
                    head: idealSetArts.head[headMainTag],
                };
                const mTagTagArts = {
                    flower: groupTagArts.flower[flowerMainTag],
                    feather: groupTagArts.feather[featherMainTag],
                    sand: groupTagArts.sand[sandMainTag],
                    cup: groupTagArts.cup[cupMainTag],
                    head: groupTagArts.head[headMainTag],
                };
                const mTagTagIdealArts = {
                    flower: idealTagArts.flower[flowerMainTag],
                    feather: idealTagArts.feather[featherMainTag],
                    sand: idealTagArts.sand[sandMainTag],
                    cup: idealTagArts.cup[cupMainTag],
                    head: idealTagArts.head[headMainTag],
                };

                for (const setName of allSetNames) {
                    // console.log('set4 ', setName);
                    const setArts = {}, setIdealArts = {};
                    for (const pos of positions) {
                        setArts[pos] = { [setName]: mTagSetArts[pos][setName] };
                        setIdealArts[pos] = mTagSetIdealArts[pos][setName];
                    }
                    for (const freePosi of positions) {
                        const arts = Object.assign({}, setIdealArts);
                        arts[freePosi] = mTagSetIdealArts[freePosi][null];
                        // console.log('freePosi ', freePosi, arts);
                        if (!resultRecorder.checkHope(arts)) {
                            continue;
                        }
                        const filteredArts = Object.assign({}, setArts);
                        // filteredArts[freePosi] = mTagSetArts[freePosi];
                        // doEnumerate(filteredArts, mTagSetIdealArts, resultRecorder);
                        filteredArts[freePosi] = mTagTagArts[freePosi];
                        const filteredIdealArts = Object.assign({}, mTagSetIdealArts);
                        filteredIdealArts[freePosi] = mTagTagIdealArts[freePosi];
                        doEnumerate(filteredArts, filteredIdealArts, resultRecorder);
                    }
                }
            }
        }
    }
    console.timeEnd('do4');
    console.log(resultRecorder.maxRecord);
}

function do22(groupSetArts, idealSetArts, groupTagArts, idealTagArts, resultRecorder, allSetNames, fixedSetName = null) {
    console.time('do22');
    const flowerMainTag = Object.keys(groupSetArts.flower)[0];
    const featherMainTag = Object.keys(groupSetArts.feather)[0];
    for (const sandMainTag in groupSetArts.sand) {
        for (const cupMainTag in groupSetArts.cup) {
            for (const headMainTag in groupSetArts.head) {
                const mTagSetArts = {
                    flower: groupSetArts.flower[flowerMainTag],
                    feather: groupSetArts.feather[featherMainTag],
                    sand: groupSetArts.sand[sandMainTag],
                    cup: groupSetArts.cup[cupMainTag],
                    head: groupSetArts.head[headMainTag],
                };

                const mTagSetIdealArts = {
                    flower: idealSetArts.flower[flowerMainTag],
                    feather: idealSetArts.feather[featherMainTag],
                    sand: idealSetArts.sand[sandMainTag],
                    cup: idealSetArts.cup[cupMainTag],
                    head: idealSetArts.head[headMainTag],
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
                        arts[i] = mTagSetIdealArts[pos1][setName1];
                        arts[i + allSetNames.length] = mTagSetIdealArts[pos2][setName1];
                        for (const pos of subPos[0]) {
                            arts.push(mTagSetIdealArts[pos][null]);
                        }
                        if (!resultRecorder.checkHope(arts)) {
                            continue;
                        }

                        for (let j = i + 1; j < allSetNames.length; j++) {
                            const setName2 = allSetNames[j];
                            // console.log('set2+2 ', setName1, ' ', setName2);
                            for (const [pos3, pos4, pos5] of subPos) {
                                const arts = {
                                    [pos1]: mTagSetIdealArts[pos1][setName1],
                                    [pos2]: mTagSetIdealArts[pos2][setName1],
                                    [pos3]: mTagSetIdealArts[pos3][setName2],
                                    [pos4]: mTagSetIdealArts[pos4][setName2],
                                    [pos5]: mTagSetIdealArts[pos5][null],
                                };
                                if (!resultRecorder.checkHope(arts)) {
                                    continue;
                                }
                                // console.log('set2 [%s, %s, %s, %s, %s]', pos1, pos2, pos3, pos4, pos5, arts);

                                const filteredArts = {
                                    [pos1]: { [setName1]: mTagSetArts[pos1][setName1] },
                                    [pos2]: { [setName1]: mTagSetArts[pos2][setName1] },
                                    [pos3]: { [setName2]: mTagSetArts[pos3][setName2] },
                                    [pos4]: { [setName2]: mTagSetArts[pos4][setName2] },
                                    [pos5]: mTagSetArts[pos5],
                                };
                                doEnumerate(filteredArts, mTagSetIdealArts, resultRecorder);
                            }
                        }
                    }
                }
            }
        }
    }
    console.timeEnd('do22');
}

function do2(groupSetArts, idealSetArts, groupTagArts, idealTagArts, resultRecorder, allSetNames) {
    console.time('do2');
    const flowerMainTag = Object.keys(groupSetArts.flower)[0];
    const featherMainTag = Object.keys(groupSetArts.feather)[0];
    for (const sandMainTag in groupSetArts.sand) {
        for (const cupMainTag in groupSetArts.cup) {
            for (const headMainTag in groupSetArts.head) {
                const mTagSetArts = {
                    flower: groupSetArts.flower[flowerMainTag],
                    feather: groupSetArts.feather[featherMainTag],
                    sand: groupSetArts.sand[sandMainTag],
                    cup: groupSetArts.cup[cupMainTag],
                    head: groupSetArts.head[headMainTag],
                };

                const mTagSetIdealArts = {
                    flower: idealSetArts.flower[flowerMainTag],
                    feather: idealSetArts.feather[featherMainTag],
                    sand: idealSetArts.sand[sandMainTag],
                    cup: idealSetArts.cup[cupMainTag],
                    head: idealSetArts.head[headMainTag],
                };

                // 2
                for (let i = 0; i < allSetNames.length; i++) {
                    const setName1 = allSetNames[i];
                    // console.log('set2 ', setName1);
                    for (const [[pos1, pos2], subPos] of POS_PERM) {
                        const [pos3, pos4, pos5] = subPos[0];
                        const arts = {
                            [pos1]: mTagSetIdealArts[pos1][setName1],
                            [pos2]: mTagSetIdealArts[pos2][setName1],
                            [pos3]: mTagSetIdealArts[pos3][null],
                            [pos4]: mTagSetIdealArts[pos4][null],
                            [pos5]: mTagSetIdealArts[pos5][null],
                        };
                        if (!resultRecorder.checkHope(arts)) {
                            continue;
                        }

                        const filteredArts = {
                            [pos1]: { [setName1]: mTagSetArts[pos1][setName1] },
                            [pos2]: { [setName1]: mTagSetArts[pos2][setName1] },
                            [pos3]: mTagSetArts[pos3],
                            [pos4]: mTagSetArts[pos4],
                            [pos5]: mTagSetArts[pos5],
                        };
                        doEnumerate(filteredArts, mTagSetIdealArts, resultRecorder);
                    }
                }
            }
        }
    }
    console.timeEnd('do2');
}

function doAny(groupSetArts, idealSetArts, groupTagArts, idealTagArts, resultRecorder) {
    console.time('doAny');
    const flowerMainTag = Object.keys(groupSetArts.flower)[0];
    const featherMainTag = Object.keys(groupSetArts.feather)[0];
    for (const sandMainTag in groupSetArts.sand) {
        for (const cupMainTag in groupSetArts.cup) {
            for (const headMainTag in groupSetArts.head) {
                const mTagSetArts = {
                    flower: groupSetArts.flower[flowerMainTag],
                    feather: groupSetArts.feather[featherMainTag],
                    sand: groupSetArts.sand[sandMainTag],
                    cup: groupSetArts.cup[cupMainTag],
                    head: groupSetArts.head[headMainTag],
                };

                const mTagSetIdealArts = {
                    flower: idealSetArts.flower[flowerMainTag],
                    feather: idealSetArts.feather[featherMainTag],
                    sand: idealSetArts.sand[sandMainTag],
                    cup: idealSetArts.cup[cupMainTag],
                    head: idealSetArts.head[headMainTag],
                };

                doEnumerate(mTagSetArts, mTagSetIdealArts, resultRecorder);
            }
        }
    }
    console.timeEnd('doAny');
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
    const groupSetArts = partitionArtifactsByMainTagAndSet(artifacts);
    const idealSetArts = getIdealArtifacts(groupSetArts, true);

    const groupTagArts = partitionArtifactsByMainTagAndTag(artifacts);
    const idealTagArts = getIdealArtifacts(groupTagArts, false);

    const resultRecorder = new ResultRecorder(valueFunction);

    const setConfig = configObject.constraint.constraintSet;
    switch (setConfig.mode) {
    case 'any':
        do4(groupSetArts, idealSetArts, groupTagArts, idealTagArts, resultRecorder, allSetNames);
        do22(groupSetArts, idealSetArts, groupTagArts, idealTagArts, resultRecorder, allSetNames);
        do2(groupSetArts, idealSetArts, groupTagArts, idealTagArts, resultRecorder, allSetNames);
        doAny(groupSetArts, idealSetArts, groupTagArts, idealTagArts, resultRecorder);
        break;
    case '2':
        allSetNames = [setConfig.setName1];
        do4(groupSetArts, idealSetArts, groupTagArts, idealTagArts, resultRecorder, allSetNames);
        do22(groupSetArts, idealSetArts, groupTagArts, idealTagArts, resultRecorder, oldAllSetNames, setConfig.setName1);
        do2(groupSetArts, idealSetArts, groupTagArts, idealTagArts, resultRecorder, allSetNames);
        break;
    case '22':
        allSetNames = [setConfig.setName2, setConfig.setName3];
        do22(groupSetArts, idealSetArts, groupTagArts, idealTagArts, resultRecorder, allSetNames);
        break;
    case '4':
        allSetNames = [setConfig.setName4];
        do4(groupSetArts, idealSetArts, groupTagArts, idealTagArts, resultRecorder, allSetNames);
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
