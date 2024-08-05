<script lang="ts">
import {defineComponent,getCurrentInstance,onMounted} from "vue";
export default defineComponent({
    name:"CptStep",
    setup() {
        const instance:any = getCurrentInstance();
        const value = instance.ctx.$parent.modelValue;
        var childrens:any = '';
        // var index = 0
        onMounted(() => {
            childrens = instance?.ctx.$parent.$el.children;
        })
        function setStyle() {
            // const obj:any = {
            //     0:['stepStyle'],
            //     1:['stepStyle1']
            // }
        }
        return {
            setStyle,
            value,childrens
            
        }
    },
})
</script>
<template>
    <span class="step">
        <slot></slot>
    </span>
</template>
<style scoped>
@import url("../style/style.css");
</style>