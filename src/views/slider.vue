<script lang="ts" setup>
import {ref} from "vue";
import Code from '../components/code.vue'
import Attribute from '../components/attribute.vue'

const slider = ref(15);
const slider2 = ref(10);
const slider3 = ref(20);
const slider4 = ref(20);
const slider5 = ref([20,40]);

const code1 =
`<template>
    <Cpt-slider v-model="slider"></Cpt-slider>
</template>
<script lang="ts" setup>
import {ref} from "vue";
const slider = ref(15);
<\/script>
`
const code2 =
`<template>
    <Cpt-slider reverse v-model="slider"></Cpt-slider>
</template>
<script lang="ts" setup>
import {ref} from "vue";
const slider = ref(10);
<\/script>
`
const code3 =
`<template>
    <Cpt-slider :min="20" :max="60" v-model="slider"></Cpt-slider>
</template>
<script lang="ts" setup>
import {ref} from "vue";
const slider = ref(20);
<\/script>
`
const code4 =
`<template>
    <Cpt-slider :step="20" showStops v-model="slider"></Cpt-slider>
</template>
<script lang="ts" setup>
import {ref} from "vue";
const slider = ref(20);
<\/script>
`
const code5 =
`<template>
    <Cpt-slider range v-model="slider"></Cpt-slider>
</template>
<script lang="ts" setup>
import {ref} frref([20,40]);
<\/script>
`
</script>

<template>
    <div>
        <h1>滑动输入条 Slider</h1>
        <p>常用的滑动输入条</p>
        <h2>基础用法</h2>
        <div class="preview">
            <p>num：{{ slider }}</p>
            <Cpt-slider v-model="slider"></Cpt-slider>
        </div>
        <Code :code="code1" />
        <h2>反向滑动条</h2>
        <div class="preview">
            <p>{{ slider2 }}</p>
            <Cpt-slider reverse v-model="slider2"></Cpt-slider>
        </div>
        <Code :code="code2" />
        <h2>最大值和最小值</h2>
        <p>使用最大值或最小值时必须大于或小于设定的值</p>
        <div class="preview">
            <p>最大值：60</p>
            <p>最小值：20</p>
            <p>num：{{ slider3 }}</p>
            <Cpt-slider :min="20" :max="60" v-model="slider3"></Cpt-slider>
        </div>
        <Code :code="code3" />
        <h2>使用步长</h2>
        <div class="preview">
            <p>步长：20</p>
            <p>num：{{ slider4 }}</p>
            <Cpt-slider :step="20" showStops v-model="slider4"></Cpt-slider>
        </div>
        <Code :code="code4" />
        <h2>双滑块</h2>
        <div class="preview">
            <p>num：{{ slider5 }}</p>
            <Cpt-slider range v-model="slider5"></Cpt-slider>
        </div>
        <Code :code="code5" />
        <Attribute name="slider" />
    </div>
</template>