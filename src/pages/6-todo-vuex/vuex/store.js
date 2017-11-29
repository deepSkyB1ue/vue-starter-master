//相当于前台的数据库, 靠他来执行对数据的一些操作

import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
import state from './state';
import mutations from './mutations';
import getters from './getters';
import actions from './actions';
export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
});
