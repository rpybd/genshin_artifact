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
                    @click="handleClickStart"
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
                    <el-button-group>
                        <el-button
                            type="primary"
                            size="mini"
                            icon="el-icon-star-on"
                            @click="handleClickSaveToDirectory"
                        >存至收藏夹</el-button>
                        <el-dropdown trigger="click" @command="handleClickImportFromDirectory">
                            <el-button
                                size="mini"
                                icon="el-icon-download"
                            >导入</el-button>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item
                                    v-for="item in directories"
                                    :key="item.id"
                                    :command="item.id"
                                >{{item.title}}</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                        <el-dropdown trigger="click" @command="handleClickCompareWithDirectory">
                            <el-button
                                size="mini"
                                icon="el-icon-document-copy"
                            >对比{{ oldDirectoryId !== null ? '中' : '' }}</el-button>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item
                                    v-for="item in directories"
                                    :key="item.id"
                                    :command="item.id"
                                    :class="{ 'directory-active': oldDirectoryId == item.id }"
                                >{{item.title}}</el-dropdown-item>
                                <el-dropdown-item
                                    v-if="oldDirectoryId !== null"
                                    divided
                                    command="cancel"
                                >取消</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </el-button-group>
                </div>
            </el-col>
        </el-row>

        <draggable
            tag="div"
            v-model="sequenceData"
            handle=".member-item"
            :animation="300"
            :disabled="false"
            ghostClass="ghost"
            @start="dragging = true"
            @end="dragging = false"
        >
            <transition-group :name="!dragging ? 'flip-list' : null" type="transition">
                <el-row
                    v-for="({name, id, arts}, index) in sequenceData"
                    :key="id"
                    :gutter="16"
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
                                    :disabled="index === sequenceData.length - 1"
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
                                :item="presets[index].item"
                                :name="name"
                                style="width: 100%;"
                            ></preset-item>
                        </div>
                    </el-col>

                    <el-col
                        :md="18"
                        :sm="24"
                        :id="id"
                        class="mona-scroll-hidden right result-item"
                    >
                        <div class="result-item-top">
                            <div>
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
                                v-for="(artId, artIndex) in arts"
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
                                    :class="{ differ: oldDirectory.has(name) && artId !== oldDirectory.get(name)[artIndex] }"
                                ></artifact-display>
                                <add-button
                                    v-else
                                    @click="handleGotoSelectArtifact(index, artIndex)"
                                    class="add-button"
                                ></add-button>
                            </div>
                        </div>
                    </el-col>
                </el-row>
                <el-row
                    :key="'this-is-a-unique-key-for-add-button!!!!'"
                    :gutter="16"
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
        </draggable>
    </div>
</template>

<script>
import {mapGetters} from "vuex"
import objectHash from "object-hash"

import draggable from "vuedraggable"

import {convertArtifact} from "@util/converter"
import {wasmSingleOptimize} from "@/wasm/single_optimize"
import {convertPresetToWasmInterface, getPresetEntryByName} from "@util/preset"
import {toggleArtifact} from "@util/artifacts"
import {deviceIsPC} from "@util/device"
import {characterData} from "@character"
import {artifactsData} from "@artifact"
import {getDirByName, newKumiWithArtifacts, newDir, getKumisByDir} from "@util/kumi"

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
        draggable,
        // SelectCharacter,
        // SelectWeapon,
        // ItemConfig,
        ArtifactDisplay,
        // MyButton1,
        PresetItem,
        SelectPreset,
        // AttributePanel,
        AddButton,
        ApplyPresetDialog,
        SelectArtifact,
    },
    data() {
        return {
            sequenceData: [],
            savedSequenceHash: null,
            dragging: false,

            showSelectArtifactDialog: false,
            selectArtifactSlot: "any",
            handleSelectArtifact: null,

            cancelOptimizeArtifact: null,

            oldDirectoryId: null,

            deviceIsPC,
        }
    },
    computed: {
        ...mapGetters("artifacts", {
            artifactsFlat: "allFlat",
            artifactsById: "artifactsById",
        }),

        ...mapGetters("kumi", {
            directories: "directories",
        }),

        presetNames() {
            return this.sequenceData.map(({name}) => name)
        },

        presets() {
            return this.presetNames.map(name => getPresetEntryByName(name))
        },

        sequenceDirty() {
            const hash = objectHash(this.presetNames)
            return hash !== this.savedSequenceHash
        },

        oldDirectory() {
            return this.getArtifactsFromDirectory(this.oldDirectoryId)
        }
    },
    watch: {
        "$store.state.accounts.currentAccountId"() {
            this.sequenceData = []
        },
    },
    methods: {
        genUniqueId() {
            return 'arts' + String(Math.floor(Math.random() * 1e8))
        },

        addPreset(name) {
            this.sequenceData.push({
                name,
                id: this.genUniqueId(),
                arts: [-1, -1, -1, -1, -1],
            })
        },

        swap(arr, i, j) {
            let temp = arr[i]
            this.$set(arr, i, arr[j])
            this.$set(arr, j, temp)
        },

        handleUpMember(index) {
            this.swap(this.sequenceData, index, index - 1)
        },

        handleDownMember(index) {
            this.swap(this.sequenceData, index, index + 1)
        },

        handleDeleteMember(index) {
            this.$delete(this.sequenceData, index)
        },

        artifactObjectToArray(art) {
            return [
                art.flower || -1,
                art.feather || -1,
                art.sand || -1,
                art.goblet || art.cup || -1,
                art.head || -1,
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
                const item = this.sequenceData[i]
                item.arts = [-1, -1, -1, -1, -1]
                const singleInterface = {
                    ...convertPresetToWasmInterface(this.presets[i].item),
                    max_result_num: 1,
                }
                let loading = this.$loading({
                    target: '#' + item.id,
                    lock: true,
                    text: "莫娜占卜中",
                    // background: 'rgba(0, 0, 0, 0.7)',
                })
                let usedArts = this.sequenceData.map(({arts}) => arts).slice(0, i)
                let availableArts = this.getFilteredArtifactsWasm(usedArts)
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
                    break
                }
                item.arts = this.artifactObjectToArray(results[0])
            }
        },

        async handleClickStart() {
            if (this.sequenceDirty) {
                try {
                    await this.$confirm("是否保存序列？", "警告", {
                        confirmButtonText: "确定",
                        cancelButtonText: "取消",
                        type: 'warning'
                    })
                    this.handleClickSaveSequence()
                } catch (e) {
                }
            }
            await this.handleStartCompute(0)
        },

        handleClickSaveToDirectory() {
            let dirName = new Date().toLocaleString()
            newDir(dirName)
            let dirId = getDirByName(dirName)
            for (let i = 0; i < this.presets.length; i++) {
                const item = this.sequenceData[i]
                newKumiWithArtifacts(dirId, item.name, item.arts)
            }
            this.$message.info(`已保存到"${dirName}"收藏夹`)
        },

        getArtifactsFromDirectory(dirId) {
            //preset in page includes name artID & arts,
            //while preset in dir use id, title & artifactIds
            //get array of kumisID by dirID
            let kumiArr = getKumisByDir(dirId)
            //order arts and transform kumisID to map
            let orderedArtsMap = new Map()
            for (let kumi of kumiArr) {
                let tempOrderdArtsSeq = {}
                for (let artId of kumi.artifactIds) {
                    let art = this.artifactsById[artId]
                    if (art) {
                        tempOrderdArtsSeq[art.position] = art.id
                    }
                }
                orderedArtsMap.set(kumi.title, this.artifactObjectToArray(tempOrderdArtsSeq))
            }

            return orderedArtsMap
        },

        handleClickImportFromDirectory(dirId) {
            let artsMap = this.getArtifactsFromDirectory(dirId)
            //iterate sequenceData
            for (let item of this.sequenceData) {
                if (artsMap.has(item.name)) {
                    item.arts = artsMap.get(item.name)
                }
            }
        },

        handleClickCompareWithDirectory(dirId) {
            this.oldDirectoryId = dirId === 'cancel' ? null : dirId
        },

        handleClickSaveSequence() {
            this.$store.commit('sequence/save', this.presetNames)
            this.savedSequenceHash = objectHash(this.presetNames)
            this.$message.info('保存序列成功')
        },

        handleClickImportSequence() {
            let names = this.$store.state.sequence.sequence.slice()
            this.sequenceData = names.map(name => ({
                name,
                id: this.genUniqueId(),
                arts: [-1, -1, -1, -1, -1],
            }))
            this.savedSequenceHash = objectHash(this.presetNames)
        },

        handleRedirectToCalculator(index) {
            const item = this.sequenceData[index]
            this.$router.push({
                name: "calculate",
                params: {
                    presetName: item.name,
                    artifacts: item.arts,
                }
            })
        },

        handleRemoveArtifact(index, artIndex) {
            this.$set(this.sequenceData[index].arts, artIndex, -1)
        },

        handleToggleArtifact(id) {
            this.$store.commit("artifacts/toggleById", { id })
        },

        handleGotoSelectArtifact(index, artIndex) {
            const map = ["flower", "feather", "sand", "cup", "head"]
            const slotName = map[artIndex]
            this.selectArtifactSlot = slotName
            this.handleSelectArtifact = id => {
                this.$set(this.sequenceData[index].arts, artIndex, id)
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

        // .artifact-item-or-button {
        //     .add-button {
        //         width: 100%;
        //         height: 100%;
        //     }
        //     .artifact-display {
        //         width: 100%;
        //         box-sizing: border-box;
        //         &.differ {
        //             box-shadow: 2px 2px 3px #888888;
        //             :first-child {
        //                 background-color: rgb(217, 236, 255);
        //             }
        //         }
        //     }
        // }
        .artifact-item-or-button {
            .add-button {
                width: 100%;
                height: 100%;
                min-height: 7vw;
            }
            .artifact-display {
                overflow: hidden;
                // border-radius: 5px;
                width: 100%;
                box-sizing: border-box;
                z-index: 0;
                &.differ {
                    @keyframes hint {
                        0% {
                            opacity: 0;
                            transform: none;
                        }
                        50% {
                            opacity: 1;
                            transform: none;
                        }
                        100% {
                            opacity: 0;
                            transform: none;
                        }
                    }

                    &::before {
                        content: '';
                        position: absolute;
                        z-index: -2;
                        left: -50%;
                        top: -50%;
                        width: 200%;
                        height: 200%;
                        background-color: rgb(148, 199, 251);
                        background-repeat: no-repeat;
                        background-position: 0 0;
                        animation: hint 3s linear infinite;
                    }

                    &::after {
                        content: '';
                        position: absolute;
                        z-index: -1;
                        left: 2px;
                        top: 2px;
                        width: calc(100% - 4px);
                        height: calc(100% - 4px);
                        background: rgb(255, 255, 255);
                    }
                }

            }
        }
    }
}

.flip-list-move {
    transition: transform 0.3s;
}

.flip-list-enter, .flip-list-leave-to {
    opacity: 0;
    transform: translateY(30px);
    transition: transform 0.3s;
}

.flip-list-leave-active {
    position: absolute;
}

.ghost {
    opacity: 0.5;
    background: #c8ebfb;
}

.directory-active {
    color: #66b1ff;
}
</style>
