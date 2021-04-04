<!-- 뷰의 구성 -->
<!-- #1. tempalte -->
<template lang="html">
  <div class="">
    <h1>This is Home Page</h1>
    <!-- KossieCoder 컴포넌트로 title, name data 전달 >> kossieCoder 컴포넌트는 props에서 데이터를 받음 -->
    <!-- 1. 정적 prop 전달 -->
    <KossieCoder title="home title" name="home name"></KossieCoder>
    <form>
      <!-- update-name event가 발생하면 updateName 메소드를 실행 >> 자식 컴포넌트에서 데이터를 받아옴 -->
      <!-- 2. v-bind(:)이용하여 동적 prop 전달 -->
      <!--  -->
      <!-- # 데이터 전달하는 과정 & 데이터 전달받는 과정 -->
      <!-- 1. 동적 prop 전달(:name = "name") >> InputField 컴포넌트의 name prop으로 전달-->
      <!-- 2. InputField 컴포넌트에서 :value에 name prop 바인딩 ( InputField #2 )-->
      <!-- 3. InputField 컴포넌트에서 input event 발생 시 updateName 실행 >> emit으로 데이터 전달 ( InputField #3 )  -->
      <!-- 4. emit시 입력했던 data를 updateName(name)의 매개변수로 전달 >> updateName의 매개변수의 갯수와 emit시 전달되는 변수의 수가 같아야함-->
      <InputField :name="name" @update-name="updateName"></InputField><br>

      <!-- v-model을 컴포넌트에 사용 -->
      <!-- # v-model을 사용하는 컴포넌트는 value를 prop으로 사용하고 input을 이벤트로 사용 -->
      <InputFieldModel v-model="name"></InputFieldModel><br>

      <button type="button" name="button">Submit</button>
    </form>
    {{ name }}

  </div>
</template>

<!-- #2. script -->
<script>
  // vue import >> KossieCoder로 naming
  import KossieCoder from '@/components/KossieCoder.vue'
  import InputField from '@/components/InputField.vue'
  import InputFieldModel from '@/components/InputFieldModel.vue'
  export default {
    // import한 components를 등록해줘야 함
    components : {
      KossieCoder,
      InputField,
      InputFieldModel
    },

    data() {
      return {
        name : ''
      }
    },

    // vue 객체가 만들어지기 전 >> name속성에 접근할 수 없음
    beforeCreate() {
      console.log('beforeCreate',this.name);
    },

    created() {
      console.log('created', this.name);
    },

    beforeMount() {
      alert('beforeMount');
    },

    // 컴포넌트가 mount가 되어 DOM에 접근할 수 있음
    mounted() {
      alert('mounted');
    },

    // 데이터가 update되었을 때
    updated() {
      alert('updated');
    },

    beforeDestroy() {
      alert('beforeDestroy');
    },

    // 다른 컴포넌트로 이동할 경우 해당 컴포넌트를 destroy
    destroyed() {
      alert('destroyed');
    },

    methods : {
      updateName(name) {
        this.name = name;
      }
    }

  }
</script>

<!-- #3. style : scope를 넣어야 template에 스타일이 적용됨-->
<style lang="css" scoped>
  h1 {
    color : red;
  }
</style>
