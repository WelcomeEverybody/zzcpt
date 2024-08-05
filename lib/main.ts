import { App } from "vue";
import { CptButton } from "./button/index";
import { CptDropdown } from "./dropdown/index";
import { CptCalendar } from "./calendar/index";
import { CptSelect, CptSelectOption } from "./select/index";
import { CptSwitch } from "./switch/index";
import { CptUpload } from "./upload/index";
import { CptCheckbox, CptCheckboxGroup } from "./checkbox/index";
import { CptSlider } from "./slider/index";
import { CptShowText } from "./showText/index";
import { CptInput } from "./input/index";
import { CptDialog } from "./dialog/index";
import loading from "./loading/index";
import { CptBackTop } from "./backtop/index";
import {CptCanvassign} from "./canvassign/index"
import { CptTabs,CptTabPane } from "./tabs/index"
import { CptSteps,CptStep } from "./steps/index"

const zzcpt = [
  CptButton,
  CptDropdown,
  CptCalendar,
  CptSelect,
  CptSelectOption,
  CptSwitch,
  CptUpload,
  CptCheckbox,
  CptCheckboxGroup,
  CptSlider,
  CptShowText,
  CptInput,
  CptDialog,
  loading,
  CptBackTop,
  CptCanvassign,
  CptTabs,CptTabPane,
  CptSteps,CptStep
]

const components = zzcpt;

const install = (app:App) => {
  components.forEach((component:any) => {
    // 自定义指令注册
    if(!component.name) {
      app.use(component);
    }else{
      // 组件注册
      app.component(component.name, component);
    }
  })
}
const ZUI = {
  install
}
export {
  CptButton,
  CptDropdown,
  CptCalendar,
  CptSelect,CptSelectOption,
  CptSwitch,
  CptUpload,
  CptCheckbox,CptCheckboxGroup,
  CptSlider,
  CptShowText,
  CptInput,
  CptDialog,
  CptBackTop,
  CptCanvassign,
  CptTabs,CptTabPane,
  CptSteps,
  CptStep,
  ZUI as default
};