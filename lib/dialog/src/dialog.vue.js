/* __placeholder__ */
import { ref, defineComponent, onMounted, watch } from 'vue';
import { dialogProps } from "./attribute";
export default defineComponent({
    name: 'CptDialog',
    props: dialogProps,
    emits: ['update:modelValue', 'close', 'enter'],
    setup(prop, { emit }) {
        const pointX = ref();
        const pointY = ref();
        const is = ref(false);
        const width = ref(prop.width);
        const bg = ref();
        const content = ref();
        // const head = ref();
        function closeDialog(type) {
            if (type == 'bg' && !prop.bgClose)
                return;
            reset();
            close();
        }
        function enterTransitionFn() {
            content.value.style.transition = 'all 0.3s ease-in-out';
            content.value.style.top = '20%';
            content.value.style.left = '50%';
            content.value.style.transform = "scale(1) translate(-50%, 0)";
            // 移除事件
            content.value.removeEventListener('transitionend', enterTransitionFn);
        }
        function leaveTransitionFn() {
            content.value.style.width = 0;
            content.value.style.left = 0;
            content.value.style.top = 0;
            content.value.style.transition = '';
            content.value.style.transform = ``;
            content.value.removeEventListener('transitionend', leaveTransitionFn);
            is.value = false;
            emit('update:modelValue', false);
        }
        function enter(x, y) {
            is.value = true;
            content.value.style.width = width + 'px';
            content.value.style.left = x + 'px';
            content.value.style.top = y + 'px';
            content.value.style.transition = 'all 1ms ease-in-out';
            content.value.style.transform = `scale(0) translate(${0}px,${0}px)`;
            content.value.addEventListener('transitionend', enterTransitionFn);
        }
        function changePoint() {
            document.body.addEventListener('mousedown', (e) => {
                if (is.value)
                    return;
                pointX.value = e.clientX;
                pointY.value = e.clientY;
            });
        }
        function reset() {
            content.value.style.width = width + 'px';
            content.value.style.left = pointX.value + 'px';
            content.value.style.top = pointY.value + 'px';
            content.value.style.transform = "scale(0) translate(0px, 0px)";
            content.value.addEventListener('transitionend', leaveTransitionFn);
        }
        function close() {
            emit('close', true);
        }
        function BtnEnter() {
            emit('enter', true);
        }
        changePoint();
        onMounted(() => {
        });
        watch(() => prop.modelValue, (newVal) => {
            setTimeout(() => {
                if (newVal) {
                    enter(pointX.value, pointY.value);
                }
            });
        });
        return {
            bg,
            content,
            closeDialog,
            BtnEnter,
            prop,
            reset
        };
    }
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("CptAlert") }, });
    __VLS_directiveFunction(__VLS_ctx.vShow)((__VLS_ctx.prop.modelValue));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.closeDialog('bg');
                // @ts-ignore
                [vShow, prop, closeDialog,];
            } }, ref: ("bg"), ...{ class: ("bg") }, });
    // @ts-ignore
    (__VLS_ctx.bg);
    // @ts-ignore
    [bg,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ref: ("content"), ...{ class: ("content") }, ...{ style: (({ width: __VLS_ctx.width })) }, });
    // @ts-ignore
    (__VLS_ctx.content);
    if (__VLS_ctx.headShow) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("head") }, ...{ style: (({ background: __VLS_ctx.headBg, color: __VLS_ctx.headColor })) }, ref: ("head"), });
        // @ts-ignore
        (__VLS_ctx.head);
        (__VLS_ctx.title);
        // @ts-ignore
        [width, content, headShow, headBg, headColor, head, title,];
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("body") }, });
    var __VLS_6 = {};
    if (__VLS_ctx.footShow) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("btn") }, });
        if (__VLS_ctx.leaveShow) {
            // @ts-ignore
            const __VLS_7 = {}
                .CptButton;
            ({}.CptButton);
            ({}.CptButton);
            __VLS_components.CptButton;
            __VLS_components.CptButton;
            // @ts-ignore
            [CptButton, CptButton,];
            // @ts-ignore
            const __VLS_8 = __VLS_asFunctionalComponent(__VLS_7, new __VLS_7({ ...{ 'onClick': {} }, type: ((__VLS_ctx.leaveType)), ...{ style: (({ color: __VLS_ctx.leaveColor })) }, }));
            const __VLS_9 = __VLS_8({ ...{ 'onClick': {} }, type: ((__VLS_ctx.leaveType)), ...{ style: (({ color: __VLS_ctx.leaveColor })) }, }, ...__VLS_functionalComponentArgsRest(__VLS_8));
            ({}({ ...{ 'onClick': {} }, type: ((__VLS_ctx.leaveType)), ...{ style: (({ color: __VLS_ctx.leaveColor })) }, }));
            let __VLS_13;
            const __VLS_14 = {
                onClick: (__VLS_ctx.closeDialog)
            };
            const __VLS_12 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_7, __VLS_9));
            let __VLS_10;
            let __VLS_11;
            (__VLS_ctx.leaveText);
            // @ts-ignore
            [closeDialog, footShow, leaveShow, leaveType, leaveColor, leaveText,];
            __VLS_nonNullable(__VLS_12.slots).default;
        }
        if (__VLS_ctx.enterShow) {
            // @ts-ignore
            const __VLS_15 = {}
                .CptButton;
            ({}.CptButton);
            ({}.CptButton);
            __VLS_components.CptButton;
            __VLS_components.CptButton;
            // @ts-ignore
            [CptButton, CptButton,];
            // @ts-ignore
            const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({ ...{ 'onClick': {} }, type: ((__VLS_ctx.enterType)), ...{ style: (({ color: __VLS_ctx.enterColor })) }, }));
            const __VLS_17 = __VLS_16({ ...{ 'onClick': {} }, type: ((__VLS_ctx.enterType)), ...{ style: (({ color: __VLS_ctx.enterColor })) }, }, ...__VLS_functionalComponentArgsRest(__VLS_16));
            ({}({ ...{ 'onClick': {} }, type: ((__VLS_ctx.enterType)), ...{ style: (({ color: __VLS_ctx.enterColor })) }, }));
            let __VLS_21;
            const __VLS_22 = {
                onClick: (__VLS_ctx.BtnEnter)
            };
            const __VLS_20 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17));
            let __VLS_18;
            let __VLS_19;
            (__VLS_ctx.enterText);
            // @ts-ignore
            [enterShow, enterType, enterColor, BtnEnter, enterText,];
            __VLS_nonNullable(__VLS_20.slots).default;
        }
    }
    __VLS_nonNullable(__VLS_5.slots).default;
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['CptAlert'];
        __VLS_styleScopedClasses['bg'];
        __VLS_styleScopedClasses['content'];
        __VLS_styleScopedClasses['head'];
        __VLS_styleScopedClasses['body'];
        __VLS_styleScopedClasses['btn'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    const __VLS_name = 'CptDialog';
    let __VLS_internalComponent;
}
