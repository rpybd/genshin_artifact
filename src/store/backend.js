import localforage from "localforage";

class LocalBackend {
    // localforage apis all return Promise

    clear() {
        return localforage.clear();
    }

    getAllItem() {
        const result = [];
        return localforage.iterate(function(value, key) {
            result.push([key, value]);
        }).then(() => result);
    }

    getItem(key) {
        return localforage.getItem(key);
    }

    setItem(key, value) {
        return localforage.setItem(key, value);
    }

    removeItem(key) {
        return localforage.removeItem(key);
    }
}

class FileBackend {
    constructor() {
        this.dirHandle = null;
    }

    async prompt() {
        if (this.dirHandle !== null) {
            return true;
        }
        try {
            this.dirHandle = await window.showDirectoryPicker();
            return true;
        } catch (err) {
            return false;
        }
    }

    cancel() {
        this.dirHandle = null;
    }

    available() {
        return this.dirHandle !== null;
    }

    async clear() {
        const promises = [];
        for await (const entry of this.dirHandle.values()) {
            promises.push(entry.remove());
        }
        await Promise.all(promises);
    }

    async getAllItem() {
        const promises = [];
        for await (const entry of this.dirHandle.values()) {
            const promise = entry
                .getFile()
                .then(file => file.text())
                .then(text => [entry.name.slice(0, -5), JSON.parse(text)]);
            promises.push(promise);
        }
        return await Promise.all(promises);
    }

    async getItem(key) {
        if (!this.dirHandle) {
            return null;
        }
        const filename = key + '.json';
        try {
            const fileHandle = await this.dirHandle.getFileHandle(filename);
            const file = await fileHandle.getFile();
            return JSON.parse(await file.text());
        } catch (err) {
            if (err.name !== 'NotFoundError') {
                console.error(err);
            }
            return null;
        }
    }

    async setItem(key, value) {
        if (!this.dirHandle) {
            return;
        }
        const filename = key + '.json';
        const fileHandle = await this.dirHandle.getFileHandle(filename, { create: true });
        const writable = await fileHandle.createWritable();
        await writable.write(JSON.stringify(value));
        await writable.close();
    }

    async removeItem(key) {
        if (!this.dirHandle) {
            return;
        }
        const filename = key + '.json';
        try {
            const fileHandle = await this.dirHandle.getFileHandle(filename);
            await fileHandle.remove();
        } catch (err) {
            if (err.name !== 'NotFoundError') {
                console.error(err);
            }
            return;
        }
    }
}

function isWindowActive() {
    return new Promise((resolve, reject) => {
        let animeHandle, timeoutHandle;
        animeHandle = window.requestAnimationFrame(() => {
            window.clearTimeout(timeoutHandle);
            resolve(true);
        });
        timeoutHandle = window.setTimeout(() => {
            window.cancelAnimationFrame(animeHandle);
            resolve(false);
        }, 50);
    });
}

const BACKEND_META_KEY = 'backend_meta';
const BACKEND_VERSION = 1;

class MixedBackend {
    constructor() {
        this.fileBackend = new FileBackend();
        this.localBackend = new LocalBackend();
        this.callbacks = {};
    }

    on(event, callback) {
        this.callbacks[event] = callback;
    }

    async prompt() {
        if (!(await this.fileBackend.prompt())) {
            return [];
        }
        return [
            await this.localBackend.getItem(BACKEND_META_KEY),
            await this.fileBackend.getItem(BACKEND_META_KEY),
        ]
    }

    getMeta() {
        return {
            version: BACKEND_VERSION,
            lastModified: new Date().getTime(),
        };
    }

    async sync(type) {
        if (type === 'local') {
            const items = await this.localBackend.getAllItem();
            await Promise.all(items.map(([key, value]) => this.fileBackend.setItem(key, value)));
        } else if (type === 'file') {
            const items = await this.fileBackend.getAllItem();
            await Promise.all(items.map(([key, value]) => this.localBackend.setItem(key, value)));
        }
    }

    // startConsistencyCheck() {
    //     if (this.consistencyCheckHandle) {
    //         return;
    //     }
    //     this.consistencyCheckHandle = window.setInterval(async () => {
    //         if (await isWindowActive()) {
    //             this.checkFileUpdate();
    //         }
    //     }, 5000);
    // }

    async checkFileUpdate() {
        if (!this.fileBackend.available()) {
            return;
        }
        const localMeta = await this.localBackend.getItem(BACKEND_META_KEY);
        const fileMeta = await this.fileBackend.getItem(BACKEND_META_KEY);
        if (localMeta.version === fileMeta.version && localMeta.lastModified === fileMeta.lastModified) {
            return;
        }
        alert('本地目录与浏览器存储状态不一致，已停止与本地目录同步。\n你可以手动重新同步。');
        this.fileBackend.cancel();
        const cb = this.callbacks['cancelFileBackend'];
        if (cb) {
            cb();
        }
        // TODO: check version
        // if (localMeta.lastModified > fileMeta.lastModified) {
        // } else {
        //     alert('检测到本地目录有更新，将更新网页状态，或立刻刷新然后手动重新同步');
        //     await this.sync('file');
        // }
    }

    async getItem(key) {
        return await this.localBackend.getItem(key);
    }

    async setItem(key, value) {
        await this.checkFileUpdate();
        const meta = this.getMeta();
        await this.localBackend.setItem(key, value);
        await this.localBackend.setItem(BACKEND_META_KEY, meta);
        await this.fileBackend.setItem(key, value);
        await this.fileBackend.setItem(BACKEND_META_KEY, meta);
    }

    async removeItem(key) {
        await this.checkFileUpdate();
        const meta = this.getMeta();
        await this.localBackend.removeItem(key);
        await this.localBackend.setItem(BACKEND_META_KEY, meta);
        await this.fileBackend.removeItem(key);
        await this.fileBackend.setItem(BACKEND_META_KEY, meta);
    }
}

export default new MixedBackend();
