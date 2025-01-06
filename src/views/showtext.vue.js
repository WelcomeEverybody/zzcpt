/* __placeholder__ */
import Code from '../components/code.vue';
import Attribute from '../components/attribute.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const code = `<CptShowText style="width:300px;">
    <p style="font-size: 14px;">
        测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本
        测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本
    </p>
</CptShowText>
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
    const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ style: ({}) }, });
    __VLS_nonNullable(__VLS_5.slots).default;
    // @ts-ignore
    [Code,];
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
    const __VLS_11 = __VLS_asFunctionalComponent(Attribute, new Attribute({ name: ("showtext"), }));
    const __VLS_12 = __VLS_11({ name: ("showtext"), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
    ({}({ name: ("showtext"), }));
    const __VLS_15 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(Attribute, __VLS_12));
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
