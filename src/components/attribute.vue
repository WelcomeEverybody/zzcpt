<script name="attribute" lang="ts" setup>
import attributeData from "../data/attribute"
const props = defineProps({
    name:{type:String,default:''},
})
const data = attributeData[props.name]
</script>
<template>
    <div>
        <h2>{{ props.name }} API</h2>
        <h3>{{ props.name }} 属性</h3>
        <table class="table">
            <thead class="thead">
                <tr>
                    <th>参数</th>
                    <th>说明</th>
                    <th>类型</th>
                    <th>默认值</th>
                </tr>
            </thead>
            <tbody class="tbody">
                <tr v-for="(item,index) in data" :key="index">
                    <td>{{ item.a }}</td>
                    <td>{{ item.b }}</td>
                    <td :title="item.c.alert">{{ item.c.name?item.c.name:item.c }}</td>
                    <td>{{ item.d }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<style scoped>
.table{
    width: 100%;
    border-collapse: collapse;
}
.table .thead tr th {
    text-align: left;
}
.table .thead tr th{
    padding: 10px 0;
}
.table .tbody tr td{
    color: #303133;
    padding: 10px 0;
    border-bottom: 1px solid #cccccc;
}
</style>