declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    activeBg: {
        type: StringConstructor;
        default: string;
    };
    closeBg: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    checked: {
        type: StringConstructor;
        default: string;
    };
    unChecked: {
        type: StringConstructor;
        default: string;
    };
}, {
    click: () => void;
    switchs: import("vue").Ref<any>;
    props: import("@vue/shared").LooseRequired<{
        readonly loading: boolean;
        readonly disabled: boolean;
        readonly modelValue: boolean;
        readonly activeBg: string;
        readonly closeBg: string;
        readonly checked: string;
        readonly unChecked: string;
        readonly "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    } & {}>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    activeBg: {
        type: StringConstructor;
        default: string;
    };
    closeBg: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    checked: {
        type: StringConstructor;
        default: string;
    };
    unChecked: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    loading: boolean;
    disabled: boolean;
    modelValue: boolean;
    activeBg: string;
    closeBg: string;
    checked: string;
    unChecked: string;
}, {}>;
export default _default;
