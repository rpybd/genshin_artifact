<template>
    <div>
        <el-drawer
            title="面板"
            :visible.sync="showAttributeDrawer"
            :size="deviceIsPC ? '30%' : '100%'"
        >
            <template v-if="!wasmAttribute">
                <el-empty>In theory, in should not see this</el-empty>
            </template>
            <template v-else>
                <div style="padding: 0 20px">
                    <attribute-panel
                        :attribute="wasmAttribute"
                    ></attribute-panel>
                </div>
            </template>
        </el-drawer>

        <el-row style="margin-bottom: 12px">
            <el-col :span="12">
                <el-button size="mini" icon="el-icon-folder-opened" @click="handleClickImportSequence">导入序列</el-button>
                <el-button size="mini" icon="el-icon-folder-checked" @click="handleClickSaveSequence">保存序列</el-button>
                <el-button size="mini" icon="el-icon-plus" @click="handleClickAddMember">添加成员</el-button>
                <el-divider direction="vertical"></el-divider>
                <el-button type="primary" size="mini" icon="el-icon-cpu" @click="handleClickStart">开始计算</el-button>
                <el-button
                    v-show="cancelOptimizeArtifact"
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

        <el-row
            v-for="(presetName, index) in presetNames"
            :key="index"
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
                            icon="el-icon-delete"
                            @click="handleDeleteMember(index)"
                            style="color: white"
                        ></el-button>
                    </div>
                </div>

                <p class="common-title2">计算预设</p>
                <select-preset
                    v-model="presetNames[index]"
                ></select-preset>
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
                        <el-button
                            icon="el-icon-s-data"
                            circle
                            size="mini"
                            type="text"
                            title="查看面板"
                            @click="handleClickDisplayAttributePanel(index)"
                        ></el-button>
                    </div>

                    <div class="result-item-buttons">
                    </div>
                </div>
                <div class="result-item-content">
                    <!-- <artifact-display
                        v-for="artifactId in currentResultEntry[index]"
                        :key="artifactId"
                        :item="artifactsById[artifactId]"
                        :buttons="true"
                        :lock-button="true"
                        :delete-button="false"
                        :edit-button="false"
                        @toggle="handleToggleArtifact(artifactId)"
                    ></artifact-display> -->
                    <div
                        v-for="(artId, artIndex) in results[index]"
                        :key="artId"
                        class="artifact-item-or-button"
                    >
                        <artifact-display
                            v-if="artifactsById[artId]"
                            :item="artifactsById[artId]"
                            selectable
                            :buttons="true"
                            :delete-button="true"
                            @delete="handleRemoveArtifact(artIndex)"
                            @toggle="handleToggleArtifact(id)"
                            @click="handleGotoSelectArtifact(artIndex)"
                            class="artifact-display"
                        ></artifact-display>
                        <add-button
                            v-else
                            @click="handleGotoSelectArtifact(index)"
                            class="add-button"
                            style="height: 7vw; width: 11vw"
                        ></add-button>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import {mapGetters} from "vuex"

import {convertArtifact} from "@util/converter"
import {team_optimize, wasmGetAttribute} from "@/wasm"
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
    },
    data() {
        return {
            presetNames: [],
            // weights: [],
            results: [],    // a 2d array

            cancelOptimizeArtifact: null,

            showAttributeDrawer: false,
            wasmAttribute: null,

            deviceIsPC,
        }
    },
    mounted() {
        this.handleClickAddMember()
    },
    methods: {
        handleClickAddMember() {
            this.presetNames.push(null)
            // this.weights.push(0)
            this.results.push([-1, -1, -1, -1, -1])
        },

        handleDeleteMember(index) {
            if (this.presetNames.length === 1) {
                return
            }
            this.$delete(this.presetNames, index)
            // this.$delete(this.weights, index)
            this.$delete(this.results, index)
        },

        handleClearResult() {
            this.results = this.presetNames.map(x => [-1, -1, -1, -1, -1])
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

        async handleClickStart() {
            const canStart = this.presets.length === this.presetNames.length
            if (!canStart) {
                this.$message.error("请选择计算预设")
                return
            }

            this.handleClearResult()
            for (let i = 0; i < this.presetNames.length; i++) {
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
                let [promise, cancel] = wasmSingleOptimize(singleInterface, this.filteredArtifactsWasm)
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
                Vue.set(this.results, i, this.artifactObjectToArray(results[0]))
            }
        },

        handleClickDisplayAttributePanel: async function (index) {
            this.$message.error("自个儿到计算器看去")
            return

            const input = this.wasmGetAttributeInterface(index)
            // console.log(input)
            const result = await wasmGetAttribute(input)
            this.wasmAttribute = result

            this.showAttributeDrawer = true
            // console.log(result)
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
            this.$message.info('保存序列成功')
        },

        handleClickImportSequence() {
            this.presetNames = this.$store.state.sequence.sequence.slice();
            this.handleClearResult()
        },
    },
    computed: {
        ...mapGetters("artifacts", {
            artifactsFlat: "allFlat",
            artifactsById: "artifactsById",
        }),

        singleInterfaces() {
            return this.presets.map(x => convertPresetToWasmInterface(x.item))
        },

        filteredArtifacts() {
            let results = []
            for (let artifact of this.artifactsFlat) {
                if (artifact.level >= 16) {
                    results.push(artifact)
                }
            }
            let used = new Set()
            for (let artIds of this.results) {
                for (let artId of artIds) {
                    used.add(artId)
                }
            }
            return results.filter(a => !a.omit && !used.has(a.id))
        },

        filteredArtifactsWasm() {
            return this.filteredArtifacts.map(convertArtifact)
        },

        presets() {
            let results = []
            for (let name of this.presetNames) {
                if (name) {
                    results.push(getPresetEntryByName(name))
                }
            }
            return results
        },

        optimizeTeamHyperParamInterface() {
            // todo
            return {
                mva_step: 5,
                work_space: 1000,
                max_re_optimize: 5,
                max_search: 1000000,
                count: 1000,
            }
        },

        optimizeTeamWasmInterface() {
            // sort by weight
            // let temp = []
            // for (let i = 0; i < this.singleInterfaces.length; i++) {
            //     temp.push([this.singleInterfaces[i], this.weights[i]])
            // }
            // temp.sort((a, b) => b[1] - a[1])
            //
            // const interfaces = temp.map(x => x[0])
            // const weights = temp.map(x => x[1])

            return {
                // single_interfaces: interfaces,
                // weights: weights,
                single_interfaces: this.singleInterfaces,
                weights: this.weights,
                hyper_param: this.optimizeTeamHyperParamInterface
            }
        }
    },
    watch: {
        "$store.state.accounts.currentAccountId"() {
            this.results = []
            this.presetNames = []
            this.handleClickAddMember()
            // this.weights = []
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
</style>
