<script lang="ts">
import { defineComponent } from 'vue';
import { CptCheckboxGroupProps } from "./attribute"
export default defineComponent({
  name:"CptCheckboxGroup",
  props:CptCheckboxGroupProps,
})
</script>

<template>
  <div class="cpt-checkbox-group">
    <slot></slot>
  </div>
</template>

<style scoped>
@import "../style/style.css";
</style>