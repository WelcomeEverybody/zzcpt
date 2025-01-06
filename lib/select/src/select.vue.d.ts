declare const _default: import("vue").DefineComponent<{
    modelValue: {};
    size: {
        type: StringConstructor;
        default: string;
    };
    labelBg: {
        type: StringConstructor;
        default: string;
    };
    labelColor: {
        type: StringConstructor;
        default: string;
    };
    multiline: {
        type: BooleanConstructor;
        default: boolean;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
}, {
    inputFocus: () => void;
    multiple: import("vue").Ref<any>;
    optionClick: (e: any) => void;
    iptD: import("vue").Ref<any>;
    optionShow: import("vue").Ref<any>;
    text: any;
    select: import("vue").Ref<any>;
    multilineArr: any;
    labelRemove: (item: any) => void;
    selectOption: import("vue").Ref<any>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change")[], "update:modelValue" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {};
    size: {
        type: StringConstructor;
        default: string;
    };
    labelBg: {
        type: StringConstructor;
        default: string;
    };
    labelColor: {
        type: StringConstructor;
        default: string;
    };
    multiline: {
        type: BooleanConstructor;
        default: boolean;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    size: string;
    labelBg: string;
    labelColor: string;
    multiline: boolean;
    placeholder: string;
}, {}>;
export default _default;
