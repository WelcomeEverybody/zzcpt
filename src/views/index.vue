<script lang="ts" setup>
import Menu from '../components/menu.vue';
</script>

<template>
  <div class="flex">
    <Menu />
    <div class="content">
      <router-view />
    </div>
  </div>
</template>
<style scoped>
.content{
  width: 100%;
  height: 100vh;
  padding: 30px 20px 20px 20px;
  box-sizing: border-box;
  overflow-y: auto;
}
</style>