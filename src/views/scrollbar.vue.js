/* __placeholder__ */
import { ref } from "vue";
import Code from '../components/code.vue';
import Attribute from '../components/attribute.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const list = ref(50);
setTimeout(() => {
    list.value = 100;
}, 3000);
const code = `<template>
    <div class="box">
        <Cpt-scrollbar>
                <p v-for="item in 50" :key="item">{{ item }}</p>
        </Cpt-scrollbar>
    </div>
</template>
<style>
.box{
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    height: 200px;
    padding: 10px;
}
</style>
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("box") }, });
    // @ts-ignore
    const __VLS_0 = {}
        .CptScrollbar;
    ({}.CptScrollbar);
    ({}.CptScrollbar);
    __VLS_components.CptScrollbar;
    __VLS_components.CptScrollbar;
    // @ts-ignore
    [CptScrollbar, CptScrollbar,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({}));
    const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
    for (const [item] of __VLS_getVForSourceType((__VLS_ctx.list))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ key: ((item)), });
        (item);
        // @ts-ignore
        [list,];
    }
    __VLS_nonNullable(__VLS_5.slots).default;
    // @ts-ignore
    [Code, Code,];
    // @ts-ignore
    const __VLS_6 = __VLS_asFunctionalComponent(Code, new Code({ code: ((__VLS_ctx.code)), }));
    const __VLS_7 = __VLS_6({ code: ((__VLS_ctx.code)), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
    ({}({ code: ((__VLS_ctx.code)), }));
    const __VLS_10 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(Code, __VLS_7));
    // @ts-ignore
    [code,];
    // @ts-ignore
    [Attribute,];
    // @ts-ignore
    const __VLS_11 = __VLS_asFunctionalComponent(Attribute, new Attribute({ name: ("scrollbar"), }));
    const __VLS_12 = __VLS_11({ name: ("scrollbar"), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
    ({}({ name: ("scrollbar"), }));
    const __VLS_15 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(Attribute, __VLS_12));
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['preview'];
        __VLS_styleScopedClasses['box'];
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
                list: list,
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
