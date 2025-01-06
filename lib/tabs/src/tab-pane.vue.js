/* __placeholder__ */
import { defineComponent, watch, ref, onMounted, getCurrentInstance } from 'vue';
export default defineComponent({
    name: 'CptTabPane',
    props: {
        label: {
            type: String,
            default: ''
        },
    },
    emits: ['update:modelValue'],
    setup(props) {
        const tabsModelValue = ref();
        const i = getCurrentInstance();
        const instance = i?.parent?.ctx;
        if (!instance) {
            console.log(instance);
        }
        onMounted(() => {
            // nextTick(() => {
            const tabsData = instance.tabs;
            tabsData.push({ label: props.label });
            // })
        });
        watch(() => instance.modelValue, (val) => {
            tabsModelValue.value = val;
        }, { immediate: true });
        return {
            tabsModelValue
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("tab-pane") }, });
    __VLS_directiveFunction(__VLS_ctx.vShow)((__VLS_ctx.tabsModelValue == __VLS_ctx.label));
    var __VLS_0 = {};
    // @ts-ignore
    [vShow, tabsModelValue, label,];
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['tab-pane'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    const __VLS_name = 'CptTabPane';
    let __VLS_internalComponent;
}
