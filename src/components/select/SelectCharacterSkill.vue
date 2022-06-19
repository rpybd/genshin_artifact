<!-- 选择技能index -->

<template>
    <el-cascader
        :value="value"
        :options="options"
        :props="{ expandTrigger: 'hover', emitPath: false }"
        @change="$emit('input', $event)"
        size="small"
        style="width: 61.8%"
    ></el-cascader>
</template>

<script>
import { characterData } from "@character"

export default {
    name: "SelectCharacterSkill",
    props: ["characterName", "value"],
    computed: {
        options() {
            const data = characterData[this.characterName]

            const options = []
            for (let i = 0; i < 3; i++) {
                const j = i + 1
                const skillMap = data[`skillMap${j}`]
                if (skillMap.length > 0) {
                    options.push({
                        label: data[`skillName${j}`],
                        value: data[`skillName${j}`],
                        children: skillMap.map(item => ({
                            label: item.chs,
                            value: item.index,
                        })),
                    })
                }
            }
            return options
        },
    },
}
</script>
