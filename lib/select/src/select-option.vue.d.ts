declare const _default: import("vue").DefineComponent<{
    value: {
        required: boolean;
    };
    label: {
        required: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    multiline: import("vue").Ref<boolean>;
    selectValue: () => void;
    multilineFn: () => boolean;
    textFn: () => boolean;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    value: {
        required: boolean;
    };
    label: {
        required: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    disabled: boolean;
}, {}>;
export default _default;
