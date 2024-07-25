<script lang="ts" setup>
import Code from '../components/code.vue';
import Attribute from '../components/attribute.vue';
const code = 
` <Cpt-dropdown text="Hover me" title="Hover me" trigger='hover' btnType='primary'>
    <Cpt-button type="primary">Hover me</Cpt-button>
    <Cpt-button type="primary">Hover me</Cpt-button>
    <Cpt-button type="primary">Hover me</Cpt-button>
</Cpt-dropdown>
<Cpt-dropdown text="Click me" trigger='click' btnType='primary'>
    <Cpt-button type="primary">Click me</Cpt-button>
    <Cpt-button type="primary">Click me</Cpt-button>
    <Cpt-button type="primary">Click me</Cpt-button>
</Cpt-dropdown>
`
</script>

<template>
    <div>
        <h1>Dropdown 按钮</h1>
        <p>常用的操作按钮</p>
        <h2>基础用法</h2>
        <p>使用
            <span class="lable-code">trigger</span>、
            <span class="lable-code">btnType</span>、
            <span class="lable-code">text</span>、
            来修改下拉框
        </p>
        <div class="preview flex">
            <span class="p-r-1">
                <Cpt-dropdown text="Hover me" title="Hover me" trigger='hover' btnType='primary'>
                        <Cpt-button type="primary">Hover me</Cpt-button>
                        <Cpt-button type="primary">Hover me</Cpt-button>
                        <Cpt-button type="primary">Hover me</Cpt-button>
                </Cpt-dropdown>
            </span>
            <span>
                <Cpt-dropdown text="Click me" trigger='click' btnType='primary'>
                        <Cpt-button type="primary">Click me</Cpt-button>
                        <Cpt-button type="primary">Click me</Cpt-button>
                        <Cpt-button type="primary">Click me</Cpt-button>
                </Cpt-dropdown>
            </span>
        </div>
        <Code :code="code" />
        <Attribute name="dropdown" />
    </div>
</template>