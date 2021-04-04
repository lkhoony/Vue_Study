<template lang="html">
  <div class="">
    <Todo v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      @toggle-checkbox="toggleCheckbox"
      @click-delete="deleteTodo"
    ></Todo>
  </div>
</template>

<script>
import Todo from '@/components/Todo.vue';

export default {
  components : {
    Todo
  },
  // props : {
  //   todos : {
  //     type : Array,
  //     required : true
  //   }
  // },
  computed : {
    todos() {
      // store에서 데이터를 바로 불러오기
      return this.$store.state.todos
    }
  },

  methods : {
    toggleCheckbox(value) {
      this.$emit('toggle-checkbox',value);
    },
    deleteTodo(todoId) {
      this.$emit('click-delete',todoId);
    }
  }
}
</script>

<style lang="css" scoped>
</style>
