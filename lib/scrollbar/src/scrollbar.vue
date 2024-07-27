<script lang="ts">
import {ref} from "vue"
import { defineComponent,onMounted,getCurrentInstance  } from 'vue';
import { ScrollbarProps } from './attribute';
export default defineComponent({
    name:"CptScrollbar",
    props:ScrollbarProps,

    setup(props,{emit})
    {   
        const slots = getCurrentInstance();
        const height = Number(props.height.replace(/px/,''));
        const scrollbar = ref();
        const scrollbarBox = ref();
        function initScrollbar(){
            const boxHeight = scrollbarBox.value.scrollHeight
            const scrollbarHeight = boxHeight / height  < 10 ? 15 : boxHeight / height;
            scrollbar.value.style.height = scrollbarHeight + 'px';
        }
        onMounted(() => {
            initScrollbar();
        })
        function scrollbarDown(e:any){
        }
        function scrollbarMove(e:any){
            
        }
        return {
            props,
            scrollbar,
            scrollbarBox,
            scrollbarDown,
            scrollbarMove
        }
    }
})

</script>

<template>
    <div ref="scrollbarBox" class="scrollbarBox" :style="{'max-height': props.height}">
        <slot></slot>
        <div ref="scrollbar" class="scrollbar" onmousedown="scrollbarDown" onmousemove="scrollbarMove"></div>
    </div>
</template>

<style scoped>
.scrollbarBox{
    position: relative;
    overflow: hidden;
    overflow: auto;
}
.scrollbarBox::-webkit-scrollbar{
    width:0px;
    height:0px;
}
.scrollbar{
    position: absolute;
    width: 10px;
    height:10px;
    background: red;
    border-radius: 5px;
    right: 0;
    top: 0;
}
</style>