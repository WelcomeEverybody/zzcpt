import {CptButton} from "./button/index";
import {CptDropdown} from "./Dropdown/index";
import {CptCalendar} from "./calendar/index";
import {CptSelect,CptOption} from "./select/index";
import {CptSwitch} from "./switch/index";
import {CptUpload} from "./upload/index";
import {CptMessage} from "./message/index";
import {CptLevitatedSphere} from "./levitatedSphere/index";
import { CptCheckbox,CptCheckboxGroup,CptCheckboxButton } from "./checkbox/index";
import { CptSlider } from "./slider/index";
import { CptShowText } from "./showText/index";
import { CptInput } from "./input/index";
import { CptDialog } from "./dialog/index";
import loading from "./loading/index";


const component = [
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
];

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
  component as default
}