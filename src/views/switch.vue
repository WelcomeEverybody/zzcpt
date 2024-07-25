<script lang="ts" setup>
import {ref} from 'vue'
import Attribute from "../components/attribute.vue"
import Code from "../components/code.vue"

const switch1 = ref(false)
const switch2 = ref(false)
const switch3 = ref(true)
const switch4 = ref(true) 
const switch5 = ref(true) 

const code = 
`<template>
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
`
</script>

<template>
    <div>
        <h1>开关 Switch</h1>
        <p>常用的开关按钮</p>
        <h2>基础用法</h2>
        <p>使用
            <span class="lable-code">activeBg</span>、
            <span class="lable-code">closeBg</span>、
            <span class="lable-code">disabled</span>、
            <span class="lable-code">loading</span>、
            <span class="lable-code">checked</span>、
            <span class="lable-code">unChecked</span>
            来自定义开关，开关按钮必须绑定变量
        </p>
        <div class="preview">
            <div>
                <div><Cpt-switch v-model="switch1"></Cpt-switch></div>
                <div class="m-t-1"><Cpt-switch v-model="switch2" activeBg="#f00" closeBg="#0f0"></Cpt-switch></div>
                <div class="m-t-1"><Cpt-switch disabled></Cpt-switch></div>
                <div class="m-t-1"><Cpt-button @click="switch4 = !switch4">开/关</Cpt-button><Cpt-switch v-model="switch5" :loading="switch4"></Cpt-switch></div>
                <div class="m-t-1"><Cpt-switch v-model="switch3" checked="自定义文字开" unChecked="关"></Cpt-switch></div>
            </div>
        </div>
        <Code :code="code" />
        <Attribute name="switch" />
    </div>
</template>