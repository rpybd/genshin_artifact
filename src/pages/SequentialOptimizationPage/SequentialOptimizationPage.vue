<template>
    <div>
        <apply-preset-dialog
            ref="applyPresetDialog"
            @selected="name => addPreset(name)"
        ></apply-preset-dialog>

        <el-dialog
            title="选择圣遗物"
            :width="deviceIsPC ? '80%' : '90%'"
            :visible.sync="showSelectArtifactDialog"
        >
            <select-artifact
                :position="selectArtifactSlot"
                @select="handleSelectArtifact"
            ></select-artifact>
        </el-dialog>

        <el-row style="margin-bottom: 12px">
            <el-col :span="12">
                <el-button
                    size="mini"
                    icon="el-icon-folder-opened"
                    @click="handleClickImportSequence"
                >导入序列</el-button>
                <el-button
                    type="primary"
                    size="mini"
                    icon="el-icon-folder-checked"
                    :disabled="!sequenceDirty"
                    @click="handleClickSaveSequence"
                >保存序列</el-button>
                <el-divider direction="vertical"></el-divider>
                <el-button
                    v-if="!cancelOptimizeArtifact"
                    type="primary"
                    size="mini"
                    icon="el-icon-cpu"
                    @click="handleStartCompute(0)"
                >开始计算</el-button>
                <el-button
                    v-if="cancelOptimizeArtifact"
                    type="danger"
                    size="mini"
                    icon="el-icon-warning-outline"
                    @click="cancelOptimizeArtifact"
                >中止计算</el-button>
            </el-col>
            <el-col :span="12">
                <div style="float: right">
                    <el-button
                        size="mini"
                        icon="el-icon-star-on"
                        @click="handleClickSaveToDirectory"
                    >批量存至收藏夹</el-button>
                </div>
            </el-col>
        </el-row>

        <transition-group name="flip-list" tag="div">
            <el-row
                v-for="(preset, index) in presets"
                :key="preset.name"
                :gutter="16"
                class="flip-list-item"
            >
                <el-col
                    :md="6"
                    :sm="24"
                    class="mona-scroll-hidden left member-item"
                >
                    <div style="display: flex; justify-content: space-between; align-items: center" class="member-header">
                        <p class="team-title">成员{{ index + 1 }}</p>
                        <div>
                            <el-button
                                circle
                                size="mini"
                                type="text"
                                icon="el-icon-arrow-up"
                                :disabled="index === 0"
                                @click="handleUpMember(index)"
                                style="color: white"
                            ></el-button>
                            <el-button
                                circle
                                size="mini"
                                type="text"
                                icon="el-icon-arrow-down"
                                :disabled="index === presetNames.length - 1"
                                @click="handleDownMember(index)"
                                style="color: white"
                            ></el-button>
                            <el-button
                                circle
                                size="mini"
                                type="text"
                                icon="el-icon-delete"
                                @click="handleDeleteMember(index)"
                                style="color: white"
                            ></el-button>
                        </div>
                    </div>

                    <div style="display: flex; justify-content: space-between; align-items: center">
                        <preset-item
                            :toolbar="false"
                            :item="preset.item"
                            :name="preset.name"
                            style="width: 100%;"
                        ></preset-item>
                    </div>
                    <!-- <p class="common-title2">计算预设</p>
                    <select-preset
                        v-model="presetNames[index]"
                    ></select-preset> -->
                </el-col>

                <el-col
                    :md="18"
                    :sm="24"
                    ref="resultCol"
                    class="mona-scroll-hidden right result-item"
                >
                    <div class="result-item-top">
                        <div>
                            <!-- <span class="result-item-title">{{ characterChs[index] }}</span> -->
                            <!-- <el-button
                                icon="el-icon-cpu"
                                circle
                                size="mini"
                                type="text"
                                title="转到计算器"
                                @click="handleRedirectToCalculator(index)"
                            ></el-button> -->
                            <el-button
                                size="mini"
                                icon="el-icon-view"
                                @click="handleRedirectToCalculator(index)"
                            >角色详情</el-button>
                            <el-button
                                size="mini"
                                icon="el-icon-smoking"
                                @click="handleStartCompute(index, index + 1)"
                            >计算这个</el-button>
                            <el-button
                                size="mini"
                                icon="el-icon-caret-bottom"
                                @click="handleStartCompute(index)"
                            >计算这个及以下</el-button>
                        </div>
                        <div class="result-item-buttons">
                        </div>
                    </div>
                    <div class="result-item-content">
                        <div
                            v-for="(artId, artIndex) in results[index]"
                            :key="artIndex"
                            class="artifact-item-or-button"
                        >
                            <artifact-display
                                v-if="artifactsById[artId]"
                                :item="artifactsById[artId]"
                                selectable
                                :buttons="true"
                                :delete-button="true"
                                @delete="handleRemoveArtifact(index, artIndex)"
                                @toggle="handleToggleArtifact(artId)"
                                @click="handleGotoSelectArtifact(index, artIndex)"
                                class="artifact-display"
                            ></artifact-display>
                            <add-button
                                v-else
                                @click="handleGotoSelectArtifact(index, artIndex)"
                                class="add-button"
                                style="height: 7vw; width: 11vw"
                            ></add-button>
                        </div>
                    </div>
                </el-col>
            </el-row>
            <el-row
                :key="'this-is-a-unique-key-for-add-button!!!!'"
                :gutter="16"
                class="flip-list-item"
            >
                <el-col
                    :md="6"
                    :sm="24"
                    class="mona-scroll-hidden left member-item"
                >
                    <add-button msg="添加成员" @click="$refs.applyPresetDialog.open()" style="height: 7vw; width: 100%"></add-button>
                </el-col>
            </el-row>
        </transition-group>
    </div>
</template>

<script>
import {mapGetters} from "vuex"
import objectHash from "object-hash"

import {convertArtifact} from "@util/converter"
import {wasmSingleOptimize} from "@/wasm/single_optimize"
import {convertPresetToWasmInterface, getPresetEntryByName} from "@util/preset"
import {toggleArtifact} from "@util/artifacts"
import {deviceIsPC} from "@util/device"
import {characterData} from "@character"
import {artifactsData} from "@artifact"
import {getDirByName, newKumiWithArtifacts, newDir} from "@util/kumi"

import SelectCharacter from "@c/select/SelectCharacter"
import SelectWeapon from "@c/select/SelectWeapon"
import ItemConfig from "@c/config/ItemConfig"
import ArtifactDisplay from "@c/display/ArtifactDisplay"
import MyButton1 from "@c/button/MyButton1"
import PresetItem from "@c/display/PresetItem"
import SelectPreset from "@c/select/SelectPreset"
import AttributePanel from "@c/display/AttributePanel"
import AddButton from "@c/misc/AddButton"
import ApplyPresetDialog from "../NewArtifactPlanPage/ApplyPresetDialog"
import SelectArtifact from "@c/select/SelectArtifact"

export default {
    name: "SequentialOptimizationPage",
    components: {
        SelectCharacter,
        SelectWeapon,
        ItemConfig,
        ArtifactDisplay,
        MyButton1,
        PresetItem,
        SelectPreset,
        AttributePanel,
        AddButton,
        ApplyPresetDialog,
        SelectArtifact,
    },
    data() {
        return {
            presetNames: [],
            results: [],    // a 2d array

            showSelectArtifactDialog: false,
            selectArtifactSlot: "any",
            handleSelectArtifact: null,

            cancelOptimizeArtifact: null,

            showAttributeDrawer: false,
            wasmAttribute: null,

            deviceIsPC,
            savedSequenceHash: null,
        }
    },
    computed: {
        ...mapGetters("artifacts", {
            artifactsFlat: "allFlat",
            artifactsById: "artifactsById",
        }),

        singleInterfaces() {
            return this.presets.map(x => convertPresetToWasmInterface(x.item))
        },

        presets() {
            return this.presetNames.map(name => getPresetEntryByName(name))
        },

        sequenceDirty() {
            const hash = objectHash(this.presetNames)
            return hash !== this.savedSequenceHash
        }
    },
    watch: {
        "$store.state.accounts.currentAccountId"() {
            this.presetNames = []
            this.results = []
        },
    },
    methods: {
        addPreset(name) {
            this.presetNames.push(name)
            this.results.push([-1, -1, -1, -1, -1])
        },

        swap(arr, i, j) {
            let temp = arr[i]
            this.$set(arr, i, arr[j])
            this.$set(arr, j, temp)
        },

        handleUpMember(index) {
            this.swap(this.presetNames, index, index - 1)
            this.swap(this.results, index, index - 1)
        },

        handleDownMember(index) {
            this.swap(this.presetNames, index, index + 1)
            this.swap(this.results, index, index + 1)
        },

        handleDeleteMember(index) {
            this.$delete(this.presetNames, index)
            this.$delete(this.results, index)
        },

        artifactObjectToArray(art) {
            return [
                art.flower,
                art.feather,
                art.sand,
                art.goblet,
                art.head,
            ]
        },

        getFilteredArtifactsWasm(excludeResults) {
            let results = []
            for (let artifact of this.artifactsFlat) {
                if (artifact.level >= 16) {
                    results.push(artifact)
                }
            }
            let used = new Set()
            for (let artIds of excludeResults) {
                for (let artId of artIds) {
                    used.add(artId)
                }
            }
            return results.filter(a => !a.omit && !used.has(a.id)).map(convertArtifact)
        },

        async handleStartCompute(start, end) {
            if (end === undefined) {
                end = this.presets.length
            }
            const canStart = this.presets.slice(start, end).every(x => x)
            if (!canStart) {
                this.$message.error("计算范围内有计算预设已被删除")
                return
            }

            for (let i = start; i < end; i++) {
                this.$set(this.results, i, [-1, -1, -1, -1, -1])
            }
            for (let i = start; i < end; i++) {
                const singleInterface = {
                    ...convertPresetToWasmInterface(this.presets[i].item),
                    max_result_num: 1,
                }
                let loading = this.$loading({
                    target: this.$refs.resultCol[i].$el,
                    lock: true,
                    text: "莫娜占卜中",
                    // background: 'rgba(0, 0, 0, 0.7)',
                })
                let availableArts = this.getFilteredArtifactsWasm(this.results.slice(0, i))
                let [promise, cancel] = wasmSingleOptimize(singleInterface, availableArts)
                this.cancelOptimizeArtifact = cancel
                let results
                try {
                    results = await promise;
                } catch (e) {
                    this.$message.error(e)
                    break
                } finally {
                    this.cancelOptimizeArtifact = null
                    loading.close()
                }
                if (results.length === 0) {
                    this.$message.error("没有符合条件的圣遗物")
                }
                this.$set(this.results, i, this.artifactObjectToArray(results[0]))
            }
        },

        wasmGetAttributeInterface(index) {
            let artifacts = []
            if (this.currentResultEntry) {
                const artifactIds = Object.values(this.currentResultEntry[index])
                const artifactsOldFormat = artifactIds.map(x => this.artifactsById[x]).filter(x => x)
                artifacts = artifactsOldFormat.map(a => convertArtifact(a))
            }
            // console.log(this.presets[index])

            return {
                character: this.presets[index].item.character,
                weapon: this.presets[index].item.weapon,
                buffs: this.presets[index].item.buffs,
                artifacts,
            }
        },

        getKumiName(characterName, artifactIds) {
            let ctr = {}
            for (let id of artifactIds) {
                let artifact = this.artifactsById[id]
                if (!artifact) {
                    continue
                }
                const setName = artifact.setName
                if (!Object.prototype.hasOwnProperty.call(ctr, setName)) {
                    ctr[setName] = 0
                }
                ctr[setName] += 1
            }

            let name = characterData[characterName].chs
            for (const setName in ctr) {
                if (ctr[setName] >= 2) {
                    name += '-' + artifactsData[setName].chs
                }
            }
            return name
        },

        handleClickSaveToDirectory() {
            let dirName = new Date().toLocaleString()
            newDir(dirName)
            let dirId = getDirByName(dirName)
            console.log(dirId)
            for (let i = 0; i < this.presets.length; i++) {
                let cName = this.presets[i].item.character.name
                let ids = this.results[i]
                newKumiWithArtifacts(dirId, this.getKumiName(cName, ids), ids)
            }
            this.$message.info(`已保存到"${dirName}"收藏夹`)
        },

        handleClickSaveSequence() {
            this.$store.commit('sequence/save', this.presetNames)
            this.savedSequenceHash = objectHash(this.presetNames)
            this.$message.info('保存序列成功')
        },

        handleClickImportSequence() {
            this.presetNames = this.$store.state.sequence.sequence.slice()
            this.savedSequenceHash = objectHash(this.presetNames)
            this.results = this.presetNames.map(x => [-1, -1, -1, -1, -1])
        },

        handleRedirectToCalculator(index) {
            this.$router.push({
                name: "calculate",
                params: {
                    presetName: this.presetNames[index],
                    artifacts: this.results[index],
                }
            })
        },

        handleRemoveArtifact(index, artIndex) {
            this.$set(this.results[index], artIndex, -1)
        },

        handleToggleArtifact(id) {
            this.$store.commit("artifacts/toggleById", { id })
        },

        handleGotoSelectArtifact(index, artIndex) {
            const map = ["flower", "feather", "sand", "cup", "head"]
            const slotName = map[artIndex]
            this.selectArtifactSlot = slotName
            this.handleSelectArtifact = id => {
                this.$set(this.results[index], artIndex, id)
                this.showSelectArtifactDialog = false
            }
            this.showSelectArtifactDialog = true
        },
    },
}
</script>

<style scoped lang="scss">
@media (min-width: 992px) {
    // .left, .right {
    //     height: calc(100vh - 2 * 24px);
    // }
}

@media (max-width: 992px) {
    .el-select {
        width: 100%;
    }

    //.left {
    //    margin-bottom: 12px;
    //}
}

.member-item {
    margin-bottom: 16px;
    //box-shadow: 0 0 10px 1px #00000011;
    //padding: 12px;

    &:last-of-type {
        margin-bottom: 64px;
    }

    .member-header {
        //background-color: rgb(236, 245, 255);
        background-color: #409EFF;
        padding: 0 8px;
        height: 32px;
        //border-radius: 3px;
    }

    .team-title {
        font-size: 0.9rem;
        font-weight: bold;
        //color: #606166;
        color: white;
        margin: 0;

        //border-left: 2px solid #409EFF;
        //padding-left: 12px;
    }
}

.common-title2 {
    font-size: 12px;
    color: #666666;
}



.result-item {
    margin-bottom: 12px;

    &:last-of-type {
        margin-bottom: 0;
    }

    .result-item-top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 36px;
        border-bottom: 1px solid #00000011;

        .result-item-title {
            font-size: 12px;
        }

        .result-item-buttons {
            display: flex;
            align-items: center;
        }
    }

    .result-item-content {
        //padding-top: 12px;
        //display: flex;
        //flex-wrap: wrap;
        //gap: 12px;
        display: grid;
        gap: 4px;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));

        .artifact-item-or-button {
            .add-button {
                width: 100%;
                height: 100%;
            }
            .artifact-display {
                width: 100%;
                box-sizing: border-box;
            }
        }
    }
}

.flip-list-item {
  transition: all .6s;
}

.flip-list-enter, .flip-list-leave-to {
    opacity: 0;
    transform: translateY(30px);
}

.flip-list-leave-active {
    position: absolute;
}
</style>
