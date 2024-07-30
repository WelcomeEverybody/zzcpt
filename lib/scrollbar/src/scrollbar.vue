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
        const scrollbarShow = ref(false);
        function initScrollbar(){
            const boxHeight = scrollbarBox.value.scrollHeight
            const scrollbarHeight = boxHeight / height  < 10 ? 15 : boxHeight / height;
            scrollbar.value.style.height = scrollbarHeight + 'px';
        }
        onMounted(() => {
            initScrollbar();
        })
        let isStart = ref(false);
        let boxTop = ref(0)
        function scrollbarEnter(e:any){
            scrollbarShow.value = true;
        }
        function scrollbarMove(e:any){
            if(!isStart.value)return;
            const top = e.clientY - scrollbar.value.style.top.replace(/px/,'') - boxTop.value;
            // 获取移动的距离
            console.log(top)
            scrollbar.value.style.top = top + 'px';

        }
        function scrollbarDown(e:any){
            isStart.value = true;
            boxTop.value = scrollbarBox.value.offsetTop;
        }
        function scrollbarLeave(e:any){
            scrollbarShow.value = false;
        }
        function scrollbarUp(e:any){
            isStart.value = false;
        }
        return {
            props,
            scrollbar,
            scrollbarBox,
            scrollbarShow,
            scrollbarEnter,
            scrollbarMove,
            scrollbarDown,
            scrollbarLeave,
            scrollbarUp
        }
    }
})

</script>

<template>
    <div ref="scrollbarBox" :onmouseup="scrollbarUp" :onmouseenter="scrollbarEnter" :onmousemove="scrollbarMove" :onmouseleave="scrollbarLeave" class="scrollbarBox" :style="{'max-height': props.height}">
        <slot></slot>
        <div 
            v-show="scrollbarShow"
            ref="scrollbar" 
            class="scrollbar pointer" 
            :onmousedown="scrollbarDown"
            
        ></div>
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
.pointer{
    cursor: pointer;
}
</style>