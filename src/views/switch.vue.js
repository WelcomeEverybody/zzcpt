/* __placeholder__ */
import { ref } from 'vue';
import Attribute from "../components/attribute.vue";
import Code from "../components/code.vue";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const switch1 = ref(false);
const switch2 = ref(false);
const switch3 = ref(true);
const switch4 = ref(true);
const switch5 = ref(true);
const code = `<template>
    <Cpt-switch v-model="switch1"></Cpt-switch>
    <Cpt-switch v-model="switch2" activeBg="#f00" closeBg="#0f0"></Cpt-switch>
    <Cpt-switch disabled></Cpt-switch>
    <Cpt-button @click="switch4 = !switch4">开/关</Cpt-button><Cpt-switch v-model="switch5" :loading="switch4"></Cpt-switch>
    <Cpt-switch v-model="switch3" checked="自定义文字开" unChecked="关"></Cpt-switch>
</template>
<script lang="ts" setup>
const switch1 = ref(false)
const switch2 = ref(false)
const switch3 = ref(true)
const switch4 = ref(true)
const switch5 = ref(true) 
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("lable-code") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("lable-code") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("lable-code") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("lable-code") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("lable-code") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("lable-code") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("preview") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    // @ts-ignore
    const __VLS_0 = {}
        .CptSwitch;
    ({}.CptSwitch);
    ({}.CptSwitch);
    __VLS_components.CptSwitch;
    __VLS_components.CptSwitch;
    // @ts-ignore
    [CptSwitch, CptSwitch,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ modelValue: ((__VLS_ctx.switch1)), }));
    const __VLS_2 = __VLS_1({ modelValue: ((__VLS_ctx.switch1)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ modelValue: ((__VLS_ctx.switch1)), }));
    const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
    // @ts-ignore
    [switch1,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("m-t-1") }, });
    // @ts-ignore
    const __VLS_6 = {}
        .CptSwitch;
    ({}.CptSwitch);
    ({}.CptSwitch);
    __VLS_components.CptSwitch;
    __VLS_components.CptSwitch;
    // @ts-ignore
    [CptSwitch, CptSwitch,];
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ modelValue: ((__VLS_ctx.switch2)), activeBg: ("#f00"), closeBg: ("#0f0"), }));
    const __VLS_8 = __VLS_7({ modelValue: ((__VLS_ctx.switch2)), activeBg: ("#f00"), closeBg: ("#0f0"), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({ modelValue: ((__VLS_ctx.switch2)), activeBg: ("#f00"), closeBg: ("#0f0"), }));
    const __VLS_11 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8));
    // @ts-ignore
    [switch2,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("m-t-1") }, });
    // @ts-ignore
    const __VLS_12 = {}
        .CptSwitch;
    ({}.CptSwitch);
    ({}.CptSwitch);
    __VLS_components.CptSwitch;
    __VLS_components.CptSwitch;
    // @ts-ignore
    [CptSwitch, CptSwitch,];
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ disabled: (true), }));
    const __VLS_14 = __VLS_13({ disabled: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    ({}({ disabled: (true), }));
    const __VLS_17 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("m-t-1") }, });
    // @ts-ignore
    const __VLS_18 = {}
        .CptButton;
    ({}.CptButton);
    ({}.CptButton);
    __VLS_components.CptButton;
    __VLS_components.CptButton;
    // @ts-ignore
    [CptButton, CptButton,];
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ ...{ 'onClick': {} }, }));
    const __VLS_20 = __VLS_19({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    ({}({ ...{ 'onClick': {} }, }));
    let __VLS_24;
    const __VLS_25 = {
        onClick: (...[$event]) => {
            __VLS_ctx.switch4 = !__VLS_ctx.switch4;
            // @ts-ignore
            [switch4, switch4,];
        }
    };
    const __VLS_23 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20));
    let __VLS_21;
    let __VLS_22;
    __VLS_nonNullable(__VLS_23.slots).default;
    // @ts-ignore
    const __VLS_26 = {}
        .CptSwitch;
    ({}.CptSwitch);
    ({}.CptSwitch);
    __VLS_components.CptSwitch;
    __VLS_components.CptSwitch;
    // @ts-ignore
    [CptSwitch, CptSwitch,];
    // @ts-ignore
    const __VLS_27 = __VLS_asFunctionalComponent(__VLS_26, new __VLS_26({ modelValue: ((__VLS_ctx.switch5)), loading: ((__VLS_ctx.switch4)), }));
    const __VLS_28 = __VLS_27({ modelValue: ((__VLS_ctx.switch5)), loading: ((__VLS_ctx.switch4)), }, ...__VLS_functionalComponentArgsRest(__VLS_27));
    ({}({ modelValue: ((__VLS_ctx.switch5)), loading: ((__VLS_ctx.switch4)), }));
    const __VLS_31 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_26, __VLS_28));
    // @ts-ignore
    [switch4, switch5,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("m-t-1") }, });
    // @ts-ignore
    const __VLS_32 = {}
        .CptSwitch;
    ({}.CptSwitch);
    ({}.CptSwitch);
    __VLS_components.CptSwitch;
    __VLS_components.CptSwitch;
    // @ts-ignore
    [CptSwitch, CptSwitch,];
    // @ts-ignore
    const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({ modelValue: ((__VLS_ctx.switch3)), checked: ("自定义文字开"), unChecked: ("关"), }));
    const __VLS_34 = __VLS_33({ modelValue: ((__VLS_ctx.switch3)), checked: ("自定义文字开"), unChecked: ("关"), }, ...__VLS_functionalComponentArgsRest(__VLS_33));
    ({}({ modelValue: ((__VLS_ctx.switch3)), checked: ("自定义文字开"), unChecked: ("关"), }));
    const __VLS_37 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_32, __VLS_34));
    // @ts-ignore
    [switch3,];
    // @ts-ignore
    [Code,];
    // @ts-ignore
    const __VLS_38 = __VLS_asFunctionalComponent(Code, new Code({ code: ((__VLS_ctx.code)), }));
    const __VLS_39 = __VLS_38({ code: ((__VLS_ctx.code)), }, ...__VLS_functionalComponentArgsRest(__VLS_38));
    ({}({ code: ((__VLS_ctx.code)), }));
    const __VLS_42 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(Code, __VLS_39));
    // @ts-ignore
    [code,];
    // @ts-ignore
    [Attribute,];
    // @ts-ignore
    const __VLS_43 = __VLS_asFunctionalComponent(Attribute, new Attribute({ name: ("switch"), }));
    const __VLS_44 = __VLS_43({ name: ("switch"), }, ...__VLS_functionalComponentArgsRest(__VLS_43));
    ({}({ name: ("switch"), }));
    const __VLS_47 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(Attribute, __VLS_44));
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['lable-code'];
        __VLS_styleScopedClasses['lable-code'];
        __VLS_styleScopedClasses['lable-code'];
        __VLS_styleScopedClasses['lable-code'];
        __VLS_styleScopedClasses['lable-code'];
        __VLS_styleScopedClasses['lable-code'];
        __VLS_styleScopedClasses['preview'];
        __VLS_styleScopedClasses['m-t-1'];
        __VLS_styleScopedClasses['m-t-1'];
        __VLS_styleScopedClasses['m-t-1'];
        __VLS_styleScopedClasses['m-t-1'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                Attribute: Attribute,
                Code: Code,
                switch1: switch1,
                switch2: switch2,
                switch3: switch3,
                switch4: switch4,
                switch5: switch5,
                code: code,
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
