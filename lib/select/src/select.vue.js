/* __placeholder__ */
import { defineComponent, ref, onMounted, watch, computed } from "vue";
import { SelectProps } from "./attribute";
export default defineComponent({
    name: "CptSelect",
    props: SelectProps,
    emits: ['update:modelValue', 'change'],
    setup(props, { emit: e }) {
        const multiple = ref();
        const iptD = ref();
        const text = ref({
            // label:props.modelValue,
            value: props.modelValue,
        });
        const select = ref();
        const multilineArr = ref([]);
        const optionShow = ref();
        const selectOption = ref();
        const inputFocus = () => {
            setSelectOptionPosition();
            if (!optionShow.value) {
                iptD.value.focus();
                iptD.value.setAttribute('readonly', 'readonly');
                if (props.multiline) {
                    setTimeout(() => {
                        iptD.value.removeAttribute('readonly');
                    }, 200);
                }
            }
            else {
                iptD.value.blur();
            }
        };
        function optionClick(e) {
            if (props.multiline) {
                e.stopPropagation();
            }
        }
        function iptDBlurFn() {
            if (optionShow.value)
                multiple.value.classList.remove('multipleFocus');
            optionShow.value = false;
        }
        function iptFocusFn() {
            if (!optionShow.value)
                optionShow.value = true;
            multiple.value.classList.add('multipleFocus');
        }
        function preventDefaults(e) {
            e.preventDefault();
            return false;
        }
        function labelRemove(item) {
            multilineArr.value.splice(multilineArr.value.indexOf(item), 1);
            e('update:modelValue', multilineArr.value);
            if (multilineArr.value.length == 0)
                text.value = {};
        }
        const popstate = (e) => {
            if (e.keyCode === 8) {
                multilineArr.value.splice(multilineArr.value.length - 1, 1);
                setSelectOptionPosition();
            }
        };
        const setSelectOptionPosition = () => {
            const top = select.value.getBoundingClientRect().top;
            const left = select.value.getBoundingClientRect().left;
            const height = select.value.getBoundingClientRect().height;
            const width = select.value.clientWidth;
            selectOption.value.style.top = top + height + 10 + 'px';
            selectOption.value.style.left = left + 'px';
            selectOption.value.style.width = width + 'px';
        };
        onMounted(() => {
            select.value.addEventListener('mousedown', preventDefaults);
            selectOption.value.addEventListener('mousedown', preventDefaults);
            iptD.value.addEventListener("blur", iptDBlurFn);
            iptD.value.addEventListener("focus", iptFocusFn);
            if (props.multiline) {
                iptD.value.addEventListener('keydown', popstate);
            }
            if (props.size && props.size != 'defalut') {
                multiple.value.classList.add(props.size);
            }
            setSelectOptionPosition();
        });
        const multilineValueArr = ref(computed(() => { return multilineArr.value.map((item) => { return item.value; }) && setTimeout(() => { setSelectOptionPosition(); }); }));
        watch(() => text.value, (newVal) => {
            if (props.multiline && newVal.value) {
                let index = -1;
                for (let i = 0; i < multilineArr.value.length; i++) {
                    if (multilineArr.value[i].label === newVal.label) {
                        index = i;
                        break;
                    }
                }
                if (index === -1) {
                    multilineArr.value.push(JSON.parse(JSON.stringify(newVal)));
                }
                else {
                    multilineArr.value.splice(index, 1);
                }
            }
            e('update:modelValue', props.multiline ? multilineValueArr.value : newVal.value);
            e('change', true);
        }, { deep: true });
        return {
            inputFocus,
            multiple,
            optionClick,
            iptD,
            optionShow,
            text,
            select,
            multilineArr,
            labelRemove,
            selectOption
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("cpt-select") }, ref: ("select"), });
    // @ts-ignore
    (__VLS_ctx.select);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (__VLS_ctx.inputFocus) }, ref: ("multiple"), ...{ class: ("multiple") }, });
    // @ts-ignore
    (__VLS_ctx.multiple);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("input") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("box") }, });
    if (__VLS_ctx.multiline) {
        for (const [item, index] of __VLS_getVForSourceType((__VLS_ctx.multilineArr))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("label") }, ...{ style: (({ 'background': __VLS_ctx.labelBg, 'color': __VLS_ctx.labelColor })) }, key: ((index)), });
            (item.label);
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ onClick: (...[$event]) => {
                        if (!((__VLS_ctx.multiline)))
                            return;
                        __VLS_ctx.labelRemove(item);
                        // @ts-ignore
                        [select, inputFocus, multiple, multiline, multilineArr, labelBg, labelColor, labelRemove,];
                    } }, ...{ class: ("close") }, });
        }
    }
    if (!__VLS_ctx.multiline && __VLS_ctx.text.value) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("label text") }, });
        (__VLS_ctx.text.label);
        // @ts-ignore
        [multiline, text, text,];
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ oninput: ("value=value.replace(/.*/g,'')"), ref: ("iptD"), });
    // @ts-ignore
    (__VLS_ctx.iptD);
    // @ts-ignore
    [iptD,];
    if (__VLS_ctx.multiline && __VLS_ctx.multilineArr.length == 0) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ id: ("placeholder"), });
        (__VLS_ctx.placeholder);
        // @ts-ignore
        [multiline, multilineArr, placeholder,];
    }
    else if (!__VLS_ctx.multiline && !__VLS_ctx.text.label) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ id: ("placeholder"), });
        (__VLS_ctx.placeholder);
        // @ts-ignore
        [multiline, text, placeholder,];
    }
    // @ts-ignore
    const __VLS_0 = {}
        .teleport;
    ({}.teleport);
    ({}.teleport);
    __VLS_components.Teleport;
    __VLS_components.teleport;
    __VLS_components.Teleport;
    __VLS_components.teleport;
    // @ts-ignore
    [Teleport, Teleport,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ to: ('body'), }));
    const __VLS_2 = __VLS_1({ to: ('body'), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ to: ('body'), }));
    const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
    // @ts-ignore
    const __VLS_6 = {}
        .Transition;
    ({}.Transition);
    ({}.Transition);
    __VLS_components.Transition;
    __VLS_components.Transition;
    // @ts-ignore
    [Transition, Transition,];
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ name: ("slide-fade"), }));
    const __VLS_8 = __VLS_7({ name: ("slide-fade"), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({ name: ("slide-fade"), }));
    __VLS_directiveFunction(__VLS_ctx.vShow)((__VLS_ctx.optionShow));
    const __VLS_11 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ref: ("selectOption"), ...{ class: ("select-option") }, });
    // @ts-ignore
    (__VLS_ctx.selectOption);
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ onClick: (__VLS_ctx.optionClick) }, });
    var __VLS_12 = {};
    // @ts-ignore
    [vShow, optionShow, selectOption, optionClick,];
    __VLS_nonNullable(__VLS_11.slots).default;
    __VLS_nonNullable(__VLS_5.slots).default;
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['cpt-select'];
        __VLS_styleScopedClasses['multiple'];
        __VLS_styleScopedClasses['input'];
        __VLS_styleScopedClasses['box'];
        __VLS_styleScopedClasses['label'];
        __VLS_styleScopedClasses['close'];
        __VLS_styleScopedClasses['label'];
        __VLS_styleScopedClasses['text'];
        __VLS_styleScopedClasses['select-option'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    const __VLS_name = "CptSelect";
    let __VLS_internalComponent;
}
