export declare type Button = {
    /** 按钮类型 */
    type: {
        type: 'primary' | 'warning' | 'default' | 'success' | "text";
        default:'default';
        required: false;
    },
    size: {
        type: 'large' | 'default' | 'small';
        default:'default';
        required: false;
    },
    shape: {
        type: 'circle' | 'default' | 'round';
        default:'default';
        required: false;
    },
    loading: {
        type: boolean;
        default:false;
        required: false;
    },
    disabled: {
        type: boolean;
        default:false;
        required: false;
    }
}
export declare type Calendar = {
fullscreen: {
    type: boolean;
    default: 'primary';
    required: false;
},
type: {
    type: 'defalut' | 'card';
    required: false;
    default: false;
},
todoList: {
    type: Array<any>;
    required: false;
    default: 'hover';
},
colorType: {
    type: Object;
    required: false;
    default: 'hover';
}
}
export declare type CheckBox = {
modelValue: {
    type: any;
    required:true;
},
name: {
    type: any;
    required:true;
}
title: {
    type: string;
    required: true;
},
type: {
    type: string;
    required: false;
},
}
export declare type CheckBoxGroup = {
}
export declare type Dropdown = {
    btnType: {
        type: 'hover' | 'click',
        default: 'primary'
        required: false
    },
    handle: {
        type: 'primary' | 'default' | 'success' | "text",
        required: false,
        default: false
    },
    trigger: {
        type: boolean,
        required: false,
        default: 'hover'
    }
}
export declare type Select = {
    modelValue: {
        type: any;
        required: true;
    },
    multiline: {
        type: boolean;
        default: false;
        required: false;
    }
}
export declare type SelectOption = {
    value: {
        type: String;
        required: true;
    },
    label: {
        type: String;
        required: false;
    }
}
export declare type ShowText = {
    line: {
        type: string;
        required: true;
    },
}
export declare type Switch = {
    modelValue: {
        type: boolean;
        default: false;
        required: false;
    },
    activeBg: {
        type: string;
        default: "#409EFF";
        required: false;
    },
    closeBg: {
        type: string;
        default: '#BFBFBF';
        required: false;
    },
    disabled: {
        type: boolean;
        default: false;
        required: false;
    },
    loading: {
        type: boolean;
        default: false;
        required: false;
    },
    checked: {
        type: string;
        default: '';
        required: false;
    },
    unChecked: {
        type: string;
        default: '';
        required: false;
    }
}
