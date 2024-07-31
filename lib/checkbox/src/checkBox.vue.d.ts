import { PropType } from 'vue';
export declare const CptCheckboxProps: {
    props:{
        modelValue:{
            type:PropType<any>,
            required:true,
        },
        name:{
            type:PropType<string>,
            required:true
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
        'update:modelValue':(value:any)=>any;
    }
};