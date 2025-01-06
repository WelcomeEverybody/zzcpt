/* __placeholder__ */
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'CptShowText',
    props: { line: { type: String, default: "3" } },
    setup(props) {
        const changeCSS = () => {
            const str = `-webkit-line-clamp: ${props.line}`;
            return str;
        };
        return {
            changeCSS
        };
    },
});
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("cpt-show-text") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ id: ("input"), type: ("checkbox"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ id: ("content"), ...{ style: ((__VLS_ctx.changeCSS())) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ ...{ class: ("btn") }, for: ("input"), });
    // @ts-ignore
    [changeCSS,];
    var __VLS_0 = {};
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['cpt-show-text'];
        __VLS_styleScopedClasses['btn'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    const __VLS_name = 'CptShowText';
    let __VLS_internalComponent;
}
