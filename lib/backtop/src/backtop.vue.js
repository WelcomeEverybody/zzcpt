/* __placeholder__ */
import { defineComponent, ref, onMounted, useSlots } from "vue";
import { BackTopProps } from "./attribute";
export default defineComponent({
    name: "CptBackTop",
    props: BackTopProps,
    emits: ["click"],
    setup(props, { emit }) {
        var dom = null;
        const show = ref(false);
        onMounted(() => {
            console.log();
            if (props.target) {
                dom = document.querySelector(props.target);
                if (!dom) {
                    throw Error(`${props.target} is not found`);
                }
            }
            init();
        });
        function addEvent() {
            dom.addEventListener('scroll', scroll);
        }
        function scroll() {
            if (dom.scrollTop > props.top) {
                if (!show.value)
                    setShow(true);
            }
            else {
                if (show.value)
                    setShow(false);
            }
        }
        function setShow(e) {
            show.value = e;
        }
        function init() {
            addEvent();
        }
        function go() {
            dom.scrollTo({ top: 0, behavior: 'smooth' });
            emit("click");
        }
        return {
            props,
            dom,
            show,
            go,
            useSlots
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
    // @ts-ignore
    const __VLS_0 = {}
        .Transition;
    ({}.Transition);
    ({}.Transition);
    __VLS_components.Transition;
    __VLS_components.Transition;
    // @ts-ignore
    [Transition, Transition,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ name: ("slide-fade"), }));
    const __VLS_2 = __VLS_1({ name: ("slide-fade"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ name: ("slide-fade"), }));
    __VLS_directiveFunction(__VLS_ctx.vShow)((__VLS_ctx.show));
    const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (__VLS_ctx.go) }, ...{ class: ("backtop") }, ...{ style: (({
                'right': __VLS_ctx.right + 'px',
                'bottom': __VLS_ctx.bottom + 'px',
                'width': __VLS_ctx.width,
                'height': __VLS_ctx.height,
                'line-height': __VLS_ctx.height,
                'text-align': 'center',
                'background-color': __VLS_ctx.bgColor
            })) }, ...{ style: ({}) }, });
    if (!__VLS_ctx.useSlots().default) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        // @ts-ignore
        [vShow, show, go, right, bottom, width, height, height, bgColor, useSlots,];
    }
    var __VLS_6 = {};
    __VLS_nonNullable(__VLS_5.slots).default;
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['backtop'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    const __VLS_name = "CptBackTop";
    let __VLS_internalComponent;
}
