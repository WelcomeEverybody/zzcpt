<script lang="ts">
import {defineComponent,ref,onMounted,watch,computed} from "vue";
import {SelectProps} from "./attribute";
export default defineComponent({
  name:"CptSelect",
  props:SelectProps,
  emits:['update:modelValue','change'],
  setup(props,{emit:e}){
    const multiple = ref();
    const iptD = ref();
    const text:any = ref({
      // label:props.modelValue,
      value:props.modelValue,
    });
    const select = ref();
    const multilineArr:any = ref([]);
    const optionShow = ref();
    const selectOption = ref();

    
    const inputFocus = () => {
      if(!optionShow.value){
        iptD.value.focus();
        iptD.value.setAttribute('readonly','readonly');
        if(props.multiline){
          setTimeout(() => {
            iptD.value.removeAttribute('readonly')
          }, 200);
        }
      } else {
        iptD.value.blur();
      }
    }
    function optionClick(e:any){
      if(props.multiline){
        e.stopPropagation();
      }
    }
    function iptDBlurFn(){
      if(optionShow.value)
        multiple.value.classList.remove('multipleFocus');
        optionShow.value = false;
    }
    function iptFocusFn(){
      if(!optionShow.value)
        optionShow.value = true;
        multiple.value.classList.add('multipleFocus');
    }
    function preventDefaults(e: { preventDefault: () => void; }){
      e.preventDefault();
      return false;
    }
    function labelRemove(item:any){
      multilineArr.value.splice(multilineArr.value.indexOf(item),1);
      e('update:modelValue', multilineArr.value);
      if(multilineArr.value.length == 0)text.value = {};
    }
    const popstate = (e: any) => {
      if (e.keyCode === 8) {
        multilineArr.value.splice(multilineArr.value.length - 1,1);
      }
    }
    onMounted(() => {
      select.value.addEventListener('mousedown',preventDefaults);
      iptD.value.addEventListener("blur", iptDBlurFn);
      iptD.value.addEventListener("focus", iptFocusFn);
      if(props.multiline){
        iptD.value.addEventListener('keydown',popstate)
      }
      if(props.size && props.size != 'defalut'){
        multiple.value.classList.add(props.size)
      }
      const top = select.value.getBoundingClientRect().top;
      const left = select.value.getBoundingClientRect().left;
      const width = select.value.clientWidth;
      
      selectOption.value.style.top = top + 40 + 'px';
      selectOption.value.style.left = left + 'px';
      selectOption.value.style.width = width + 'px';
    })
    const multilineValueArr = ref(computed(() =>{return multilineArr.value.map((item:any) => {return item.value})}))
    watch(() => text.value, (newVal) => {
      if(props.multiline && newVal.value){
        let index = -1;
        for (let i = 0; i < multilineArr.value.length; i++) {
          if (multilineArr.value[i].label === newVal.label) {
            index = i;
            break;
          }
        }
        if (index === -1) {
          multilineArr.value.push(JSON.parse(JSON.stringify(newVal)));
        } else {
          multilineArr.value.splice(index, 1);
        }
      }
      e('update:modelValue', props.multiline ? multilineValueArr.value : newVal.value);
      e('change',true)
    },{deep:true});
    return {
      inputFocus,
      multiple,
      optionClick,
      iptD,
      optionShow,
      text,
      select,
      multilineArr,
      labelRemove,
      selectOption
    }
  }
})
</script>
<template>
  <div class="cpt-select" ref="select">
    <!-- 选择器 -->
    <div ref="multiple" @click="inputFocus" class="multiple">
      <div class="input">
        <div class="box">
          <div v-if="multiline" class="label" :style="{'background':labelBg,'color':labelColor}" v-for="(item,index) in multilineArr" :key="index">
            {{ item.label }}
            <span @click.stop="labelRemove(item)" class="close">×</span>
          </div>
          <span class="label text" v-if="!multiline && text.value ">{{ text.label }}</span>
          <input  oninput="value=value.replace(/.*/g,'')" ref="iptD"/>
        </div>

        <span v-if="multiline && multilineArr.length == 0" id="placeholder">{{ placeholder }}</span>
        <span v-else-if="!multiline && !text.label" id="placeholder">{{ placeholder }}</span>
      </div>
    </div>
    <teleport to='body'>
      <Transition name="slide-fade" v-show="optionShow">
          <div ref="selectOption" class="select-option">
            <ul @click="optionClick">
              <slot></slot>
            </ul>
          </div>
      </Transition>
    </teleport>
  </div>
</template>
<style scoped>
@import url("../../index.css");
@import url('../css/style.css')
</style>