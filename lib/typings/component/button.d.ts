import { PropType, DefineComponent, ExtractPropTypes } from "vue"
/** 按钮类型 */
export type ButtonType = 'primary' | 'warning' | 'default' | 'success' | "text"
export type ButtonSize = 'large' | 'default' | 'small'
export type ButtonShape = 'circle' | 'default' | 'round'
export type ButtonLoading = boolean
export type ButtonDisabled = boolean
/** 组件入参 */
export type Button = {
    /** 按钮类型 */
    type: {
        type: PropType<ButtonType>;
        default:'default';
        required: false;
    },
    size: {
        type: PropType<ButtonSize>;
        default:'default';
        required: false;
    },
    shape: {
        type: PropType<ButtonShape>;
        default:'default';
        required: false;
    },
    loading: {
        type: PropType<ButtonLoading>;
        default:false;
        required: false;
    },
    disabled: {
        type: PropType<ButtonDisabled>;
        default:false;
        required: false;
    }
}

/** 组件参数类型 */
export type ButtonProps = ExtractPropTypes<Button>