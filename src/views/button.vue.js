/* __placeholder__ */
import Attribute from '../components/attribute.vue';
import Code from '../components/code.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const code = `<div>
    <Cpt-button type="primary">主要按钮</Cpt-button>
    <Cpt-button type="warning">主要按钮</Cpt-button>
    <Cpt-button>主要按钮</Cpt-button>
    <Cpt-button type="success">主要按钮</Cpt-button>
    <Cpt-button type="text">主要按钮</Cpt-button>
</div>
<div>
    <Cpt-button type="primary" size="large">主要按钮</Cpt-button>
    <Cpt-button type="primary">主要按钮</Cpt-button>
    <Cpt-button type="primary" size="small">主要按钮</Cpt-button>
</div>
<div>
    <Cpt-button type="primary" shape="circle">卐</Cpt-button>
    <Cpt-button type="primary">主要按钮</Cpt-button>
    <Cpt-button type="primary" shape="round">主要按钮</Cpt-button>
</div>
<div>
    <Cpt-button type="primary" loading>1</Cpt-button>
    <Cpt-button type="primary" disabled>主要按钮</Cpt-button>
</div>
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("p-r-1") }, });
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
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ type: ("primary"), }));
    const __VLS_2 = __VLS_1({ type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ type: ("primary"), }));
    const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
    __VLS_nonNullable(__VLS_5.slots).default;
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("p-r-1") }, });
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
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ type: ("warning"), }));
    const __VLS_8 = __VLS_7({ type: ("warning"), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({ type: ("warning"), }));
    const __VLS_11 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8));
    __VLS_nonNullable(__VLS_11.slots).default;
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("p-r-1") }, });
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
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({}));
    const __VLS_14 = __VLS_13({}, ...__VLS_functionalComponentArgsRest(__VLS_13));
    ({}({}));
    const __VLS_17 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14));
    __VLS_nonNullable(__VLS_17.slots).default;
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("p-r-1") }, });
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
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ type: ("success"), }));
    const __VLS_20 = __VLS_19({ type: ("success"), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    ({}({ type: ("success"), }));
    const __VLS_23 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20));
    __VLS_nonNullable(__VLS_23.slots).default;
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("p-r-1") }, });
    // @ts-ignore
    const __VLS_24 = {}
        .CptButton;
    ({}.CptButton);
    ({}.CptButton);
    __VLS_components.CptButton;
    __VLS_components.CptButton;
    // @ts-ignore
    [CptButton, CptButton,];
    // @ts-ignore
    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ type: ("text"), }));
    const __VLS_26 = __VLS_25({ type: ("text"), }, ...__VLS_functionalComponentArgsRest(__VLS_25));
    ({}({ type: ("text"), }));
    const __VLS_29 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_24, __VLS_26));
    __VLS_nonNullable(__VLS_29.slots).default;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("m-t-1") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("p-r-1") }, });
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
    const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ type: ("primary"), size: ("large"), }));
    const __VLS_32 = __VLS_31({ type: ("primary"), size: ("large"), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
    ({}({ type: ("primary"), size: ("large"), }));
    const __VLS_35 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32));
    __VLS_nonNullable(__VLS_35.slots).default;
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("p-r-1") }, });
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("p-r-1") }, });
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
    const __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({ type: ("primary"), size: ("small"), }));
    const __VLS_44 = __VLS_43({ type: ("primary"), size: ("small"), }, ...__VLS_functionalComponentArgsRest(__VLS_43));
    ({}({ type: ("primary"), size: ("small"), }));
    const __VLS_47 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_42, __VLS_44));
    __VLS_nonNullable(__VLS_47.slots).default;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("m-t-1") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("p-r-1") }, });
    // @ts-ignore
    const __VLS_48 = {}
        .CptButton;
    ({}.CptButton);
    ({}.CptButton);
    __VLS_components.CptButton;
    __VLS_components.CptButton;
    // @ts-ignore
    [CptButton, CptButton,];
    // @ts-ignore
    const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({ type: ("primary"), shape: ("circle"), }));
    const __VLS_50 = __VLS_49({ type: ("primary"), shape: ("circle"), }, ...__VLS_functionalComponentArgsRest(__VLS_49));
    ({}({ type: ("primary"), shape: ("circle"), }));
    const __VLS_53 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_48, __VLS_50));
    __VLS_nonNullable(__VLS_53.slots).default;
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("p-r-1") }, });
    // @ts-ignore
    const __VLS_54 = {}
        .CptButton;
    ({}.CptButton);
    ({}.CptButton);
    __VLS_components.CptButton;
    __VLS_components.CptButton;
    // @ts-ignore
    [CptButton, CptButton,];
    // @ts-ignore
    const __VLS_55 = __VLS_asFunctionalComponent(__VLS_54, new __VLS_54({ type: ("primary"), }));
    const __VLS_56 = __VLS_55({ type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_55));
    ({}({ type: ("primary"), }));
    const __VLS_59 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_54, __VLS_56));
    __VLS_nonNullable(__VLS_59.slots).default;
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("p-r-1") }, });
    // @ts-ignore
    const __VLS_60 = {}
        .CptButton;
    ({}.CptButton);
    ({}.CptButton);
    __VLS_components.CptButton;
    __VLS_components.CptButton;
    // @ts-ignore
    [CptButton, CptButton,];
    // @ts-ignore
    const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({ type: ("primary"), shape: ("round"), }));
    const __VLS_62 = __VLS_61({ type: ("primary"), shape: ("round"), }, ...__VLS_functionalComponentArgsRest(__VLS_61));
    ({}({ type: ("primary"), shape: ("round"), }));
    const __VLS_65 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_60, __VLS_62));
    __VLS_nonNullable(__VLS_65.slots).default;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("m-t-1") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("p-r-1") }, });
    // @ts-ignore
    const __VLS_66 = {}
        .CptButton;
    ({}.CptButton);
    ({}.CptButton);
    __VLS_components.CptButton;
    __VLS_components.CptButton;
    // @ts-ignore
    [CptButton, CptButton,];
    // @ts-ignore
    const __VLS_67 = __VLS_asFunctionalComponent(__VLS_66, new __VLS_66({ type: ("primary"), loading: (true), }));
    const __VLS_68 = __VLS_67({ type: ("primary"), loading: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_67));
    ({}({ type: ("primary"), loading: (true), }));
    const __VLS_71 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_66, __VLS_68));
    __VLS_nonNullable(__VLS_71.slots).default;
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("p-r-1") }, });
    // @ts-ignore
    const __VLS_72 = {}
        .CptButton;
    ({}.CptButton);
    ({}.CptButton);
    __VLS_components.CptButton;
    __VLS_components.CptButton;
    // @ts-ignore
    [CptButton, CptButton,];
    // @ts-ignore
    const __VLS_73 = __VLS_asFunctionalComponent(__VLS_72, new __VLS_72({ type: ("primary"), disabled: (true), }));
    const __VLS_74 = __VLS_73({ type: ("primary"), disabled: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_73));
    ({}({ type: ("primary"), disabled: (true), }));
    const __VLS_77 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_72, __VLS_74));
    __VLS_nonNullable(__VLS_77.slots).default;
    // @ts-ignore
    [Code,];
    // @ts-ignore
    const __VLS_78 = __VLS_asFunctionalComponent(Code, new Code({ code: ((__VLS_ctx.code)), }));
    const __VLS_79 = __VLS_78({ code: ((__VLS_ctx.code)), }, ...__VLS_functionalComponentArgsRest(__VLS_78));
    ({}({ code: ((__VLS_ctx.code)), }));
    const __VLS_82 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(Code, __VLS_79));
    // @ts-ignore
    [code,];
    // @ts-ignore
    [Attribute,];
    // @ts-ignore
    const __VLS_83 = __VLS_asFunctionalComponent(Attribute, new Attribute({ name: ("button"), }));
    const __VLS_84 = __VLS_83({ name: ("button"), }, ...__VLS_functionalComponentArgsRest(__VLS_83));
    ({}({ name: ("button"), }));
    const __VLS_87 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(Attribute, __VLS_84));
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['lable-code'];
        __VLS_styleScopedClasses['lable-code'];
        __VLS_styleScopedClasses['lable-code'];
        __VLS_styleScopedClasses['lable-code'];
        __VLS_styleScopedClasses['lable-code'];
        __VLS_styleScopedClasses['preview'];
        __VLS_styleScopedClasses['p-r-1'];
        __VLS_styleScopedClasses['p-r-1'];
        __VLS_styleScopedClasses['p-r-1'];
        __VLS_styleScopedClasses['p-r-1'];
        __VLS_styleScopedClasses['p-r-1'];
        __VLS_styleScopedClasses['m-t-1'];
        __VLS_styleScopedClasses['p-r-1'];
        __VLS_styleScopedClasses['p-r-1'];
        __VLS_styleScopedClasses['p-r-1'];
        __VLS_styleScopedClasses['m-t-1'];
        __VLS_styleScopedClasses['p-r-1'];
        __VLS_styleScopedClasses['p-r-1'];
        __VLS_styleScopedClasses['p-r-1'];
        __VLS_styleScopedClasses['m-t-1'];
        __VLS_styleScopedClasses['p-r-1'];
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
