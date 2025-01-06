/* __placeholder__ */
import Attribute from '../components/attribute.vue';
import Code from '../components/code.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const code = `<template>
    <div>
        <p v-for="item in 50" :key="item">{{ item }}</p>
        <CptBackTop :top="200" target="#content"></CptBackTop>
    </div>
</template>
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
    for (const [item] of __VLS_getVForSourceType((50))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ key: ((item)), });
        (item);
    }
    // @ts-ignore
    const __VLS_0 = {}
        .CptBackTop;
    ({}.CptBackTop);
    ({}.CptBackTop);
    __VLS_components.CptBackTop;
    __VLS_components.CptBackTop;
    // @ts-ignore
    [CptBackTop, CptBackTop,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ top: ((200)), target: ("#content"), }));
    const __VLS_2 = __VLS_1({ top: ((200)), target: ("#content"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ top: ((200)), target: ("#content"), }));
    const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
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
    [Attribute, Attribute,];
    // @ts-ignore
    const __VLS_11 = __VLS_asFunctionalComponent(Attribute, new Attribute({ name: ("backtop"), }));
    const __VLS_12 = __VLS_11({ name: ("backtop"), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
    ({}({ name: ("backtop"), }));
    const __VLS_15 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(Attribute, __VLS_12));
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
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
