import { useSlots } from "vue";
declare const _default: import("vue").DefineComponent<{
    top: {
        type: NumberConstructor;
        default: number;
    };
    bottom: {
        type: NumberConstructor;
        default: number;
    };
    right: {
        type: NumberConstructor;
        default: number;
    };
    target: {
        type: StringConstructor;
        default: string;
    };
    width: {
        type: StringConstructor;
        default: string;
    };
    height: {
        type: StringConstructor;
        default: string;
    };
    bgColor: {
        type: StringConstructor;
        default: string;
    };
}, {
    props: import("@vue/shared").LooseRequired<{
        readonly target: string;
        readonly width: string;
        readonly height: string;
        readonly top: number;
        readonly right: number;
        readonly bottom: number;
        readonly bgColor: string;
        readonly onClick?: ((...args: any[]) => any) | undefined;
    } & {}>;
    dom: any;
    show: import("vue").Ref<boolean>;
    go: () => void;
    useSlots: typeof useSlots;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    top: {
        type: NumberConstructor;
        default: number;
    };
    bottom: {
        type: NumberConstructor;
        default: number;
    };
    right: {
        type: NumberConstructor;
        default: number;
    };
    target: {
        type: StringConstructor;
        default: string;
    };
    width: {
        type: StringConstructor;
        default: string;
    };
    height: {
        type: StringConstructor;
        default: string;
    };
    bgColor: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
}, {
    target: string;
    width: string;
    height: string;
    top: number;
    right: number;
    bottom: number;
    bgColor: string;
}, {}>;
export default _default;
