/* __placeholder__ */
import { defineComponent, ref, watch, onMounted } from 'vue';
import { SwitchProps } from "./attribute";
export default defineComponent({
    name: "CptSwitch",
    props: SwitchProps,
    emits: ['update:modelValue'],
    setup(props, { emit: e }) {
        const switchs = ref();
        const click = () => {
            if (props.loading)
                return;
            if (!props.modelValue) {
                e('update:modelValue', true);
            }
            else {
                e('update:modelValue', false);
            }
        };
        const initSwitch = (val) => {
            val ? switchs.value.classList.add("cpt-switch-checked") : switchs.value.classList.remove("cpt-switch-checked");
        };
        const switchLoading = (val) => {
            if (val) {
                switchs.value.classList.add("cpt-switch-disabled");
                switchs.value.children[0].classList.add("cpt-switch-loading");
            }
            else {
                switchs.value.classList.remove("cpt-switch-disabled");
                switchs.value.children[0].classList.remove("cpt-switch-loading");
            }
        };
        onMounted(() => {
            initSwitch(props.modelValue);
            if (!props.disabled) {
                switchLoading(props.loading);
            }
        });
        watch(() => props.modelValue, (newV) => {
            if (!props.loading) {
                initSwitch(newV);
            }
        });
        watch(() => props.loading, (newV) => {
            switchLoading(newV);
        });
        return {
            click,
            switchs,
            props
        };
    }
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.click) }, disabled: ((__VLS_ctx.props.disabled)), ...{ style: (({ 'background-color': __VLS_ctx.props.modelValue ? __VLS_ctx.props.activeBg : __VLS_ctx.props.closeBg })) }, ...{ class: (({ 'cpt-switch-disabled': __VLS_ctx.props.disabled })) }, ref: ("switchs"), ...{ class: ("cpt-switch") }, });
    // @ts-ignore
    (__VLS_ctx.switchs);
    __VLS_styleScopedClasses = ({ 'cpt-switch-disabled': props.disabled });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("handle") }, });
    // @ts-ignore
    [click, props, props, props, props, props, switchs,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("inner") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    (__VLS_ctx.props.checked);
    var __VLS_0 = {};
    // @ts-ignore
    [props,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    (__VLS_ctx.props.unChecked);
    var __VLS_1 = {};
    // @ts-ignore
    [props,];
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['cpt-switch'];
        __VLS_styleScopedClasses['handle'];
        __VLS_styleScopedClasses['inner'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    const __VLS_name = "CptSwitch";
    let __VLS_internalComponent;
}
