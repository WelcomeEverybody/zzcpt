<script setup lang="ts">
import {ref} from "vue";
import Code from '../components/code.vue';
import Attribute from '../components/attribute.vue';


const list = ref(50)
setTimeout(() => {
    list.value = 100
}, 3000);

const code = 
`<template>
    <div class="box">
        <Cpt-scrollbar>
                <p v-for="item in 50" :key="item">{{ item }}</p>
        </Cpt-scrollbar>
    </div>
</template>
<style>
.box{
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    height: 200px;
    padding: 10px;
}
</style>
`
</script>

<template>
    <div>
        <h1>Scrollbar 滚动条</h1>
        <h2>滚动条</h2>
        <p>未设置高度时，会获取父节点高度</p>
        <div class="preview">
            <div class="box">
                <Cpt-scrollbar>
                        <p v-for="item in list" :key="item">{{ item }}</p>
                </Cpt-scrollbar>
            </div>
        </div>
        <Code :code="code"></Code>
        <Attribute name="scrollbar" />
    </div>
</template>

<style scoped>
.box{
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    height: 200px;
    padding: 10px;
}
</style>