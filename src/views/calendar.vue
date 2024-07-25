<script lang="ts" setup>
import Attribute from '../components/attribute.vue'
import Code from '../components/code.vue'
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
const fullscreen = ref(false)
const fullscreens = ref(false)
const selects = ref(["2024-7-11","2024-8-15"])

const code =
`<template>
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
`

</script>

<template>
    <div>
        <h1>Calendar 日历</h1>
        <p>常用的操作日历</p>
        <h2>基础用法</h2>
        <p>使用
            <span class="lable-code">fullscreen</span>、
            <span class="lable-code">type</span>、
            <span class="lable-code">todoList</span>、
            <span class="lable-code">colorType</span>、
            来自定义日历
        </p>
        <div class="preview flex">
            <div style="width: 45%;">
                <CptButton @click="fullscreen = true">放大</CptButton>
                <div>
                    <Cpt-calendar 
                        :colorType="{success:'#67C23A',danger:'#000'}" 
                        v-model:fullscreen="fullscreen" 
                        :todoList="todoList" 
                        type="card"
                    ></Cpt-calendar>
                </div>
            </div>
            <div style="width: 45%;">
                <CptButton @click="fullscreens = true">放大</CptButton>
                <Cpt-calendar 
                    v-model="selects"
                    v-model:fullscreen="fullscreens" 
                    type="default"
                ></Cpt-calendar>
            </div>
        </div>
        <Code :code="code"/>
        <Attribute name="calendar" />
    </div>
</template>
<style scoped>
.preview{
    justify-content: space-between;
}
</style>