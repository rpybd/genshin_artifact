<template>
    <div>
        <!-- <el-breadcrumb>
            <el-breadcrumb-item>账号</el-breadcrumb-item>
        </el-breadcrumb>
        <el-divider></el-divider> -->

        <el-dialog
            title="选择同步基准"
            width="30%"
            :visible.sync="showSyncDialog"
            @closed="handleSyncDialogClosed"
        >
            <div>
                <el-button
                    v-if="localMeta"
                    @click="selectSyncType('local')"
                >
                    浏览器存储（最后修改于{{ new Date(localMeta.lastModified).toLocaleString() }}）
                </el-button>
            </div>
            <div>
                <el-button
                    v-if="fileMeta"
                    @click="selectSyncType('file')"
                >
                    本地目录存储（最后修改于{{ new Date(fileMeta.lastModified).toLocaleString() }}）
                </el-button>
            </div>
        </el-dialog>

        <div class="top-things">
            <el-row>
                <el-col :span="6">
                    <span>账号</span>
                </el-col>
                <el-col :span="18">
                    <div style="float: right">
                        <el-button
                            type="primary"
                            size="mini"
                            icon="el-icon-sort"
                            :disabled="syncFile"
                            @click="handleSync"
                        >{{ syncFile ? '已' : '' }}同步本地目录</el-button>
                    </div>
                </el-col>
            </el-row>
            <el-divider></el-divider>
        </div>

        <div class="toolbar">
            <el-button
                type="primary"
                icon="el-icon-plus"
                size="mini"
                @click="addAccount"
            >
                添加账号
            </el-button>
        </div>

        <div class="body">
            <div
                v-for="{id, name} in allAccounts"
                :key="id"
                class="item is-active"
                :class="{ active: id === currentAccountId }"
                @click="changeAccount(id)"
            >
                <click-edit-label
                    :value="name"
                    @input="newName => handleChangeName(id, name, newName)"
                    fontsize="16px"
                    :editable="true"
                    style="display: inline-block;"
                ></click-edit-label>
                <div class="buttons flex-row">
                    <el-popconfirm
                        v-show="id !== currentAccountId"
                        title="确定删除？"
                        @confirm="deleteAccount(id)"
                    >
                        <el-button
                            slot="reference"
                            icon="el-icon-delete"
                            type="text"
                            size="medium"
                            circle
                            class="button"
                            title="删除"
                            @click.stop=""
                        ></el-button>
                    </el-popconfirm>
                    <!-- <el-button
                        icon="el-icon-download"
                        type="text"
                        size="medium"
                        circle
                        @click="handleDownload(name, item)"
                        class="button"
                        title="导出"
                    ></el-button> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import storeBackend from "@/store/backend";

import ClickEditLabel from "@c/misc/ClickEditLabel";

export default {
    name: "AccountPage",
    components: {
        ClickEditLabel,
    },
    data() {
        return {
            showSyncDialog: false,
            localMeta: null,
            fileMeta: null,
            selectSyncType: null,
            handleSyncDialogClosed: null,
        };
    },
    created() {
        this.canCopy = !!navigator.clipboard;
    },
    computed: {
        ...mapState(['syncFile']),
        ...mapState("accounts", ["currentAccountId", "allAccounts"]),
    },
    methods: {
        addAccount() {
            this.$store.commit('accounts/addAccount', { name: '新账户' });
        },
        deleteAccount(id) {
            const loading = this.$loading({
                lock: true,
                text: "删除账号中"
            });
            this.$store.dispatch('deleteAccount', { id })
                .then(() => {
                    loading.close();
                });
        },
        changeAccount(id) {
            if (id === this.currentAccountId) {
                return;
            }
            const loading = this.$loading({
                lock: true,
                text: "切换账号中"
            });
            this.$store.dispatch('changeAccount', { id })
                .then(() => {
                    loading.close();
                });
        },
        handleChangeName(id, oldName, newName) {
            if (newName !== oldName && newName !== '') {
                this.$store.commit('accounts/changeAccountName', { id, name: newName });
            }
        },
        handleSync() {
            storeBackend.prompt()
                .then(([localMeta, fileMeta]) => new Promise((resolve, reject) => {
                    if (!fileMeta) {
                        resolve('local');
                        return;
                    }
                    if (localMeta.lastModified === fileMeta.lastModified) {
                        resolve('');
                        return;
                    }
                    this.localMeta = localMeta;
                    this.fileMeta = fileMeta;
                    let resolved = false;
                    this.selectSyncType = (type) => {
                        resolved = true;
                        this.showSyncDialog = false;
                        resolve(type);
                    };
                    this.handleSyncDialogClosed = () => {
                        if (!resolved) {
                            storeBackend.fileBackend.dirHandle = null;
                            reject(Error('user canceled'));
                        }
                    }
                    this.showSyncDialog = true;
                }))
                .then(type => storeBackend.sync(type))
                .then(() => this.$store.dispatch('reload'))
                .then(() => {
                    this.$store.commit('setSyncFile', true);
                });
        }
    },
}
</script>

<style lang="scss" scoped>
.body {
    display: flex;
    flex-wrap: wrap;
}

.toolbar {
    margin-bottom: 20px;
}

$height: 60px;

.item {
    height: $height;
    width: 100%;
    padding-left: 20px;
    cursor: pointer;
    line-height: $height;
    color: #303133;
    transition: 200ms;

    &.active {
        color: #409EFF;
        background: #ecf5ff;
    }

    &:hover {
        background: #ecf5ff;
    }

    .buttons {
        float: right;
        height: $height;

        .button {
            margin: 0;
        }
    }
}
</style>
