<script lang="ts" setup>
import {ref} from "vue";
import Code from '../components/code.vue';
import Attribute from "../components/attribute.vue";

const open = ref(false);
const open1 = ref(false);
const open2 = ref(false);
const open3 = ref(false);
const open4 = ref(false)

const code1 = 
`<template>
    <Cpt-button @click="open = !open">open</Cpt-button>
    <Cpt-dialog v-model="open">
        <div>
            hello word
        </div>
    </Cpt-dialog>
</template>
<script lang="ts" setup>
import {ref} from "vue";
const open = ref(false);
<\/script>
`
const code2 = 
`<template>
    <Cpt-button @click="open = !open">open</Cpt-button>
    <Cpt-dialog v-model="open" :headShow="false">
        <div>
            hello word
        </div>
    </Cpt-dialog>
</template>
<script lang="ts" setup>
import {ref} from "vue";
const open = ref(false);
<\/script>
`
const code3 = 
`<template>
    <Cpt-button @click="open = !open">open</Cpt-button>
    <Cpt-dialog v-model="open" :footShow="false">
        <div>
            hello word
        </div>
    </Cpt-dialog>
</template>
<script lang="ts" setup>
import {ref} from "vue";
const open = ref(false);
<\/script>
`
const code4 = 
`<template>
    <Cpt-button @click="open = !open">open</Cpt-button>
    <Cpt-dialog v-model="open1">
        <div>
            hello word
            <Cpt-button @click="open1 = !open1">open</Cpt-button>
        </div>
    </Cpt-dialog>
    <Cpt-dialog v-model="open1">
        <div>
            hello word
        </div>
    </Cpt-dialog>
</template>
<script lang="ts" setup>
import {ref} from "vue";
const open = ref(false);
const open1 = ref(false);
<\/script>
`
</script>

<template>
    <div>
        <h1>Dialog 对话框</h1>
        <p>在保留当前页面状态的情况下，告知用户并承载相关操作。</p>
        <h2>基础用法</h2>
        <p>设计的太丑了，基本上都可以自定义</p>
        <div class="preview">
            <Cpt-button @click="open = !open">open</Cpt-button>
        </div>
        <Code :code="code1" />
        <h2>隐藏头部内容</h2>
        <p>设计的头部太丑了，可以在内容里自定义底部</p>
        <div class="preview">
            <Cpt-button @click="open1 = !open1">open</Cpt-button>
        </div>
        <Code :code="code2" />
        <h2>隐藏底部内容</h2>
        <p>设计的底部太丑了，可以在内容里自定义底部</p>
        <div class="preview">
            <Cpt-button @click="open2 = !open2">open</Cpt-button>
        </div>
        <Code :code="code2" />
        <h2>嵌套对话框</h2>
        <p>
            在Dialog内部，打开新的Dialog，因为使用的时z-index
            <span class="lable-code">teleport to='body'</span>和
            <span class="lable-code">z-index</span>
            实现的
        </p>
        <p class="m-t-1">
            通过简单的方法实现嵌套，下一层dom会覆盖在上一层dom，在理论可以无限叠加，但是dialog下一层出现z-index大于dialog则会被覆盖
        </p>
        <div class="preview">
            <Cpt-button @click="open3 = !open3">open</Cpt-button>
        </div>
        <Code :code="code4" />
        <Attribute name="dialog" />
        <Cpt-dialog v-model="open">
            <div>
                hello word
            </div>
        </Cpt-dialog>
        <Cpt-dialog v-model="open1" :headShow="false">
            <div>
                hello word
            </div>
        </Cpt-dialog>
        <Cpt-dialog v-model="open2" :footShow="false">
            <div>
                hello word
            </div>
        </Cpt-dialog>
        <Cpt-dialog v-model="open3">
            <div>
                hello word
                <Cpt-button @click="open4 = !open4">open</Cpt-button>
            </div>
        </Cpt-dialog>
        <Cpt-dialog v-model="open4">
            <div>
                hello word
            </div>
        </Cpt-dialog>
    </div>
</template>