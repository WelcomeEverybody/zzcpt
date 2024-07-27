<script setup lang="ts">

</script>

<template>
    <Cpt-scrollbar height="300px" class="box">
        <p v-for="item in 100" :key="item">{{ item }}</p>
    </Cpt-scrollbar>
</template>

<style scoped>
.box{
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
}
</style>