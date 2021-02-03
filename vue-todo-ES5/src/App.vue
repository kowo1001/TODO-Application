<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <!-- <TodoInput v-on:하위 컴포넌트에서 발생시킨 이벤트 이름="현재 컴포넌트의 메서드명"></TodoInput> -->
    <TodoInput></TodoInput>
    <!-- <TodoList v-bind:내려보낼 프롭스 속성 이름="현재 위치의 컴포넌트 데이터 속성"></TodoList> -->
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

// var my_cmp = {
//   template: '<div>my component</div>'
// };

// new Vue({
//   el: '',
//   components: {
//     'my-cmp': 'my_cmp'
//   }
// })
export default {
  // data() {
  //   return {
  //     todoItems: []
  //   }
  // },
  // methods: {
  
  //   removeOneItem(todoItem, index) {
  //       localStorage.removeItem(todoItem.item);
  //       this.todoItems.splice(index, 1);
  //   },
  //   toggleOneItem(todoItem, index) {
  //           this.todoItems[index].completed = !this.todoItems[index].completed;
  //           // 로컬 스토리지의 데이터를 갱신
  //           localStorage.removeItem(todoItem.item);
  //           localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
  //   },
  //   clearAllItems() {
  //         localStorage.clear();
  //         this.todoItems = [];
  //     }
  //   },
  components: {
    //컴포넌트 태그명: 컴포넌트 내용
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  }
}
</script>

<style>
body {
  text-align: center;
  background-color: #f6f6f6;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
