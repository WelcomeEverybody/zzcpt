<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CptShowText',
  props:{line:{type:String,default:3}},
  setup(props) {
    const changeCSS = () => {
      const str = `-webkit-line-clamp: ${props.line}`;
      return str;
    }
    return {
      changeCSS
    };
  },
})
</script>

<template>
  <div class="cpt-show-text">
    <input id="input" type="checkbox" />
    <div id="content" :style="changeCSS()">
      <label class="btn" for="input"></label>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
@import url("../css/style.css");
</style>