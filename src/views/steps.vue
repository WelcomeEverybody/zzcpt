<script lang="ts" setup>
import {ref} from "vue";

const step = ref(2)
</script>
<template>
    <div>
        <h1>Steps 步骤条</h1>
        <p>引导用户按流程完成任务的组件</p>
        <h2>基础用法</h2>
        <div class="preview">
            <CptSteps v-model="step">
                <CptStep>我是第一步</CptStep>
                <CptStep>我是xxxxxxxxxxxxx</CptStep>
                <CptStep>我是第三步</CptStep>
            </CptSteps>
        </div>
    </div>
</template>
<style scoped>
</style>