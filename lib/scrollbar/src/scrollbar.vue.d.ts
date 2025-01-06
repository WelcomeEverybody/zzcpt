declare const _default: import("vue").DefineComponent<{
    height: {
        type: StringConstructor;
        default: string;
    };
}, {
    props: import("@vue/shared").LooseRequired<{
        readonly height: string;
    } & {}>;
    scrollEle: any;
    scrollbar: any;
    scrollbarBox: any;
    scrollbarShow: import("vue").Ref<boolean>;
    scrollbarEnter: () => void;
    scrollbarMove: (e: any) => void;
    scrollbarDown: (e: any) => void;
    scrollbarLeave: () => void;
    scrollbarUp: () => void;
    scroll: (e: any) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    height: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    height: string;
}, {}>;
export default _default;
