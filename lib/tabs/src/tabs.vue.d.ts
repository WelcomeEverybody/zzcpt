declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: StringConstructor;
        default: string;
    };
    center: {
        type: BooleanConstructor;
        default: boolean;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    position: {
        type: StringConstructor;
        default: string;
    };
}, {
    tabs: any;
    tabsLine: any;
    tabsScroll: any;
    isScroll: import("vue").Ref<boolean>;
    listRef: any;
    show: import("vue").Ref<boolean>;
    more: import("vue").Ref<any>;
    updateModelValue: (val: string) => void;
    getTabsClass: () => any;
    remove: (e2: any) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("remove" | "update:modelValue")[], "remove" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: StringConstructor;
        default: string;
    };
    center: {
        type: BooleanConstructor;
        default: boolean;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    position: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    onRemove?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    type: string;
    modelValue: string;
    center: boolean;
    position: string;
}, {}>;
export default _default;
