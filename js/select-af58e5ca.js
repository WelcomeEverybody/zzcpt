import{C as r,A as i}from"./code-29f7115d.js";import{d as m,g as c,r as u,c as C,a,b as e,w as d,e as b,o as v}from"./index-8c37b172.js";const f=b('<h1>选择器 Select</h1><p>常用的选择器</p><h2>基础用法</h2><p>使用 <span class="lable-code">size</span>、 <span class="lable-code">labelColor</span>、 <span class="lable-code">labelBg</span>、 <span class="lable-code">multiline</span>、 <span class="lable-code">placeholder</span> 来自定义选择器 </p>',4),_={class:"preview"},h=a("div",{style:{height:"20px"}},null,-1),g=`<template>
    <Cpt-select 
        v-model="selects" 
        labelColor="#f00" 
        labelBg="#fff" 
        placeholder="请选择"
    >
        <Cpt-option label="选项1" value="1"></Cpt-option>
        <Cpt-option label="选项2" value="2"></Cpt-option>
        <Cpt-option label="选项3" value="3"></Cpt-option>
    </Cpt-select>
    <Cpt-select 
        size="large" 
        v-model="multilines" 
        labelColor="#00f" 
        labelBg="#0f0" 
        placeholder="请选择" 
        multiline
    >
        <Cpt-option label="选项1" value="1"></Cpt-option>
        <Cpt-option label="选项2" value="2"></Cpt-option>
        <Cpt-option label="选项3" value="3"></Cpt-option>
    </Cpt-select>
</template>
<script lang="ts" setup>
import {ref} from 'vue'

const selects = ref()
const multilines = ref()
<\/script>
`,z=m({__name:"select",setup(V){const s=c(),p=c();return(B,t)=>{const l=u("Cpt-option"),n=u("Cpt-select");return v(),C("div",null,[f,a("div",_,[a("div",null,[e(n,{modelValue:s.value,"onUpdate:modelValue":t[0]||(t[0]=o=>s.value=o),labelColor:"#f00",labelBg:"#fff",placeholder:"请选择"},{default:d(()=>[e(l,{label:"选项1",value:"1"}),e(l,{label:"选项2",value:"2"}),e(l,{label:"选项3",value:"3"})]),_:1},8,["modelValue"])]),h,a("div",null,[e(n,{size:"large",modelValue:p.value,"onUpdate:modelValue":t[1]||(t[1]=o=>p.value=o),labelColor:"#00f",labelBg:"#0f0",placeholder:"请选择",multiline:""},{default:d(()=>[e(l,{label:"选项1",value:"1"}),e(l,{label:"选项2",value:"2"}),e(l,{label:"选项3",value:"3"})]),_:1},8,["modelValue"])])]),e(r,{code:g}),e(i,{name:"select"}),e(i,{name:"selectoption"})])}}});export{z as default};
