/* __placeholder__ */
import { ref } from "vue";
import Code from '../components/code.vue';
import Attribute from '../components/attribute.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const cvs = ref();
const save = (e) => {
    console.log(e);
};
const code = `<template>
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
`;
const code2 = `<template>
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("preview") }, });
    // @ts-ignore
    const __VLS_0 = {}
        .CptCanvassign;
    ({}.CptCanvassign);
    ({}.CptCanvassign);
    __VLS_components.CptCanvassign;
    __VLS_components.CptCanvassign;
    // @ts-ignore
    [CptCanvassign, CptCanvassign,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onSave': {} }, echoImg: (({
            url: 'https://www.chengchuangkeji.com.cn:8080/image/logo.png',
            dx: 50,
            dy: 50
        })), target: ("#content"), ref: ("cvs"), ...{ style: ({}) }, }));
    const __VLS_2 = __VLS_1({ ...{ 'onSave': {} }, echoImg: (({
            url: 'https://www.chengchuangkeji.com.cn:8080/image/logo.png',
            dx: 50,
            dy: 50
        })), target: ("#content"), ref: ("cvs"), ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ...{ 'onSave': {} }, echoImg: (({
            url: 'https://www.chengchuangkeji.com.cn:8080/image/logo.png',
            dx: 50,
            dy: 50
        })), target: ("#content"), ref: ("cvs"), ...{ style: ({}) }, }));
    // @ts-ignore
    (__VLS_ctx.cvs);
    let __VLS_6;
    const __VLS_7 = {
        onSave: (__VLS_ctx.save)
    };
    const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
    let __VLS_3;
    let __VLS_4;
    // @ts-ignore
    [cvs, save,];
    // @ts-ignore
    [Code, Code,];
    // @ts-ignore
    const __VLS_8 = __VLS_asFunctionalComponent(Code, new Code({ code: ((__VLS_ctx.code)), }));
    const __VLS_9 = __VLS_8({ code: ((__VLS_ctx.code)), }, ...__VLS_functionalComponentArgsRest(__VLS_8));
    ({}({ code: ((__VLS_ctx.code)), }));
    const __VLS_12 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(Code, __VLS_9));
    // @ts-ignore
    [code,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("lable-code") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("lable-code") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("preview") }, });
    // @ts-ignore
    const __VLS_13 = {}
        .CptCanvassign;
    ({}.CptCanvassign);
    ({}.CptCanvassign);
    __VLS_components.CptCanvassign;
    __VLS_components.CptCanvassign;
    // @ts-ignore
    [CptCanvassign, CptCanvassign,];
    // @ts-ignore
    const __VLS_14 = __VLS_asFunctionalComponent(__VLS_13, new __VLS_13({ ...{ 'onSave': {} }, target: ("#content"), ref: ("cvs"), ...{ style: ({}) }, }));
    const __VLS_15 = __VLS_14({ ...{ 'onSave': {} }, target: ("#content"), ref: ("cvs"), ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_14));
    ({}({ ...{ 'onSave': {} }, target: ("#content"), ref: ("cvs"), ...{ style: ({}) }, }));
    // @ts-ignore
    (__VLS_ctx.cvs);
    let __VLS_19;
    const __VLS_20 = {
        onSave: (__VLS_ctx.save)
    };
    const __VLS_18 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_13, __VLS_15));
    let __VLS_16;
    let __VLS_17;
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { option: __VLS_thisSlot } = __VLS_nonNullable(__VLS_18.slots);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    __VLS_ctx.cvs.clear();
                    // @ts-ignore
                    [cvs, cvs, save,];
                } }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    __VLS_ctx.cvs.save();
                    // @ts-ignore
                    [cvs,];
                } }, });
    }
    // @ts-ignore
    [Code, Code,];
    // @ts-ignore
    const __VLS_21 = __VLS_asFunctionalComponent(Code, new Code({ code: ((__VLS_ctx.code2)), }));
    const __VLS_22 = __VLS_21({ code: ((__VLS_ctx.code2)), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
    ({}({ code: ((__VLS_ctx.code2)), }));
    const __VLS_25 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(Code, __VLS_22));
    // @ts-ignore
    [code2,];
    // @ts-ignore
    [Attribute,];
    // @ts-ignore
    const __VLS_26 = __VLS_asFunctionalComponent(Attribute, new Attribute({ name: ("canvassign"), }));
    const __VLS_27 = __VLS_26({ name: ("canvassign"), }, ...__VLS_functionalComponentArgsRest(__VLS_26));
    ({}({ name: ("canvassign"), }));
    const __VLS_30 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(Attribute, __VLS_27));
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['preview'];
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
                Code: Code,
                Attribute: Attribute,
                cvs: cvs,
                save: save,
                code: code,
                code2: code2,
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
