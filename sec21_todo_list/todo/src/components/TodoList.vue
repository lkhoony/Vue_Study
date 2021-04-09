<template>
    <div>
        <Todo 
            v-for="todo in todos" 
            :key="todo.id"
            :todo = "todo"
            @toggle-checkbox='toggleCheckbox'
            @click-delete='deleteTodo'/>
    </div>
</template>

<script>
import Todo from './Todo'

export default {

    props : {
        todos : {
            type : Array,
            required : true
        }
    },

    components : {
        Todo
    },

    methods : {

        toggleCheckbox(value) {
            this.$emit('toggle-checkbox',value);
        },

        deleteTodo(id) {
            this.$emit('click-delete',id);
        }
    }
}
</script>

<style>

</style>