<script lang="ts" setup>
import {ref} from 'vue'
import Code from '../components/code.vue'
import Attribute from '../components/attribute.vue';

const checkBoxIs = ref(2)
const checkBoxSelect = ref(['1','2'])
const code =
`<template>
    <cpt-checkbox title="check1" v-model="checkBoxIs" name="1"></cpt-checkbox>
    <cpt-checkbox title="check2" v-model="checkBoxIs" name="2"></cpt-checkbox>
    <cpt-checkbox title="check3" v-model="checkBoxIs" name="3"></cpt-checkbox>

    <cpt-checkbox-group v-model="checkBoxSelect" >
        <cpt-checkbox type="checkbox" title="check1" name="1"></cpt-checkbox>
        <cpt-checkbox type="checkbox" title="check2" name="2"></cpt-checkbox>
        <cpt-checkbox type="checkbox" title="check3" name="3"></cpt-checkbox>
        <cpt-checkbox type="checkbox" title="check4" name="4"></cpt-checkbox>
    </cpt-checkbox-group>
</template>
<script lang="ts" setup>
import {ref} from 'vue'
import {CptCheckbox,CptCheckboxGroup} from '../lib/component/index'
const checkBoxIs = ref(2)
const checkBoxSelect = ref(['1','2'])
<\/script>
`
</script>

<template>
    <div>
        <h1>Checkbox 复选框</h1>
        <p>常用的复选框</p>
        <h2>基础用法</h2>
        <div class="preview">
            <cpt-checkbox title="check1" v-model="checkBoxIs" name="1"></cpt-checkbox>
            <cpt-checkbox title="check2" v-model="checkBoxIs" name="2"></cpt-checkbox>
            <cpt-checkbox title="check3" v-model="checkBoxIs" name="3"></cpt-checkbox>
            <div style="height: 20px"></div>
            <cpt-checkbox-group v-model="checkBoxSelect" >
                <cpt-checkbox type="checkbox" title="check1" name="1"></cpt-checkbox>
                <cpt-checkbox type="checkbox" title="check2" name="2"></cpt-checkbox>
                <cpt-checkbox type="checkbox" title="check3" name="3"></cpt-checkbox>
                <cpt-checkbox type="checkbox" title="check4" name="4"></cpt-checkbox>
            </cpt-checkbox-group>
        </div>
        <Code :code="code" />
        <Attribute name="checkbox" />
        <Attribute name="checkbox-group" />
    </div>
</template>