import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const storage = {
    fetch() {
        const arr = [];
        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++) {
                if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
                    //console.log(JSON.parse(localStorage.getItem(localStorage.key(i))));
                    arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
                    //this.todoItems.push(localStorage.key(i));
                    //console.log(localStorage.key(i));
                }
            }
        }
        return arr;
    },
};

export const store = new Vuex.Store({
    state: {
        todoItems: storage.fetch()
    },
    mutations: {
        addOneItem(state, todoItem) {
            console.log('received');
            const obj = { completed: false, item: todoItem };
            // localStorage.setItem(this.newTodoItem, obj);
            localStorage.setItem(todoItem, JSON.stringify(obj));
            state.todoItems.push(obj);
        },
        removeOneItem(state, payload) {

            localStorage.removeItem(payload.todoItem.item);
            state.todoItems.splice(payload.index, 1);
        },
        toggleOneItem(state, payload) {
            state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
            localStorage.removeItem(payload.todoItem.item);
            localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
        },
        clearAllItems(state) {
            localStorage.clear();
            state.todoItems = [];
        }
        // toggleOneItem(todoItem, index) {
        //     this.todoItems[index].completed = !this.todoItems[index].completed;
        //     // 로컬 스토리지의 데이터를 갱신
        //     localStorage.removeItem(todoItem.item);
        //     localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
        // },
        // clearAllItems() {
        //     localStorage.clear();
        //     this.todoItems = [];
        // }

    }
});