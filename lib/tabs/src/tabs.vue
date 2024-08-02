<script lang="ts">
import { defineComponent,ref,nextTick,watch } from 'vue';
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
  emits:['update:modelValue'],
  setup(props,{emit:e}) {
    const tabs:any = ref([]);
    const tabsLine:any = ref();
    const tabsScroll:any = ref();
    const isScroll = ref(false)
    const xBox = ['top','bottom'];
    // const ybox = ['left','right']; 
    nextTick(() => {
      setTabsLine(props.modelValue)
      addScrollEvent()
      getIsScroll()
    })
    function updateModelValue(val:string){
      e("update:modelValue",val)
      setTabsLine(val)
    }
    function setTabsLine(val:string){
      const doms = document.querySelectorAll(".tabs-item");
      const left = tabsScroll.value.scrollLeft
      if(props.type == 'card') return;
      doms.forEach((item:any) => {
        if(item.innerHTML == val){
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
            class="flex align-center justify-center"
          >
            <span style="padding-right: 5px;">{{ item.label }}</span>
            <p class="close" @click=""></p>
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
.cpt-tabs{
  --line-color:#dcdcdd;
  --more-width:40px;
  --transition:all .3s;
  width: 100%;
  height: fit-content;
}
.scroll{
  display: flex;
  flex-wrap: nowrap;
  overflow: hidden;
  white-space: nowrap;
  overflow-x: auto;
}
.more{
  width: var(--more-width);
  min-width: var(--more-width);
  max-width: var(--more-width);
  margin-left: 5px;
  border-radius: 10px 10px 0 0;
  font-size: 16px;
  font-weight: bold;
}
.tabs-item,.tabs-item-box{
  position: relative;
}
.close{
  cursor: pointer;
  position: relative;
  width:18px;
  transform: rotate(45deg);
}
.close::after{
  position: absolute;
  content: "";
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  background-color: #9e9e9e;
  width: 3px;
  height: 15px;
  border-radius: 3px;
}
.close::before{
  position: absolute;
  content: "";
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  background-color: #9e9e9e;
  width: 15px;
  height: 3px;
  border-radius: 3px;
}

.flex{
  display: flex;
}
.align-center{
  align-items: center;
}
.justify-center{
  justify-content: center;
}

.scrollW{
  position: relative;
}
/* .scrollW::before{
  position: absolute;
  content: "";
  left: 0;
  height: 100%;
  z-index: 100;
  box-shadow: 0px 0px 12px 6px #dcdcdd;
}
.scrollW::after{
  position: absolute;
  content: "";
  right: calc(var(--more-width) + 6px);
  height: 100%;
  z-index: 100;
  box-shadow: 0px 0px 6px 6px #dcdcdd;
} */
.tabs-box{
  user-select: none;
  /* width: calc(100% - var(--more-width)); */
  width: calc(100%);
}
.tabs-box-center{
  text-align: center;
}
.tabs-box::-webkit-scrollbar{
  width: 0;
  height: 0;
}
.tabs-line-box{
  width: 100%;
  position: relative;
  margin-top: 5px;
  margin-bottom: 5px;
  overflow: hidden;
  height: 2px;
}
.tabs-line{
  position: absolute;
  bottom: 0;
  left: 0;
  width: 1px;
  height: 2px;
  background-color: #409eff;
  transition: all 0.3s;
  z-index: 100;
}
.tabs-show-line{
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  /* bottom: -5px; */
  background-color: var(--line-color);
  transition: all 0.3s;
}
.tabs-item{
  cursor: pointer;
  margin-right: 40px;
}
.tabs-box-line{
  border-bottom: 1px solid var(--line-color);
}
.tabs-item-box{
  transform: translateY(1px);
  border: 1px solid var(--line-color);
  border-bottom: none;
  padding: 8px 16px;
  cursor: pointer;
  margin-right: 2px;
  border-radius: 10px 10px 0 0;
  transition: all 0.3s;
  background-color: #FAFAFA;
}
.tabs-item-box-active{
  border-bottom: none;
  background-color: #fff;
  color: #409eff;
}
.tabs-item:last-child{
  margin-right: 0;
}
.tabs-item-active{
  color: #409eff;
}
</style>