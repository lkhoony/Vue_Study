<template lang="html">
  <div class="">
    <label for="">Input Field Name Model</label>

    <input
      type = "text"
      :value = "value"
      @input= "$emit('input',$event.target.value)"
    >
    <!-- v-model을 사용하여 바인딩 할 경우 event name을 input으로 커스터마이징 해야함 -->

  </div>
</template>

<script>
export default {

  // props에 value 정의 반드시 필요
  props : {
    value : {
      type : String,
      required : true
    }
  },

  methods : {
  }
}
</script>

<style lang="css" scoped>
  input {
    padding : 30px;
    border : 2px solid green;
  }
</style>
