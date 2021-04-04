<template lang="html">
  <div class="">
    <!-- 각각의 부모 컴포넌트에서 title, name을 다르게 하고 싶을 경우 >> props를 사용 -->
    <!--
    <h1>{{ title }}</h1>
    <p>{{ name }}</p>
    <button type="button" name="button" @click="updateName">Click</button> -->

    <!-- # slot 기능 사용 >> 컴포넌트에 html태그를 넣고자 할 때 사용-->
    <p>header</p>
    <!-- 1. 부모 컴포넌트에서 template으로 전달 받은 html 태그를 slot에 입력 -->
    <!-- 2. data()의 kossie값을 kossie 속성에 바인딩하여 전달  -->
    <!-- 3. 부모 컴포넌트에서는 지정한 변수로 kossie를 받아서 사용 -->
    <slot name="header" :kossie="kossie"></slot>
    <p>body</p>
    <slot :kossie="kossie"></slot>
    <p>footer</p>
  </div>
</template>

<script>
export default {

  // 부모 컴포넌트(컴포넌트를 사용하는 컴포넌트)에서 보내는 데이터를 저장
  props : {
    // data이름은 title
    title : {
      // 1. type : String Type으로만 받을수 있게
      type : String,
      // 2. default title : data전달이 안될 경우 default값 설정
      default : 'default title',
      // 3. 반드시 전달되야 하는지 여부 (true : 반드시 전달되어야 함)
      // required : true
    },
    name : {
      type : String,
      default : 'default name',
      required : false
    }
  },

  data() {
    return {
      // ## props에 있는 data를 사용하면 안됨
      // name : "Kossie Coder"

      kossie : 'coder'
    }
  },
  methods : {
    // updateName 실행 시 작동은 되지만 부모 컴포넌트와의 값이 달라지기 때문에 사용하지 않아야 함
    updateName() {
      this.name = "Kossie Coder Updated";
    }
  }
}
</script>

<style lang="css" scoped>
</style>
