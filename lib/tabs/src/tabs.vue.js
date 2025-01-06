/* __placeholder__ */
import { defineComponent, ref, nextTick, watch, onMounted } from 'vue';
import { debounce } from "../../utils";
// import {CptDropdown} from "../../dropdown/index"
export default defineComponent({
    name: 'CptTabs',
    props: {
        modelValue: {
            type: String,
            default: ''
        },
        center: {
            type: Boolean,
            default: false
        },
        type: {
            type: String,
            default: 'text'
        },
        position: {
            type: String,
            default: 'top'
        }
    },
    emits: ['update:modelValue', 'remove'],
    setup(props, { emit: e }) {
        const tabs = ref([]);
        const tabsLine = ref();
        const tabsScroll = ref();
        const isScroll = ref(false);
        const xBox = ['top', 'bottom'];
        // const ybox = ['left','right']; 
        onMounted(() => {
            nextTick(() => {
                console.log(props.modelValue);
                setTabsLine(props.modelValue);
                addScrollEvent();
                getIsScroll();
            });
        });
        function updateModelValue(val) {
            e("update:modelValue", val);
            setTabsLine(val);
        }
        function setTabsLine(val) {
            const doms = document.querySelectorAll(".tabs-item");
            const left = tabsScroll.value.scrollLeft;
            if (props.type == 'card')
                return;
            doms.forEach((item) => {
                if (item.getAttribute('text') == val) {
                    if (xBox.includes(props.position)) {
                        tabsLine.value.style.left = item.offsetLeft - left + "px";
                        tabsLine.value.style.width = item.offsetWidth + "px";
                    }
                }
            });
        }
        function getTabsClass() {
            const obj = {
                'text': {
                    "line": true,
                    "active": 'tabs-item-active',
                    "tabsitem": "tabs-item",
                    "tabsboxline": ''
                },
                'card': {
                    "line": false,
                    "active": 'tabs-item-box-active',
                    "tabsitem": "tabs-item-box",
                    "tabsboxline": 'tabs-box-line'
                }
            };
            return obj[props.type];
        }
        function getIsScroll() {
            isScroll.value = tabsScroll.value.scrollWidth > tabsScroll.value.offsetWidth;
        }
        function addScrollEvent() {
            if (xBox.includes(props.position)) {
                tabsScroll.value.addEventListener('mousewheel', (e) => {
                    if (e.wheelDelta < 0) {
                        tabsScroll.value.scroll((Math.abs(e.wheelDelta)) + tabsScroll.value.scrollLeft, 0);
                        setTabsLine(props.modelValue);
                    }
                    else {
                        tabsScroll.value.scroll(tabsScroll.value.scrollLeft - e.wheelDelta, 0);
                        setTabsLine(props.modelValue);
                    }
                });
            }
        }
        const listRef = ref();
        const show = ref(false);
        const more = ref();
        function remove(e2) {
            tabs.value = tabs.value.filter((item) => {
                return item.label != e2.label;
            });
            e("remove", e2);
        }
        watch(() => tabs.value, () => {
            debounce(() => {
                getIsScroll();
            }, 500);
        }, { deep: true });
        watch(() => props.modelValue, (val) => {
            setTabsLine(val);
            getIsScroll();
        });
        return {
            tabs,
            tabsLine,
            tabsScroll,
            isScroll,
            listRef,
            show,
            more,
            updateModelValue,
            getTabsClass,
            remove
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("cpt-tabs") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex") }, ...{ class: (([__VLS_ctx.isScroll ? 'scrollW' : ''])) }, });
    __VLS_styleScopedClasses = ([isScroll ? 'scrollW' : '']);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ref: ("tabsScroll"), ...{ class: ("tabs-box scroll") }, ...{ class: (([__VLS_ctx.center ? 'tabs-box-center' : '', __VLS_ctx.getTabsClass().tabsboxline])) }, });
    // @ts-ignore
    (__VLS_ctx.tabsScroll);
    __VLS_styleScopedClasses = ([center ? 'tabs-box-center' : '', getTabsClass().tabsboxline]);
    for (const [item, index] of __VLS_getVForSourceType((__VLS_ctx.tabs))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (...[$event]) => {
                    __VLS_ctx.updateModelValue(item.label);
                    // @ts-ignore
                    [isScroll, center, getTabsClass, tabsScroll, tabs, updateModelValue,];
                } }, ...{ onMouseenter: (...[$event]) => {
                    __VLS_ctx.show = true;
                    // @ts-ignore
                    [show,];
                } }, ...{ class: (([item.label == __VLS_ctx.modelValue ? __VLS_ctx.getTabsClass().active : '', __VLS_ctx.getTabsClass().tabsitem])) }, key: ((index)), ...{ class: ("tabs-box-item flex align-center justify-center") }, text: ((item.label)), });
        __VLS_styleScopedClasses = ([item.label == modelValue ? getTabsClass().active : '', getTabsClass().tabsitem]);
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ style: ({}) }, });
        (item.label);
        // @ts-ignore
        [getTabsClass, getTabsClass, modelValue,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ onClick: (...[$event]) => {
                    __VLS_ctx.remove(item);
                    // @ts-ignore
                    [remove,];
                } }, ...{ class: ("close") }, });
    }
    if (__VLS_ctx.getTabsClass().line) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("tabs-line-box") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ref: ("tabsLine"), ...{ class: ("tabs-line") }, });
        // @ts-ignore
        (__VLS_ctx.tabsLine);
        // @ts-ignore
        [getTabsClass, tabsLine,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("tabs-show-line") }, });
    }
    var __VLS_0 = {};
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['cpt-tabs'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['tabs-box'];
        __VLS_styleScopedClasses['scroll'];
        __VLS_styleScopedClasses['tabs-box-item'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['align-center'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['close'];
        __VLS_styleScopedClasses['tabs-line-box'];
        __VLS_styleScopedClasses['tabs-line'];
        __VLS_styleScopedClasses['tabs-show-line'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    const __VLS_name = 'CptTabs';
    let __VLS_internalComponent;
}
