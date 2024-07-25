import { DefineComponent } from 'vue'
import {
  ButtonProps,
  DropdownProps,
  CalendarProps,
  SwitchProps,
  SelectProps,
  SelectOptionProps,
  ShowTextProps,
  CptCheckboxProps,
  CptCheckboxGroupProps,
} from './types'
declare module '@vue/runtime-core' {
  export const CptButton: DefineComponent<ButtonProps>
  export const CptCalendar: DefineComponent<CalendarProps>
  export const CptCheckbox: DefineComponent<CptCheckboxProps>
  export const CptCheckboxGroup: DefineComponent<CptCheckboxGroupProps>
  export const CptDropdown: DefineComponent<DropdownProps>
  export const CptSelect: DefineComponent<SelectProps>
  export const CptSelectOption: DefineComponent<SelectOptionProps>
  export const CptShowText: DefineComponent<ShowTextProps>
  export const loading: DefineComponent<SwitchProps>
}

export {}
