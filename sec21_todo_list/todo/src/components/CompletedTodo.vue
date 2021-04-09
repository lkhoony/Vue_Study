<template>
  <div 
    class="mt-3"
    style="font-weight : bold">
        Completed todo : {{ numbersOfCompletedTodo }}
  </div>
</template>

<script>
export default {

  props : {
      todos : {
          type : Array,
          required : true
      }
  },

  computed : {
      numbersOfCompletedTodo() {
          return this.todos.filter(todo => todo.checked).length;
      }
  }
}
</script>
