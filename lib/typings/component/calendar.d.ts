import { PropType, DefineComponent, ExtractPropTypes } from "vue"

export type CalendarFullscreen = boolean
export type CalendarType = 'defalut' | 'card'
export type CalendartodoList = Array<any>
export type CalendarColorType = Object

export type Calendar = {
  fullscreen: {
    type: PropType<CalendarFullscreen>;
    default: 'primary';
    required: false;
  },
  type: {
    type: PropType<CalendarType>;
    required: false;
    default: false;
  },
  todoList: {
    type: PropType<CalendartodoList>;
    required: false;
    default: 'hover';
  },
  colorType: {
    type: PropType<CalendarColorType>;
    required: false;
    default: 'hover';
  }
}
export type CalendarProps = ExtractPropTypes<Calendar>