<script lang="ts" setup>
import {ref} from 'vue'
import Code from '../components/code.vue';
import Attribute from '../components/attribute.vue';
const selects = ref()
const Loading = ref(true)

const code = 
`<template>
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
`
</script>

<template>
    <div>
        <h1>Loading 加载状态</h1>
        <h2>基础用法</h2>
        <div class="preview">
            <div>
                <CptShowText v-loading="true" style="width:300px;">
                    <p style="font-size: 14px;">
                        测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本
                        测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本
                    </p>
                </CptShowText>
            </div>
            <div style="height: 20px;"></div>
            <div>
                <Cpt-button @click="Loading = !Loading">点击切换</Cpt-button>
                <Cpt-select v-loading="Loading" v-model="selects" labelColor="#f00" labelBg="#fff" placeholder="请选择">
                    <Cpt-select-option label="选项1" value="1"></Cpt-select-option>
                    <Cpt-select-option label="选项2" value="2"></Cpt-select-option>
                    <Cpt-select-option label="选项3" value="3"></Cpt-select-option>
                </Cpt-select>
            </div>
        </div>
        <Code :code="code" />
        <Attribute name="loading" />
    </div>
</template>