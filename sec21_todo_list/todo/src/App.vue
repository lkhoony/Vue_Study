<template>
  <div id="app" class = "container">
    <h1 class = "text-center">TodoApp</h1>

    <!-- v-model : 데이터 바인딩 -->
    <!-- @event : 이벤트 시 작동 되는 함수 -->
    <input 
      v-model="todoText"
      type="text" 
      class="w-100 p-2" 
      placeholder="Type todo"
      @keyup.enter="addTodo"/>
    
    <div class="mt-3">todos : {{ todos.length }}</div>
    <hr>
    <!-- 리스트 렌더링 되는 component는 항상 key 라는 props 값이 필요 -->
    <!-- 가상돔에서 리스트 component에서 변경된 부분을 감지할 때 key라는 값을 이용하기 때문에 항상 필요 -->
    <Todo 
      v-for="todo in todos" 
      :key="todo.id"
      :todo = "todo"
      @toggle-checkbox='toggleCheckbox'
      @click-delete='deleteTodo'/>
  </div>
</template>

<script>

import Todo from '@/components/Todo.vue'

export default {

  components : {
    Todo
  },

  data() {
    return {
      todos : [
        {id : 1, text : 'buy a car', checked :  false},
        {id : 2, text : 'play game', checked :  false}        
      ],

      todoText : ''
    }
  },

  methods : {
    addTodo(e){
      this.todos.push({
        id : Math.random(),
        text : e.target.value,
        checked : false
      });
      this.todoText = '';
    },

    // {} : 객체에 바로 접근 가능
    toggleCheckbox({id, checked}){
      const index = this.todos.findIndex(todo => {
        return todo.id === id;
      });
      this.todos[index].checked = checked;
    },

    deleteTodo(id){
      const index = this.todos.findIndex(todo => {
        return todo.id === id;
      });
      // splice(시작위치, 제거건수)
      this.todos.splice(index,1);

      // # filter를 사용해서도 가능
      // this.todos = this.todos.filter(todo => todo.id!== id)
    }
  }
}
</script>
