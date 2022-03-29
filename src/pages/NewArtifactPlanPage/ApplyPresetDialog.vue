<template>
    <el-dialog
        title="导入预设"
        :visible.sync="visible"
        width="80%"

    >
        <div class="body">
            <preset-item
                v-for="entry in presetsAllFlat"
                :key="entry.name"
                :toolbar="false"
                :item="entry.item"
                :name="entry.name"
                class="hand item"
                @click="handleClick(entry.name)"
            ></preset-item>
        </div>
    </el-dialog>
</template>

<script>
import PresetItem from "@c/display/PresetItem";

import { mapGetters } from "vuex";

export default {
    name: "ApplyPresetDialog",
    components: {
        PresetItem,
    },
    data() {
        return {
            visible: false,
        }
    },
    methods: {
        open() {
            this.visible = true;
        },

        handleClick(name) {
            this.visible = false;
            this.$emit("selected", name);
        }
    },
    computed: {
        ...mapGetters("presets", {
            presetsAllFlat: "allFlat"
        }),
    }
}
</script>

<style scoped>
.item {
    margin: 0 16px 16px 0;
}

.active {
    background: #12345611;
}

.footer {
    display: flex;
    flex-direction: row-reverse;
}

.body {
    display: flex;
    flex-wrap: wrap;
}
</style>
