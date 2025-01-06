/* __placeholder__ */
import { ref } from "vue";
import Code from '../components/code.vue';
import Attribute from "../components/attribute.vue";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const open = ref(false);
const open1 = ref(false);
const open2 = ref(false);
const open3 = ref(false);
const open4 = ref(false);
const code1 = `<template>
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
`;
const code2 = `<template>
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
`;
// const code3 = 
// `<template>
//     <Cpt-button @click="open = !open">open</Cpt-button>
//     <Cpt-dialog v-model="open" :footShow="false">
//         <div>
//             hello word
//         </div>
//     </Cpt-dialog>
// </template>
// <script lang="ts" setup>
// import {ref} from "vue";
// const open = ref(false);
// <\/script>
// `
const code4 = `<template>
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("preview") }, });
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
            __VLS_ctx.open = !__VLS_ctx.open;
            // @ts-ignore
            [open, open,];
        }
    };
    const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
    let __VLS_3;
    let __VLS_4;
    __VLS_nonNullable(__VLS_5.slots).default;
    // @ts-ignore
    [Code,];
    // @ts-ignore
    const __VLS_8 = __VLS_asFunctionalComponent(Code, new Code({ code: ((__VLS_ctx.code1)), }));
    const __VLS_9 = __VLS_8({ code: ((__VLS_ctx.code1)), }, ...__VLS_functionalComponentArgsRest(__VLS_8));
    ({}({ code: ((__VLS_ctx.code1)), }));
    const __VLS_12 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(Code, __VLS_9));
    // @ts-ignore
    [code1,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("preview") }, });
    // @ts-ignore
    const __VLS_13 = {}
        .CptButton;
    ({}.CptButton);
    ({}.CptButton);
    __VLS_components.CptButton;
    __VLS_components.CptButton;
    // @ts-ignore
    [CptButton, CptButton,];
    // @ts-ignore
    const __VLS_14 = __VLS_asFunctionalComponent(__VLS_13, new __VLS_13({ ...{ 'onClick': {} }, }));
    const __VLS_15 = __VLS_14({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_14));
    ({}({ ...{ 'onClick': {} }, }));
    let __VLS_19;
    const __VLS_20 = {
        onClick: (...[$event]) => {
            __VLS_ctx.open1 = !__VLS_ctx.open1;
            // @ts-ignore
            [open1, open1,];
        }
    };
    const __VLS_18 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_13, __VLS_15));
    let __VLS_16;
    let __VLS_17;
    __VLS_nonNullable(__VLS_18.slots).default;
    // @ts-ignore
    [Code,];
    // @ts-ignore
    const __VLS_21 = __VLS_asFunctionalComponent(Code, new Code({ code: ((__VLS_ctx.code2)), }));
    const __VLS_22 = __VLS_21({ code: ((__VLS_ctx.code2)), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
    ({}({ code: ((__VLS_ctx.code2)), }));
    const __VLS_25 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(Code, __VLS_22));
    // @ts-ignore
    [code2,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("preview") }, });
    // @ts-ignore
    const __VLS_26 = {}
        .CptButton;
    ({}.CptButton);
    ({}.CptButton);
    __VLS_components.CptButton;
    __VLS_components.CptButton;
    // @ts-ignore
    [CptButton, CptButton,];
    // @ts-ignore
    const __VLS_27 = __VLS_asFunctionalComponent(__VLS_26, new __VLS_26({ ...{ 'onClick': {} }, }));
    const __VLS_28 = __VLS_27({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_27));
    ({}({ ...{ 'onClick': {} }, }));
    let __VLS_32;
    const __VLS_33 = {
        onClick: (...[$event]) => {
            __VLS_ctx.open2 = !__VLS_ctx.open2;
            // @ts-ignore
            [open2, open2,];
        }
    };
    const __VLS_31 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_26, __VLS_28));
    let __VLS_29;
    let __VLS_30;
    __VLS_nonNullable(__VLS_31.slots).default;
    // @ts-ignore
    [Code,];
    // @ts-ignore
    const __VLS_34 = __VLS_asFunctionalComponent(Code, new Code({ code: ((__VLS_ctx.code2)), }));
    const __VLS_35 = __VLS_34({ code: ((__VLS_ctx.code2)), }, ...__VLS_functionalComponentArgsRest(__VLS_34));
    ({}({ code: ((__VLS_ctx.code2)), }));
    const __VLS_38 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(Code, __VLS_35));
    // @ts-ignore
    [code2,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("lable-code") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("lable-code") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("m-t-1") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("preview") }, });
    // @ts-ignore
    const __VLS_39 = {}
        .CptButton;
    ({}.CptButton);
    ({}.CptButton);
    __VLS_components.CptButton;
    __VLS_components.CptButton;
    // @ts-ignore
    [CptButton, CptButton,];
    // @ts-ignore
    const __VLS_40 = __VLS_asFunctionalComponent(__VLS_39, new __VLS_39({ ...{ 'onClick': {} }, }));
    const __VLS_41 = __VLS_40({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_40));
    ({}({ ...{ 'onClick': {} }, }));
    let __VLS_45;
    const __VLS_46 = {
        onClick: (...[$event]) => {
            __VLS_ctx.open3 = !__VLS_ctx.open3;
            // @ts-ignore
            [open3, open3,];
        }
    };
    const __VLS_44 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_39, __VLS_41));
    let __VLS_42;
    let __VLS_43;
    __VLS_nonNullable(__VLS_44.slots).default;
    // @ts-ignore
    [Code,];
    // @ts-ignore
    const __VLS_47 = __VLS_asFunctionalComponent(Code, new Code({ code: ((__VLS_ctx.code4)), }));
    const __VLS_48 = __VLS_47({ code: ((__VLS_ctx.code4)), }, ...__VLS_functionalComponentArgsRest(__VLS_47));
    ({}({ code: ((__VLS_ctx.code4)), }));
    const __VLS_51 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(Code, __VLS_48));
    // @ts-ignore
    [code4,];
    // @ts-ignore
    [Attribute,];
    // @ts-ignore
    const __VLS_52 = __VLS_asFunctionalComponent(Attribute, new Attribute({ name: ("dialog"), }));
    const __VLS_53 = __VLS_52({ name: ("dialog"), }, ...__VLS_functionalComponentArgsRest(__VLS_52));
    ({}({ name: ("dialog"), }));
    const __VLS_56 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(Attribute, __VLS_53));
    // @ts-ignore
    const __VLS_57 = {}
        .CptDialog;
    ({}.CptDialog);
    ({}.CptDialog);
    __VLS_components.CptDialog;
    __VLS_components.CptDialog;
    // @ts-ignore
    [CptDialog, CptDialog,];
    // @ts-ignore
    const __VLS_58 = __VLS_asFunctionalComponent(__VLS_57, new __VLS_57({ modelValue: ((__VLS_ctx.open)), }));
    const __VLS_59 = __VLS_58({ modelValue: ((__VLS_ctx.open)), }, ...__VLS_functionalComponentArgsRest(__VLS_58));
    ({}({ modelValue: ((__VLS_ctx.open)), }));
    const __VLS_62 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_57, __VLS_59));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    // @ts-ignore
    [open,];
    __VLS_nonNullable(__VLS_62.slots).default;
    // @ts-ignore
    const __VLS_63 = {}
        .CptDialog;
    ({}.CptDialog);
    ({}.CptDialog);
    __VLS_components.CptDialog;
    __VLS_components.CptDialog;
    // @ts-ignore
    [CptDialog, CptDialog,];
    // @ts-ignore
    const __VLS_64 = __VLS_asFunctionalComponent(__VLS_63, new __VLS_63({ modelValue: ((__VLS_ctx.open1)), headShow: ((false)), }));
    const __VLS_65 = __VLS_64({ modelValue: ((__VLS_ctx.open1)), headShow: ((false)), }, ...__VLS_functionalComponentArgsRest(__VLS_64));
    ({}({ modelValue: ((__VLS_ctx.open1)), headShow: ((false)), }));
    const __VLS_68 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_63, __VLS_65));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    // @ts-ignore
    [open1,];
    __VLS_nonNullable(__VLS_68.slots).default;
    // @ts-ignore
    const __VLS_69 = {}
        .CptDialog;
    ({}.CptDialog);
    ({}.CptDialog);
    __VLS_components.CptDialog;
    __VLS_components.CptDialog;
    // @ts-ignore
    [CptDialog, CptDialog,];
    // @ts-ignore
    const __VLS_70 = __VLS_asFunctionalComponent(__VLS_69, new __VLS_69({ modelValue: ((__VLS_ctx.open2)), footShow: ((false)), }));
    const __VLS_71 = __VLS_70({ modelValue: ((__VLS_ctx.open2)), footShow: ((false)), }, ...__VLS_functionalComponentArgsRest(__VLS_70));
    ({}({ modelValue: ((__VLS_ctx.open2)), footShow: ((false)), }));
    const __VLS_74 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_69, __VLS_71));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    // @ts-ignore
    [open2,];
    __VLS_nonNullable(__VLS_74.slots).default;
    // @ts-ignore
    const __VLS_75 = {}
        .CptDialog;
    ({}.CptDialog);
    ({}.CptDialog);
    __VLS_components.CptDialog;
    __VLS_components.CptDialog;
    // @ts-ignore
    [CptDialog, CptDialog,];
    // @ts-ignore
    const __VLS_76 = __VLS_asFunctionalComponent(__VLS_75, new __VLS_75({ modelValue: ((__VLS_ctx.open3)), }));
    const __VLS_77 = __VLS_76({ modelValue: ((__VLS_ctx.open3)), }, ...__VLS_functionalComponentArgsRest(__VLS_76));
    ({}({ modelValue: ((__VLS_ctx.open3)), }));
    const __VLS_80 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_75, __VLS_77));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    // @ts-ignore
    const __VLS_81 = {}
        .CptButton;
    ({}.CptButton);
    ({}.CptButton);
    __VLS_components.CptButton;
    __VLS_components.CptButton;
    // @ts-ignore
    [CptButton, CptButton,];
    // @ts-ignore
    const __VLS_82 = __VLS_asFunctionalComponent(__VLS_81, new __VLS_81({ ...{ 'onClick': {} }, }));
    const __VLS_83 = __VLS_82({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_82));
    ({}({ ...{ 'onClick': {} }, }));
    let __VLS_87;
    const __VLS_88 = {
        onClick: (...[$event]) => {
            __VLS_ctx.open4 = !__VLS_ctx.open4;
            // @ts-ignore
            [open3, open4, open4,];
        }
    };
    const __VLS_86 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_81, __VLS_83));
    let __VLS_84;
    let __VLS_85;
    __VLS_nonNullable(__VLS_86.slots).default;
    __VLS_nonNullable(__VLS_80.slots).default;
    // @ts-ignore
    const __VLS_89 = {}
        .CptDialog;
    ({}.CptDialog);
    ({}.CptDialog);
    __VLS_components.CptDialog;
    __VLS_components.CptDialog;
    // @ts-ignore
    [CptDialog, CptDialog,];
    // @ts-ignore
    const __VLS_90 = __VLS_asFunctionalComponent(__VLS_89, new __VLS_89({ modelValue: ((__VLS_ctx.open4)), }));
    const __VLS_91 = __VLS_90({ modelValue: ((__VLS_ctx.open4)), }, ...__VLS_functionalComponentArgsRest(__VLS_90));
    ({}({ modelValue: ((__VLS_ctx.open4)), }));
    const __VLS_94 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_89, __VLS_91));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    // @ts-ignore
    [open4,];
    __VLS_nonNullable(__VLS_94.slots).default;
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['preview'];
        __VLS_styleScopedClasses['preview'];
        __VLS_styleScopedClasses['preview'];
        __VLS_styleScopedClasses['lable-code'];
        __VLS_styleScopedClasses['lable-code'];
        __VLS_styleScopedClasses['m-t-1'];
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
                open: open,
                open1: open1,
                open2: open2,
                open3: open3,
                open4: open4,
                code1: code1,
                code2: code2,
                code4: code4,
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
