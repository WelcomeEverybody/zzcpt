import { PropType } from "vue";
export declare const CptBacktopProps: {
    target: {
        type: PropType<string>;
        require:true;
    };
    top: {
        type: PropType<number>;
        require:false;
    };
    right: {
        type: PropType<number>;
        require:false;
    };
    bottom: {
        type: PropType<number>;
        require:false;
    };
    width: {
        type: PropType<string>;
        require:false;
    };
    height: {
        type: PropType<string>;
        require:false;
    };
    bgColor: {
        type: PropType<string>;
        require:false;
    };
}