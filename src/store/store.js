import Vuex from "vuex";
import Vue from "vue";

import backend from "./backend";

import accounts from "./modules/accounts";
import artifacts from "./modules/artifact";
import presets from "./modules/presets";
import kumi from "./modules/artifactKumi";

/**
 * localStorage scheme (version 1):
 * mona_meta: { version: 1 }
 * mona_accounts: { currentAccountId: Number, allAccounts: [{ id: Number, name: String }, ...] }
 * mona_account_artifacts_<id>: { flower: {...}, ... }
 * mona_account_presets_<id>: { ... }
 * mona_account_kumi_<id>: { ... }
 */
const VERSION_STORAGE = 1;

Vue.use(Vuex);

function setTimeoutPromise(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

const updateBackendPlugin = store => {
    store.subscribe(async ({ type }, state) => {
        const [module, mut] = type.split('/');
        if (!mut || mut === 'set') {
            return;
        }
        const id = state.accounts.currentAccountId;
        const key = module === 'accounts' ? 'mona_accounts' : `mona_account_${module}_${id}`;
        let value = state[module];
        if (module === 'presets') {
            value = value['presets'];
        }
        // console.log('update', key, JSON.stringify(value));
        await backend.setItem(key, value);
    });
};

const _store = new Vuex.Store({
    state: {
        syncFile: false,
    },
    modules: {
        accounts,
        artifacts,
        presets,
        kumi,
    },
    getters: {
        syncFile(state) {
            return state.syncFile;
        }
    },
    mutations: {
        setSyncFile(state, syncFile) {
            state.syncFile = syncFile;
        },
    },
    actions: {
        async loadAccountData({ commit, state }) {
            const id = state.accounts.currentAccountId;
            const artKey = `mona_account_artifacts_${id}`;
            commit('artifacts/set', await backend.getItem(artKey));
            const presetKey = `mona_account_presets_${id}`;
            commit('presets/set', await backend.getItem(presetKey));
            const kumiKey = `mona_account_kumi_${id}`;
            commit('kumi/set', await backend.getItem(kumiKey));
        },
        async changeAccount({ dispatch, commit }, { id }) {
            await setTimeoutPromise(50);
            commit('accounts/setCurrentAccountId', { id });
            await dispatch('loadAccountData');
        },
        async deleteAccount({ commit, state }, { id }) {
            if (id === state.accounts.currentAccountId) {
                // this should not happen, but add a guard here
                return;
            }
            commit('accounts/deleteAccount', { id });
            const artKey = `mona_account_artifacts_${id}`;
            await backend.removeItem(artKey);
            const presetKey = `mona_account_presets_${id}`;
            await backend.removeItem(presetKey);
            const kumiKey = `mona_account_kumi_${id}`;
            await backend.removeItem(kumiKey);
        },
        async reload({ dispatch, commit }) {
            const payload = await backend.getItem('mona_accounts');
            commit('accounts/set', payload);
            await dispatch('loadAccountData');
        }
    },
    plugins: [
        updateBackendPlugin
    ],
});

async function init_store() {
    // init from localStorage
    let metaData = await backend.getItem('mona_meta');
    if (!metaData) {
        // load old data
        _store.commit('artifacts/oldInit');
        // _store.commit('presets/oldInit');
        // _store.commit('kumi/oldInit');

        metaData = {
            version: VERSION_STORAGE,
        };
        await backend.setItem('mona_meta', metaData);
    } else {
        if (metaData.version !== VERSION_STORAGE) {
            // update local storage here
        } else {
            await _store.dispatch('reload');
        }
    }
}

init_store();

export default _store;
