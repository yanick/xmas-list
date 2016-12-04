import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

let store = new Vuex.Store({
    strict: true,
    state: { budget: { available: 0, left: 0 }},
    actions: {
        set_budget({commit},budget) { commit( 'set_budget', budget ) }
    },
    mutations: {
        set_budget(state,budget) {
            state.budget.left = state.budget.left - state.budget.available + budget;
            state.budget.available = budget;
        }
    }
});

import Main from './Component/Main.vue';

let app = new Vue({
    el: '#xmas',
    store,
    render: h => h(Main)
});
