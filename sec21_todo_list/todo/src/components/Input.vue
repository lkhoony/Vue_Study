<template>
    <div>
      <!-- 
        ## v-model  
    
        - 디렉티브를 사용하여 폼 input과 textarea 엘리먼트에 양방향 데이터 바인딩을 생성할 수 있다.
        - v-model은 기본적으로 사용자 입력 이벤트에 대한 데이터를 업데이트하는 syntax sugar
        - v-model은 모든 form 엘리먼트의 초기 value와 checked 그리고 selected 속성을 무시함
        - 항상 vue 인스턴스 데이터를 원본 소스로 취급하여 data 옵션에 초기값을 선언해야 함
        
        -->
      <input 
        v-model="todoText"
        type="text" 
        class="w-100 p-2" 
        placeholder="Type todo"
        @keyup.enter="addTodo"/>
    </div>
</template>

<script>
export default {

    data() {
        return {
            todoText : ''
        }
    },

    methods : {
        addTodo(e){
            console.log(e.target.value);
            this.todoText = ''
            this.$emit('add-todo', e.target.value);
        }
    }

}
</script>

<style>

</style>