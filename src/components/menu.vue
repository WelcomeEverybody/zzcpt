<script lang="ts" setup name="menu">
import {ref} from "vue"
import { useRouter } from 'vue-router';
import menuJson from '../data/menu.json';

// 根据group分组数据
const menu = JSON.parse(JSON.stringify(menuJson));
var menus:any = []
function group() {
    const index = 'group';
    const cloneData:any = [];
    for(let key of Object.keys(menu)){
        const item:any= menu[key];
        const group = item[index];
        if(group){
            if(!cloneData[group]){
                cloneData[group] = {name:group, children:[]};
            }
            cloneData[group].children.push(item);
        }
    }
    for(let key of Object.keys(cloneData)){
        menus.push(cloneData[key]);
    }
}
group();

const router = ref(useRouter().currentRoute.value.fullPath.replace(/\//g, ''));
useRouter().beforeEach(to => {
    router.value = to.fullPath.replace(/\//g, '');
})
</script>

<template>
    <div class="menu">
        <div class="logo">
            <router-link to="/">我是LOGO</router-link>
        </div>
        <div class="content">
            <Cpt-scrollbar>
                <div 
                    class="item cursor transition" 
                    v-for="(item,index) in menus" 
                    :key="index"
                >   
                    <p class="title">{{ item.name }}</p>
                    <div>
                        <router-link v-for="items in item.children" :key="items.id" class="text" :class="[router == items.type ? 'active' : '']" :to="items.path">{{ items.name }}</router-link>
                    </div>
                </div>
            </Cpt-scrollbar>
        </div>
    </div>
</template>

<style scoped>
a{
    color: #606266;
    text-decoration: none;
    display: block;
}
.logo{
    font-size: 20px;
    text-align: center;
    margin-bottom: 20px;
    height: 50px;
}
.menu{
    padding: 30px 20px;
    box-sizing: border-box;
    width: 290px;
    box-shadow: 3px 0px 12px 0 rgba(0,0,0,.1);
    height: 100vh;
    padding-right: 0;
}
.menu .content{
    height: calc(100vh - 130px);
}
.menu .item{
    color: #606266;
    font-size: 14px;
}
.menu .item .text{
    height: 100%;
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
.menu .title{
    font-size: 20px;
    margin: 10px 0;
    cursor: auto;
    font-weight: bold;
}
</style>