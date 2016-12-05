import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';

Vue.use(Vuex);
Vue.use(VueRouter);

import Store from './Store';

let store = new Vuex.Store(Store);

import Main   from './Component/Main.vue';
import Giftee from './Component/Giftee.vue';

const router = new VueRouter({
    routes: [
        { path: '/', component: Main },
        { path: '/giftee/:giftee', component: Giftee, name: 'giftee' }
    ]
});

let app = new Vue({
    store,
    router
}).$mount('#xmas');
