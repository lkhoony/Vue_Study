<template>
  <div 
    class="mt-3"
    style="font-weight : bold">
        Completed todo : {{ numbersOfCompletedTodo }}
  </div>
</template>

<script>
export default {

  computed : {

      // store state를 가져올 때는 computed 안에서 작성
      todos(){
          return this.$store.state.todos;
      },
      numbersOfCompletedTodo() {
          return this.todos.filter(todo => todo.checked).length;
      }
  }
}
</script>
