<script lang="ts">
import { defineComponent,watch,ref,onMounted,getCurrentInstance } from 'vue';
export default defineComponent({
  name: 'CptTabPane',
  props:{
    label:{
      type:String,
      default:''
    },

  },
  emits:['update:modelValue'],
  setup(props) {
    const tabsModelValue = ref();
    const i:any = getCurrentInstance()
    const instance:any = i?.parent?.ctx;
    onMounted(() => {
      const tabsData = instance.tabs;
      tabsData.push({label:props.label})
    })
    watch(() => instance.modelValue,(val) => {
      tabsModelValue.value = val;
    },{immediate:true})
    return {
      tabsModelValue
    }
    
  }
})
</script>

<template>
  <div class="tab-pane" v-show="tabsModelValue == label">
    <slot></slot>
  </div>
</template>

<style scoped>
@import url("../style/style.css");
</style>