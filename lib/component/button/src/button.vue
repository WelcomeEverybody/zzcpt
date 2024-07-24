<script lang="ts">
import { defineComponent, onUpdated, onMounted,ref } from 'vue';
import { buttonProps } from './attribute';
import addClass from "./addClass";
export default defineComponent({
  name:'CptButton',
  props:buttonProps,
  setup(_props) {
    const buttonRef = ref<any>();
    const props = _props;
    const domAddClass = () => {
      buttonRef.value.classList = [];
      buttonRef.value.classList.add('cpt-btn','c-pointer',...addClass(props,'cpt'))
    };
    const isLoading = () => {
      return props.loading
    };
    onMounted(()=>{
      domAddClass()
    });
    onUpdated(() => {
      domAddClass()
    });
    return {
      buttonRef,
      isLoading
    }
  },
})
</script>
<template>
  <button ref="buttonRef" class="" :style="isLoading()?'padding-left:30px;pointer-events:none;' : ''">
    <div v-if="isLoading()" class="cpt-loading"></div>
    <span><slot></slot></span>
  </button>
</template>
<style scoped>
@import url("../css/button.css");
</style>