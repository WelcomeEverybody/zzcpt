/* __placeholder__ */
import { defineComponent, onMounted, ref } from 'vue';
import { DropdownProps } from "./attribute";
import { CptButton } from "../../button/index";
export default defineComponent({
    name: 'CptDropdown',
    props: DropdownProps,
    setup(_props) {
        const props = _props;
        const handle = props.handle;
        const show = ref(false);
        const listRef = ref();
        const btnRef = ref();
        const isShow = () => {
            show.value = !show.value;
        };
        const isEvent = props.trigger == 'hover' ? 'mouseenter' : 'click';
        let times = null;
        const isShowFn = () => {
            if (times)
                clearTimeout(times);
            times = setTimeout(() => {
                show.value = false;
            }, 500);
        };
        const isHover = () => {
            btnRef.value.buttonRef.addEventListener('mouseleave', () => { isShowFn(); });
            listRef.value.addEventListener('mouseenter', () => { clearTimeout(times); });
            listRef.value.addEventListener('mouseleave', () => { isShowFn(); });
        };
        const isClick = () => {
            if (!handle) {
                listRef.value.addEventListener('mousedown', (e) => {
                    e.preventDefault();
                    return false;
                });
            }
            btnRef.value.buttonRef.addEventListener('blur', () => { show.value = false; });
        };
        const init = () => {
            if (props.trigger == 'hover') {
                isHover();
            }
            else {
                isClick();
            }
            btnRef.value.buttonRef.addEventListener(isEvent, () => {
                const listRefLeft = listRef.value.getBoundingClientRect().left;
                const windowLeft = document.documentElement.clientWidth;
                if (windowLeft - listRefLeft < 100) {
                    const arrow = document.getElementById('arrow');
                    arrow.style.right = 10 + 'px';
                    arrow.style.left = 'auto';
                    listRef.value.style.right = 100 + 'px';
                }
                else if (listRefLeft < 100) {
                    const arrow = document.getElementById('arrow');
                    arrow.style.left = 10 + 'px';
                    arrow.style.right = 'auto';
                    listRef.value.style.left = 100 + 'px';
                }
                listRef.value.style.top = btnRef.value.buttonRef.getBoundingClientRect().height + 'px';
                if (isEvent == 'mouseenter') {
                    clearTimeout(times);
                    show.value = true;
                }
                else {
                    isShow();
                }
            });
        };
        onMounted(() => {
            init();
        });
        return {
            isShow,
            show,
            listRef,
            btnRef,
        };
    },
});
;
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("cpt-dropdown") }, });
    // @ts-ignore
    const __VLS_0 = {}
        .CptButton;
    ({}.CptButton);
    ({}.CptButton);
    __VLS_components.CptButton;
    __VLS_components.CptButton;
    // @ts-ignore
    [CptButton, CptButton,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ref: ("btnRef"), type: ((__VLS_ctx.btnType)), }));
    const __VLS_2 = __VLS_1({ ref: ("btnRef"), type: ((__VLS_ctx.btnType)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ref: ("btnRef"), type: ((__VLS_ctx.btnType)), }));
    // @ts-ignore
    (__VLS_ctx.btnRef);
    const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
    (__VLS_ctx.text);
    // @ts-ignore
    [btnType, btnRef, text,];
    __VLS_nonNullable(__VLS_5.slots).default;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ref: ("listRef"), ...{ class: ("cpt-dropdown-content") }, });
    // @ts-ignore
    (__VLS_ctx.listRef);
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
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ name: ("slide-fade"), persisted: (true), }));
    const __VLS_8 = __VLS_7({ name: ("slide-fade"), persisted: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({ name: ("slide-fade"), persisted: (true), }));
    const __VLS_11 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("cpt-dropdown-menu") }, });
    __VLS_directiveFunction(__VLS_ctx.vShow)((__VLS_ctx.show));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("cpt-dropdown-arrow") }, });
    // @ts-ignore
    [listRef, vShow, show,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({});
    var __VLS_12 = {};
    __VLS_nonNullable(__VLS_11.slots).default;
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['cpt-dropdown'];
        __VLS_styleScopedClasses['cpt-dropdown-content'];
        __VLS_styleScopedClasses['cpt-dropdown-menu'];
        __VLS_styleScopedClasses['cpt-dropdown-arrow'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    const __VLS_name = 'CptDropdown';
    let __VLS_internalComponent;
}
