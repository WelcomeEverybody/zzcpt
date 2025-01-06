/* __placeholder__ */
import { ref } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const is = ref(true);
const show = () => {
    is.value = true;
};
const hide = () => {
    is.value = false;
};
const loadingText = ref('');
const text = (e) => {
    loadingText.value = e;
};
const loadingColor = ref('#409eff');
const color = (e) => {
    loadingColor.value = e;
};
const __VLS_exposed = { show, hide, text, color };
defineExpose({ show, hide, text, color });
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
    if (__VLS_ctx.is) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("zzcpt-loading-mask") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("content") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({ ...{ class: ("circular") }, viewBox: ("0 0 50 50"), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.circle, __VLS_intrinsicElements.circle)({ ...{ class: ("path") }, cx: ("25"), cy: ("25"), r: ("20"), fill: ("none"), });
        // @ts-ignore
        [is,];
        if (__VLS_ctx.loadingText) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text") }, ...{ style: (({ color: __VLS_ctx.loadingColor })) }, });
            (__VLS_ctx.loadingText);
            // @ts-ignore
            [loadingText, loadingText, loadingColor,];
        }
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['zzcpt-loading-mask'];
        __VLS_styleScopedClasses['content'];
        __VLS_styleScopedClasses['circular'];
        __VLS_styleScopedClasses['path'];
        __VLS_styleScopedClasses['text'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                is: is,
                loadingText: loadingText,
                loadingColor: loadingColor,
            };
        },
    });
}
export default (await import('vue')).defineComponent({
    setup() {
        return {
            ...__VLS_exposed,
        };
    },
});
;
