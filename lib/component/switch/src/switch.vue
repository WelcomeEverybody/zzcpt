<script lang="ts">
import {defineComponent, ref,watch,onMounted} from 'vue';
import {SwitchProps} from "./attribute";
export default defineComponent({
  name:"CptSwitch",
  props:SwitchProps,
  emits:['update:modelValue'],
  setup(props,{emit:e}){
    const switchs = ref();

    const click = () => {
      if(props.loading) return;
      if(!props.modelValue){
        e('update:modelValue',true)
      }else{
        e('update:modelValue',false)
      }
    }
    const initSwitch = (val:boolean) => {
      val ? switchs.value.classList.add("cpt-switch-checked") : switchs.value.classList.remove("cpt-switch-checked");
    }
    const switchLoading = (val:boolean) => {
      if(val){
        switchs.value.classList.add("cpt-switch-disabled");
        switchs.value.children[0].classList.add("cpt-switch-loading");
      }else{
        switchs.value.classList.remove("cpt-switch-disabled");
        switchs.value.children[0].classList.remove("cpt-switch-loading");
      }
    }
    onMounted(() => {
      initSwitch(props.modelValue);
      if(!props.disabled){
        switchLoading(props.loading);
      }
    })
    watch(() => props.modelValue,(newV) => {
      if(!props.loading){
        initSwitch(newV)
      }
    })
    watch(() => props.loading,(newV) => {
      switchLoading(newV)
    })
    
    return {
      click,
      switchs,
      props
    }
  }
})
</script>
<template>
  <button 
    :disabled="props.disabled" 
    :style="{'background-color':props.modelValue ? props.activeBg : props.closeBg}" 
    :class="{'cpt-switch-disabled':props.disabled}"
    ref="switchs" 
    class="cpt-switch" 
    @click="click"
    >
    <div class="handle"></div>
    <span class="inner">
      <span>
        {{ props.checked }}
        <slot name="open"></slot>
      </span>
      <span>
        {{ props.unChecked }}
        <slot name="close"></slot>
      </span>
    </span>
  </button>
</template>
<style>
@import url("../../index.css");
@import url("../style/switch.css");
</style>