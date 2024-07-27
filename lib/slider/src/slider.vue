<script lang="ts">
import {defineComponent, onMounted, ref,watch} from 'vue';
import {SliderProps} from "./attribute";
export default defineComponent({
  name:'CptSlider',
  props:SliderProps,
  emits:['update:modelValue'],
  setup(props,{emit}){
    onMounted(()=>{
      init()
    })
    const slider = ref();
    const sphere = ref();
    const sphereC = ref();
    const line = ref();

    const step = ref(props.step);
    const num:any = ref(props.modelValue);
    const reverse = ref(props.reverse);

    const max = props.max;
    const min = props.min;
    // const disabled = ref(props.disabled);

    const tipShow = ref(false);
    const tipShowC = ref(false);

    let startE= '';
    let moveE = '';
    let endE = '';
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      startE = 'touchstart'
      moveE = 'touchmove'
      endE = 'touchend'
    } else {
      startE = 'mousedown'
      moveE = 'mousemove'
      endE = 'mouseup'
    }
    const sphereActiveCss = 'cpt-slider-sphere-active';
    // 单滑块
    function sphereInit() {
      slider.value.addEventListener('mousedown', ()=>{tipShow.value = true;});
      const steps = step.value;
      const reverses = reverse.value;
      const _num = steps != 1 ? 100 / steps : 100;
      const allWidth = steps / (max - min) * _num;
      const init = () => {
        const sphereLeft = reverses ? max - num.value : (num.value - min) * allWidth;
        line.value.style[reverses ? 'right' : 'left'] = 0;
        sphere.value.style.left = sphereLeft + '%';
        line.value.style.width = (num.value - min) * allWidth + '%';
      }
      init();
      const boxLeft = slider.value.offsetLeft;
      const stepNum = slider.value.offsetWidth / (max - min);
      slider.value.addEventListener(startE, (down:any)=>{
        let current = 0; // 记录每次移动的距离
        sphere.value.classList.add(sphereActiveCss);
        tipShow.value = true;
        const sphereMove = (e:any) => {
          e.preventDefault();
          const clientX = isMobile ? e.touches[0].clientX : e.clientX;
          const calcMove = Number(((clientX - boxLeft) / stepNum % steps).toFixed(2));
          const left = Math.trunc((clientX - boxLeft) / stepNum / steps);
          current = left * steps;
          if(current < 0) return;
          const isEvenStep = steps % 2 === 0;
          if(isEvenStep){
            if(current >= (max - min)) return;
          }else{
            if(steps === 1 && current + 1 > (max - min)) return
              else if(steps !== 1 && current + steps > max) return;
          }
          if(calcMove > steps / 2){
            const lineWidth = reverses ? max - current - steps : current + steps > max ? max : current + steps;
            sphere.value.style.left = (current + steps) * allWidth + '%';
            line.value.style.width = lineWidth * allWidth + '%';
            num.value = current + steps > (max - min) ? max : current + steps + min;
          }else if(calcMove < steps / 2){
            const lineWidth = reverses ? max - current : current;
            sphere.value.style.left = current * allWidth + '%';
            line.value.style.width = lineWidth * allWidth + '%';
            num.value = current + min;
          }
          num.value = reverses ? max - num.value : num.value;
          emit('update:modelValue',num.value)
        }
        sphereMove(down);
        const sphereUp = () => {
          document.removeEventListener(moveE, sphereMove);
          document.removeEventListener(endE, sphereUp);
          sphere.value.classList.remove(sphereActiveCss);
          tipShow.value = false;
        }
        document.addEventListener(moveE, sphereMove);
        document.addEventListener(endE, sphereUp);
      })
    }
    // 双滑块
    function sphereRangeInit() {
      const steps = step.value;
      const boxLeft = slider.value.offsetLeft;
      const stepNum = slider.value.offsetWidth / 100;
      let sphereObj:any = {
        0:sphere.value,
        1:sphereC.value
      }
      const init = () => {
        sphere.value.style.left = num.value[0] + '%';
        sphereC.value.style.left = num.value[1] + '%';
      }
      const lineCalc = () => {
        if(num.value[0] >= num.value[1]){
          line.value.style.left = num.value[1] + '%';
          line.value.style.width = num.value[0] - num.value[1] + '%';
        }else{
          line.value.style.left = num.value[0] + '%';
          line.value.style.width = num.value[1] - num.value[0] + '%';
        }
      }
      init();
      lineCalc();
      let type = 0; // 用于判断滑块
      const sphereMove = (e:any) => {
        e.preventDefault();
        let current = 0;
        const clientX = isMobile ? e.touches[0].clientX : e.clientX;
        const calcMove = Math.trunc((clientX - boxLeft) / stepNum % steps);
        const left = Math.trunc((clientX - boxLeft) / stepNum / steps);
        current = left * steps;
        if(current < 0) return;
        const isEvenStep = steps % 2 === 0;
          if(isEvenStep){
            if(current >= max) return;
          }else{
            if(steps === 1 && current > max) return;
              else if(steps !== 1 && current + steps > max) return;
          }
          if(calcMove > steps / 2){
            num.value[type] = current + steps
          }else if(calcMove < steps / 2){
            num.value[type] = current
          }
          if(calcMove > steps / 2){
            sphereObj[type].style.left = current + steps + '%';
          }else if(calcMove < steps / 2){
            sphereObj[type].style.left = current + '%';
          }
          lineCalc();
      }
      const sphereUp = () => {
        document.removeEventListener(moveE,sphereMove);
        document.removeEventListener(endE,sphereUp);
        sphere.value.classList.remove(sphereActiveCss);
        sphereC.value.classList.remove(sphereActiveCss);
        tipShow.value = false;
        tipShowC.value = false;
        sphereObj[0].style.left = num.value[0] + '%';
        sphereObj[1].style.left = num.value[1] + '%';
        const arr = JSON.parse(JSON.stringify(num.value)).sort((a:any,b:any)=> {return a-b});
        emit('update:modelValue',arr)
      }
      const sphereAddEvent = (_e:Event) => {
        document.addEventListener(moveE,sphereMove);
        document.addEventListener(endE, sphereUp);
      }
      sphere.value.addEventListener(startE,(down:any) => {
        type = 0;
        tipShow.value = true;
        sphere.value.classList.add(sphereActiveCss);
        sphereAddEvent(down)
      })
      sphereC.value.addEventListener(startE,(Cdown:any) => {
        type = 1;
        tipShowC.value = true;
        sphereC.value.classList.add(sphereActiveCss);
        sphereAddEvent(Cdown);
      })
    } 
    function init() {
      if(props.range){
        if(!Array.isArray(props.modelValue)) throw new Error("双滑块接收参数必须是数组");
        sphereRangeInit();
      }else{
        if(!/^\d+(\.\d+)?$/.test(props.modelValue.toString())) throw new Error("接收参数必须是数字");
        sphereInit()
      }
    }
    watch(() => props.disabled,(newV) => {
      if(slider.value){
        if(newV){
          slider.value.classList.add('zdisabled');
        }else{
          slider.value.classList.remove('zdisabled');
        }
      }
    },{deep:true, immediate:true})
    function calcStep(item:number) {
      const step = props.step
      const calc = step / (max - min) * 100;
      const steps = Math.trunc(calc * item);
      return steps;
    }
    return {
      slider,
      sphere,
      line,
      num,
      tipShow,
      tipShowC,
      step,
      sphereC,
      calcStep
    }
  }
})
</script>

<template>
  <div ref="slider" class="cpt-slider ">
    <div v-if="disabled" class='isdisable'></div>
    <div class="cpt-slider-content">
      <div ref="line" class="cpt-slider-line"></div>
      <div v-if="showStops" class="cpt-slider-step">
        <span 
          v-for="item in (max / step - 1)" 
          :key="item" 
          class="item" 
          :style="{'left':calcStep(item) + '%'}"
        ></span>
      </div>
      <button ref="sphere" tabindex="0" class="cpt-slider-sphere">
        <div v-if="showTips && !range" v-show="tipShow" class="cpt-slider-sphere-tips">{{num}}</div>
        <div v-else v-show="tipShow && showTips" class="1 cpt-slider-sphere-tips">{{num[0]}}</div>
      </button>
      <button v-if="range" ref="sphereC" tabindex="1" class="cpt-slider-sphere">
        <div v-if="showTips && !range" v-show="tipShow" class="cpt-slider-sphere-tips">{{num}}</div>
        <div v-else v-show="tipShowC && showTips" class="cpt-slider-sphere-tips">{{num[1]}}</div>
      </button>
    </div>
  </div>
</template>
<style scoped>
@import "../style/style.css";
</style>