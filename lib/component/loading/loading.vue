<script setup lang="ts" name="CptLoading">
import { defineComponent,ref } from 'vue';
const is = ref(true);
const show = () => {
  is.value = true;
}
const hide = () => {
  is.value = false;
}
const loadingText = ref('');
const text = (e:string) => {
  loadingText.value = e
}
const loadingColor = ref('#409eff');
const color = (e:string) => {
  loadingColor.value = e
}
defineExpose({show,hide,text,color})
</script>

<template>
  <div class="zzcpt-loading-mask" v-if="is">
    <div class="content">
      <svg class="circular" viewBox="0 0 50 50">
        <circle class="path" cx="25" cy="25" r="20" fill="none"></circle>
      </svg>
      <span v-if="loadingText" class="text" :style="{color:loadingColor}">{{loadingText}}</span>
    </div>
  </div>
</template>
<style scoped>
.zzcpt-loading-mask{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.726);
  z-index: 9999;
}
.content{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.content .text{
  margin-top: 10px
}
.circular{
  display: inline;
  height: 40px;
  width: 40px;
  animation: loading-rotate 2s linear infinite;
}
.path{
  animation: loading-dash 1.5s ease-in-out infinite;
  stroke-dasharray: 90, 150;
  stroke-dashoffset: 0;
  stroke-width: 2;
  stroke: #409eff;
  stroke-linecap: round;
}
@keyframes loading-rotate{
  100%{transform: rotate(360deg);}
}
@keyframes loading-dash{
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -40px;
  }
  100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -120px;
  }
}
</style>