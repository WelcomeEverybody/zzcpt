import { PropType, DefineComponent, ExtractPropTypes } from "vue"

export type ShowTextLine = string

export type ShowText = {
  line: {
    type: PropType<ShowTextLine>;
    required: true;
  },
}

export type ShowTextProps = ExtractPropTypes<ShowText>