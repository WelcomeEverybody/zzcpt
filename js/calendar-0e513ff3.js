import{C as f,A as _}from"./code-2f2356ed.js";import{d as m,g as n,r as p,c as C,a,b as s,w as u,e as y,o as g,f as i,_ as T}from"./index-0095776b.js";const h=y('<h1 data-v-6999882d>Calendar 日历</h1><p data-v-6999882d>常用的操作日历</p><h2 data-v-6999882d>基础用法</h2><p data-v-6999882d>使用 <span class="lable-code" data-v-6999882d>fullscreen</span>、 <span class="lable-code" data-v-6999882d>type</span>、 <span class="lable-code" data-v-6999882d>todoList</span>、 <span class="lable-code" data-v-6999882d>colorType</span>、 来自定义日历 </p>',4),B={class:"preview flex"},x={style:{width:"45%"}},L={style:{width:"45%"}},V=`<template>
    <CptButton @click="fullscreen = true">放大</CptButton>
    <div>
        <Cpt-calendar 
            :colorType="{success:'#67C23A',danger:'#000'}" 
            v-model:fullscreen="fullscreen" 
            :todoList="todoList" 
            type="card"
        ></Cpt-calendar>
    </div>

    <CptButton @click="fullscreens = true">放大</CptButton>
    <Cpt-calendar 
        v-model="selects"
        v-model:fullscreen="fullscreens" 
        type="default"
    ></Cpt-calendar>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
const todoList = ref([
    { 
      date:'2024-7-11',
      list:[
        { type: 'danger', content: 'This is danger event.' },
        { type: 'success', content: 'This is danger event.' },
      ]
    },
    { 
      date:'2024-7-15',
      list:[
        { type: 'danger', content: 'This is danger event.12333333333333333' },
        { type: 'danger', content: 'This is danger event.' },
      ]
    },
])
const selects = ref(["2024-7-11","2024-8-15"])
const fullscreen = ref(false)
const fullscreens = ref(false)
<\/script>
`,b=m({__name:"calendar",setup(k){const v=n([{date:"2024-7-11",list:[{type:"danger",content:"This is danger event."},{type:"success",content:"This is danger event."}]},{date:"2024-7-15",list:[{type:"danger",content:"This is danger event.12333333333333333"},{type:"danger",content:"This is danger event."}]}]),l=n(!1),d=n(!1),o=n(["2024-7-11","2024-8-15"]);return(w,e)=>{const c=p("CptButton"),r=p("Cpt-calendar");return g(),C("div",null,[h,a("div",B,[a("div",x,[s(c,{onClick:e[0]||(e[0]=t=>l.value=!0)},{default:u(()=>[i("放大")]),_:1}),a("div",null,[s(r,{colorType:{success:"#67C23A",danger:"#000"},fullscreen:l.value,"onUpdate:fullscreen":e[1]||(e[1]=t=>l.value=t),todoList:v.value,type:"card"},null,8,["fullscreen","todoList"])])]),a("div",L,[s(c,{onClick:e[2]||(e[2]=t=>d.value=!0)},{default:u(()=>[i("放大")]),_:1}),s(r,{modelValue:o.value,"onUpdate:modelValue":e[3]||(e[3]=t=>o.value=t),fullscreen:d.value,"onUpdate:fullscreen":e[4]||(e[4]=t=>d.value=t),type:"default"},null,8,["modelValue","fullscreen"])])]),s(f,{code:V}),s(_,{name:"calendar"})])}}});const U=T(b,[["__scopeId","data-v-6999882d"]]);export{U as default};
