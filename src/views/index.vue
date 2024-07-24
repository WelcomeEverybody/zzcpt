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
}
</style>