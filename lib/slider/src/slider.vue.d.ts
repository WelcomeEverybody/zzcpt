declare const _default: import("vue").DefineComponent<{
    modelValue: {
        default: number;
    };
    min: {
        type: NumberConstructor;
        default: number;
    };
    max: {
        type: NumberConstructor;
        default: number;
    };
    step: {
        type: NumberConstructor;
        default: number;
    };
    showTips: {
        type: BooleanConstructor;
        default: boolean;
    };
    showStops: {
        type: BooleanConstructor;
        default: boolean;
    };
    reverse: {
        type: BooleanConstructor;
        default: boolean;
    };
    vertical: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    range: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    slider: import("vue").Ref<any>;
    sphere: import("vue").Ref<any>;
    line: import("vue").Ref<any>;
    num: any;
    tipShow: import("vue").Ref<boolean>;
    tipShowC: import("vue").Ref<boolean>;
    step: import("vue").Ref<number>;
    sphereC: import("vue").Ref<any>;
    calcStep: (item: number) => number;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        default: number;
    };
    min: {
        type: NumberConstructor;
        default: number;
    };
    max: {
        type: NumberConstructor;
        default: number;
    };
    step: {
        type: NumberConstructor;
        default: number;
    };
    showTips: {
        type: BooleanConstructor;
        default: boolean;
    };
    showStops: {
        type: BooleanConstructor;
        default: boolean;
    };
    reverse: {
        type: BooleanConstructor;
        default: boolean;
    };
    vertical: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    range: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    reverse: boolean;
    disabled: boolean;
    modelValue: number;
    min: number;
    max: number;
    step: number;
    showTips: boolean;
    showStops: boolean;
    range: boolean;
    vertical: boolean;
}, {}>;
export default _default;
