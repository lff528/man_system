import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {
    count:5,
}
const getters={
    renderCollects(state){ //承载变化的collects
      return state.collects;
    }
};
const mutations={
    pushCollects(state,items){ //如何变化collects,插入items
        state.collects.push(items)
    }
};
const actions={
    invokePushItems(context,item){ //触发mutations里面的pushCollects ,传入数据形参item 对应到items
        context.commit('pushCollects',item);
    }
};
const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
});
 
export default store;