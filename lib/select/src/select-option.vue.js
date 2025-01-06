/* __placeholder__ */
import { defineComponent, onMounted, getCurrentInstance, ref, watch } from "vue";
import { SelectOptionProps } from "./attribute";
export default defineComponent({
    name: "CptSelectOption",
    props: SelectOptionProps,
    setup(props) {
        const select = ref();
        const arr = ref([]);
        const text = ref({});
        const multiline = ref(false);
        let once = false;
        const selectValue = () => {
            if (props.disabled)
                return;
            // 解决多选不能选中问题
            if (select.value.multiline) {
                select.value.text.value = '';
                select.value.text.label = '';
            }
            select.value.text.value = props.value;
            select.value.text.label = props.label;
        };
        onMounted(() => {
            if (select.value)
                return;
            // 获取父组件实例用于修改数据
            const { proxy } = getCurrentInstance();
            select.value = proxy.$parent.$parent;
            arr.value = select.value.multilineArr;
            multiline.value = select.value.multiline;
            text.value = select.value.text;
            init();
            watch(() => select.value.modelValue, () => {
                if (once)
                    return;
                init();
                once = true;
            });
        });
        const init = () => {
            if (!select.value.multiline && props.value == select.value.modelValue) {
                text.value.label = props.label;
                text.value.value = props.label;
            }
            else if (select.value.modelValue && Array.isArray(select.value.modelValue) && select.value.modelValue.length > 0) {
                select.value.modelValue.map((item, index) => {
                    if (item === props.value) {
                        let obj = {
                            value: props.value,
                            label: props.label,
                            id: Date.now()
                        };
                        select.value.multilineArr[index] = obj;
                    }
                });
            }
        };
        const multilineFn = () => {
            for (let i = 0; i < arr.value.length; i++) {
                const item = arr.value[i];
                if (item.value === props.value) {
                    return true;
                }
            }
            return false;
        };
        const textFn = () => {
            return text.value.label === props.label;
        };
        return {
            multiline,
            selectValue,
            multilineFn,
            textFn
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ onClick: (__VLS_ctx.selectValue) }, ref: ("li"), ...{ class: (({
                'active': __VLS_ctx.multiline ? __VLS_ctx.multilineFn() : __VLS_ctx.textFn(),
                'disabled': __VLS_ctx.disabled
            })) }, ...{ class: ("li") }, });
    // @ts-ignore
    (__VLS_ctx.li);
    __VLS_styleScopedClasses = ({
        'active': multiline ? multilineFn() : textFn(),
        'disabled': disabled
    });
    (__VLS_ctx.label);
    // @ts-ignore
    [selectValue, multiline, multilineFn, textFn, disabled, li, label,];
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['li'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    const __VLS_name = "CptSelectOption";
    let __VLS_internalComponent;
}
