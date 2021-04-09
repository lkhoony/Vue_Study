<template lang="html">
  <div class="">
    <label for="">Input Field Name</label>

    <input
      type = "text"
      :value = "name"
      @input= "updateName"
    >

  </div>
</template>

<script>
export default {

  props : {
    name : {
      type : String,
      required : true
    }
  },

  methods : {
    updateName(e) {
      console.log(e.target.value);
      this.$emit('update-name',e.target.value);
    }
  }
}
</script>

<style lang="css" scoped>
  input {
    padding : 30px;
    border : 2px solid green;
  }
</style>
