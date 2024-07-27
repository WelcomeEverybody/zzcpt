<script setup lang="ts" name="CptMessage">
import {ref,onMounted } from 'vue';
const props = defineProps({
  text:{
    type:String,
  },
  id:{
    type:String,
  }
})
const message = ref();
const active = () => {
  message.value.classList.add('message-container-active');
}
const close = () => {
  message.value.classList.add('message-container-close');
}
onMounted(() => {
  active();
})
defineExpose({close})
</script>

<template>
  <div class="cpt-message" ref="message" :id="props.id">
      {{props.text}}
  </div>
</template>

<style scoped>
.cpt-message {
  z-index: 10000;
  font-size: 14px;
  width:fit-content;
  box-sizing: border-box;
  padding:20px 0;
  pointer-events: none;
  box-shadow: 0 2px 12px 3px rgba(0, 0, 0, 0.1);
  padding: 5px 10px;
  border-radius: 4px;
  background: #fff;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
}
.message-container {
  transition: all 0.3s;
  transform: translateY(-100%);
  opacity: 0;
}
.message-container-active {
  transform: translateY(0px);
  opacity: 1;
}
.message-container-close {
  transform: translateY(-100%);
  opacity: 0;
}
</style>