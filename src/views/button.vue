<script lang="ts" setup>
import Attribute from '../components/attribute.vue'
import Code from '../components/code.vue'

const code = 
`<div>
    <Cpt-button type="primary">主要按钮</Cpt-button>
    <Cpt-button type="warning">主要按钮</Cpt-button>
    <Cpt-button>主要按钮</Cpt-button>
    <Cpt-button type="success">主要按钮</Cpt-button>
    <Cpt-button type="text">主要按钮</Cpt-button>
</div>
<div>
    <Cpt-button type="primary" size="large">主要按钮</Cpt-button>
    <Cpt-button type="primary">主要按钮</Cpt-button>
    <Cpt-button type="primary" size="small">主要按钮</Cpt-button>
</div>
<div>
    <Cpt-button type="primary" shape="circle">卐</Cpt-button>
    <Cpt-button type="primary">主要按钮</Cpt-button>
    <Cpt-button type="primary" shape="round">主要按钮</Cpt-button>
</div>
<div>
    <Cpt-button type="primary" loading>卐</Cpt-button>
    <Cpt-button type="primary" disabled>主要按钮</Cpt-button>
</div>
`
</script>

<template>
    <div>
        <h1>Button 按钮</h1>
        <p>常用的操作按钮</p>
        <h2>基础用法</h2>
        <p>使用
            <span class="lable-code">type</span>、
            <span class="lable-code">size</span>、
            <span class="lable-code">shape</span>、
            <span class="lable-code">loading</span>、
            <span class="lable-code">disabled</span>
            来自定义按钮
        </p>
        <div class="preview">
            <div>
                <span class="p-r-1"><Cpt-button type="primary">主要按钮</Cpt-button></span>
                <span class="p-r-1"><Cpt-button type="warning">主要按钮</Cpt-button></span>
                <span class="p-r-1"><Cpt-button>主要按钮</Cpt-button></span>
                <span class="p-r-1"><Cpt-button type="success">主要按钮</Cpt-button></span>
                <span class="p-r-1"><Cpt-button type="text">主要按钮</Cpt-button></span>
            </div>
            <div class="m-t-1">
                <span class="p-r-1"><Cpt-button type="primary" size="large">主要按钮</Cpt-button></span>
                <span class="p-r-1"><Cpt-button type="primary">主要按钮</Cpt-button></span>
                <span class="p-r-1"><Cpt-button type="primary" size="small">主要按钮</Cpt-button></span>
            </div>
            <div class="m-t-1">
                <span class="p-r-1"><Cpt-button type="primary" shape="circle">卐</Cpt-button></span>
                <span class="p-r-1"><Cpt-button type="primary">主要按钮</Cpt-button></span>
                <span class="p-r-1"><Cpt-button type="primary" shape="round">主要按钮</Cpt-button></span>
            </div>
            <div class="m-t-1">
                <span class="p-r-1"><Cpt-button type="primary" loading>卐</Cpt-button></span>
                <span class="p-r-1"><Cpt-button type="primary" disabled>主要按钮</Cpt-button></span>
            </div>
        </div>
        <Code :code="code" />
        <Attribute name="button" />
    </div>
</template>
