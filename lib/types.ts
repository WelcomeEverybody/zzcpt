interface ButtonProps {
  type?: 'primary' | 'warning' | 'default' | 'success' | "text";
  size?: 'large' | 'default' | 'small';
  shape?: 'circle' | 'default' | 'round';
  loading?: boolean;
  disabled?: boolean;
}
interface DropdownProps {
  trigger?: 'hover' | 'click';
  btnType?: 'primary' | 'default' | 'success' | "text";
  handle?:boolean;   // 点击子项关闭
}
interface CalendarProps {
  fullscreen?: boolean;
  type?:'defalut' | 'card',
  todoList:Array<object>,
  colorType:object
}
interface SwitchProps {
  modelValue:boolean,
  activeBg?:string,
  closeBg?:string,
  disabled?:boolean,
  loading?:boolean,
  checked?:string,
  unChecked?:string,
}
interface SelectProps {
  modelValue: any,
  multiline?:boolean 
}
interface SelectOptionProps {
  value:String,
  label:String
}
interface loading{
  modelValue:boolean
}
interface loadingText{
  modelValue:String
}
interface loadingColor{
  modelValue:String
}
export type {
  ButtonProps,
  DropdownProps,
  CalendarProps,
  SwitchProps,
  SelectProps,
  SelectOptionProps
}