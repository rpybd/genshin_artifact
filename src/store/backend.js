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
        try {
            this.dirHandle = await window.showDirectoryPicker();
            return true;
        } catch (err) {
            return false;
        }
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

const BACKEND_META_KEY = 'backend_meta';
const BACKEND_VERSION = 1;

class MixedBackend {
    constructor() {
        this.fileBackend = new FileBackend();
        this.localBackend = new LocalBackend();
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

    // async sync() {
    //     const defaultMeta = {
    //         version: 0,
    //         lastModified: 0,
    //     };
    //     const localMeta = (await this.localBackend.getItem(BACKEND_META_KEY)) ?? defaultMeta;
    //     const fileMeta = (await this.fileBackend.getItem(BACKEND_META_KEY)) ?? defaultMeta;
    //     // TODO: update version if needed

    //     // use the newer one to cover the older one
    //     if (localMeta.lastModified > fileMeta.lastModified) {
    //         const items = await this.localBackend.getAllItem();
    //         await Promise.all(items.map(([key, value]) => this.fileBackend.setItem(key, value)));
    //     } else if (localMeta.lastModified < fileMeta.lastModified) {
    //         const items = await this.fileBackend.getAllItem();
    //         await Promise.all(items.map(([key, value]) => this.localBackend.setItem(key, value)));
    //     } else if (localMeta.version === 0 && fileMeta.version === 0) {
    //         const meta = this.getMeta();
    //         await this.localBackend.setItem(BACKEND_META_KEY, meta);
    //         await this.fileBackend.setItem(BACKEND_META_KEY, meta);
    //     }
    // }

    async getItem(key) {
        return await this.localBackend.getItem(key);
    }

    async setItem(key, value) {
        const meta = this.getMeta();
        await this.localBackend.setItem(key, value);
        await this.localBackend.setItem(BACKEND_META_KEY, meta);
        await this.fileBackend.setItem(key, value);
        await this.fileBackend.setItem(BACKEND_META_KEY, meta);
    }

    async removeItem(key) {
        const meta = this.getMeta();
        await this.localBackend.removeItem(key);
        await this.localBackend.setItem(BACKEND_META_KEY, meta);
        await this.fileBackend.removeItem(key);
        await this.fileBackend.setItem(BACKEND_META_KEY, meta);
    }
}

export default new MixedBackend();
