/* __placeholder__ */
import { ref } from "vue";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const tab = ref('tab1');
const data = ref(['tab1', 'tab2', 'tab3']);
setTimeout(() => {
    let num = 10;
    for (let i = 0; i < num; i++) {
        data.value.push('tab' + (i + 4));
    }
}, 2000);
const remove = (item) => {
    console.log(item);
};
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("preview") }, });
    // @ts-ignore
    const __VLS_0 = {}
        .CptTabs;
    ({}.CptTabs);
    ({}.CptTabs);
    __VLS_components.CptTabs;
    __VLS_components.CptTabs;
    // @ts-ignore
    [CptTabs, CptTabs,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onRemove': {} }, modelValue: ((__VLS_ctx.tab)), }));
    const __VLS_2 = __VLS_1({ ...{ 'onRemove': {} }, modelValue: ((__VLS_ctx.tab)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ...{ 'onRemove': {} }, modelValue: ((__VLS_ctx.tab)), }));
    let __VLS_6;
    const __VLS_7 = {
        onRemove: (__VLS_ctx.remove)
    };
    const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
    let __VLS_3;
    let __VLS_4;
    for (const [item, index] of __VLS_getVForSourceType((__VLS_ctx.data))) {
        // @ts-ignore
        const __VLS_8 = {}
            .CptTabPane;
        ({}.CptTabPane);
        ({}.CptTabPane);
        __VLS_components.CptTabPane;
        __VLS_components.CptTabPane;
        // @ts-ignore
        [CptTabPane, CptTabPane,];
        // @ts-ignore
        const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({ key: ((index)), label: ((item)), }));
        const __VLS_10 = __VLS_9({ key: ((index)), label: ((item)), }, ...__VLS_functionalComponentArgsRest(__VLS_9));
        ({}({ key: ((index)), label: ((item)), }));
        const __VLS_13 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_8, __VLS_10));
        (item);
        // @ts-ignore
        [tab, remove, data,];
        __VLS_nonNullable(__VLS_13.slots).default;
    }
    __VLS_nonNullable(__VLS_5.slots).default;
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("preview") }, });
    // @ts-ignore
    const __VLS_14 = {}
        .CptTabs;
    ({}.CptTabs);
    ({}.CptTabs);
    __VLS_components.CptTabs;
    __VLS_components.CptTabs;
    // @ts-ignore
    [CptTabs, CptTabs,];
    // @ts-ignore
    const __VLS_15 = __VLS_asFunctionalComponent(__VLS_14, new __VLS_14({ modelValue: ((__VLS_ctx.tab)), type: ("card"), }));
    const __VLS_16 = __VLS_15({ modelValue: ((__VLS_ctx.tab)), type: ("card"), }, ...__VLS_functionalComponentArgsRest(__VLS_15));
    ({}({ modelValue: ((__VLS_ctx.tab)), type: ("card"), }));
    const __VLS_19 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_14, __VLS_16));
    for (const [item, index] of __VLS_getVForSourceType((__VLS_ctx.data))) {
        // @ts-ignore
        const __VLS_20 = {}
            .CptTabPane;
        ({}.CptTabPane);
        ({}.CptTabPane);
        __VLS_components.CptTabPane;
        __VLS_components.CptTabPane;
        // @ts-ignore
        [CptTabPane, CptTabPane,];
        // @ts-ignore
        const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ key: ((index)), label: ((item)), }));
        const __VLS_22 = __VLS_21({ key: ((index)), label: ((item)), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
        ({}({ key: ((index)), label: ((item)), }));
        const __VLS_25 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22));
        (item);
        // @ts-ignore
        [tab, data,];
        __VLS_nonNullable(__VLS_25.slots).default;
    }
    __VLS_nonNullable(__VLS_19.slots).default;
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['preview'];
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
                tab: tab,
                data: data,
                remove: remove,
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
