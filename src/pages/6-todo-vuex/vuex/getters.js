//读取数据的接口, 他是只读的
const getters = {
    todoItems: state => {
        return state.todoItems;
    }
};

export default getters;
