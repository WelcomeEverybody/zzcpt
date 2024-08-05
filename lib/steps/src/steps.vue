<script lang="ts">
import {defineComponent} from "vue";
export default defineComponent({
    name:"CptSteps",
    props:{
        modelValue:{
            type:Number,
            default:0
        },
        direction:{
            type:String,
            default:'horizontal'
        },
    },
    setup(props,{emit:e}) {
        
        return {
            
        }
    },
})
</script>
<template>
    <div class="steps">
        <slot></slot>
    </div>
</template>

<style scoped>
@import url("../style/style.css");
</style>