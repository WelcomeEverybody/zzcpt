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
pre {
    overflow: hidden !important;
  
}
</style>