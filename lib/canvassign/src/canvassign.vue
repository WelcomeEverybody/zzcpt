<script lang="ts">
import { defineComponent,ref,onMounted,useSlots } from 'vue'
export default defineComponent({
  name: 'CptCanvassign',
  props:{
    target:{
      type:String,
      default:''
    },
    width:{
      type:Number,
      default:400
    },
    height:{
      type:Number,
      default:300
    }
  },
  emits:['save'],
  setup(props,{emit:e}) {
    const cvs = ref()
    const targetDom = ref();
    var ctx:any = '';
    var edown = '';
    var emove = '';
    var eup = '';
    var is = false;
    var startPosition = {x:0,y:0,scrollY:0};
    onMounted(()=>{
      init()
    })
    function init(){
      if(props.target){
        const dom = document.querySelector(props.target);
        if(!dom){
          throw new Error('请传入正确的target')
        }
        targetDom.value = dom;
      }else{
        throw new Error('请传入target')
      }
      setBasicEvent()
      addEvent();
      cvs.value.width = props.width;
      cvs.value.height = props.height;
      ctx = cvs.value?.getContext('2d');
      ctx.clearRect(0,0,props.width,props.height);
    }
    
    function isMobileDevice() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }
    function setBasicEvent(){
      if(isMobileDevice()){
        edown = "touchstart";
        emove = "touchmove";
        eup = "touchend";
      }else{
        edown = "mousedown";
        emove = "mousemove";
        eup = "mouseup";
      }
    }
    function addEvent(){
      cvs.value.addEventListener(edown,MouseDown,false);
      cvs.value.addEventListener(emove,MouseMove,false);
      cvs.value.addEventListener(eup,MouseUp,false);
    }

    function MouseDown(e:any){
      const {offsetLeft,offsetTop} = cvs.value;
      const {scrollTop} = targetDom.value;
      startPosition.x = offsetLeft;
      startPosition.y = offsetTop;
      startPosition.scrollY = scrollTop;
      is = true;
      if(e.touches){
        var x = e.touches[0].clientX,y = e.touches[0].clientY;
      }else{
        var x = e.x,y = e.y;
      }
      ctx.moveTo(x - offsetLeft,y - offsetTop + scrollY);
      ctx.beginPath();
    }
    function MouseMove(e:any){
      if(is){
        if(e.touches){
          var x = e.touches[0].clientX,y = e.touches[0].clientY;
        }else{
          var x = e.x,y = e.y;
        }
        ctx.lineTo(x - startPosition.x ,y-startPosition.y + startPosition.scrollY)
        ctx.stroke();
      }else return
    }
    function MouseUp(){
      ctx.closePath();
      is = false
    }
    function clear(){
      ctx.clearRect(0,0,props.width,props.height);
    }
    function save(){
      var dataURL = cvs.value.toDataURL("image/png");
      const obj = {
        dataURL,
        width:props.width,
        height:props.height
      }
      e('save',obj)
    }
    return {
      cvs,
      clear,
      save,
      useSlots
    }
  }
})
</script>
<template>
  <div :style="{width:width+'px'}">
    <div v-if="!useSlots().option" class="option">
      <button @click="clear">清除</button>
      <button @click="save">保存</button>
    </div>
    <slot name="option"></slot>
    <canvas ref="cvs"></canvas>
  </div>
</template>
<style scoped>
.option{
  display: flex;
  justify-content: space-between;
}
</style>