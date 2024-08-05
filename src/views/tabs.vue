<script lang="ts" setup>
import { ref } from "vue";

const tab = ref('tab1')
const data = ref(['tab1', 'tab2', 'tab3'])
setTimeout(() => {
    let num = 10;
    for (let i = 0; i < num; i++) {
        data.value.push('tab' + (i + 4))
    }
}, 2000);
const remove = (item) => {
    console.log(item)
}
</script>
<template>
    <h1>Tabs 标签页</h1>
    <p>基础用法</p>
    <div class="preview">
        <Cpt-tabs v-model="tab" @remove="remove">
            <Cpt-tab-pane 
                v-for="(item, index) in data" 
                :key="index" 
                :label="item"
            >{{ item }}</Cpt-tab-pane>
        </Cpt-tabs>
    </div>
    <p>卡片标签页</p>
    <div class="preview">
        <Cpt-tabs v-model="tab" type="card">
            <Cpt-tab-pane 
                v-for="(item, index) in data" 
                :key="index" 
                :label="item"
            >{{ item }}</Cpt-tab-pane>
        </Cpt-tabs>
    </div>
</template>