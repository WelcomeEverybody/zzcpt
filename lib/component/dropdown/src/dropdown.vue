<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import {DropdownProps} from "./attribute";
import {CptButton} from "../../button/index"
export default defineComponent({
  name: 'CptDropdown',
  props:DropdownProps,
  setup(_props) {
    const props = _props
    
    const handle = props.handle;

    const show = ref(false)
    const listRef = ref();
    const btnRef = ref();

    const isShow = () => {
      show.value = !show.value;
    }

    const isEvent = props.trigger == 'hover' ? 'mouseenter' : 'click';

    let times:any = null;

    const isShowFn = () => {
      if(times)clearTimeout(times);
      times = setTimeout(() => {
        show.value = false;
      }, 500);
    }

    const isHover = () => {
      btnRef.value.buttonRef.addEventListener('mouseleave', () => {isShowFn();})
      listRef.value.addEventListener('mouseenter',() => {clearTimeout(times)});
      listRef.value.addEventListener('mouseleave', () => {isShowFn();});
    }

    const isClick = () => {
      if(!handle){
        listRef.value.addEventListener('mousedown', (e: { preventDefault: () => void; }) => {
          e.preventDefault();
          return false;
        })
      }
      btnRef.value.buttonRef.addEventListener('blur', () => {show.value=false;})
    }

    const init = () => {
      if(props.trigger == 'hover'){
        isHover();
      }else{
        isClick();
      }
      btnRef.value.buttonRef.addEventListener(isEvent, () => {
        const listRefLeft = listRef.value.getBoundingClientRect().left;
        const windowLeft = document.documentElement.clientWidth;
        if(windowLeft - listRefLeft < 100){
          const arrow = document.getElementById('arrow') as HTMLElement;
          arrow.style.right = 10 + 'px';
          arrow.style.left = 'auto';
          listRef.value.style.right = 100 + 'px'
        }else if(listRefLeft < 100){
          const arrow = document.getElementById('arrow') as HTMLElement;
          arrow.style.left = 10 + 'px';
          arrow.style.right = 'auto';
          listRef.value.style.left = 100 + 'px'
        }

        if(isEvent == 'mouseenter'){
          clearTimeout(times);
          show.value = true;
        }else{
          isShow();
        }
      })
    }

    onMounted(() => {
      init()
    })
    return{
      isShow,
      show,
      listRef,
      btnRef,
      
    }
  },
});
</script>
<template>
  <div class="cpt-dropdown">
    <CptButton ref="btnRef" :type="btnType">{{ text }}</CptButton>
    <div ref="listRef" class="cpt-dropdown-content">
      <Transition name="slide-fade">
        <div v-show="show" class="cpt-dropdown-menu">
          <div class="cpt-dropdown-arrow"></div>
          <ul>
            <slot></slot>
          </ul>
        </div>
      </Transition>
    </div>
  </div>
</template>
<style scoped>
@import url('../css/dropdown.css');
</style>