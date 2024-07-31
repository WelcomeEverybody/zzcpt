import { PropType } from "vue";
export declare const CptSelectOptionProps:{
    props:{
        disabled: {
            type: PropType<boolean>,
            required:false
        },
        label: {
            type: PropType<any>,
            required: true;
        },
        value: {
            type: PropType<any>,
            required: true;
        }
    }
}