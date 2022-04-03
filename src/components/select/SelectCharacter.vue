<template>
    <el-cascader
        :value="value"
        :options="options"
        :props="{ expandTrigger: 'hover', emitPath: false }"
        placeholder="角色"
        :show-all-levels="false"
        size="small"
        style="width: 100%"
        @change="$emit('input', $event)"
    >
        <template slot-scope="{ node, data }">
            <div v-if="!node.isLeaf">
                <span>{{ data.label }}</span>
            </div>
            <div v-else class="option-item flex-row">
                <img :src="data.avatar">
                <span :style="{ color: data.color }">{{ data.label }}</span>
            </div>
        </template>
    </el-cascader>
</template>

<script>
import { characterByElement } from "@character";
import qualityColors from "@const/quality_colors";

const element2Label = Object.freeze({
    "Pyro": "火",
    "Cryo": "冰",
    "Dendro": "草",
    "Electro": "雷",
    "Anemo": "风",
    "Geo": "岩",
    "Hydro": "水",
})

export default {
    name: "SelectCharacter",
    props: ["value"],
    computed: {
        options() {
            const options = []
            for (const element in characterByElement) {
                options.push({
                    label: element2Label[element],
                    value: element,
                    children: characterByElement[element].map(character => ({
                        label: character.chs,
                        value: character.name,
                        avatar: character.avatar,
                        color: qualityColors[character.star - 1],
                    }))
                })
            }
            return options
        },
    },
}
</script>

<style lang="scss" scoped>
.option-item {
    img {
        width: 28px;
        height: 28px;
        margin-right: 8px;
        border-radius: 50%;
    }
}
</style>
