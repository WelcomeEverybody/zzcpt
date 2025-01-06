/* __placeholder__ */
import { defineComponent, ref, onMounted, useSlots } from 'vue';
export default defineComponent({
    name: 'CptCanvassign',
    props: {
        target: {
            type: String,
            default: ''
        },
        width: {
            type: Number,
            default: 400
        },
        height: {
            type: Number,
            default: 300
        },
        echoImg: {
            type: Object,
            default: {
                url: '',
                width: 0,
                height: 0,
                dx: 0,
                dy: 0
            }
        }
    },
    emits: ['save'],
    setup(props, { emit: e }) {
        const cvs = ref();
        const targetDom = ref();
        var ctx = '';
        var edown = '';
        var emove = '';
        var eup = '';
        var is = false;
        var startPosition = { x: 0, y: 0, scrollY: 0 };
        const echoImgVal = ref({
            url: '',
            width: 0,
            height: 0,
            dx: 0,
            dy: 0
        });
        onMounted(() => {
            init();
        });
        function initVal() {
            echoImgVal.value = Object.assign(echoImgVal.value, props.echoImg);
        }
        function init() {
            if (props.target) {
                const dom = document.querySelector(props.target);
                if (!dom) {
                    throw new Error('请传入正确的target');
                }
                targetDom.value = dom;
            }
            else {
                throw new Error('请传入target');
            }
            setBasicEvent();
            addEvent();
            cvs.value.width = props.width;
            cvs.value.height = props.height;
            ctx = cvs.value?.getContext('2d');
            ctx.clearRect(0, 0, props.width, props.height);
            initVal();
            echoImg();
        }
        // 回显图片
        const echoImg = () => {
            const echoImg = echoImgVal.value;
            const img = new Image();
            img.src = echoImg.url;
            if (echoImg.width && echoImg.height) {
                img.width = echoImg.width;
                img.height = echoImg.height;
            }
            img.onload = function () {
                const that = this;
                ctx.drawImage(img, echoImg.dx, echoImg.dy, that.width, that.height);
            };
        };
        function isMobileDevice() {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        }
        function setBasicEvent() {
            if (isMobileDevice()) {
                edown = "touchstart";
                emove = "touchmove";
                eup = "touchend";
            }
            else {
                edown = "mousedown";
                emove = "mousemove";
                eup = "mouseup";
            }
        }
        function addEvent() {
            cvs.value.addEventListener(edown, MouseDown, false);
            cvs.value.addEventListener(emove, MouseMove, false);
            cvs.value.addEventListener(eup, MouseUp, false);
        }
        function MouseDown(e) {
            const { offsetLeft, offsetTop } = cvs.value;
            const { scrollTop } = targetDom.value;
            startPosition.x = offsetLeft;
            startPosition.y = offsetTop;
            startPosition.scrollY = scrollTop;
            is = true;
            if (e.touches) {
                var x = e.touches[0].clientX, y = e.touches[0].clientY;
            }
            else {
                var x = e.x, y = e.y;
            }
            ctx.moveTo(x - offsetLeft, y - offsetTop + scrollY);
            ctx.beginPath();
        }
        function MouseMove(e) {
            if (is) {
                if (e.touches) {
                    var x = e.touches[0].clientX, y = e.touches[0].clientY;
                }
                else {
                    var x = e.x, y = e.y;
                }
                ctx.lineTo(x - startPosition.x, y - startPosition.y + startPosition.scrollY);
                ctx.stroke();
            }
            else
                return;
        }
        function MouseUp() {
            ctx.closePath();
            is = false;
        }
        function clear() {
            ctx.clearRect(0, 0, props.width, props.height);
        }
        function save() {
            var dataURL = cvs.value.toDataURL("image/png");
            const obj = {
                dataURL,
                width: props.width,
                height: props.height
            };
            e('save', obj);
        }
        return {
            cvs,
            clear,
            save,
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ style: (({ width: __VLS_ctx.width + 'px' })) }, });
    if (!__VLS_ctx.useSlots().option) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("option") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.clear) }, });
        // @ts-ignore
        [width, useSlots, clear,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.save) }, });
        // @ts-ignore
        [save,];
    }
    var __VLS_0 = {};
    __VLS_elementAsFunction(__VLS_intrinsicElements.canvas, __VLS_intrinsicElements.canvas)({ ref: ("cvs"), });
    // @ts-ignore
    (__VLS_ctx.cvs);
    // @ts-ignore
    [cvs,];
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['option'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    const __VLS_name = 'CptCanvassign';
    let __VLS_internalComponent;
}
