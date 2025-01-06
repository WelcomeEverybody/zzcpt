declare const _default: import("vue").DefineComponent<{
    trigger: {
        type: StringConstructor;
        default: string;
    };
    btnType: {
        type: StringConstructor;
        default: string;
    };
    handle: {
        type: BooleanConstructor;
        default: boolean;
    };
    text: {
        type: StringConstructor;
        default: string;
    };
}, {
    isShow: () => void;
    show: import("vue").Ref<boolean>;
    listRef: import("vue").Ref<any>;
    btnRef: import("vue").Ref<any>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    trigger: {
        type: StringConstructor;
        default: string;
    };
    btnType: {
        type: StringConstructor;
        default: string;
    };
    handle: {
        type: BooleanConstructor;
        default: boolean;
    };
    text: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    text: string;
    trigger: string;
    btnType: string;
    handle: boolean;
}, {}>;
export default _default;
