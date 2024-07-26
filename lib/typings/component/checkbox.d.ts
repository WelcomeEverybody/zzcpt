import { PropType, DefineComponent, ExtractPropTypes } from "vue"

export type CheckBoxModelValue = any
export type CheckBoxName = any
export type CheckBoxTitle = string
export type CheckBoxType = string

export type CheckBox = {
  modelValue: {
    type: PropType<CheckBoxModelValue>;
    required:true;
  },
  name: {
    type: PropType<CheckBoxName>;
    required:true;
  }
  title: {
    type: PropType<CheckBoxTitle>;
    required: true;
  },
  type: {
    type: PropType<CheckBoxType>;
    required: false;
  },

}

export type CheckBoxProps = ExtractPropTypes<CheckBox>