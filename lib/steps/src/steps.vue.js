/* __placeholder__ */
import { defineComponent } from "vue";
export default defineComponent({
    name: "CptSteps",
    props: {
        modelValue: {
            type: Number,
            default: 0
        },
        direction: {
            type: String,
            default: 'horizontal'
        },
    },
    setup() {
        return {};
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("steps") }, });
    var __VLS_0 = {};
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['steps'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    const __VLS_name = "CptSteps";
    let __VLS_internalComponent;
}
