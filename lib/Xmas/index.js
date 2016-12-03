import Vue from 'vue';
import Main from './Component/Main.vue';

let app = new Vue({
    el: '#xmas',
    render: h => h(Main)
});
