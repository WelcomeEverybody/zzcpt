/* __placeholder__ */
import { ref } from 'vue';
import Attribute from '../components/attribute.vue';
import Code from '../components/code.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const selects = ref();
const multilines = ref();
const code = `<template>
    <Cpt-select 
        v-model="selects" 
        labelColor="#f00" 
        labelBg="#fff" 
        placeholder="请选择"
    >
        <Cpt-select-option label="选项1" value="1"></Cpt-select-option>
        <Cpt-select-option label="选项2" value="2"></Cpt-select-option>
        <Cpt-select-option label="选项3" value="3"></Cpt-select-option>
    </Cpt-select>
    <Cpt-select 
        size="large" 
        v-model="multilines" 
        labelColor="#00f" 
        labelBg="#0f0" 
        placeholder="请选择" 
        multiline
    >
        <Cpt-select-option label="选项1" value="1"></Cpt-select-option>
        <Cpt-select-option label="选项2" value="2"></Cpt-select-option>
        <Cpt-select-option label="选项3" value="3"></Cpt-select-option>
    </Cpt-select>
</template>
<script lang="ts" setup>
import {ref} from 'vue'

const selects = ref()
const multilines = ref()
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("preview") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    // @ts-ignore
    const __VLS_0 = {}
        .CptSelect;
    ({}.CptSelect);
    ({}.CptSelect);
    __VLS_components.CptSelect;
    __VLS_components.CptSelect;
    // @ts-ignore
    [CptSelect, CptSelect,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ modelValue: ((__VLS_ctx.selects)), labelColor: ("#f00"), labelBg: ("#fff"), placeholder: ("请选择"), }));
    const __VLS_2 = __VLS_1({ modelValue: ((__VLS_ctx.selects)), labelColor: ("#f00"), labelBg: ("#fff"), placeholder: ("请选择"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ modelValue: ((__VLS_ctx.selects)), labelColor: ("#f00"), labelBg: ("#fff"), placeholder: ("请选择"), }));
    const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
    // @ts-ignore
    const __VLS_6 = {}
        .CptSelectOption;
    ({}.CptSelectOption);
    ({}.CptSelectOption);
    __VLS_components.CptSelectOption;
    __VLS_components.CptSelectOption;
    // @ts-ignore
    [CptSelectOption, CptSelectOption,];
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ label: ("选项1"), value: ("1"), }));
    const __VLS_8 = __VLS_7({ label: ("选项1"), value: ("1"), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({ label: ("选项1"), value: ("1"), }));
    const __VLS_11 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8));
    // @ts-ignore
    [selects,];
    // @ts-ignore
    const __VLS_12 = {}
        .CptSelectOption;
    ({}.CptSelectOption);
    ({}.CptSelectOption);
    __VLS_components.CptSelectOption;
    __VLS_components.CptSelectOption;
    // @ts-ignore
    [CptSelectOption, CptSelectOption,];
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ label: ("选项2"), value: ("2"), }));
    const __VLS_14 = __VLS_13({ label: ("选项2"), value: ("2"), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    ({}({ label: ("选项2"), value: ("2"), }));
    const __VLS_17 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14));
    // @ts-ignore
    const __VLS_18 = {}
        .CptSelectOption;
    ({}.CptSelectOption);
    ({}.CptSelectOption);
    __VLS_components.CptSelectOption;
    __VLS_components.CptSelectOption;
    // @ts-ignore
    [CptSelectOption, CptSelectOption,];
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ label: ("选项3"), value: ("3"), }));
    const __VLS_20 = __VLS_19({ label: ("选项3"), value: ("3"), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    ({}({ label: ("选项3"), value: ("3"), }));
    const __VLS_23 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20));
    __VLS_nonNullable(__VLS_5.slots).default;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ style: ({}) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    // @ts-ignore
    const __VLS_24 = {}
        .CptSelect;
    ({}.CptSelect);
    ({}.CptSelect);
    __VLS_components.CptSelect;
    __VLS_components.CptSelect;
    // @ts-ignore
    [CptSelect, CptSelect,];
    // @ts-ignore
    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ size: ("large"), modelValue: ((__VLS_ctx.multilines)), labelColor: ("#00f"), labelBg: ("#0f0"), placeholder: ("请选择"), multiline: (true), }));
    const __VLS_26 = __VLS_25({ size: ("large"), modelValue: ((__VLS_ctx.multilines)), labelColor: ("#00f"), labelBg: ("#0f0"), placeholder: ("请选择"), multiline: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_25));
    ({}({ size: ("large"), modelValue: ((__VLS_ctx.multilines)), labelColor: ("#00f"), labelBg: ("#0f0"), placeholder: ("请选择"), multiline: (true), }));
    const __VLS_29 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_24, __VLS_26));
    for (const [item] of __VLS_getVForSourceType((1000))) {
        // @ts-ignore
        const __VLS_30 = {}
            .CptSelectOption;
        ({}.CptSelectOption);
        ({}.CptSelectOption);
        __VLS_components.CptSelectOption;
        __VLS_components.CptSelectOption;
        // @ts-ignore
        [CptSelectOption, CptSelectOption,];
        // @ts-ignore
        const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ key: ((item)), label: (('选项' + item)), value: ((item)), }));
        const __VLS_32 = __VLS_31({ key: ((item)), label: (('选项' + item)), value: ((item)), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
        ({}({ key: ((item)), label: (('选项' + item)), value: ((item)), }));
        const __VLS_35 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32));
        // @ts-ignore
        [multilines,];
    }
    __VLS_nonNullable(__VLS_29.slots).default;
    // @ts-ignore
    [Code,];
    // @ts-ignore
    const __VLS_36 = __VLS_asFunctionalComponent(Code, new Code({ code: ((__VLS_ctx.code)), }));
    const __VLS_37 = __VLS_36({ code: ((__VLS_ctx.code)), }, ...__VLS_functionalComponentArgsRest(__VLS_36));
    ({}({ code: ((__VLS_ctx.code)), }));
    const __VLS_40 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(Code, __VLS_37));
    // @ts-ignore
    [code,];
    // @ts-ignore
    [Attribute,];
    // @ts-ignore
    const __VLS_41 = __VLS_asFunctionalComponent(Attribute, new Attribute({ name: ("select"), }));
    const __VLS_42 = __VLS_41({ name: ("select"), }, ...__VLS_functionalComponentArgsRest(__VLS_41));
    ({}({ name: ("select"), }));
    const __VLS_45 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(Attribute, __VLS_42));
    // @ts-ignore
    [Attribute,];
    // @ts-ignore
    const __VLS_46 = __VLS_asFunctionalComponent(Attribute, new Attribute({ name: ("selectoption"), }));
    const __VLS_47 = __VLS_46({ name: ("selectoption"), }, ...__VLS_functionalComponentArgsRest(__VLS_46));
    ({}({ name: ("selectoption"), }));
    const __VLS_50 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(Attribute, __VLS_47));
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['lable-code'];
        __VLS_styleScopedClasses['lable-code'];
        __VLS_styleScopedClasses['lable-code'];
        __VLS_styleScopedClasses['lable-code'];
        __VLS_styleScopedClasses['lable-code'];
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
                Attribute: Attribute,
                Code: Code,
                selects: selects,
                multilines: multilines,
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
