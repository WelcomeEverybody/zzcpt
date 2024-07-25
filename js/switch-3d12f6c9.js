import{C as w,A as m}from"./code-1b39a4a7.js";import{d as r,g as o,r as u,c as v,a as l,b as s,w as C,e as f,o as _,f as V}from"./index-dc5f9e5d.js";const b=f('<h1>开关 Switch</h1><p>常用的开关按钮</p><h2>基础用法</h2><p>使用 <span class="lable-code">activeBg</span>、 <span class="lable-code">closeBg</span>、 <span class="lable-code">disabled</span>、 <span class="lable-code">loading</span>、 <span class="lable-code">checked</span>、 <span class="lable-code">unChecked</span> 来自定义开关，开关按钮必须绑定变量 </p>',4),g={class:"preview"},k={class:"m-t-1"},B={class:"m-t-1"},x={class:"m-t-1"},N={class:"m-t-1"},U=`<template>
    <Cpt-switch v-model="switch1"></Cpt-switch>
    <Cpt-switch v-model="switch2" activeBg="#f00" closeBg="#0f0"></Cpt-switch>
    <Cpt-switch disabled></Cpt-switch>
    <Cpt-button @click="switch4 = !switch4">开/关</Cpt-button><Cpt-switch v-model="switch5" :loading="switch4"></Cpt-switch>
    <Cpt-switch v-model="switch3" checked="自定义文字开" unChecked="关"></Cpt-switch>
</template>
<script lang="ts" setup>
const switch1 = ref(false)
const switch2 = ref(false)
const switch3 = ref(true)
const switch4 = ref(true)
const switch5 = ref(true) 
<\/script>
`,$=r({__name:"switch",setup(A){const n=o(!1),i=o(!1),d=o(!0),c=o(!0),p=o(!0);return(S,e)=>{const a=u("Cpt-switch"),h=u("Cpt-button");return _(),v("div",null,[b,l("div",g,[l("div",null,[l("div",null,[s(a,{modelValue:n.value,"onUpdate:modelValue":e[0]||(e[0]=t=>n.value=t)},null,8,["modelValue"])]),l("div",k,[s(a,{modelValue:i.value,"onUpdate:modelValue":e[1]||(e[1]=t=>i.value=t),activeBg:"#f00",closeBg:"#0f0"},null,8,["modelValue"])]),l("div",B,[s(a,{disabled:""})]),l("div",x,[s(h,{onClick:e[2]||(e[2]=t=>c.value=!c.value)},{default:C(()=>[V("开/关")]),_:1}),s(a,{modelValue:p.value,"onUpdate:modelValue":e[3]||(e[3]=t=>p.value=t),loading:c.value},null,8,["modelValue","loading"])]),l("div",N,[s(a,{modelValue:d.value,"onUpdate:modelValue":e[4]||(e[4]=t=>d.value=t),checked:"自定义文字开",unChecked:"关"},null,8,["modelValue"])])])]),s(w,{code:U}),s(m,{name:"switch"})])}}});export{$ as default};
