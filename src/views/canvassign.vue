<script lang="ts" setup>
import {ref} from "vue";
import Code from '../components/code.vue'
import Attribute from '../components/attribute.vue';
const cvs:any = ref();
const save = (e:Object) => {
    console.log(e)
}
const code =
`<template>
    <CptCanvassign 
            :echoImg="{
                url:'https://www.chengchuangkeji.com.cn:8080/image/logo.png',
                dx:50,
                dy:50
            }" 
            target="#content" 
            ref="cvs" 
            style="border: 1px solid #000;" 
            @save="save"
        ></CptCanvassign>
</template>
<script lang="ts" setup>
const save = (e:Object) => {
    console.log(e)
}
<\/script>
`
const code2 =
`<template>
    <CptCanvassign target="#content" ref="cvs" style="border: 1px solid #000;" @save="save">
        <template #option>
            <div>
                <button @click="cvs.clear()">clear</button>
                <button @click="cvs.save()">save</button>
            </div>
        </template>
    </CptCanvassign>
</template>
<script lang="ts" setup>
import {ref} from "vue";
const cvs:any = ref();
const save = (e:Object) => {
    console.log(e)
}
<\/script>
`
</script>

<template>
    <div>
        <h1>Canvassign 签名板</h1>
        <h2>基础用法</h2>
        <p>使用时，必需获取target作用在哪个元素上防止画布定位异常</p>
        <div class="preview">
            <CptCanvassign 
                :echoImg="{
                    url:'https://www.chengchuangkeji.com.cn:8080/image/logo.png',
                    dx:50,
                    dy:50
                }" 
                target="#content" 
                ref="cvs" 
                style="border: 1px solid #000;" 
                @save="save"
            ></CptCanvassign>
        </div>
        <Code :code="code"></Code>
        <h2>自定义操作按钮</h2>
        <p>
            使用ref获取组件实例，调用
            <span class="lable-code">claer</span>和
            <span class="lable-code">save</span>方法
            save返回width,height,dataBase64图片
        </p>
        <div class="preview">
            <CptCanvassign target="#content" ref="cvs" style="border: 1px solid #000;" @save="save">
                <template #option>
                    <div>
                        <button @click="cvs.clear()">clear</button>
                        <button @click="cvs.save()">save</button>
                    </div>
                </template>
            </CptCanvassign>
        </div>
        <Code :code="code2"></Code>
        <Attribute name="canvassign" />
    </div>
</template>

<style scoped>
.box {
    background-color: #fff;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
}
</style>