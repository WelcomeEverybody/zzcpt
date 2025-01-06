declare const CalendarProps: {
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
};
export { CalendarProps };
