// import Worker from "@worker/compute.worker.js";

export default function (artifacts, configObject) {
    return new Promise((resolve, reject) => {
        let worker = new Worker(new URL("@worker/compute.worker.js", import.meta.url));
        // let worker = new Worker();
        worker.addEventListener("message", event => {
            let data = event.data;
            if (data.message === "error") {
                reject(data.reason);
            } else {
                resolve(data.result);
            }
        });
        worker.postMessage({
            method: "computeArtifacts",
            args: [artifacts, configObject],
        });
    });
}
