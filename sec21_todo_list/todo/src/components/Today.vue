<template>
  <div 
    class = "mb-1"
    style = "color : rgba(0,0,0,0.6)"
    >{{ date.toLocaleDateString() + ' ' + date.toLocaleTimeString() }}</div>
    <!-- 템플릿 내에서는 data name만 사용 -->
</template>

<script>
export default {

    data() {

        return {
            date : new Date(),
            timer : null
        }

    },

    // instance 내에서는 this.name, this.method로 사용
    mounted : function(){
        this.timer = setInterval(()=>this.tick(),1000);
    },

    destroyed : function(){
        clearInterval(this.timer);
    },

    methods :{

        tick() {
            this.date = new Date();
        }

    }

}
</script>

<style>

</style>