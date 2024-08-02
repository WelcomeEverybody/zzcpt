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
    const instance = getCurrentInstance() as any;
    const tabsData = instance.parent.ctx.tabs;
    const tabsModelValue = ref();
    onMounted(() => {
      tabsData.push({label:props.label})
    })
    watch(() => instance.parent.ctx.modelValue,(val) => {
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
.tab-pane{
  width: 100%;
  height: 100%;
}
</style>