<script name="code" lang="ts" setup>
import { onMounted,ref } from 'vue';
import Prism from 'prismjs';
const props = defineProps({
    code:{
        type:String,
        default:''
    }
})
onMounted(() => {
    Prism.highlightAll();
})
const show = ref(false)
</script>

<template>
    <pre v-show="show"><code class="language-html line-numbers">{{ props.code }}</code></pre>
    <p>
        <Cpt-button @click="show = !show" style="width: 100%;">
            {{ show ? '隐藏代码' : '显示代码' }}
        </Cpt-button>
    </p>
</template>
<style scoped>
pre code{ 
    display: inline-block;
    padding-bottom: 20px;
    position: relative;
    top: 20px;
}
pre code::before {
    content: "";
    position: absolute;
    background: red;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    top: 10px;
    left: 15px;
    transform: translate(-50%);
}
pre code::after {
    content: "";
    position: absolute;
    background: sandybrown;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    top: 10px;
    left: 30px;
    transform: translate(-50%);
}
pre code:first-child::after{
        content: "";
        position: absolute;
        background: limegreen;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        top: -26px;
        left: -15px;
        transform: translate(-50%);
}
pre {
    overflow: hidden !important;
  
}
</style>