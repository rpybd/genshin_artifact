import Vue from "vue"

export default {
    namespaced: true,
    state: {
        sequence: [],
    },
    mutations: {
        set(state, payload) {
            if (payload) {
                state.sequence = payload.sequence
            } else {
                state.sequence = []
            }
        },

        save(state, sequence) {
            state.sequence = sequence.slice()
        }
    }
}
