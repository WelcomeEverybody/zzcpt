# 还没有文档，请先看README.md
# 安装
1. 按需引入/全局引入 ;
2. 引入样式 import "zzcpt/style"


# 全部 
button,dropDown,calendar,switch,select,input,checkbox,radio,upload,modal,message,notification,tabs,slider,loading,badge,showText
# 已完成
button,dropDown,calendar,switch,select,checkbox,radio,upload,showText,loading

https://jjonline.github.io/calendar.js/

下拉菜单弹框1000

interface ButtonProps {
  type?: 'primary' | 'warning' | 'default' | 'success' | 'text';
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
  todoList:[
    { 
      date:'9/11',
      list:[
        { type: 'danger', content: 'This is danger event.' },
        { type: 'success', content: 'This is danger event.' },
      ]
    },
    { 
      date:'9/15',
      list:[
        { type: 'danger', content: 'This is danger event.12333333333333333' },
        { type: 'danger', content: 'This is danger event.' },
      ]
    }
  ],
  colorType:{'success':'#67C23A','danger':'#f00'}
}

switch 开关 loading和disabled不能一起使用
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
  size?: {type: String, default: 'large' | 'default' | 'small'},
  labelBg?: {type: String, default: '#f0f0f0'},
  labelColor?: {type: String, default: '#000'},
  placeholder?:{type:String,default:'Please select'}
}
select值改变时会出发change事件

interface SelectOptionProps {
  value:String,
  label:String,
  disabled?: {type: Boolean, default: false},
}
const SliderProps = {
  modelValue:{default:0},
  step:{type:Number,default:1},
  showTips:{type:Boolean,default:true},
  showStops:{type:Boolean,default:false},
  reverse:{type:Boolean,default:false},
  vertical:{type:Boolean,default:false},
  disabled:{type:Boolean,default:false},
  range:{type:Boolean,default:false}
}
interface showText {
  line:{type:String,default:'1' | '2' | '3' | ....}
}