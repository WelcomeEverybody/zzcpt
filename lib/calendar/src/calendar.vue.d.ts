import { PropType } from 'vue';
export declare const CptCalendarProps: {
    props:{
        modelValue:{
            type:PropType<any[]>,
            required:true,
        },
        fullscreen:{
            type:PropType<boolean>,
            required:false
        },
        type:{
            type:PropType<string>,
            required:false,
        },
        todoList:{
            type:PropType<any[]>,
            required:false,
        },
        colorType:{
            type:PropType<any>,
            required:false,
        }

    },
    emits:{
        'update:fullscreen':(value:boolean)=>boolean;
        'update:modelValue':(value:any[])=>boolean;
    }
};