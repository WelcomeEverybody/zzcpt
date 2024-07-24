<script lang="ts">
import {defineComponent, onMounted, ref} from 'vue';
import {SphereProps} from "./attribute";
export default defineComponent({
  name:'CptLevitatedSphere',
  props:SphereProps,
  setup(props){
    const sphere = ref();
    const box = ref();

    const listShow = ref(false);

    onMounted(()=>{
      let startE:string, moveE:string, endE:string;
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
      sphere.value.addEventListener(startE,(e:any) => {
        let checkClick = true;
        const downe = e || window.event;
        downe.preventDefault();
        sphere.value.classList.add('grabbing');
        const starX = downe.touches ? downe.touches[0].clientX : downe.clientX
        const starY = downe.touches ? downe.touches[0].clientY : downe.clientY
        const disX = starX - box.value.offsetLeft;
        const disY = starY - box.value.offsetTop;

        const moveFn = (event) => {
          checkClick = false;
          const e = event || window.event;
          const x = e.touches ? e.touches[0].clientX : e.clientX
          const y = e.touches ? e.touches[0].clientY : e.clientY
          let left = x - disX;
          let top = y - disY;
          if (left < 0) {
            left = 0
          } else if (left > document.documentElement.clientWidth - box.value.offsetWidth) {
            left = document.documentElement.clientWidth - box.value.offsetWidth
          }
          if (top < 0) {
            top = 0
          } else if (top > document.documentElement.clientHeight - box.value.offsetHeight) {
            top = document.documentElement.clientHeight - box.value.offsetHeight
          }
          box.value.style.cssText = `top:${top}px;left:${left}px;`;
        }
        const upFn = () => {
          sphere.value.classList.remove('grabbing');
          document.removeEventListener(endE,upFn);
          document.removeEventListener(moveE,moveFn);
          if(checkClick)
            listShow.value = !listShow.value;
        }
        document.addEventListener(moveE,moveFn);
        document.addEventListener(endE,upFn);
      }) 
      box.value.classList.add(directions[props.direction]);
    })
    const directions = {
      up:'cpt-sphere-top',
      down:'cpt-sphere-bottom',
      left:'cpt-sphere-left',
      right:'cpt-sphere-right'
    }
    return {
      sphere,
      box,
      listShow,
      directions
    }
  }
})
</script>

<template>
  <div 
    ref="box"
    class="cpt-sphere" 
    :style="{'top':top,'left':left,'width':size,'height':size}">
    <button ref="sphere" class="title grab" :style="{'width':size,'height':size,'line-height':size}">
      {{ title }}
    </button>
    <div style="display: contents;" v-if="direction === 'right' || direction === 'left'">
      <Transition name="slide-X">
        <div class="list" v-show="listShow">
          <div class="item user-noselect" >
            <slot></slot>
          </div>
        </div>
      </Transition>
    </div>
    <div style="display: contents;" v-else-if="direction === 'up' || direction === 'down'">
      <Transition name="slide-Y">
        <div class="list" v-show="listShow">
          <div class="item user-noselect" >
            <slot></slot>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<style scoped>
@import "../style/style.css";
</style>