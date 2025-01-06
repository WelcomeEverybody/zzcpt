/* __placeholder__ */
import Attribute from '../components/attribute.vue';
import Code from '../components/code.vue';
import { ref } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const todoList = ref([
    {
        date: '2024-7-11',
        list: [
            { type: 'danger', content: 'This is danger event.' },
            { type: 'success', content: 'This is danger event.' },
        ]
    },
    {
        date: '2024-7-15',
        list: [
            { type: 'danger', content: 'This is danger event.12333333333333333' },
            { type: 'danger', content: 'This is danger event.12333333333333333' },
            { type: 'danger', content: 'This is danger event.12333333333333333' },
            { type: 'danger', content: 'This is danger event.' },
            { type: 'danger', content: 'This is danger event.' },
            { type: 'danger', content: 'This is danger event.' },
            { type: 'danger', content: 'This is danger event.' },
        ]
    },
]);
const fullscreen = ref(false);
const fullscreens = ref(false);
const selects = ref(["2024-7-11", "2024-8-15"]);
const code = `<template>
    <CptButton @click="fullscreen = true">放大</CptButton>
    <div>
        <Cpt-calendar 
            :colorType="{success:'#67C23A',danger:'#000'}" 
            v-model:fullscreen="fullscreen" 
            :todoList="todoList" 
            type="card"
        ></Cpt-calendar>
    </div>

    <CptButton @click="fullscreens = true">放大</CptButton>
    <Cpt-calendar 
        v-model="selects"
        v-model:fullscreen="fullscreens" 
        type="default"
    ></Cpt-calendar>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
const todoList = ref([
    { 
      date:'2024-7-11',
      list:[
        { type: 'danger', content: 'This is danger event.' },
        { type: 'success', content: 'This is danger event.' },
      ]
    },
    { 
      date:'2024-7-15',
      list:[
        { type: 'danger', content: 'This is danger event.12333333333333333' },
        { type: 'danger', content: 'This is danger event.' },
      ]
    },
])
const selects = ref(["2024-7-11","2024-8-15"])
const fullscreen = ref(false)
const fullscreens = ref(false)
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
    // CSS variable injection 
    // CSS variable injection end 
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("preview flex") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ style: ({}) }, });
    // @ts-ignore
    const __VLS_0 = {}
        .CptButton;
    ({}.CptButton);
    ({}.CptButton);
    __VLS_components.CptButton;
    __VLS_components.CptButton;
    // @ts-ignore
    [CptButton, CptButton,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onClick': {} }, }));
    const __VLS_2 = __VLS_1({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ...{ 'onClick': {} }, }));
    let __VLS_6;
    const __VLS_7 = {
        onClick: (...[$event]) => {
            __VLS_ctx.fullscreen = true;
            // @ts-ignore
            [fullscreen,];
        }
    };
    const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
    let __VLS_3;
    let __VLS_4;
    __VLS_nonNullable(__VLS_5.slots).default;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    // @ts-ignore
    const __VLS_8 = {}
        .CptCalendar;
    ({}.CptCalendar);
    ({}.CptCalendar);
    __VLS_components.CptCalendar;
    __VLS_components.CptCalendar;
    // @ts-ignore
    [CptCalendar, CptCalendar,];
    // @ts-ignore
    const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({ colorType: (({ success: '#67C23A', danger: '#000' })), fullscreen: ((__VLS_ctx.fullscreen)), todoList: ((__VLS_ctx.todoList)), type: ("card"), }));
    const __VLS_10 = __VLS_9({ colorType: (({ success: '#67C23A', danger: '#000' })), fullscreen: ((__VLS_ctx.fullscreen)), todoList: ((__VLS_ctx.todoList)), type: ("card"), }, ...__VLS_functionalComponentArgsRest(__VLS_9));
    ({}({ colorType: (({ success: '#67C23A', danger: '#000' })), fullscreen: ((__VLS_ctx.fullscreen)), todoList: ((__VLS_ctx.todoList)), type: ("card"), }));
    const __VLS_13 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_8, __VLS_10));
    // @ts-ignore
    [fullscreen, todoList,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ style: ({}) }, });
    // @ts-ignore
    const __VLS_14 = {}
        .CptButton;
    ({}.CptButton);
    ({}.CptButton);
    __VLS_components.CptButton;
    __VLS_components.CptButton;
    // @ts-ignore
    [CptButton, CptButton,];
    // @ts-ignore
    const __VLS_15 = __VLS_asFunctionalComponent(__VLS_14, new __VLS_14({ ...{ 'onClick': {} }, }));
    const __VLS_16 = __VLS_15({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_15));
    ({}({ ...{ 'onClick': {} }, }));
    let __VLS_20;
    const __VLS_21 = {
        onClick: (...[$event]) => {
            __VLS_ctx.fullscreens = true;
            // @ts-ignore
            [fullscreens,];
        }
    };
    const __VLS_19 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_14, __VLS_16));
    let __VLS_17;
    let __VLS_18;
    __VLS_nonNullable(__VLS_19.slots).default;
    // @ts-ignore
    const __VLS_22 = {}
        .CptCalendar;
    ({}.CptCalendar);
    ({}.CptCalendar);
    __VLS_components.CptCalendar;
    __VLS_components.CptCalendar;
    // @ts-ignore
    [CptCalendar, CptCalendar,];
    // @ts-ignore
    const __VLS_23 = __VLS_asFunctionalComponent(__VLS_22, new __VLS_22({ modelValue: ((__VLS_ctx.selects)), fullscreen: ((__VLS_ctx.fullscreens)), type: ("default"), }));
    const __VLS_24 = __VLS_23({ modelValue: ((__VLS_ctx.selects)), fullscreen: ((__VLS_ctx.fullscreens)), type: ("default"), }, ...__VLS_functionalComponentArgsRest(__VLS_23));
    ({}({ modelValue: ((__VLS_ctx.selects)), fullscreen: ((__VLS_ctx.fullscreens)), type: ("default"), }));
    const __VLS_27 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_22, __VLS_24));
    // @ts-ignore
    [fullscreens, selects,];
    // @ts-ignore
    [Code,];
    // @ts-ignore
    const __VLS_28 = __VLS_asFunctionalComponent(Code, new Code({ code: ((__VLS_ctx.code)), }));
    const __VLS_29 = __VLS_28({ code: ((__VLS_ctx.code)), }, ...__VLS_functionalComponentArgsRest(__VLS_28));
    ({}({ code: ((__VLS_ctx.code)), }));
    const __VLS_32 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(Code, __VLS_29));
    // @ts-ignore
    [code,];
    // @ts-ignore
    [Attribute,];
    // @ts-ignore
    const __VLS_33 = __VLS_asFunctionalComponent(Attribute, new Attribute({ name: ("calendar"), }));
    const __VLS_34 = __VLS_33({ name: ("calendar"), }, ...__VLS_functionalComponentArgsRest(__VLS_33));
    ({}({ name: ("calendar"), }));
    const __VLS_37 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(Attribute, __VLS_34));
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['lable-code'];
        __VLS_styleScopedClasses['lable-code'];
        __VLS_styleScopedClasses['lable-code'];
        __VLS_styleScopedClasses['lable-code'];
        __VLS_styleScopedClasses['preview'];
        __VLS_styleScopedClasses['flex'];
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
                todoList: todoList,
                fullscreen: fullscreen,
                fullscreens: fullscreens,
                selects: selects,
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
