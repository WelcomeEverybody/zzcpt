<script lang="ts">
import { defineComponent,ref,nextTick,watch,onMounted } from 'vue';
import {debounce} from "../../utils"
// import {CptDropdown} from "../../dropdown/index"
export default defineComponent({
  name: 'CptTabs',
  props:{
    modelValue:{
      type:String,
      default:''
    },
    center:{
      type:Boolean,
      default:false
    },
    type:{
      type:String,
      default:'text'
    },
    position:{
      type:String,
      default:'top'
    }
  },
  emits:['update:modelValue','remove'],
  setup(props,{emit:e}) {
    const tabs:any = ref([]);
    const tabsLine:any = ref();
    const tabsScroll:any = ref();
    const isScroll = ref(false)
    const xBox = ['top','bottom'];
    // const ybox = ['left','right']; 
    onMounted(() => {
      nextTick(() => {
        console.log(props.modelValue)
        setTabsLine(props.modelValue)
        addScrollEvent()
        getIsScroll()
      })
    })
    function updateModelValue(val:string){
      e("update:modelValue",val)
      setTabsLine(val)
    }
    function setTabsLine(val:string){
      const doms = document.querySelectorAll(".tabs-item");
      const left = tabsScroll.value.scrollLeft;
      if(props.type == 'card') return;
      doms.forEach((item:any) => {
        if(item.getAttribute('text') == val){
          if(xBox.includes(props.position)){
            tabsLine.value.style.left = item.offsetLeft - left + "px";
            tabsLine.value.style.width = item.offsetWidth + "px";
          }
        }
      })
    }
    function getTabsClass(){
      const obj:any = {
        'text':{
          "line":true,
          "active":'tabs-item-active',
          "tabsitem":"tabs-item",
          "tabsboxline":''
        },
        'card':{
          "line":false,
          "active":'tabs-item-box-active',
          "tabsitem":"tabs-item-box",
          "tabsboxline":'tabs-box-line'
        }
      }
      return obj[props.type]
    }
    function getIsScroll(){
      isScroll.value = tabsScroll.value.scrollWidth > tabsScroll.value.offsetWidth
    }
    function addScrollEvent(){
      if(xBox.includes(props.position)){
        tabsScroll.value.addEventListener('mousewheel',(e:any) => {
          if (e.wheelDelta < 0) {
            tabsScroll.value.scroll((Math.abs(e.wheelDelta)) + tabsScroll.value.scrollLeft ,0)
            setTabsLine(props.modelValue)
          }else {
            tabsScroll.value.scroll(tabsScroll.value.scrollLeft - e.wheelDelta,0)
            setTabsLine(props.modelValue)
          }        
        })
      }
    }
    const listRef:any = ref();
    const show = ref(false);
    const more = ref();
    function remove(e2:any){
      tabs.value = tabs.value.filter((item:any) => {
        return item.label != e2.label
      })
      e("remove",e2)
    }
    watch(() => tabs.value,() => {
      debounce(() => {
        getIsScroll()
      },500)
    },{deep:true})
    watch(() => props.modelValue,(val) => {
      setTabsLine(val)
      getIsScroll()
    })
    return {
      tabs,
      tabsLine,
      tabsScroll,
      isScroll,
      listRef,
      show,
      more,
      updateModelValue,
      getTabsClass,
      remove
    }
  }
})
</script>

<template>
    <div class="cpt-tabs">
      <div class="flex" :class="[isScroll ? 'scrollW':'']">
        <div ref="tabsScroll" class="tabs-box scroll" :class="[center ? 'tabs-box-center' : '',getTabsClass().tabsboxline]">
          <div 
            :class="[item.label == modelValue ? getTabsClass().active : '',getTabsClass().tabsitem]" 
            @click="updateModelValue(item.label)" 
            v-for="(item,index) in tabs" 
            :key="index"
            class="tabs-box-item flex align-center justify-center"
            :text="item.label"
            @mouseenter="show = true"
          >
            <span style="padding-right: 5px;">{{ item.label }}</span>
            <p class="close" @click.stop="remove(item)"></p>
          </div>
        </div>
        <!-- <CptDropdown
          ref="more"
          v-show="isScroll" 
          class="more" 
          text="· · ·"
          btnType="text"
          >
            <p v-for="item in 5">P123123</p>
        </CptDropdown> -->
      </div>
      <div v-if="getTabsClass().line" class="tabs-line-box">
        <span ref="tabsLine" class="tabs-line"></span>
        <span class="tabs-show-line"></span>
      </div>
      <slot></slot>
    </div>
</template>
<style scoped>
@import url("../style/style.css");
</style>