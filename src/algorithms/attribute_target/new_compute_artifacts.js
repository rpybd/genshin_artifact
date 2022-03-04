import * as genshin from "genshin_panel";
import targetFunctionsFunc from "@asset/target_functions/func";
import createCheckFunction from "./create_check_function";
import createFilterFunction from "./create_filter_function";
// import applyBuffs from "./apply_buffs";
import { getAttribute } from "@util/attribute";
import artifactEff from "@const/artifact_eff";
import positions from "@const/positions";
import { calcHowMuchBonusPerTag } from './compute_artifacts.js';


function getValueFunction(configObject) {
    let {
        character: c,
        weapon: w,
        targetFunc: tf,
        buffs,
        constraint,
        artifactsConfig,
    } = configObject;

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
        return targetFunc;
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
        return (attr, context) => targetFunc(attr, targetFuncContext, context);
    } else {
        return targetFunc;
    }
}

function getAllSetNames(artifacts) {
    const { flower, feather, sand, cup, head } = artifacts;
    const allArts = flower.concat(feather).concat(sand).concat(cup).concat(head);
    return Array.from(new Set(allArgs.map(a => a.setName)));
}

function partitionArtifactsByMainTag(artifacts) {
    const result = {};
    for (const pos of positions) {
        const posResult = {};
        for (const art of artifacts[pos]) {
            const mainTag = art.mainTag.name;
            const list = (posResult[mainTag] ??= []);
            list.push(art);
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
        setName,
        star: 5
    };
}

function mergeIdeal(dst, src) {
    dst.mainTag.value = Math.max(dst.mainTag.value, src.mainTag.value);
    for (const srcNormalTag of src.normalTags) {
        for (const dstNormalTag of dst.normalTags) {
            if (dstNormalTag.name === srcNormalTag.name) {
                dstNormalTag.value = Math.max(dstNormalTag.value, srcNormalTag.value);
                break;
            }
        }
    }
}

function getIdealArtifacts(artifacts, allSetNames) {
    const result = {};
    for (const pos of positions) {
        const posResult = {};
        const posArts = artifacts[pos];
        for (const mainTag in posArts) {
            const freeArt = genEmptyArtifact(pos, mainTag, null);
            const posMainTagResult = {};
            for (const art in artifacts[pos][mainTag]) {
                mergeIdeal(freeArt, art);
                const setArt = (posMainTagResult[art.setName] ??= genEmptyArtifact(pos, mainTag, art.setName));
                mergeIdeal(setArt, art);
            }
            posMainTagResult[null] = freeArt;
            posResult[mainTag] = posMainTagResult;
        }
        result[pos] = posResult;
    }
    return result;
}

export default function computeArtifacts(artifacts, configObject) {
    const valueFunction = getValueFunction(configObject);

    // filter artifacts
    const filterFunc = createFilterFunction(configObject.constraint);
    artifacts = filterFunc(artifacts);
    // TODO: check if artifacts are not enough


    const sandMainTagNames = new Set(artifacts.sand.map(a => a.mainTag.name));
    const cupMainTagNames = new Set(artifacts.cup.map(a => a.mainTag.name));
    const headMainTagNames = new Set(artifacts.head.map(a => a.mainTag.name));

    const allSetNames = getAllSetNames(artifacts);

    for (const setName of allSetNames) {
        for (const freePosi of positions) {
            const idealFlower = getIdealArtifacts(artifacts.flower, freePosi === 'flower' ? setName : null, null);
            const idealFeather = getIdealArtifacts(artifacts.feather, freePosi === 'feather' ? setName : null, null);
            for (const sandMainTag of sandMainTagNames) {

            }
        }
    }
}
