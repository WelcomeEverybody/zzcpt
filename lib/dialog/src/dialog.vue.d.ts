declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    width: {
        type: StringConstructor;
        default: string;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    headBg: {
        type: StringConstructor;
        default: string;
    };
    headColor: {
        type: StringConstructor;
        default: string;
    };
    headShow: {
        type: BooleanConstructor;
        default: boolean;
    };
    footShow: {
        type: BooleanConstructor;
        default: boolean;
    };
    bgClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    leaveText: {
        type: StringConstructor;
        default: string;
    };
    enterText: {
        type: StringConstructor;
        default: string;
    };
    leaveColor: {
        type: StringConstructor;
        default: string;
    };
    enterColor: {
        type: StringConstructor;
        default: string;
    };
    leaveType: {
        type: StringConstructor;
        default: string;
    };
    enterType: {
        type: StringConstructor;
        default: string;
    };
    leaveShow: {
        type: BooleanConstructor;
        default: boolean;
    };
    enterShow: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    bg: import("vue").Ref<any>;
    content: import("vue").Ref<any>;
    closeDialog: (type: any) => void;
    BtnEnter: () => void;
    prop: import("@vue/shared").LooseRequired<{
        readonly title: string;
        readonly modelValue: boolean;
        readonly width: string;
        readonly headBg: string;
        readonly headColor: string;
        readonly headShow: boolean;
        readonly footShow: boolean;
        readonly bgClose: boolean;
        readonly leaveText: string;
        readonly enterText: string;
        readonly leaveColor: string;
        readonly enterColor: string;
        readonly leaveType: string;
        readonly enterType: string;
        readonly leaveShow: boolean;
        readonly enterShow: boolean;
        readonly "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        readonly onClose?: ((...args: any[]) => any) | undefined;
        readonly onEnter?: ((...args: any[]) => any) | undefined;
    } & {}>;
    reset: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("close" | "enter" | "update:modelValue")[], "close" | "enter" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    width: {
        type: StringConstructor;
        default: string;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    headBg: {
        type: StringConstructor;
        default: string;
    };
    headColor: {
        type: StringConstructor;
        default: string;
    };
    headShow: {
        type: BooleanConstructor;
        default: boolean;
    };
    footShow: {
        type: BooleanConstructor;
        default: boolean;
    };
    bgClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    leaveText: {
        type: StringConstructor;
        default: string;
    };
    enterText: {
        type: StringConstructor;
        default: string;
    };
    leaveColor: {
        type: StringConstructor;
        default: string;
    };
    enterColor: {
        type: StringConstructor;
        default: string;
    };
    leaveType: {
        type: StringConstructor;
        default: string;
    };
    enterType: {
        type: StringConstructor;
        default: string;
    };
    leaveShow: {
        type: BooleanConstructor;
        default: boolean;
    };
    enterShow: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onClose?: ((...args: any[]) => any) | undefined;
    onEnter?: ((...args: any[]) => any) | undefined;
}, {
    title: string;
    modelValue: boolean;
    width: string;
    headBg: string;
    headColor: string;
    headShow: boolean;
    footShow: boolean;
    bgClose: boolean;
    leaveText: string;
    enterText: string;
    leaveColor: string;
    enterColor: string;
    leaveType: string;
    enterType: string;
    leaveShow: boolean;
    enterShow: boolean;
}, {}>;
export default _default;
