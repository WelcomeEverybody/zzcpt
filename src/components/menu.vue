<script lang="ts" setup name="menu">
import {ref} from "vue"
import { useRouter } from 'vue-router';
import menuJson from '../data/menu.json';
const router = ref(useRouter().currentRoute.value.fullPath.replace(/\//g, ''));
useRouter().beforeEach(to => {
    router.value = to.fullPath.replace(/\//g, '');
})
</script>

<template>
    <div class="menu">
        <div 
            class="item cursor transition" 
            v-for="item in menuJson" 
            :key="item.id"
        >
            <router-link class="text" :class="[router == item.type ? 'active' : '']" :to="item.path">{{ item.name }}</router-link>
        </div>
    </div>
</template>

<style scoped>
a{
    color: #606266;
    text-decoration: none;
    display: block;
}
.menu{
    padding: 30px 20px;
    box-sizing: border-box;
    width: 290px;
    box-shadow: 3px 0px 12px 0 rgba(0,0,0,.1);
}
.menu .item{
    color: #606266;
    font-size: 14px;
}
.menu .item .text{
    height: 100%;
    width: 100%;
    padding: 10px;
}
.menu .item .text:hover{
    color: #409eff;
}
.menu .active{
    border-radius: 10px;
    color: #ffffff !important;
    background-color: #409eff;
}
</style>