<script lang="ts">
import { defineComponent,ref,onMounted,useSlots} from "vue"
import {BackTopProps} from "./attribute"
export default defineComponent({
    name:"CptBackTop",
    props:BackTopProps,
    emits:["click"],
    setup(props,{emit})
    {
        var dom:any = null;
        const show = ref(false)
        onMounted(() => {
            console.log()
            if(props.target){
                dom = document.querySelector(props.target);
                if(!dom){
                    throw Error(`${props.target} is not found`);
                }
            }
            init()
        })
        function addEvent(){
            dom.addEventListener('scroll',scroll);

        }
        function scroll(){
            if(dom.scrollTop > props.top){
                if(!show.value)
                    setShow(true);
            }else{
                if(show.value)
                    setShow(false);
            }
        }
        function setShow(e:boolean){
            show.value = e;
        }
        function init(){
            addEvent();
        }
        function go(){
            dom.scrollTo({top:0,behavior:'smooth'})
            emit("click")
        }
        return {
            props,
            dom,
            show,
            go,
            useSlots
        }
    }
})

</script>

<template>
    <Transition name="slide-fade" v-show="show">
        <div 
            @click="go"
            class="backtop"
            :style="{
                'right':right+'px',
                'bottom':bottom+'px',
                'width':width,
                'height':height,
                'line-height':height,
                'text-align':'center',
                'background-color':bgColor
            }"
            style="border-radius: 50%;"
        >
            <span v-if="!useSlots().default">UP</span>
            <slot></slot>
        </div>
    </Transition>
</template>
<style scoped>
@import "../style/style.css";
</style>