export function wasmSingleOptimize(optimizeConfig, artifacts) {
    const worker = new Worker(new URL("@worker/optimize_artifact.js", import.meta.url))
    let cancel
    const promise = new Promise((resolve, reject) => {
        cancel = () => {
            reject("计算被中止")
        }

        worker.onmessage = e => {
            if (e.data.type === "ready") {
                worker.postMessage({
                    optimizeConfig,
                    artifacts,
                })
            } else {
                const results = e.data.data.results
                resolve(results)
            }
        }

        worker.onerror = e => {
            console.error(e)
            reject("计算发生错误")
        }
    }).finally(() => {
        worker.terminate()
    })

    return [promise, cancel]
}
