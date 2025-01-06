/* __placeholder__ */
import { ref } from "vue";
import { useRouter } from 'vue-router';
import menuJson from '../data/menu.json';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
// 根据group分组数据
const menu = JSON.parse(JSON.stringify(menuJson));
var menus = [];
function group() {
    const index = 'group';
    const cloneData = [];
    for (let key of Object.keys(menu)) {
        const item = menu[key];
        const group = item[index];
        if (group) {
            if (!cloneData[group]) {
                cloneData[group] = { name: group, children: [] };
            }
            cloneData[group].children.push(item);
        }
    }
    for (let key of Object.keys(cloneData)) {
        menus.push(cloneData[key]);
    }
}
group();
const router = ref(useRouter().currentRoute.value.fullPath.replace(/\//g, ''));
useRouter().beforeEach(to => {
    router.value = to.fullPath.replace(/\//g, '');
});
const __VLS_fnComponent = (await import('vue')).defineComponent({});
;
let __VLS_functionalComponentProps;
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("menu") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("logo") }, });
    // @ts-ignore
    const __VLS_0 = {}
        .RouterLink;
    ({}.RouterLink);
    ({}.RouterLink);
    __VLS_components.RouterLink;
    __VLS_components.routerLink;
    __VLS_components.RouterLink;
    __VLS_components.routerLink;
    // @ts-ignore
    [RouterLink, RouterLink,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ to: ("/"), }));
    const __VLS_2 = __VLS_1({ to: ("/"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ to: ("/"), }));
    const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
    __VLS_nonNullable(__VLS_5.slots).default;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("content") }, });
    // @ts-ignore
    const __VLS_6 = {}
        .CptScrollbar;
    ({}.CptScrollbar);
    ({}.CptScrollbar);
    __VLS_components.CptScrollbar;
    __VLS_components.CptScrollbar;
    // @ts-ignore
    [CptScrollbar, CptScrollbar,];
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({}));
    const __VLS_8 = __VLS_7({}, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({}));
    const __VLS_11 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8));
    for (const [item, index] of __VLS_getVForSourceType((__VLS_ctx.menus))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("item cursor transition") }, key: ((index)), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("title") }, });
        (item.name);
        // @ts-ignore
        [menus,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        for (const [items] of __VLS_getVForSourceType((item.children))) {
            // @ts-ignore
            const __VLS_12 = {}
                .RouterLink;
            ({}.RouterLink);
            ({}.RouterLink);
            __VLS_components.RouterLink;
            __VLS_components.routerLink;
            __VLS_components.RouterLink;
            __VLS_components.routerLink;
            // @ts-ignore
            [RouterLink, RouterLink,];
            // @ts-ignore
            const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ key: ((items.id)), ...{ class: ("text") }, ...{ class: (([__VLS_ctx.router == items.type ? 'active' : ''])) }, to: ((items.path)), }));
            const __VLS_14 = __VLS_13({ key: ((items.id)), ...{ class: ("text") }, ...{ class: (([__VLS_ctx.router == items.type ? 'active' : ''])) }, to: ((items.path)), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
            ({}({ key: ((items.id)), ...{ class: ("text") }, ...{ class: (([__VLS_ctx.router == items.type ? 'active' : ''])) }, to: ((items.path)), }));
            __VLS_styleScopedClasses = ([router == items.type ? 'active' : '']);
            const __VLS_17 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14));
            (items.name);
            // @ts-ignore
            [router,];
            __VLS_nonNullable(__VLS_17.slots).default;
        }
    }
    __VLS_nonNullable(__VLS_11.slots).default;
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['menu'];
        __VLS_styleScopedClasses['logo'];
        __VLS_styleScopedClasses['content'];
        __VLS_styleScopedClasses['item'];
        __VLS_styleScopedClasses['cursor'];
        __VLS_styleScopedClasses['transition'];
        __VLS_styleScopedClasses['title'];
        __VLS_styleScopedClasses['text'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                menus: menus,
                router: router,
            };
        },
    });
}
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
