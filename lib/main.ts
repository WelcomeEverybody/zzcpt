import { App } from "vue";

import zzcpt, {
  CptButton,
  CptDropdown,
  CptCalendar,
  CptSelect,CptOption,
  CptSwitch,
  CptUpload,
  CptMessage,
  CptLevitatedSphere,
  CptCheckbox,CptCheckboxGroup,CptCheckboxButton,
  CptSlider,
  CptShowText,
  CptInput,
  loading,
  CptDialog
} from "./component/index";

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
  CptSelect,CptOption,
  CptSwitch,
  CptUpload,
  CptMessage,
  CptLevitatedSphere,
  CptCheckbox,CptCheckboxGroup,CptCheckboxButton,
  CptSlider,
  CptShowText,
  CptInput,
  loading,
  CptDialog,
  ZUI as default
};