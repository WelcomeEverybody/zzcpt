/* __placeholder__ */
import Code from '../components/code.vue';
import Attribute from '../components/attribute.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const code = ` <Cpt-dropdown text="Hover me" title="Hover me" trigger='hover' btnType='primary'>
    <Cpt-button type="primary">Hover me</Cpt-button>
    <Cpt-button type="primary">Hover me</Cpt-button>
    <Cpt-button type="primary">Hover me</Cpt-button>
</Cpt-dropdown>
<Cpt-dropdown text="Click me" trigger='click' btnType='primary'>
    <Cpt-button type="primary">Click me</Cpt-button>
    <Cpt-button type="primary">Click me</Cpt-button>
    <Cpt-button type="primary">Click me</Cpt-button>
</Cpt-dropdown>
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("preview flex") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("p-r-1") }, });
    // @ts-ignore
    const __VLS_0 = {}
        .CptDropdown;
    ({}.CptDropdown);
    ({}.CptDropdown);
    __VLS_components.CptDropdown;
    __VLS_components.CptDropdown;
    // @ts-ignore
    [CptDropdown, CptDropdown,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ text: ("Hover me"), title: ("Hover me"), trigger: ('hover'), btnType: ('primary'), }));
    const __VLS_2 = __VLS_1({ text: ("Hover me"), title: ("Hover me"), trigger: ('hover'), btnType: ('primary'), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ text: ("Hover me"), title: ("Hover me"), trigger: ('hover'), btnType: ('primary'), }));
    const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
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
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ type: ("primary"), }));
    const __VLS_8 = __VLS_7({ type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({ type: ("primary"), }));
    const __VLS_11 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8));
    __VLS_nonNullable(__VLS_11.slots).default;
    // @ts-ignore
    const __VLS_12 = {}
        .CptButton;
    ({}.CptButton);
    ({}.CptButton);
    __VLS_components.CptButton;
    __VLS_components.CptButton;
    // @ts-ignore
    [CptButton, CptButton,];
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ type: ("primary"), }));
    const __VLS_14 = __VLS_13({ type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    ({}({ type: ("primary"), }));
    const __VLS_17 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14));
    __VLS_nonNullable(__VLS_17.slots).default;
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
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ type: ("primary"), }));
    const __VLS_20 = __VLS_19({ type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    ({}({ type: ("primary"), }));
    const __VLS_23 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20));
    __VLS_nonNullable(__VLS_23.slots).default;
    __VLS_nonNullable(__VLS_5.slots).default;
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    // @ts-ignore
    const __VLS_24 = {}
        .CptDropdown;
    ({}.CptDropdown);
    ({}.CptDropdown);
    __VLS_components.CptDropdown;
    __VLS_components.CptDropdown;
    // @ts-ignore
    [CptDropdown, CptDropdown,];
    // @ts-ignore
    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ text: ("Click me"), trigger: ('click'), btnType: ('primary'), }));
    const __VLS_26 = __VLS_25({ text: ("Click me"), trigger: ('click'), btnType: ('primary'), }, ...__VLS_functionalComponentArgsRest(__VLS_25));
    ({}({ text: ("Click me"), trigger: ('click'), btnType: ('primary'), }));
    const __VLS_29 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_24, __VLS_26));
    // @ts-ignore
    const __VLS_30 = {}
        .CptButton;
    ({}.CptButton);
    ({}.CptButton);
    __VLS_components.CptButton;
    __VLS_components.CptButton;
    // @ts-ignore
    [CptButton, CptButton,];
    // @ts-ignore
    const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ type: ("primary"), }));
    const __VLS_32 = __VLS_31({ type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
    ({}({ type: ("primary"), }));
    const __VLS_35 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32));
    __VLS_nonNullable(__VLS_35.slots).default;
    // @ts-ignore
    const __VLS_36 = {}
        .CptButton;
    ({}.CptButton);
    ({}.CptButton);
    __VLS_components.CptButton;
    __VLS_components.CptButton;
    // @ts-ignore
    [CptButton, CptButton,];
    // @ts-ignore
    const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({ type: ("primary"), }));
    const __VLS_38 = __VLS_37({ type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_37));
    ({}({ type: ("primary"), }));
    const __VLS_41 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38));
    __VLS_nonNullable(__VLS_41.slots).default;
    // @ts-ignore
    const __VLS_42 = {}
        .CptButton;
    ({}.CptButton);
    ({}.CptButton);
    __VLS_components.CptButton;
    __VLS_components.CptButton;
    // @ts-ignore
    [CptButton, CptButton,];
    // @ts-ignore
    const __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({ type: ("primary"), }));
    const __VLS_44 = __VLS_43({ type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_43));
    ({}({ type: ("primary"), }));
    const __VLS_47 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_42, __VLS_44));
    __VLS_nonNullable(__VLS_47.slots).default;
    __VLS_nonNullable(__VLS_29.slots).default;
    // @ts-ignore
    [Code,];
    // @ts-ignore
    const __VLS_48 = __VLS_asFunctionalComponent(Code, new Code({ code: ((__VLS_ctx.code)), }));
    const __VLS_49 = __VLS_48({ code: ((__VLS_ctx.code)), }, ...__VLS_functionalComponentArgsRest(__VLS_48));
    ({}({ code: ((__VLS_ctx.code)), }));
    const __VLS_52 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(Code, __VLS_49));
    // @ts-ignore
    [code,];
    // @ts-ignore
    [Attribute,];
    // @ts-ignore
    const __VLS_53 = __VLS_asFunctionalComponent(Attribute, new Attribute({ name: ("dropdown"), }));
    const __VLS_54 = __VLS_53({ name: ("dropdown"), }, ...__VLS_functionalComponentArgsRest(__VLS_53));
    ({}({ name: ("dropdown"), }));
    const __VLS_57 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(Attribute, __VLS_54));
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['lable-code'];
        __VLS_styleScopedClasses['lable-code'];
        __VLS_styleScopedClasses['lable-code'];
        __VLS_styleScopedClasses['preview'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['p-r-1'];
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
