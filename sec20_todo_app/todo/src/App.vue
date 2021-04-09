<template>
  <div id="app" class="container">
    <h1 class="text-center">Todo App</h1>
    <!-- <CompletedTodo :todos="todos"></CompletedTodo> -->
    <CompletedTodo></CompletedTodo>
    <!-- <AddTodo @add-todo="addTodo"></AddTodo> -->
    <AddTodo></AddTodo>
    <!-- <TodoList
      :todos="todos"
      @toggle-checkbox="toggleCheckbox"
      @click-delete="deleteTodo"
      ></TodoList> -->
    <TodoList></TodoList>
  </div>
</template>

<script>
import TodoList from '@/components/TodoList.vue'
import AddTodo from '@/components/AddTodo.vue'
import CompletedTodo from '@/components/CompletedTodo.vue'

export default {
  name: 'App',
  components: {
    TodoList,
    AddTodo,
    CompletedTodo
  },
  data() {
    return {
      todoText : '',
      // todos : [
      //   { id : 1, text : 'buy a car', checked  : false},
      //   { id : 2, text : 'play game', checked  : false}
      // ]
    }
  },
  methods : {
    // addTodo(value) {
    //   this.todos.push({
    //     id : Math.random(),
    //     text : value,
    //     checked : false
    //   });
    //   this.todoText = '';
    //   console.log(e.target.value);
    // },

    // 구조분해 : 전달된 Object ( {} )에서 id와 checked라는 속성을 받아오는 것
    // toggleCheckbox({id, checked}) {
    //   // console.log(id, checked);
    //   const index = this.todos.findIndex(todo => {
    //     return todo.id === id;
    //   });
    //
    //   this.todos[index].checked = checked;
    // },

    // deleteTodo(id) {
    //   const index = this.todos.findIndex(todo => {
    //     return todo.id === id;
    //   });
    //   this.todos.splice(index,1);
    // }
  }
}
</script>

<style>

</style>
