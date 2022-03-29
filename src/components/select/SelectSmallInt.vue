<template>
        <div class="" @click="handleClickLevel">
            <div class="">
                <span
                    v-for="i in (max - min + 1)"
                    :key="i"
                    class="select-small-int"
                    :class="{ active: i + min - 1 === value }"
                >{{ i + min - 1 }}</span>
            </div>
        </div>
</template>

<script>
export default {
    name: "SelectSmallInt",
    props: {
        value: {
            type: Number,
        },

        min: {
            type: Number,
        },

        max: {
            type: Number,
        }
    },
    methods: {
        handleClickLevel(e) {
            if (!e.target.classList.contains("select-small-int")) {
                return;
            }
            let s = e.target.textContent;

            this.$emit("input", Number(s));
        }
    },
    computed: {

    }
}
</script>

<style scoped>
.select-small-int {
    cursor: pointer;
    height: 32px;
    width: 32px;
    text-align: center;
    line-height: 32px;
    color: #444444;
    margin-right: 12px;
    /* margin-top: 12px; */
    display: inline-block;
    border-radius: 8px;
    font-size: 12px;
    transition: 300ms;
}

.select-small-int:hover {
    background: rgba(0, 0, 0, 0.1);
}

.select-small-int.active {
    background: #79bbff;
    color: white;
}

/* .active {
    background: #12345622;
} */
</style>
