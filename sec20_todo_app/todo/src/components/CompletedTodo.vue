<template lang="html">
  <div class="">
    Completed Todo : {{ numberOfCompletedTodo }}
  </div>
</template>

<script>
export default {
  // props : {
  //   todos : {
  //     type : Array,
  //     required : true
  //   }
  // },

  computed : {
    todos() {
      // state에서 todos 가져오기
      return this.$store.state.todos
    },
    numberOfCompletedTodo() {
      return this.todos.filter(todo => todo.checked).length
    }
  }
}
</script>

<style lang="css" scoped>
</style>
