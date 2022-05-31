<template>
    <sequential-optimization-page></sequential-optimization-page>
</template>

<script>
import { requestMonaWasm } from "@/vendors/mona"

import SimpleLoading from "@c/loading/SimpleLoading"
import SimpleError from "@c/loading/SimpleError"

const SequentialOptimizationPage = () => {
    const component = requestMonaWasm().then(() => import(
        /* webpackChunkName: "sequential-optimization-page" */
        /* webpackPrefetch: true */
        "./SequentialOptimizationPage"
        )
    )

    return {
        component,
        loading: SimpleLoading,
        error: SimpleError,
        timeout: 30000,
    }
}

export default {
    name: "SequentialOptimizationWrapper",
    components: { SequentialOptimizationPage }
}
</script>

<style scoped>

</style>
