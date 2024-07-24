<script lang="ts" setup name="menu">
import menuJson from '../data/menu.json';

</script>

<template>
    <div class="menu">
        <div class="item cursor transition" v-for="item in menuJson" :key="item.id">
            <a class="text" :href="item.path">{{ item.name }}</a>
        </div>
    </div>
</template>

<style scoped>
a{
    color: #606266;
    text-decoration: none;
}
.menu{
    padding: 30px 20px;
    box-sizing: border-box;
    width: 250px;
}
.menu .item{
    padding: 10px 0;
    color: #606266;
    font-size: 14px;
}
.menu .item .text:hover{
    color: #409eff;
}
</style>