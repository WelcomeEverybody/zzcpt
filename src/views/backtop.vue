<script lang="ts" setup>
import Attribute from '../components/attribute.vue'
import Code from '../components/code.vue'

const code = 
`<template>
    <div>
        <p v-for="item in 50" :key="item">{{ item }}</p>
        <CptBackTop :top="200" target="#content"></CptBackTop>
    </div>
</template>
`
</script>
<template>
    <div>
        <h1>BackTop 回到顶部</h1>
        <p>向下滑东查看右下角按钮</p>
        <p v-for="item in 50" :key="item">{{ item }}</p>
        <CptBackTop :top="200" target="#content"></CptBackTop>
        <Code :code="code"></Code>
        <Attribute name="backtop"></Attribute>
    </div>
</template>