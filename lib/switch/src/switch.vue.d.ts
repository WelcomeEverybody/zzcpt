import { PropType } from "vue";
export declare const CptSwitchProps:{
    props:{
        modelValue:{
            type:PropType<boolean>,
            required:true,
        },
        activeBg:{
            type:PropType<string>,
            required:false,
        },
        closeBg:{
            type:PropType<string>,
            required:false,
        },
        disabled:{
            type:PropType<boolean>,
            required:false,
        },
        loading:{
            type:PropType<boolean>,
            required:false,
        },
        checked:{
            type:PropType<string>,
            required:false,
        },
        unChecked:{
            type:PropType<string>,
            required:false,
        }
    }

}