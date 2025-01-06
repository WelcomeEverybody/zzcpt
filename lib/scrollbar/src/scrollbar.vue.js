/* __placeholder__ */
import { onUnmounted, ref, nextTick } from "vue";
import { defineComponent, onMounted } from 'vue';
import { ScrollbarProps } from './attribute';
export default defineComponent({
    name: "CptScrollbar",
    props: ScrollbarProps,
    setup(props) {
        var height = props.height === "100%" ? 0 : Number(props.height.replace(/px/, ''));
        const scrollbar = ref();
        const scrollEle = ref();
        const scrollbarBox = ref();
        const scrollbarShow = ref(false);
        const scrollbarHeight = ref(0);
        const isInit = ref(false);
        const isInitShow = ref(true);
        onMounted(() => {
            nextTick(() => {
                init();
            });
            window.addEventListener('resize', () => {
                init();
            });
        });
        function init() {
            if (props.height === "100%") {
                let pTop = window.getComputedStyle(scrollEle.value.parentElement).getPropertyValue('padding-top');
                let pBottom = window.getComputedStyle(scrollEle.value.parentElement).getPropertyValue('padding-bottom');
                height = scrollEle.value.parentElement.getBoundingClientRect().height - Number(pTop.replace(/px/, '')) - Number(pBottom.replace(/px/, ''));
            }
            let itemHeight = 0;
            const childrenLng = scrollbarBox.value.children.length;
            const children = scrollbarBox.value.children;
            for (let i = 0; i < childrenLng; i++) {
                itemHeight += children[i].getBoundingClientRect().height;
            }
            if (itemHeight <= height) {
                isInitShow.value = false;
            }
            initScrollbar();
        }
        function initScrollbar() {
            const boxHeight = scrollbarBox.value.scrollHeight;
            scrollbarHeight.value = height / (boxHeight / height) < 10 ? 15 : height / (boxHeight / height);
            scrollbar.value.style.height = scrollbarHeight.value + 'px';
        }
        let isStart = ref(false);
        let boxTop = ref(0);
        const startPosition = ref(0);
        function scrollbarEnter() {
            if (!isInitShow.value)
                return;
            scrollbarShow.value = true;
        }
        function scrollbarMove(e) {
            if (!isStart.value)
                return;
            var top = (e.y - startPosition.value) - scrollEle.value.offsetTop - boxTop.value;
            if (top <= 0) {
                top = 0;
            }
            else if (top + scrollbarHeight.value >= height) {
                top = height - scrollbarHeight.value;
            }
            scrollbar.value.style.top = top + 'px';
            var scrollTop = Math.trunc(top * ((scrollbarBox.value.scrollHeight - height) / (height - scrollbarHeight.value)));
            setScrollbarBoxTop(scrollTop);
        }
        function setScrollbarPosition(top) {
            scrollbar.value.style.top = top + 'px';
        }
        function setScrollbarBoxTop(top) {
            scrollbarBox.value.scrollTop = top;
        }
        function scrollbarDown(e) {
            setIsInit(true);
            isStart.value = true;
            startPosition.value = e.y - scrollEle.value.offsetTop - scrollbar.value.style.top.replace(/px/, '');
            boxTop.value = scrollbarBox.value.offsetTop;
        }
        function scrollbarLeave() {
            // e.preventDefault();
            if (isStart.value)
                return;
            scrollbarShow.value = false;
        }
        function scrollbarUp() {
            isStart.value = false;
        }
        function setIsInit(e) {
            isInit.value = e;
        }
        function scroll(e) {
            if (isStart.value)
                return;
            setIsInit(true);
            const stepNum = (scrollbarBox.value.scrollHeight - height) / (height - scrollbarHeight.value);
            const top = e.target.scrollTop;
            setScrollbarPosition(Math.trunc((top / stepNum)));
        }
        onMounted(() => {
            document.body.addEventListener('mouseup', scrollbarUp);
            document.body.addEventListener('mousemove', scrollbarMove);
        });
        onUnmounted(() => {
            document.body.removeEventListener('mouseup', scrollbarUp);
            document.body.removeEventListener('mousemove', scrollbarMove);
        });
        return {
            props,
            scrollEle,
            scrollbar,
            scrollbarBox,
            scrollbarShow,
            scrollbarEnter,
            scrollbarMove,
            scrollbarDown,
            scrollbarLeave,
            scrollbarUp,
            scroll,
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("scrollbarBox") }, ...{ style: (({ 'height': __VLS_ctx.props.height })) }, ref: ("scrollEle"), onmouseenter: ((__VLS_ctx.scrollbarEnter)), onmouseleave: ((__VLS_ctx.scrollbarLeave)), });
    // @ts-ignore
    (__VLS_ctx.scrollEle);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ref: ("scrollbarBox"), onscroll: ((__VLS_ctx.scroll)), ...{ style: (({
                'max-height': __VLS_ctx.props.height,
            })) }, ...{ class: ("boxitem") }, });
    // @ts-ignore
    (__VLS_ctx.scrollbarBox);
    var __VLS_0 = {};
    // @ts-ignore
    [props, props, scrollbarEnter, scrollbarLeave, scrollEle, scroll, scrollbarBox,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("scrollbarBoxs") }, ...{ style: ({}) }, });
    __VLS_directiveFunction(__VLS_ctx.vShow)((__VLS_ctx.scrollbarShow));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("scrollbar pointer") }, onmousedown: ((__VLS_ctx.scrollbarDown)), ref: ("scrollbar"), });
    // @ts-ignore
    (__VLS_ctx.scrollbar);
    // @ts-ignore
    [vShow, scrollbarShow, scrollbarDown, scrollbar,];
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['scrollbarBox'];
        __VLS_styleScopedClasses['boxitem'];
        __VLS_styleScopedClasses['scrollbarBoxs'];
        __VLS_styleScopedClasses['scrollbar'];
        __VLS_styleScopedClasses['pointer'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    const __VLS_name = "CptScrollbar";
    let __VLS_internalComponent;
}
