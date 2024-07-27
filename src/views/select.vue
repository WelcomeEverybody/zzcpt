<script lang="ts" setup>
import {ref} from 'vue'
import Attribute from '../components/attribute.vue'
import Code from '../components/code.vue';

const selects = ref()
const multilines = ref()

const code = 
`<template>
    <Cpt-select 
        v-model="selects" 
        labelColor="#f00" 
        labelBg="#fff" 
        placeholder="请选择"
    >
        <Cpt-select-option label="选项1" value="1"></Cpt-select-option>
        <Cpt-select-option label="选项2" value="2"></Cpt-select-option>
        <Cpt-select-option label="选项3" value="3"></Cpt-select-option>
    </Cpt-select>
    <Cpt-select 
        size="large" 
        v-model="multilines" 
        labelColor="#00f" 
        labelBg="#0f0" 
        placeholder="请选择" 
        multiline
    >
        <Cpt-select-option label="选项1" value="1"></Cpt-select-option>
        <Cpt-select-option label="选项2" value="2"></Cpt-select-option>
        <Cpt-select-option label="选项3" value="3"></Cpt-select-option>
    </Cpt-select>
</template>
<script lang="ts" setup>
import {ref} from 'vue'

const selects = ref()
const multilines = ref()
<\/script>
`
</script>

<template>
    <div>
        <h1>选择器 Select</h1>
        <p>常用的选择器</p>
        <h2>基础用法</h2>
        <p>使用
            <span class="lable-code">size</span>、
            <span class="lable-code">labelColor</span>、
            <span class="lable-code">labelBg</span>、
            <span class="lable-code">multiline</span>、
            <span class="lable-code">placeholder</span>
            来自定义选择器
        </p>
        <div class="preview">
            <div>
                <Cpt-select v-model="selects" labelColor="#f00" labelBg="#fff" placeholder="请选择">
                    <Cpt-select-option label="选项1" value="1"></Cpt-select-option>
                    <Cpt-select-option label="选项2" value="2"></Cpt-select-option>
                    <Cpt-select-option label="选项3" value="3"></Cpt-select-option>
                </Cpt-select>
            </div>
            <div style="height: 20px;"></div>
            <div>
                <Cpt-select size="large" v-model="multilines" labelColor="#00f" labelBg="#0f0" placeholder="请选择" multiline>
                    <Cpt-select-option label="选项1" value="1"></Cpt-select-option>
                    <Cpt-select-option label="选项2" value="2"></Cpt-select-option>
                    <Cpt-select-option label="选项3" value="3"></Cpt-select-option>
                </Cpt-select>
            </div>
        </div>
        <Code :code="code" />
        <Attribute name="select" />
        <Attribute name="selectoption" />
    </div>
</template>