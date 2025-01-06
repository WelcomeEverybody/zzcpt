import { useSlots } from 'vue';
declare const _default: import("vue").DefineComponent<{
    target: {
        type: StringConstructor;
        default: string;
    };
    width: {
        type: NumberConstructor;
        default: number;
    };
    height: {
        type: NumberConstructor;
        default: number;
    };
    echoImg: {
        type: ObjectConstructor;
        default: {
            url: string;
            width: number;
            height: number;
            dx: number;
            dy: number;
        };
    };
}, {
    cvs: import("vue").Ref<any>;
    clear: () => void;
    save: () => void;
    useSlots: typeof useSlots;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "save"[], "save", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    target: {
        type: StringConstructor;
        default: string;
    };
    width: {
        type: NumberConstructor;
        default: number;
    };
    height: {
        type: NumberConstructor;
        default: number;
    };
    echoImg: {
        type: ObjectConstructor;
        default: {
            url: string;
            width: number;
            height: number;
            dx: number;
            dy: number;
        };
    };
}>> & {
    onSave?: ((...args: any[]) => any) | undefined;
}, {
    target: string;
    width: number;
    height: number;
    echoImg: Record<string, any>;
}, {}>;
export default _default;
