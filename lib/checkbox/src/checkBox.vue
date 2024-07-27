<script lang="ts">
import { defineComponent , ref, useSlots,onUpdated,onMounted,getCurrentInstance } from 'vue';
import { checkBoxProps } from "./attribute"
export default defineComponent({
  name:"CptCheckbox",
  props:checkBoxProps,
  emits:["update:modelValue"],
  setup(props,{emit:e}){
    const isSlot:any = ref(useSlots().default);
    const change = () => {
      if(father.value){
        father.value.includes(props.name) 
          ? father.value.splice(father.value.indexOf(props.name),1) 
          : father.value.push(props.name)
        return;
      }

      e('update:modelValue',props.modelValue == props.name && props.type == 'checkbox' ? null : props.name)
    }
    const father = ref()
    onMounted(() => {
      const { proxy } = getCurrentInstance() as any;
      father.value = proxy.$parent.modelValue;
    })
    onUpdated(() => {
      isSlot.value = useSlots().default;
    })
    return {
      change,
      isSlot,
      father
    }
  }
})
</script>

<template>
  <label class="cpt-checkbox c-pointer">
    <input :type="type" v-if="father" @click="change" :checked="father.includes(name)" class="cpt-checkbox-input">
    <input :type="type" v-else @click="change" :checked="modelValue == name" class="cpt-checkbox-input" >
    <span class="cpt-checkbox-label">
      <span v-if="!isSlot">{{ title }}</span>
      <slot></slot>
    </span>
  </label>
</template>

<style scoped>
@import "../style/style.css"
</style>