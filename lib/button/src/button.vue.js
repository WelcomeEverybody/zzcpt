/* __placeholder__ */
import { defineComponent, onUpdated, onMounted, ref } from 'vue';
import { buttonProps } from './attribute';
import addClass from "./addClass";
export default defineComponent({
    name: 'CptButton',
    props: buttonProps,
    setup(_props) {
        const buttonRef = ref();
        const props = _props;
        const domAddClass = () => {
            buttonRef.value.classList = [];
            buttonRef.value.classList.add('cpt-btn', 'c-pointer', ...addClass(props, 'cpt'));
        };
        const isLoading = () => {
            return props.loading;
        };
        onMounted(() => {
            domAddClass();
        });
        onUpdated(() => {
            domAddClass();
        });
        return {
            buttonRef,
            isLoading
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ref: ("buttonRef"), ...{ class: ("") }, ...{ style: ((__VLS_ctx.isLoading() ? 'padding-left:30px;pointer-events:none;' : '')) }, });
    // @ts-ignore
    (__VLS_ctx.buttonRef);
    if (__VLS_ctx.isLoading()) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("cpt-loading") }, });
        // @ts-ignore
        [isLoading, isLoading, buttonRef,];
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    var __VLS_0 = {};
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses[''];
        __VLS_styleScopedClasses['cpt-loading'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    const __VLS_name = 'CptButton';
    let __VLS_internalComponent;
}
