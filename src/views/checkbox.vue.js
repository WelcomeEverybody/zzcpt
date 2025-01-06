/* __placeholder__ */
import { ref } from 'vue';
import Code from '../components/code.vue';
import Attribute from '../components/attribute.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const checkBoxIs = ref(2);
const checkBoxSelect = ref(['1', '2']);
const code = `<template>
    <cpt-checkbox title="check1" v-model="checkBoxIs" name="1"></cpt-checkbox>
    <cpt-checkbox title="check2" v-model="checkBoxIs" name="2"></cpt-checkbox>
    <cpt-checkbox title="check3" v-model="checkBoxIs" name="3"></cpt-checkbox>

    <cpt-checkbox-group v-model="checkBoxSelect" >
        <cpt-checkbox type="checkbox" title="check1" name="1"></cpt-checkbox>
        <cpt-checkbox type="checkbox" title="check2" name="2"></cpt-checkbox>
        <cpt-checkbox type="checkbox" title="check3" name="3"></cpt-checkbox>
        <cpt-checkbox type="checkbox" title="check4" name="4"></cpt-checkbox>
    </cpt-checkbox-group>
</template>
<script lang="ts" setup>
import {ref} from 'vue'
import {CptCheckbox,CptCheckboxGroup} from '../lib/component/index'
const checkBoxIs = ref(2)
const checkBoxSelect = ref(['1','2'])
<\/script>
`;
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
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("preview") }, });
    // @ts-ignore
    const __VLS_0 = {}
        .CptCheckbox;
    ({}.CptCheckbox);
    ({}.CptCheckbox);
    __VLS_components.CptCheckbox;
    __VLS_components.cptCheckbox;
    __VLS_components.CptCheckbox;
    __VLS_components.cptCheckbox;
    // @ts-ignore
    [CptCheckbox, CptCheckbox,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ title: ("check1"), modelValue: ((__VLS_ctx.checkBoxIs)), name: ("1"), }));
    const __VLS_2 = __VLS_1({ title: ("check1"), modelValue: ((__VLS_ctx.checkBoxIs)), name: ("1"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ title: ("check1"), modelValue: ((__VLS_ctx.checkBoxIs)), name: ("1"), }));
    const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
    // @ts-ignore
    [checkBoxIs,];
    // @ts-ignore
    const __VLS_6 = {}
        .CptCheckbox;
    ({}.CptCheckbox);
    ({}.CptCheckbox);
    __VLS_components.CptCheckbox;
    __VLS_components.cptCheckbox;
    __VLS_components.CptCheckbox;
    __VLS_components.cptCheckbox;
    // @ts-ignore
    [CptCheckbox, CptCheckbox,];
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ title: ("check2"), modelValue: ((__VLS_ctx.checkBoxIs)), name: ("2"), }));
    const __VLS_8 = __VLS_7({ title: ("check2"), modelValue: ((__VLS_ctx.checkBoxIs)), name: ("2"), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({ title: ("check2"), modelValue: ((__VLS_ctx.checkBoxIs)), name: ("2"), }));
    const __VLS_11 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8));
    // @ts-ignore
    [checkBoxIs,];
    // @ts-ignore
    const __VLS_12 = {}
        .CptCheckbox;
    ({}.CptCheckbox);
    ({}.CptCheckbox);
    __VLS_components.CptCheckbox;
    __VLS_components.cptCheckbox;
    __VLS_components.CptCheckbox;
    __VLS_components.cptCheckbox;
    // @ts-ignore
    [CptCheckbox, CptCheckbox,];
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ title: ("check3"), modelValue: ((__VLS_ctx.checkBoxIs)), name: ("3"), }));
    const __VLS_14 = __VLS_13({ title: ("check3"), modelValue: ((__VLS_ctx.checkBoxIs)), name: ("3"), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    ({}({ title: ("check3"), modelValue: ((__VLS_ctx.checkBoxIs)), name: ("3"), }));
    const __VLS_17 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14));
    // @ts-ignore
    [checkBoxIs,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ style: ({}) }, });
    // @ts-ignore
    const __VLS_18 = {}
        .CptCheckboxGroup;
    ({}.CptCheckboxGroup);
    ({}.CptCheckboxGroup);
    __VLS_components.CptCheckboxGroup;
    __VLS_components.cptCheckboxGroup;
    __VLS_components.CptCheckboxGroup;
    __VLS_components.cptCheckboxGroup;
    // @ts-ignore
    [CptCheckboxGroup, CptCheckboxGroup,];
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ modelValue: ((__VLS_ctx.checkBoxSelect)), }));
    const __VLS_20 = __VLS_19({ modelValue: ((__VLS_ctx.checkBoxSelect)), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    ({}({ modelValue: ((__VLS_ctx.checkBoxSelect)), }));
    const __VLS_23 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20));
    // @ts-ignore
    const __VLS_24 = {}
        .CptCheckbox;
    ({}.CptCheckbox);
    ({}.CptCheckbox);
    __VLS_components.CptCheckbox;
    __VLS_components.cptCheckbox;
    __VLS_components.CptCheckbox;
    __VLS_components.cptCheckbox;
    // @ts-ignore
    [CptCheckbox, CptCheckbox,];
    // @ts-ignore
    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ type: ("checkbox"), title: ("check1"), name: ("1"), }));
    const __VLS_26 = __VLS_25({ type: ("checkbox"), title: ("check1"), name: ("1"), }, ...__VLS_functionalComponentArgsRest(__VLS_25));
    ({}({ type: ("checkbox"), title: ("check1"), name: ("1"), }));
    const __VLS_29 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_24, __VLS_26));
    // @ts-ignore
    [checkBoxSelect,];
    // @ts-ignore
    const __VLS_30 = {}
        .CptCheckbox;
    ({}.CptCheckbox);
    ({}.CptCheckbox);
    __VLS_components.CptCheckbox;
    __VLS_components.cptCheckbox;
    __VLS_components.CptCheckbox;
    __VLS_components.cptCheckbox;
    // @ts-ignore
    [CptCheckbox, CptCheckbox,];
    // @ts-ignore
    const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ type: ("checkbox"), title: ("check2"), name: ("2"), }));
    const __VLS_32 = __VLS_31({ type: ("checkbox"), title: ("check2"), name: ("2"), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
    ({}({ type: ("checkbox"), title: ("check2"), name: ("2"), }));
    const __VLS_35 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32));
    // @ts-ignore
    const __VLS_36 = {}
        .CptCheckbox;
    ({}.CptCheckbox);
    ({}.CptCheckbox);
    __VLS_components.CptCheckbox;
    __VLS_components.cptCheckbox;
    __VLS_components.CptCheckbox;
    __VLS_components.cptCheckbox;
    // @ts-ignore
    [CptCheckbox, CptCheckbox,];
    // @ts-ignore
    const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({ type: ("checkbox"), title: ("check3"), name: ("3"), }));
    const __VLS_38 = __VLS_37({ type: ("checkbox"), title: ("check3"), name: ("3"), }, ...__VLS_functionalComponentArgsRest(__VLS_37));
    ({}({ type: ("checkbox"), title: ("check3"), name: ("3"), }));
    const __VLS_41 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38));
    // @ts-ignore
    const __VLS_42 = {}
        .CptCheckbox;
    ({}.CptCheckbox);
    ({}.CptCheckbox);
    __VLS_components.CptCheckbox;
    __VLS_components.cptCheckbox;
    __VLS_components.CptCheckbox;
    __VLS_components.cptCheckbox;
    // @ts-ignore
    [CptCheckbox, CptCheckbox,];
    // @ts-ignore
    const __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({ type: ("checkbox"), title: ("check4"), name: ("4"), }));
    const __VLS_44 = __VLS_43({ type: ("checkbox"), title: ("check4"), name: ("4"), }, ...__VLS_functionalComponentArgsRest(__VLS_43));
    ({}({ type: ("checkbox"), title: ("check4"), name: ("4"), }));
    const __VLS_47 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_42, __VLS_44));
    __VLS_nonNullable(__VLS_23.slots).default;
    // @ts-ignore
    [Code,];
    // @ts-ignore
    const __VLS_48 = __VLS_asFunctionalComponent(Code, new Code({ code: ((__VLS_ctx.code)), }));
    const __VLS_49 = __VLS_48({ code: ((__VLS_ctx.code)), }, ...__VLS_functionalComponentArgsRest(__VLS_48));
    ({}({ code: ((__VLS_ctx.code)), }));
    const __VLS_52 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(Code, __VLS_49));
    // @ts-ignore
    [code,];
    // @ts-ignore
    [Attribute,];
    // @ts-ignore
    const __VLS_53 = __VLS_asFunctionalComponent(Attribute, new Attribute({ name: ("checkbox"), }));
    const __VLS_54 = __VLS_53({ name: ("checkbox"), }, ...__VLS_functionalComponentArgsRest(__VLS_53));
    ({}({ name: ("checkbox"), }));
    const __VLS_57 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(Attribute, __VLS_54));
    // @ts-ignore
    [Attribute,];
    // @ts-ignore
    const __VLS_58 = __VLS_asFunctionalComponent(Attribute, new Attribute({ name: ("checkbox-group"), }));
    const __VLS_59 = __VLS_58({ name: ("checkbox-group"), }, ...__VLS_functionalComponentArgsRest(__VLS_58));
    ({}({ name: ("checkbox-group"), }));
    const __VLS_62 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(Attribute, __VLS_59));
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['preview'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                Code: Code,
                Attribute: Attribute,
                checkBoxIs: checkBoxIs,
                checkBoxSelect: checkBoxSelect,
                code: code,
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
