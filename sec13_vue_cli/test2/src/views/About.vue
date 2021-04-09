<template>
  <div class="about">
    <h1>This is an about page</h1>
    <!-- <KossieCoder title="about title" name="about name"></KossieCoder> -->
    <kossieCoder>
      <!-- name이 header인 slot에서 전달한 데이터를 props로 받음 -->
      <template #header="props">
        <!-- props에서 전달된 이름이 kossie인 데이터를 받아서 사용 -->
        <p>header #1 {{ props.kossie }}</p>
      </template>
      <template #default="{ kossie }">
        <!-- slot의 이름을 사용하지 않았을 때는 default로 사용 -->
        <p>body #2 {{ kossie }}</p>
      </template>
    </kossieCoder>
  </div>
</template>

<script type="text/javascript">
  import KossieCoder from '@/components/KossieCoder.vue'

  export default{
    components : {
      KossieCoder
    }
  }
</script>

<style media="screen">

</style>
