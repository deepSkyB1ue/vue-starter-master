<template>
  <div class="grey-box">
   <h1>父组件（灰色背景）</h1>
    <Child :message="msg"></Child>
    <input type="text" v-model="msg">
  </div>
</template>

<script>
import Child from './Child.vue';
export default {
    data() {
        return {
            msg: ''
        };
    },
    components: { Child }
};
</script>