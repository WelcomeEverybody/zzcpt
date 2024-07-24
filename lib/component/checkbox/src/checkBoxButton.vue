<script lang="ts">
import { defineComponent,onMounted,getCurrentInstance,ref } from 'vue';
import { CptCheckboxButtonProps } from "./attribute"
export default defineComponent({
  name:"CptCheckboxButton",
  props:CptCheckboxButtonProps,
  setup(props){
    const btnClick = () => {
      father.value = props.name;
    }
    const father = ref()
    onMounted(() => {
      const { proxy } = getCurrentInstance();
      father.value = proxy.$parent.modelValue;
    })

    return {
      btnClick,
      father
    }
  }
})
</script>

<template>
  <button @click="btnClick" :class="{'cpt-checkbox-button-check':father == name}" class="cpt-checkbox-button c-pointer">
    {{ title }}
  </button>
</template>

<style scoped>
@import "../style/style.css";
</style>