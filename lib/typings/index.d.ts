import { DefineComponent } from 'vue'

import {ButtonProps} from "./component/button"
import {CalendarProps} from "./component/calendar"
import {CheckBoxProps} from "./component/checkbox"
import {CheckBoxGroupProps} from "./component/checkboxGroup"
import {DropdownProps} from "./component/dropdown"
import {SelectProps} from "./component/select"
import {SelectOptionProps} from "./component/selectOption"
import {ShowTextProps} from "./component/showText"
import {SwitchProps} from "./component/switch"
declare module 'zzcpt' {
  export const CptButton: DefineComponent<ButtonProps>
  export const CptCalendar: DefineComponent<CalendarProps>
  export const CptCheckbox: DefineComponent<CheckBoxProps>
  export const CptCheckboxGroup: DefineComponent<CheckBoxGroupProps>
  export const CptDropdown: DefineComponent<DropdownProps>
  export const CptSelect: DefineComponent<SelectProps>
  export const CptSelectOption: DefineComponent<SelectOptionProps>
  export const CptShowText: DefineComponent<ShowTextProps>
  export const loading: DefineComponent<SwitchProps>
}

