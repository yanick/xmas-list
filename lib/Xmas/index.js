import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import Store from './Store';

let store = new Vuex.Store(Store);

import Main from './Component/Main.vue';

let app = new Vue({
    el: '#xmas',
    store,
    render: h => h(Main)
});
