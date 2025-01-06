declare const SelectProps: {
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
};
declare const SelectOptionProps: {
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
};
export { SelectProps, SelectOptionProps };
