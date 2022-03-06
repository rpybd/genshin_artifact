// import Worker from "@worker/compute.worker.js";

export default function (method, artifacts, configObject) {
    return new Promise((resolve, reject) => {
        const worker = new Worker(new URL("@worker/compute.worker.js", import.meta.url));
        worker.addEventListener("message", event => {
            let data = event.data;
            if (data.message === "error") {
                reject(data.reason);
            } else {
                resolve(data.result);
            }
        });
        // let worker = new Worker();
        worker.postMessage({
            method,
            args: [artifacts, configObject],
        });
    });
}

// import computeArtifacts from "@alg/attribute_target/compute_artifacts";
// import newComputeArtifacts from "@alg/attribute_target/new_compute_artifacts";

// const calcs = {
//     computeArtifacts,
//     newComputeArtifacts,
// };

// export default async function (method, artifacts, configObject) {
//     try {
//         const re = calcs[method](artifacts, configObject);
//         return re;
//     } catch(err) {
//         console.error(err);
//         return { record: [], error: {}};
//     }
// }
