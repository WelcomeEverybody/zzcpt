/* __placeholder__ */
import { ref } from "vue";
import Code from '../components/code.vue';
import Attribute from '../components/attribute.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const slider = ref(15);
const slider2 = ref(10);
const slider3 = ref(20);
const slider4 = ref(20);
const slider5 = ref([20, 40]);
const code1 = `<template>
    <Cpt-slider v-model="slider"></Cpt-slider>
</template>
<script lang="ts" setup>
import {ref} from "vue";
const slider = ref(15);
<\/script>
`;
const code2 = `<template>
    <Cpt-slider reverse v-model="slider"></Cpt-slider>
</template>
<script lang="ts" setup>
import {ref} from "vue";
const slider = ref(10);
<\/script>
`;
const code3 = `<template>
    <Cpt-slider :min="20" :max="60" v-model="slider"></Cpt-slider>
</template>
<script lang="ts" setup>
import {ref} from "vue";
const slider = ref(20);
<\/script>
`;
const code4 = `<template>
    <Cpt-slider :step="20" showStops v-model="slider"></Cpt-slider>
</template>
<script lang="ts" setup>
import {ref} from "vue";
const slider = ref(20);
<\/script>
`;
const code5 = `<template>
    <Cpt-slider range v-model="slider"></Cpt-slider>
</template>
<script lang="ts" setup>
import {ref} frref([20,40]);
<\/script>
`;
const __VLS_fnComponent = (await import('vue')).defineComponent({});
;
let __VLS_functionalComponentProps;
function __VLS_template() {
    let __VLS_ctx;
    /* Components */
    let __VLS_otherComponents;
    let __VLS_own;
    let __VLS_localComponents;
    let __VLS_components;
    let __VLS_styleScopedClasses;
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("preview") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (__VLS_ctx.slider);
    // @ts-ignore
    [slider,];
    // @ts-ignore
    const __VLS_0 = {}
        .CptSlider;
    ({}.CptSlider);
    ({}.CptSlider);
    __VLS_components.CptSlider;
    __VLS_components.CptSlider;
    // @ts-ignore
    [CptSlider, CptSlider,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ modelValue: ((__VLS_ctx.slider)), }));
    const __VLS_2 = __VLS_1({ modelValue: ((__VLS_ctx.slider)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ modelValue: ((__VLS_ctx.slider)), }));
    const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
    // @ts-ignore
    [slider,];
    // @ts-ignore
    [Code,];
    // @ts-ignore
    const __VLS_6 = __VLS_asFunctionalComponent(Code, new Code({ code: ((__VLS_ctx.code1)), }));
    const __VLS_7 = __VLS_6({ code: ((__VLS_ctx.code1)), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
    ({}({ code: ((__VLS_ctx.code1)), }));
    const __VLS_10 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(Code, __VLS_7));
    // @ts-ignore
    [code1,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("preview") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (__VLS_ctx.slider2);
    // @ts-ignore
    [slider2,];
    // @ts-ignore
    const __VLS_11 = {}
        .CptSlider;
    ({}.CptSlider);
    ({}.CptSlider);
    __VLS_components.CptSlider;
    __VLS_components.CptSlider;
    // @ts-ignore
    [CptSlider, CptSlider,];
    // @ts-ignore
    const __VLS_12 = __VLS_asFunctionalComponent(__VLS_11, new __VLS_11({ reverse: (true), modelValue: ((__VLS_ctx.slider2)), }));
    const __VLS_13 = __VLS_12({ reverse: (true), modelValue: ((__VLS_ctx.slider2)), }, ...__VLS_functionalComponentArgsRest(__VLS_12));
    ({}({ reverse: (true), modelValue: ((__VLS_ctx.slider2)), }));
    const __VLS_16 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_11, __VLS_13));
    // @ts-ignore
    [slider2,];
    // @ts-ignore
    [Code,];
    // @ts-ignore
    const __VLS_17 = __VLS_asFunctionalComponent(Code, new Code({ code: ((__VLS_ctx.code2)), }));
    const __VLS_18 = __VLS_17({ code: ((__VLS_ctx.code2)), }, ...__VLS_functionalComponentArgsRest(__VLS_17));
    ({}({ code: ((__VLS_ctx.code2)), }));
    const __VLS_21 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(Code, __VLS_18));
    // @ts-ignore
    [code2,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("preview") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (__VLS_ctx.slider3);
    // @ts-ignore
    [slider3,];
    // @ts-ignore
    const __VLS_22 = {}
        .CptSlider;
    ({}.CptSlider);
    ({}.CptSlider);
    __VLS_components.CptSlider;
    __VLS_components.CptSlider;
    // @ts-ignore
    [CptSlider, CptSlider,];
    // @ts-ignore
    const __VLS_23 = __VLS_asFunctionalComponent(__VLS_22, new __VLS_22({ min: ((20)), max: ((60)), modelValue: ((__VLS_ctx.slider3)), }));
    const __VLS_24 = __VLS_23({ min: ((20)), max: ((60)), modelValue: ((__VLS_ctx.slider3)), }, ...__VLS_functionalComponentArgsRest(__VLS_23));
    ({}({ min: ((20)), max: ((60)), modelValue: ((__VLS_ctx.slider3)), }));
    const __VLS_27 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_22, __VLS_24));
    // @ts-ignore
    [slider3,];
    // @ts-ignore
    [Code,];
    // @ts-ignore
    const __VLS_28 = __VLS_asFunctionalComponent(Code, new Code({ code: ((__VLS_ctx.code3)), }));
    const __VLS_29 = __VLS_28({ code: ((__VLS_ctx.code3)), }, ...__VLS_functionalComponentArgsRest(__VLS_28));
    ({}({ code: ((__VLS_ctx.code3)), }));
    const __VLS_32 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(Code, __VLS_29));
    // @ts-ignore
    [code3,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("preview") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (__VLS_ctx.slider4);
    // @ts-ignore
    [slider4,];
    // @ts-ignore
    const __VLS_33 = {}
        .CptSlider;
    ({}.CptSlider);
    ({}.CptSlider);
    __VLS_components.CptSlider;
    __VLS_components.CptSlider;
    // @ts-ignore
    [CptSlider, CptSlider,];
    // @ts-ignore
    const __VLS_34 = __VLS_asFunctionalComponent(__VLS_33, new __VLS_33({ step: ((20)), showStops: (true), modelValue: ((__VLS_ctx.slider4)), }));
    const __VLS_35 = __VLS_34({ step: ((20)), showStops: (true), modelValue: ((__VLS_ctx.slider4)), }, ...__VLS_functionalComponentArgsRest(__VLS_34));
    ({}({ step: ((20)), showStops: (true), modelValue: ((__VLS_ctx.slider4)), }));
    const __VLS_38 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_33, __VLS_35));
    // @ts-ignore
    [slider4,];
    // @ts-ignore
    [Code,];
    // @ts-ignore
    const __VLS_39 = __VLS_asFunctionalComponent(Code, new Code({ code: ((__VLS_ctx.code4)), }));
    const __VLS_40 = __VLS_39({ code: ((__VLS_ctx.code4)), }, ...__VLS_functionalComponentArgsRest(__VLS_39));
    ({}({ code: ((__VLS_ctx.code4)), }));
    const __VLS_43 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(Code, __VLS_40));
    // @ts-ignore
    [code4,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("preview") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (__VLS_ctx.slider5);
    // @ts-ignore
    [slider5,];
    // @ts-ignore
    const __VLS_44 = {}
        .CptSlider;
    ({}.CptSlider);
    ({}.CptSlider);
    __VLS_components.CptSlider;
    __VLS_components.CptSlider;
    // @ts-ignore
    [CptSlider, CptSlider,];
    // @ts-ignore
    const __VLS_45 = __VLS_asFunctionalComponent(__VLS_44, new __VLS_44({ range: (true), modelValue: ((__VLS_ctx.slider5)), }));
    const __VLS_46 = __VLS_45({ range: (true), modelValue: ((__VLS_ctx.slider5)), }, ...__VLS_functionalComponentArgsRest(__VLS_45));
    ({}({ range: (true), modelValue: ((__VLS_ctx.slider5)), }));
    const __VLS_49 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_44, __VLS_46));
    // @ts-ignore
    [slider5,];
    // @ts-ignore
    [Code,];
    // @ts-ignore
    const __VLS_50 = __VLS_asFunctionalComponent(Code, new Code({ code: ((__VLS_ctx.code5)), }));
    const __VLS_51 = __VLS_50({ code: ((__VLS_ctx.code5)), }, ...__VLS_functionalComponentArgsRest(__VLS_50));
    ({}({ code: ((__VLS_ctx.code5)), }));
    const __VLS_54 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(Code, __VLS_51));
    // @ts-ignore
    [code5,];
    // @ts-ignore
    [Attribute,];
    // @ts-ignore
    const __VLS_55 = __VLS_asFunctionalComponent(Attribute, new Attribute({ name: ("slider"), }));
    const __VLS_56 = __VLS_55({ name: ("slider"), }, ...__VLS_functionalComponentArgsRest(__VLS_55));
    ({}({ name: ("slider"), }));
    const __VLS_59 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(Attribute, __VLS_56));
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['preview'];
        __VLS_styleScopedClasses['preview'];
        __VLS_styleScopedClasses['preview'];
        __VLS_styleScopedClasses['preview'];
        __VLS_styleScopedClasses['preview'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                Code: Code,
                Attribute: Attribute,
                slider: slider,
                slider2: slider2,
                slider3: slider3,
                slider4: slider4,
                slider5: slider5,
                code1: code1,
                code2: code2,
                code3: code3,
                code4: code4,
                code5: code5,
            };
        },
    });
}
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
