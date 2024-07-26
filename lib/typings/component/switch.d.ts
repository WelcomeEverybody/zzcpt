import { PropType, DefineComponent, ExtractPropTypes } from "vue"

export type SwitchModelValue = boolean
export type SwitchActiveBg = string
export type SwitchCloseBg = string
export type SwitchDisabled = boolean
export type SwitchLoading = boolean
export type SwitchUnChecked = string
export type SwitchChecked = string

export type Switch = {
  modelValue: {
      type: PropType<SwitchModelValue>;
      default: false;
      required: false;
  },
  activeBg: {
    type: PropType<SwitchActiveBg>;
    default: "#409EFF";
    required: false;
  },
  closeBg: {
    type: PropType<SwitchCloseBg>;
    default: '#BFBFBF';
    required: false;
  },
  disabled: {
    type: PropType<SwitchDisabled>;
    default: false;
    required: false;
  },
  loading: {
    type: PropType<SwitchLoading>;
    default: false;
    required: false;
  },
  checked: {
    type: PropType<SwitchChecked>;
    default: '';
    required: false;
  },
  unChecked: {
    type: PropType<SwitchUnChecked>;
    default: '';
    required: false;
  }
}

export type SwitchProps = ExtractPropTypes<Switch>