import Vuex from "vuex";
import Vue from "vue";
import localforage from "localforage";

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

let loadingAccountData = false;

function setTimeoutPromise(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

const _store = new Vuex.Store({
    modules: {
        accounts,
        artifacts,
        presets,
        kumi,
    },
    actions: {
        async loadAccountData({ commit, state }) {
            loadingAccountData = true;
            const id = state.accounts.currentAccountId;
            const artKey = `mona_account_artifacts_${id}`;
            commit('artifacts/set', await localforage.getItem(artKey));
            const presetKey = `mona_account_presets_${id}`;
            commit('presets/set', await localforage.getItem(presetKey));
            const kumiKey = `mona_account_kumi_${id}`;
            commit('kumi/set', await localforage.getItem(kumiKey));
            loadingAccountData = false;
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
            await localforage.removeItem(artKey);
            const presetKey = `mona_account_presets_${id}`;
            await localforage.removeItem(presetKey);
            const kumiKey = `mona_account_kumi_${id}`;
            await localforage.removeItem(kumiKey);
        }
    }
});

async function init_store() {
    // init from localStorage
    let metaData = await localforage.getItem('mona_meta');
    if (!metaData) {
        // load old data
        _store.commit('artifacts/oldInit');
        // _store.commit('presets/oldInit');
        // _store.commit('kumi/oldInit');

        metaData = {
            version: VERSION_STORAGE,
        };
        await localforage.setItem('mona_meta', metaData);
    } else {
        if (metaData.version !== VERSION_STORAGE) {
            // update local storage here
        } else {
            const payload = await localforage.getItem('mona_accounts');
            _store.commit('accounts/set', payload);
            _store.dispatch('loadAccountData');
        }
    }

    // watch accounts change
    _store.watch(
        state => state.accounts,
        async newValue => {
            await localforage.setItem('mona_accounts', newValue);
        },
        {
            deep: true,
            immediate: true,
        }
    );

    // watch artifacts change
    _store.watch(
        state => ({
            flower: state.artifacts.flower,
            feather: state.artifacts.feather,
            sand: state.artifacts.sand,
            cup: state.artifacts.cup,
            head: state.artifacts.head,
        }),
        async newValue => {
            if (loadingAccountData) {
                return;
            }
            const key = `mona_account_artifacts_${_store.state.accounts.currentAccountId}`;
            await localforage.setItem(key, newValue);
        },
        {
            deep: true,
            immediate: true,
        },
    );

    // watch presets change
    _store.watch(
        state => state.presets.presets,
        async newValue => {
            if (loadingAccountData) {
                return;
            }
            const key = `mona_account_presets_${_store.state.accounts.currentAccountId}`;
            await localforage.setItem(key, newValue);
        },
        {
            deep: true,
            immediate: true,
        }
    )

    // watch kumi change
    _store.watch(
        state => state.kumi,
        async newValue => {
            if (loadingAccountData) {
                return;
            }
            const key = `mona_account_kumi_${_store.state.accounts.currentAccountId}`;
            await localforage.setItem(key, newValue);
        },
        {
            deep: true,
            immediate: true,
        }
    );
}

init_store();

export default _store;
