import { PropType, DefineComponent, ExtractPropTypes } from "vue"

export type DropdownTrigger = 'hover' | 'click'
export type DropdownBtnType = 'primary' | 'default' | 'success' | "text"
export type DropdownHandle = boolean

export type Dropdown = {
  btnType: {
    type: PropType<DropdownBtnType>,
    default: 'primary'
    required: false
  },
  handle: {
    type: PropType<DropdownHandle>,
    required: false,
    default: false
  },
  trigger: {
    type: PropType<DropdownTrigger>, // 默认值
    required: false,
    default: 'hover'
  }
}
export type DropdownProps = ExtractPropTypes<Dropdown>