import{C,A as h}from"./code-9c60aece.js";import{d as g,g as r,r as l,h as x,c as b,a as e,i as u,j as _,w as s,b as t,o as i,f as w}from"./index-ea6d66b9.js";const L=e("h1",null,"Loading 加载状态",-1),V=e("h2",null,"基础用法",-1),k={class:"preview"},y=e("p",{style:{"font-size":"14px"}}," 测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本 测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本 ",-1),B=e("div",{style:{height:"20px"}},null,-1),T=`<template>
    <Cpt-button @click="Loading1 = !Loading1">点击切换</Cpt-button>
    <CptShowText v-loading="Loading" style="width:300px;">
        <p style="font-size: 14px;">
            测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本
            测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本
        </p>
    </CptShowText>
</template>
<script lang="ts" setup>
import {ref} from 'vue'
const Loading = ref(true)
<\/script>
`,D=g({__name:"loading",setup(S){const p=r(),n=r(!0);return(N,o)=>{const v=l("CptShowText"),m=l("Cpt-button"),a=l("Cpt-option"),f=l("Cpt-select"),d=x("loading");return i(),b("div",null,[L,V,e("div",k,[e("div",null,[u((i(),_(v,{style:{width:"300px"}},{default:s(()=>[y]),_:1})),[[d,!0]])]),B,e("div",null,[t(m,{onClick:o[0]||(o[0]=c=>n.value=!n.value)},{default:s(()=>[w("点击切换")]),_:1}),u((i(),_(f,{modelValue:p.value,"onUpdate:modelValue":o[1]||(o[1]=c=>p.value=c),labelColor:"#f00",labelBg:"#fff",placeholder:"请选择"},{default:s(()=>[t(a,{label:"选项1",value:"1"}),t(a,{label:"选项2",value:"2"}),t(a,{label:"选项3",value:"3"})]),_:1},8,["modelValue"])),[[d,n.value]])])]),t(C,{code:T}),t(h,{name:"loading"})])}}});export{D as default};
