/* __placeholder__ */
import { defineComponent, ref, onMounted, watch } from "vue";
import { CalendarProps } from "./attribute";
import lunar from "../../utils/lunarDay";
import { CptSelect, CptSelectOption } from "../../select/index";
import { CptScrollbar } from "../../scrollbar";
export default defineComponent({
    name: "CptCalendar",
    props: CalendarProps,
    emits: ['update:fullscreen', 'update:modelValue'],
    setup(_props, { emit: e }) {
        const { fullscreen, todoList, colorType } = _props;
        const type = ref(_props.type);
        if (!colorType) {
            throw new Error("colorType is required");
        }
        ;
        const boxItemWidth = ref(0);
        const boxWidth = ref(0);
        const selectYear = ref([]);
        const selectMonth = ref([]);
        const selectBox = ref([]);
        const dom = ref();
        const year = ref(new Date().getFullYear());
        const month = ref(new Date().getMonth() + 1);
        const initSelectDate = () => {
            const yearArr = [];
            const monthArr = [];
            for (let i = 2013; i <= 2050; i++) {
                yearArr.push(i);
            }
            for (let i = 1; i <= 12; i++) {
                monthArr.push(i);
            }
            selectYear.value = yearArr;
            selectMonth.value = monthArr;
        };
        initSelectDate();
        const bygroup = (data) => {
            const arr = [];
            const max = 7;
            const lng = data.length / 7;
            for (let i = 0; i < lng; i++) {
                arr.push(data.splice(0, max));
            }
            return arr;
        };
        const createCalendar = (year, month) => {
            const calendarList = [];
            const now = new Date();
            const daysInMonth = new Date(year, month, 0).getDate();
            const firstDayOfWeek = new Date(year, month - 1, 1).getDay();
            let date = 1;
            let prevMonthDays = new Date(year, month - 1, 0).getDate();
            for (let i = 0; i < 6; i++) {
                for (let j = 0; j < 7; j++) {
                    if (i == 0 && j < firstDayOfWeek) {
                        const newMonth = month - 1 <= 0 ? 12 : month - 1;
                        const newYear = month - 1 <= 0 ? year - 1 : year;
                        const days = prevMonthDays - (firstDayOfWeek - j - 1);
                        calendarList.push({
                            lunar: lunar.solar2lunar(newYear, newMonth, days),
                            day: days,
                            month: false,
                            prev: true,
                            select: false
                        });
                    }
                    else if (date > daysInMonth) {
                        const newMonth = month + 1 > 12 ? 1 : month + 1;
                        const newYear = month + 1 > 12 ? year + 1 : year;
                        const day = date - daysInMonth;
                        calendarList.push({
                            lunar: lunar.solar2lunar(newYear, newMonth, day),
                            day: day,
                            month: false,
                            select: false,
                            next: true,
                        });
                        date++;
                    }
                    else {
                        const isNowDay = date === now.getDate() && month === now.getMonth() + 1 && year === now.getFullYear();
                        calendarList.push({
                            lunar: lunar.solar2lunar(year, month, date),
                            day: date,
                            now: isNowDay,
                            month: true,
                            select: selectBox.value.includes(`${year}-${month}-${date}`),
                            date: `${year}-${month}-${date}`,
                            showDate: `${month}-${date}`,
                            todoList: []
                        });
                        date++;
                    }
                }
            }
            return bygroup(calendarList);
        };
        const calendarList = ref(createCalendar(year.value, month.value));
        const select = (items) => {
            if (items.prev | items.next) {
                if (type.value === 'card')
                    return;
                if (items.prev) {
                    month.value--;
                    if (month.value < 1) {
                        month.value = 12;
                        year.value--;
                    }
                    calendarList.value = createCalendar(year.value, month.value);
                }
                else if (items.next) {
                    month.value++;
                    if (month.value > 12) {
                        month.value = 1;
                        year.value++;
                    }
                    calendarList.value = createCalendar(year.value, month.value);
                }
                return;
            }
            items.select = !items.select;
            if (items.select) {
                selectBox.value.push(items.date);
            }
            else {
                selectBox.value = selectBox.value.filter((item) => item !== items.date);
            }
            e('update:modelValue', selectBox.value);
        };
        const isFullscreenFn = () => {
            const calendar = dom.value;
            calendar.style.cssText = 'position:absolute;top:0;left:0;width:100%;z-index:1100;';
            boxItemWidth.value = (window.innerHeight * (100 / calendarList.value.length)) / 100 - (20 / calendarList.value.length);
        };
        const noFullscreenFn = () => {
            const calendar = dom.value;
            calendar.style.cssText = `width:${boxWidth.value}px`;
            boxItemWidth.value = boxWidth.value / 7;
        };
        const changeCalendar = (year, month) => {
            calendarList.value = createCalendar(year, month);
            addToDoList();
        };
        onMounted(() => {
            const dom = document.getElementById('calendar').parentNode;
            if (dom.offsetWidth) {
                boxWidth.value = dom.offsetWidth;
            }
            if (fullscreen) {
                isFullscreenFn();
            }
            else {
                noFullscreenFn();
            }
        });
        const addToDoList = () => {
            calendarList.value.map((item) => {
                item.map((items) => {
                    items.todoList = [];
                    todoLists.value.map((todo) => {
                        if (items.lunar.date === todo.date) {
                            items.todoList = todo.list;
                        }
                    });
                });
            });
        };
        const returnFullscreen = () => {
            e('update:fullscreen', false);
        };
        const todoLists = ref([]);
        watch(() => _props.todoList, (newV) => {
            if (newV.length > 0 && type.value == 'card') {
                todoLists.value = newV;
                addToDoList();
            }
        }, { immediate: true });
        watch(() => _props.fullscreen, (newV) => {
            const dom = document.getElementById('calendar').parentNode;
            if (dom.offsetWidth) {
                boxWidth.value = dom.offsetWidth;
            }
            if (newV) {
                isFullscreenFn();
            }
            else {
                noFullscreenFn();
            }
        });
        watch(() => _props.type, (newV) => {
            if (newV === 'card' || newV === 'defalut') {
                type.value = newV;
            }
        });
        watch(() => _props.modelValue, (newV) => {
            selectBox.value = newV;
        }, { immediate: true });
        return {
            calendarList,
            boxItemWidth,
            select,
            type,
            todoList,
            colorType,
            selectYear,
            selectMonth,
            year, month,
            changeCalendar,
            returnFullscreen,
            dom
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ id: ("calendar"), ...{ class: ("calendar") }, ref: ("dom"), });
    // @ts-ignore
    (__VLS_ctx.dom);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("serach flex") }, });
    if (__VLS_ctx.fullscreen) {
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
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onClick': {} }, type: ("primary"), }));
        const __VLS_2 = __VLS_1({ ...{ 'onClick': {} }, type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ...{ 'onClick': {} }, type: ("primary"), }));
        let __VLS_6;
        const __VLS_7 = {
            onClick: (__VLS_ctx.returnFullscreen)
        };
        const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
        let __VLS_3;
        let __VLS_4;
        // @ts-ignore
        [dom, fullscreen, returnFullscreen,];
        __VLS_nonNullable(__VLS_5.slots).default;
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex") }, });
    // @ts-ignore
    const __VLS_8 = {}
        .CptSelect;
    ({}.CptSelect);
    ({}.CptSelect);
    __VLS_components.CptSelect;
    __VLS_components.CptSelect;
    // @ts-ignore
    [CptSelect, CptSelect,];
    // @ts-ignore
    const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({ ...{ 'onChange': {} }, modelValue: ((__VLS_ctx.year)), ...{ class: ("item") }, size: ("small"), ...{ style: ({}) }, placeholder: (""), }));
    const __VLS_10 = __VLS_9({ ...{ 'onChange': {} }, modelValue: ((__VLS_ctx.year)), ...{ class: ("item") }, size: ("small"), ...{ style: ({}) }, placeholder: (""), }, ...__VLS_functionalComponentArgsRest(__VLS_9));
    ({}({ ...{ 'onChange': {} }, modelValue: ((__VLS_ctx.year)), ...{ class: ("item") }, size: ("small"), ...{ style: ({}) }, placeholder: (""), }));
    let __VLS_14;
    const __VLS_15 = {
        onChange: (...[$event]) => {
            __VLS_ctx.changeCalendar(__VLS_ctx.year, __VLS_ctx.month);
            // @ts-ignore
            [year, year, changeCalendar, month,];
        }
    };
    const __VLS_13 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_8, __VLS_10));
    let __VLS_11;
    let __VLS_12;
    for (const [item] of __VLS_getVForSourceType((__VLS_ctx.selectYear))) {
        // @ts-ignore
        const __VLS_16 = {}
            .CptSelectOption;
        ({}.CptSelectOption);
        __VLS_components.CptSelectOption;
        // @ts-ignore
        [CptSelectOption,];
        // @ts-ignore
        const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({ value: ((item)), label: ((item)), }));
        const __VLS_18 = __VLS_17({ value: ((item)), label: ((item)), }, ...__VLS_functionalComponentArgsRest(__VLS_17));
        ({}({ value: ((item)), label: ((item)), }));
        const __VLS_21 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_16, __VLS_18));
        // @ts-ignore
        [selectYear,];
    }
    __VLS_nonNullable(__VLS_13.slots).default;
    // @ts-ignore
    const __VLS_22 = {}
        .CptSelect;
    ({}.CptSelect);
    ({}.CptSelect);
    __VLS_components.CptSelect;
    __VLS_components.CptSelect;
    // @ts-ignore
    [CptSelect, CptSelect,];
    // @ts-ignore
    const __VLS_23 = __VLS_asFunctionalComponent(__VLS_22, new __VLS_22({ ...{ 'onChange': {} }, modelValue: ((__VLS_ctx.month)), ...{ class: ("item") }, size: ("small"), ...{ style: ({}) }, placeholder: (""), }));
    const __VLS_24 = __VLS_23({ ...{ 'onChange': {} }, modelValue: ((__VLS_ctx.month)), ...{ class: ("item") }, size: ("small"), ...{ style: ({}) }, placeholder: (""), }, ...__VLS_functionalComponentArgsRest(__VLS_23));
    ({}({ ...{ 'onChange': {} }, modelValue: ((__VLS_ctx.month)), ...{ class: ("item") }, size: ("small"), ...{ style: ({}) }, placeholder: (""), }));
    let __VLS_28;
    const __VLS_29 = {
        onChange: (...[$event]) => {
            __VLS_ctx.changeCalendar(__VLS_ctx.year, __VLS_ctx.month);
            // @ts-ignore
            [year, changeCalendar, month, month,];
        }
    };
    const __VLS_27 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_22, __VLS_24));
    let __VLS_25;
    let __VLS_26;
    for (const [item] of __VLS_getVForSourceType((__VLS_ctx.selectMonth))) {
        // @ts-ignore
        const __VLS_30 = {}
            .CptSelectOption;
        ({}.CptSelectOption);
        __VLS_components.CptSelectOption;
        // @ts-ignore
        [CptSelectOption,];
        // @ts-ignore
        const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ value: ((item)), label: ((item)), }));
        const __VLS_32 = __VLS_31({ value: ((item)), label: ((item)), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
        ({}({ value: ((item)), label: ((item)), }));
        const __VLS_35 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32));
        // @ts-ignore
        [selectMonth,];
    }
    __VLS_nonNullable(__VLS_27.slots).default;
    if (__VLS_ctx.type == 'card') {
        __VLS_elementAsFunction(__VLS_intrinsicElements.table, __VLS_intrinsicElements.table)({ ...{ class: ("card") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.thead, __VLS_intrinsicElements.thead)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({ width: ("14.28%"), });
        // @ts-ignore
        [type,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({ width: ("14.28%"), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({ width: ("14.28%"), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({ width: ("14.28%"), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({ width: ("14.28%"), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({ width: ("14.28%"), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({ width: ("14.28%"), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.tbody, __VLS_intrinsicElements.tbody)({});
        for (const [items, index] of __VLS_getVForSourceType((__VLS_ctx.calendarList))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)({ key: ((index)), });
            for (const [item, indexs] of __VLS_getVForSourceType((items))) {
                __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({ ...{ onClick: (...[$event]) => {
                            if (!((__VLS_ctx.type == 'card')))
                                return;
                            __VLS_ctx.select(item);
                            // @ts-ignore
                            [calendarList, select,];
                        } }, key: ((indexs)), ...{ style: (({
                            'height': __VLS_ctx.boxItemWidth - 4 + 'px',
                            'max-height': __VLS_ctx.boxItemWidth - 4 + 'px',
                            'max-width': __VLS_ctx.boxItemWidth + 'px',
                        })) }, });
                __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("showDate") }, });
                (item.day);
                // @ts-ignore
                [boxItemWidth, boxItemWidth, boxItemWidth,];
                if (item.todoList && item.todoList.length > 0) {
                    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({});
                    // @ts-ignore
                    const __VLS_36 = {}
                        .CptScrollbar;
                    ({}.CptScrollbar);
                    ({}.CptScrollbar);
                    __VLS_components.CptScrollbar;
                    __VLS_components.CptScrollbar;
                    // @ts-ignore
                    [CptScrollbar, CptScrollbar,];
                    // @ts-ignore
                    const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({}));
                    const __VLS_38 = __VLS_37({}, ...__VLS_functionalComponentArgsRest(__VLS_37));
                    ({}({}));
                    const __VLS_41 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38));
                    for (const [todo, todoindex] of __VLS_getVForSourceType((item.todoList))) {
                        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ class: ("ell") }, key: ((todoindex)), });
                        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ title: ((todo.content)), });
                        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("mark") }, ...{ style: (({ 'background': __VLS_ctx.colorType[todo.type] })) }, });
                        // @ts-ignore
                        [colorType,];
                        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
                        (todo.content);
                    }
                    __VLS_nonNullable(__VLS_41.slots).default;
                }
                else {
                    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({});
                }
            }
        }
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.table, __VLS_intrinsicElements.table)({ ...{ class: ("default") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.thead, __VLS_intrinsicElements.thead)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.tbody, __VLS_intrinsicElements.tbody)({});
        for (const [item, index] of __VLS_getVForSourceType((__VLS_ctx.calendarList))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)({ key: ((index)), });
            for (const [items, indexs] of __VLS_getVForSourceType((item))) {
                __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({ ...{ onClick: (...[$event]) => {
                            if (!(!((__VLS_ctx.type == 'card'))))
                                return;
                            __VLS_ctx.select(items);
                            // @ts-ignore
                            [calendarList, select,];
                        } }, key: ((indexs)), ...{ class: ("transition overflow-hidden text-nowrap") }, ...{ style: (({ 'height': __VLS_ctx.boxItemWidth - 4.5 + 'px', 'width': __VLS_ctx.boxItemWidth + 'px', 'max-width': __VLS_ctx.boxItemWidth - 4.5 + 'px' })) }, ...{ class: (([
                            items.prev || items.next ? 'prev' : '',
                            items.now ? 'now' : '',
                            items.select ? 'select' : ''
                        ])) }, });
                __VLS_styleScopedClasses = ([
                    items.prev || items.next ? 'prev' : '',
                    items.now ? 'now' : '',
                    items.select ? 'select' : ''
                ]);
                __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("") }, });
                __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
                (items.day);
                // @ts-ignore
                [boxItemWidth, boxItemWidth, boxItemWidth,];
                if (items.lunar) {
                    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
                    if (items.lunar.festival) {
                        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
                        (items.lunar.festival);
                    }
                    else if (items.lunar.lunarFestival) {
                        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
                        (items.lunar.lunarFestival);
                    }
                    else {
                        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
                        (items.lunar.IDayCn);
                    }
                }
                var __VLS_42 = {};
            }
        }
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses[''];
        __VLS_styleScopedClasses['calendar'];
        __VLS_styleScopedClasses['serach'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['item'];
        __VLS_styleScopedClasses['item'];
        __VLS_styleScopedClasses['card'];
        __VLS_styleScopedClasses['showDate'];
        __VLS_styleScopedClasses['ell'];
        __VLS_styleScopedClasses['mark'];
        __VLS_styleScopedClasses['default'];
        __VLS_styleScopedClasses['transition'];
        __VLS_styleScopedClasses['overflow-hidden'];
        __VLS_styleScopedClasses['text-nowrap'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    const __VLS_name = "CptCalendar";
    let __VLS_internalComponent;
}
