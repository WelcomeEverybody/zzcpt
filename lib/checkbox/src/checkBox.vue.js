/* __placeholder__ */
import { defineComponent, ref, useSlots, onUpdated, onMounted, getCurrentInstance } from 'vue';
import { checkBoxProps } from "./attribute";
export default defineComponent({
    name: "CptCheckbox",
    props: checkBoxProps,
    emits: ["update:modelValue"],
    setup(props, { emit: e }) {
        const isSlot = ref(useSlots().default);
        const change = () => {
            if (father.value) {
                father.value.includes(props.name)
                    ? father.value.splice(father.value.indexOf(props.name), 1)
                    : father.value.push(props.name);
                return;
            }
            e('update:modelValue', props.modelValue == props.name && props.type == 'checkbox' ? null : props.name);
        };
        const father = ref();
        onMounted(() => {
            const { proxy } = getCurrentInstance();
            father.value = proxy.$parent.modelValue;
        });
        onUpdated(() => {
            isSlot.value = useSlots().default;
        });
        return {
            change,
            isSlot,
            father
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ ...{ class: ("cpt-checkbox c-pointer") }, });
    if (__VLS_ctx.father) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.input, __VLS_intrinsicElements.input)({ ...{ onClick: (__VLS_ctx.change) }, type: ((__VLS_ctx.type)), checked: ((__VLS_ctx.father.includes(__VLS_ctx.name))), ...{ class: ("cpt-checkbox-input") }, });
        // @ts-ignore
        [father, father, change, type, name,];
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.input, __VLS_intrinsicElements.input)({ ...{ onClick: (__VLS_ctx.change) }, type: ((__VLS_ctx.type)), checked: ((__VLS_ctx.modelValue == __VLS_ctx.name)), ...{ class: ("cpt-checkbox-input") }, });
        // @ts-ignore
        [change, type, name, modelValue,];
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("cpt-checkbox-label") }, });
    if (!__VLS_ctx.isSlot) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        (__VLS_ctx.title);
        // @ts-ignore
        [isSlot, title,];
    }
    var __VLS_0 = {};
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['cpt-checkbox'];
        __VLS_styleScopedClasses['c-pointer'];
        __VLS_styleScopedClasses['cpt-checkbox-input'];
        __VLS_styleScopedClasses['cpt-checkbox-input'];
        __VLS_styleScopedClasses['cpt-checkbox-label'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    const __VLS_name = "CptCheckbox";
    let __VLS_internalComponent;
}
