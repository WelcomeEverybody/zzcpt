import{C as x,A as h}from"./code-c3a1e57a.js";import{d as s,g as k,r as a,c as u,a as p,b as e,w as b,o as d}from"./index-b007e69e.js";const i=p("h1",null,"Checkbox 复选框",-1),r=p("p",null,"常用的复选框",-1),v=p("h2",null,"基础用法",-1),_={class:"preview"},V=p("div",{style:{height:"20px"}},null,-1),f=`<template>
    <cpt-checkbox title="check1" v-model="checkBoxIs" name="1"></cpt-checkbox>
    <cpt-checkbox title="check2" v-model="checkBoxIs" name="2"></cpt-checkbox>
    <cpt-checkbox title="check3" v-model="checkBoxIs" name="3"></cpt-checkbox>

    <cpt-checkbox-group v-model="checkBoxSelect" >
        <cpt-checkbox type="checkbox" title="check1" name="1"></cpt-checkbox>
        <cpt-checkbox type="checkbox" title="check2" name="2"></cpt-checkbox>
        <cpt-checkbox type="checkbox" title="check3" name="3"></cpt-checkbox>
        <cpt-checkbox type="checkbox" title="check4" name="4"></cpt-checkbox>
    </cpt-checkbox-group>
</template>
<script lang="ts" setup>
import {ref} from 'vue'
import {CptCheckbox,CptCheckboxGroup} from '../lib/component/index'
const checkBoxIs = ref(2)
const checkBoxSelect = ref(['1','2'])
<\/script>
`,I=s({__name:"checkbox",setup(B){const l=k(2),n=k(["1","2"]);return(C,c)=>{const t=a("cpt-checkbox"),m=a("cpt-checkbox-group");return d(),u("div",null,[i,r,v,p("div",_,[e(t,{title:"check1",modelValue:l.value,"onUpdate:modelValue":c[0]||(c[0]=o=>l.value=o),name:"1"},null,8,["modelValue"]),e(t,{title:"check2",modelValue:l.value,"onUpdate:modelValue":c[1]||(c[1]=o=>l.value=o),name:"2"},null,8,["modelValue"]),e(t,{title:"check3",modelValue:l.value,"onUpdate:modelValue":c[2]||(c[2]=o=>l.value=o),name:"3"},null,8,["modelValue"]),V,e(m,{modelValue:n.value,"onUpdate:modelValue":c[3]||(c[3]=o=>n.value=o)},{default:b(()=>[e(t,{type:"checkbox",title:"check1",name:"1"}),e(t,{type:"checkbox",title:"check2",name:"2"}),e(t,{type:"checkbox",title:"check3",name:"3"}),e(t,{type:"checkbox",title:"check4",name:"4"})]),_:1},8,["modelValue"])]),e(x,{code:f}),e(h,{name:"checkbox"}),e(h,{name:"checkbox-group"})])}}});export{I as default};
