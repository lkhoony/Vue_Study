<template>
  <div class="mb-2 d-flex">
    <!-- 자식 컴포넌트의 checkbox가 check 된다 해도 부모 컴포넌트는 바뀌지 않음 -->
    <!-- 이벤트를 발생시켜서 부모 컴포넌트로 전달 해야 함 -->
    <div>
      <input 
        class="mr-3"
        type="checkbox" 
        :checked="todo.checked"
        @change="toggleCheckbox">
    <!-- change 이벤트 발생 시 toggleCheckbox 메소드 실행 -->
    </div>
    <!-- class 바인딩, style 바인딩 -->
    <span 
      style="margin-left : 10px;"
      class="ml-3 flex-grow-1"
      :class="todo.checked ? 'text-muted' : '' "
      :style="todo.checked ? 'text-decoration : line-through' : '' ">
      {{todo.text}}
    </span>

    <span
      class="flex-grow-2"
      style="margin-right : 10px; 
              color : rgba(0,0,0,0.3);"     
    >{{ todo.completed }}</span>

    <button 
      class="btn btn-danger btn-sm"
      @click="clickDelete"
    >Delete</button>
  </div>
</template>

<script>

export default {

    // 부모 컴포넌트에 있는 data를 자식 컴포넌트로 넘겨줄 때 
    props : {
        todo : {
            type : Object,
            required : true
        }
    },

    methods :{
        toggleCheckbox(e){
            // this.$emit(eventName, options) : eventName으로 이벤트를 발생시키고 options를 전달
            this.$emit('toggle-checkbox',{
                id : this.todo.id,
                checked : e.target.checked
            })
        },

        clickDelete(){
            this.$emit('click-delete',this.todo.id);
        }
    }


}
</script>
