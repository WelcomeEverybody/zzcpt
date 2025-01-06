/* __placeholder__ */
import { defineComponent, onMounted, ref, watch } from 'vue';
import { SliderProps } from "./attribute";
export default defineComponent({
    name: 'CptSlider',
    props: SliderProps,
    emits: ['update:modelValue'],
    setup(props, { emit }) {
        onMounted(() => {
            init();
        });
        const slider = ref();
        const sphere = ref();
        const sphereC = ref();
        const line = ref();
        const step = ref(props.step);
        const num = ref(props.modelValue);
        const reverse = ref(props.reverse);
        const max = props.max;
        const min = props.min;
        // const disabled = ref(props.disabled);
        const tipShow = ref(false);
        const tipShowC = ref(false);
        let startE = '';
        let moveE = '';
        let endE = '';
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        if (isMobile) {
            startE = 'touchstart';
            moveE = 'touchmove';
            endE = 'touchend';
        }
        else {
            startE = 'mousedown';
            moveE = 'mousemove';
            endE = 'mouseup';
        }
        const sphereActiveCss = 'cpt-slider-sphere-active';
        // 单滑块
        function sphereInit() {
            slider.value.addEventListener('mousedown', () => { tipShow.value = true; });
            const steps = step.value;
            const reverses = reverse.value;
            const _num = steps != 1 ? 100 / steps : 100;
            const allWidth = steps / (max - min) * _num;
            const init = () => {
                const sphereLeft = reverses ? max - num.value : (num.value - min) * allWidth;
                line.value.style[reverses ? 'right' : 'left'] = 0;
                sphere.value.style.left = sphereLeft + '%';
                line.value.style.width = (num.value - min) * allWidth + '%';
            };
            init();
            const boxLeft = slider.value.offsetLeft;
            const stepNum = slider.value.offsetWidth / (max - min);
            slider.value.addEventListener(startE, (down) => {
                let current = 0; // 记录每次移动的距离
                sphere.value.classList.add(sphereActiveCss);
                tipShow.value = true;
                const sphereMove = (e) => {
                    e.preventDefault();
                    const clientX = isMobile ? e.touches[0].clientX : e.clientX;
                    const calcMove = Number(((clientX - boxLeft) / stepNum % steps).toFixed(2));
                    const left = Math.trunc((clientX - boxLeft) / stepNum / steps);
                    current = left * steps;
                    if (current < 0)
                        return;
                    const isEvenStep = steps % 2 === 0;
                    if (isEvenStep) {
                        if (current >= (max - min))
                            return;
                    }
                    else {
                        if (steps === 1 && current + 1 > (max - min))
                            return;
                        else if (steps !== 1 && current + steps > max)
                            return;
                    }
                    if (calcMove > steps / 2) {
                        const lineWidth = reverses ? max - current - steps : current + steps > max ? max : current + steps;
                        sphere.value.style.left = (current + steps) * allWidth + '%';
                        line.value.style.width = lineWidth * allWidth + '%';
                        num.value = current + steps > (max - min) ? max : current + steps + min;
                    }
                    else if (calcMove < steps / 2) {
                        const lineWidth = reverses ? max - current : current;
                        sphere.value.style.left = current * allWidth + '%';
                        line.value.style.width = lineWidth * allWidth + '%';
                        num.value = current + min;
                    }
                    num.value = reverses ? max - num.value : num.value;
                    emit('update:modelValue', num.value);
                };
                sphereMove(down);
                const sphereUp = () => {
                    document.removeEventListener(moveE, sphereMove);
                    document.removeEventListener(endE, sphereUp);
                    sphere.value.classList.remove(sphereActiveCss);
                    tipShow.value = false;
                };
                document.addEventListener(moveE, sphereMove);
                document.addEventListener(endE, sphereUp);
            });
        }
        // 双滑块
        function sphereRangeInit() {
            const steps = step.value;
            const boxLeft = slider.value.offsetLeft;
            const stepNum = slider.value.offsetWidth / 100;
            let sphereObj = {
                0: sphere.value,
                1: sphereC.value
            };
            const init = () => {
                sphere.value.style.left = num.value[0] + '%';
                sphereC.value.style.left = num.value[1] + '%';
            };
            const lineCalc = () => {
                if (num.value[0] >= num.value[1]) {
                    line.value.style.left = num.value[1] + '%';
                    line.value.style.width = num.value[0] - num.value[1] + '%';
                }
                else {
                    line.value.style.left = num.value[0] + '%';
                    line.value.style.width = num.value[1] - num.value[0] + '%';
                }
            };
            init();
            lineCalc();
            let type = 0; // 用于判断滑块
            const sphereMove = (e) => {
                e.preventDefault();
                let current = 0;
                const clientX = isMobile ? e.touches[0].clientX : e.clientX;
                const calcMove = Math.trunc((clientX - boxLeft) / stepNum % steps);
                const left = Math.trunc((clientX - boxLeft) / stepNum / steps);
                current = left * steps;
                if (current < 0)
                    return;
                const isEvenStep = steps % 2 === 0;
                if (isEvenStep) {
                    if (current >= max)
                        return;
                }
                else {
                    if (steps === 1 && current > max)
                        return;
                    else if (steps !== 1 && current + steps > max)
                        return;
                }
                if (calcMove > steps / 2) {
                    num.value[type] = current + steps;
                }
                else if (calcMove < steps / 2) {
                    num.value[type] = current;
                }
                if (calcMove > steps / 2) {
                    sphereObj[type].style.left = current + steps + '%';
                }
                else if (calcMove < steps / 2) {
                    sphereObj[type].style.left = current + '%';
                }
                lineCalc();
            };
            const sphereUp = () => {
                document.removeEventListener(moveE, sphereMove);
                document.removeEventListener(endE, sphereUp);
                sphere.value.classList.remove(sphereActiveCss);
                sphereC.value.classList.remove(sphereActiveCss);
                tipShow.value = false;
                tipShowC.value = false;
                sphereObj[0].style.left = num.value[0] + '%';
                sphereObj[1].style.left = num.value[1] + '%';
                const arr = JSON.parse(JSON.stringify(num.value)).sort((a, b) => { return a - b; });
                emit('update:modelValue', arr);
            };
            const sphereAddEvent = (_e) => {
                document.addEventListener(moveE, sphereMove);
                document.addEventListener(endE, sphereUp);
            };
            sphere.value.addEventListener(startE, (down) => {
                type = 0;
                tipShow.value = true;
                sphere.value.classList.add(sphereActiveCss);
                sphereAddEvent(down);
            });
            sphereC.value.addEventListener(startE, (Cdown) => {
                type = 1;
                tipShowC.value = true;
                sphereC.value.classList.add(sphereActiveCss);
                sphereAddEvent(Cdown);
            });
        }
        function init() {
            if (props.range) {
                if (!Array.isArray(props.modelValue))
                    throw new Error("双滑块接收参数必须是数组");
                sphereRangeInit();
            }
            else {
                if (!/^\d+(\.\d+)?$/.test(props.modelValue.toString()))
                    throw new Error("接收参数必须是数字");
                sphereInit();
            }
        }
        watch(() => props.disabled, (newV) => {
            if (slider.value) {
                if (newV) {
                    slider.value.classList.add('zdisabled');
                }
                else {
                    slider.value.classList.remove('zdisabled');
                }
            }
        }, { deep: true, immediate: true });
        function calcStep(item) {
            const step = props.step;
            const calc = step / (max - min) * 100;
            const steps = Math.trunc(calc * item);
            return steps;
        }
        return {
            slider,
            sphere,
            line,
            num,
            tipShow,
            tipShowC,
            step,
            sphereC,
            calcStep
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ref: ("slider"), ...{ class: ("cpt-slider ") }, });
    // @ts-ignore
    (__VLS_ctx.slider);
    if (__VLS_ctx.disabled) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ('isdisable') }, });
        // @ts-ignore
        [slider, disabled,];
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("cpt-slider-content") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ref: ("line"), ...{ class: ("cpt-slider-line") }, });
    // @ts-ignore
    (__VLS_ctx.line);
    // @ts-ignore
    [line,];
    if (__VLS_ctx.showStops) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("cpt-slider-step") }, });
        for (const [item] of __VLS_getVForSourceType(((__VLS_ctx.max / __VLS_ctx.step - 1)))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ key: ((item)), ...{ class: ("item") }, ...{ style: (({ 'left': __VLS_ctx.calcStep(item) + '%' })) }, });
            // @ts-ignore
            [showStops, max, step, calcStep,];
        }
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ref: ("sphere"), tabindex: ("0"), ...{ class: ("cpt-slider-sphere") }, });
    // @ts-ignore
    (__VLS_ctx.sphere);
    if (__VLS_ctx.showTips && !__VLS_ctx.range) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("cpt-slider-sphere-tips") }, });
        __VLS_directiveFunction(__VLS_ctx.vShow)((__VLS_ctx.tipShow));
        (__VLS_ctx.num);
        // @ts-ignore
        [sphere, showTips, range, vShow, tipShow, num,];
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("1 cpt-slider-sphere-tips") }, });
        __VLS_directiveFunction(__VLS_ctx.vShow)((__VLS_ctx.tipShow && __VLS_ctx.showTips));
        (__VLS_ctx.num[0]);
        // @ts-ignore
        [showTips, vShow, tipShow, num,];
    }
    if (__VLS_ctx.range) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ref: ("sphereC"), tabindex: ("1"), ...{ class: ("cpt-slider-sphere") }, });
        // @ts-ignore
        (__VLS_ctx.sphereC);
        if (__VLS_ctx.showTips && !__VLS_ctx.range) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("cpt-slider-sphere-tips") }, });
            __VLS_directiveFunction(__VLS_ctx.vShow)((__VLS_ctx.tipShow));
            (__VLS_ctx.num);
            // @ts-ignore
            [showTips, range, range, vShow, tipShow, num, sphereC,];
        }
        else {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("cpt-slider-sphere-tips") }, });
            __VLS_directiveFunction(__VLS_ctx.vShow)((__VLS_ctx.tipShowC && __VLS_ctx.showTips));
            (__VLS_ctx.num[1]);
            // @ts-ignore
            [showTips, vShow, num, tipShowC,];
        }
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['cpt-slider'];
        __VLS_styleScopedClasses['isdisable'];
        __VLS_styleScopedClasses['cpt-slider-content'];
        __VLS_styleScopedClasses['cpt-slider-line'];
        __VLS_styleScopedClasses['cpt-slider-step'];
        __VLS_styleScopedClasses['item'];
        __VLS_styleScopedClasses['cpt-slider-sphere'];
        __VLS_styleScopedClasses['cpt-slider-sphere-tips'];
        __VLS_styleScopedClasses['1'];
        __VLS_styleScopedClasses['cpt-slider-sphere-tips'];
        __VLS_styleScopedClasses['cpt-slider-sphere'];
        __VLS_styleScopedClasses['cpt-slider-sphere-tips'];
        __VLS_styleScopedClasses['cpt-slider-sphere-tips'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    const __VLS_name = 'CptSlider';
    let __VLS_internalComponent;
}
