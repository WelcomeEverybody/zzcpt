declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: ArrayConstructor;
        default: never[];
    };
    fullscreen: {
        type: BooleanConstructor;
        default: boolean;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    todoList: {
        type: ArrayConstructor;
        default: never[];
    };
    colorType: {
        type: ObjectConstructor;
        default: {
            success: string;
            danger: string;
        };
    };
}, {
    calendarList: any;
    boxItemWidth: import("vue").Ref<number>;
    select: (items: any) => void;
    type: import("vue").Ref<string>;
    todoList: unknown[];
    colorType: Record<string, any>;
    selectYear: any;
    selectMonth: any;
    year: import("vue").Ref<number>;
    month: import("vue").Ref<number>;
    changeCalendar: (year: number, month: number) => void;
    returnFullscreen: () => void;
    dom: import("vue").Ref<any>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "update:fullscreen")[], "update:modelValue" | "update:fullscreen", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: ArrayConstructor;
        default: never[];
    };
    fullscreen: {
        type: BooleanConstructor;
        default: boolean;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    todoList: {
        type: ArrayConstructor;
        default: never[];
    };
    colorType: {
        type: ObjectConstructor;
        default: {
            success: string;
            danger: string;
        };
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    "onUpdate:fullscreen"?: ((...args: any[]) => any) | undefined;
}, {
    type: string;
    modelValue: unknown[];
    todoList: unknown[];
    fullscreen: boolean;
    colorType: Record<string, any>;
}, {}>;
export default _default;
