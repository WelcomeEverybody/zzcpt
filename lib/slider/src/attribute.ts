const SliderProps = {
  modelValue:{default:0},
  min:{type:Number,default:0},
  max:{type:Number,default:100},
  step:{type:Number,default:1},
  showTips:{type:Boolean,default:true},
  showStops:{type:Boolean,default:false},
  reverse:{type:Boolean,default:false},
  vertical:{type:Boolean,default:false},
  disabled:{type:Boolean,default:false},
  range:{type:Boolean,default:false}
}
export { SliderProps };