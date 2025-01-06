/* __placeholder__ */
import { ref } from 'vue';
import Code from '../components/code.vue';
import Attribute from '../components/attribute.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const selects = ref();
const Loading = ref(true);
const code = `<template>
    <Cpt-button @click="Loading1 = !Loading1">点击切换</Cpt-button>
    <CptShowText v-loading="Loading" style="width:300px;">
        <p style="font-size: 14px;">
            测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本
            测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本
        </p>
    </CptShowText>
</template>
<script lang="ts" setup>
import {ref} from 'vue'
const Loading = ref(true)
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("preview") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    // @ts-ignore
    const __VLS_0 = {}
        .CptShowText;
    ({}.CptShowText);
    ({}.CptShowText);
    __VLS_components.CptShowText;
    __VLS_components.CptShowText;
    // @ts-ignore
    [CptShowText, CptShowText,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ style: ({}) }, }));
    const __VLS_2 = __VLS_1({ ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ...{ style: ({}) }, }));
    __VLS_directiveFunction(__VLS_ctx.vLoading)((true));
    const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ style: ({}) }, });
    // @ts-ignore
    [vLoading,];
    __VLS_nonNullable(__VLS_5.slots).default;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ style: ({}) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    // @ts-ignore
    const __VLS_6 = {}
        .CptButton;
    ({}.CptButton);
    ({}.CptButton);
    __VLS_components.CptButton;
    __VLS_components.CptButton;
    // @ts-ignore
    [CptButton, CptButton,];
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ ...{ 'onClick': {} }, }));
    const __VLS_8 = __VLS_7({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({ ...{ 'onClick': {} }, }));
    let __VLS_12;
    const __VLS_13 = {
        onClick: (...[$event]) => {
            __VLS_ctx.Loading = !__VLS_ctx.Loading;
            // @ts-ignore
            [Loading, Loading,];
        }
    };
    const __VLS_11 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8));
    let __VLS_9;
    let __VLS_10;
    __VLS_nonNullable(__VLS_11.slots).default;
    // @ts-ignore
    const __VLS_14 = {}
        .CptSelect;
    ({}.CptSelect);
    ({}.CptSelect);
    __VLS_components.CptSelect;
    __VLS_components.CptSelect;
    // @ts-ignore
    [CptSelect, CptSelect,];
    // @ts-ignore
    const __VLS_15 = __VLS_asFunctionalComponent(__VLS_14, new __VLS_14({ modelValue: ((__VLS_ctx.selects)), labelColor: ("#f00"), labelBg: ("#fff"), placeholder: ("请选择"), }));
    const __VLS_16 = __VLS_15({ modelValue: ((__VLS_ctx.selects)), labelColor: ("#f00"), labelBg: ("#fff"), placeholder: ("请选择"), }, ...__VLS_functionalComponentArgsRest(__VLS_15));
    ({}({ modelValue: ((__VLS_ctx.selects)), labelColor: ("#f00"), labelBg: ("#fff"), placeholder: ("请选择"), }));
    __VLS_directiveFunction(__VLS_ctx.vLoading)((__VLS_ctx.Loading));
    const __VLS_19 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_14, __VLS_16));
    // @ts-ignore
    const __VLS_20 = {}
        .CptSelectOption;
    ({}.CptSelectOption);
    ({}.CptSelectOption);
    __VLS_components.CptSelectOption;
    __VLS_components.CptSelectOption;
    // @ts-ignore
    [CptSelectOption, CptSelectOption,];
    // @ts-ignore
    const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ label: ("选项1"), value: ("1"), }));
    const __VLS_22 = __VLS_21({ label: ("选项1"), value: ("1"), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
    ({}({ label: ("选项1"), value: ("1"), }));
    const __VLS_25 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22));
    // @ts-ignore
    [vLoading, Loading, selects,];
    // @ts-ignore
    const __VLS_26 = {}
        .CptSelectOption;
    ({}.CptSelectOption);
    ({}.CptSelectOption);
    __VLS_components.CptSelectOption;
    __VLS_components.CptSelectOption;
    // @ts-ignore
    [CptSelectOption, CptSelectOption,];
    // @ts-ignore
    const __VLS_27 = __VLS_asFunctionalComponent(__VLS_26, new __VLS_26({ label: ("选项2"), value: ("2"), }));
    const __VLS_28 = __VLS_27({ label: ("选项2"), value: ("2"), }, ...__VLS_functionalComponentArgsRest(__VLS_27));
    ({}({ label: ("选项2"), value: ("2"), }));
    const __VLS_31 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_26, __VLS_28));
    // @ts-ignore
    const __VLS_32 = {}
        .CptSelectOption;
    ({}.CptSelectOption);
    ({}.CptSelectOption);
    __VLS_components.CptSelectOption;
    __VLS_components.CptSelectOption;
    // @ts-ignore
    [CptSelectOption, CptSelectOption,];
    // @ts-ignore
    const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({ label: ("选项3"), value: ("3"), }));
    const __VLS_34 = __VLS_33({ label: ("选项3"), value: ("3"), }, ...__VLS_functionalComponentArgsRest(__VLS_33));
    ({}({ label: ("选项3"), value: ("3"), }));
    const __VLS_37 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_32, __VLS_34));
    __VLS_nonNullable(__VLS_19.slots).default;
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
    const __VLS_43 = __VLS_asFunctionalComponent(Attribute, new Attribute({ name: ("loading"), }));
    const __VLS_44 = __VLS_43({ name: ("loading"), }, ...__VLS_functionalComponentArgsRest(__VLS_43));
    ({}({ name: ("loading"), }));
    const __VLS_47 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(Attribute, __VLS_44));
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
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
                selects: selects,
                Loading: Loading,
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
