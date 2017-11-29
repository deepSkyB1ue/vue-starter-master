//提供指令给页面调用
const actions = {
    setTodoItems({ commit }, todoItems) {
        //send to server

        //response data from server
        //使用 commit 方法，调用 mutation
        commit('setTodoItems', todoItems);
    }
};

export default actions;