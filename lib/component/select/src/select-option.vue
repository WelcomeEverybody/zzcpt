<script lang="ts">
import {defineComponent,onMounted,getCurrentInstance,ref,watch } from "vue";
import {SelectOptionProps} from "./attribute";
export default defineComponent({
  name:"CptOption",
  props:SelectOptionProps,
  setup(props) {
    const select = ref();
    const arr = ref<any>([]);
    const text:any = ref({});
    const multiline = ref(false);
    let once = false;

    const selectValue = () => {
      if(props.disabled)return;
      select.value.text.value = props.value;
      select.value.text.label = props.label;
    }
    onMounted(() => {
      if(select.value)return;
      // 获取父组件实例用于修改数据
      const {proxy}:any = getCurrentInstance();
      select.value = proxy.$parent.$parent;
      arr.value = select.value.multilineArr;
      multiline.value = select.value.multiline;
      text.value = select.value.text;
      init();
      watch(() => select.value.modelValue,() => {
        if(once)return;
        init();
        once = true;
      })
    })
    const init = () => {
      if(!select.value.multiline && props.value == select.value.modelValue){
        text.value.label = props.label;
        text.value.value = props.label;
      }else if(select.value.modelValue && Array.isArray(select.value.modelValue) && select.value.modelValue.length > 0){
        select.value.modelValue.map((item:any,index:number) =>{
          if(item === props.value){
            let obj = {
              value:props.value,
              label:props.label,
              id:Date.now()
            }
            select.value.multilineArr[index] = obj ;
          }
        })
      }
    }
    const multilineFn = () => {
      for(let i = 0; i < arr.value.length; i++) {
        const item = arr.value[i];
        if(item.value === props.value) {
          return true;
        }
      }
      return false;
    }
    const textFn = () => {
      return text.value.label === props.label;
    }

    return {
      multiline,
      selectValue,
      multilineFn,
      textFn
    };
  },
})
</script>
<template>
  <li 
    ref="li" 
    :class="{
      'active':multiline ? multilineFn() : textFn(),
      'disabled':disabled
    }" 
    class="li" 
    @click="selectValue"
  >{{ label }}</li>
</template>
<style scoped>
.li{
  cursor:pointer;
  transition:background 0.2s;
  border-radius:5px;
  padding:5px 12px;
}
.li:hover{
  background:#f5f5f5;
}
.disabled{
  background:#FAFAFA !important;
  color:#929292;
  cursor:not-allowed;
}
.active{
  background:#e6f4ff !important;
  position: relative;
  font-weight:600;
}
/* .active::after{
  position:absolute;
  content:"";
  width:5px;
  height:10px;
  border:1px solid #1677ff;
  border-left:transparent;
  border-top:transparent;
  right:20px;
  top:50%;
  transform:  rotate(45deg) translate(-50%,-50%);
} */
</style>