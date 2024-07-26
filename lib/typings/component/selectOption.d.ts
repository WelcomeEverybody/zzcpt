import { PropType, DefineComponent, ExtractPropTypes } from "vue"

export type SelectOptionValue = String
export type SelectOptionLable = String

export type SelectOption = {
  value: {
    type: PropType<SelectOptionValue>;
    required: true;
  },
  label: {
    type: PropType<SelectOptionLable>;
    required: false;
  }
}

export type SelectOptionProps = ExtractPropTypes<SelectOption>