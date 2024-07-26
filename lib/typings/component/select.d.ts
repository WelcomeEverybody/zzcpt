import { PropType, DefineComponent, ExtractPropTypes } from "vue"

export type SelectModelvalue = any
export type SelectMultiline = boolean

export type Select = {
  modelValue: {
    type: PropType<SelectModelvalue>;
    required: true;
  },
  multiline: {
    type: PropType<SelectMultiline>;
    default: false;
    required: false;
  }
}

export type SelectProps = ExtractPropTypes<Select>