<script lang="ts">
import {defineComponent,ref,onMounted,watch} from "vue";
import {CalendarProps} from "./attribute";
import lunar from "../../../utils/lunarDay";
import {CptSelect,CptOption} from "../../select/index";
export default defineComponent({
  name:"CptCalendar",
  props:CalendarProps,
  emits:['update:fullscreen','update:modelValue'],
  setup(_props,{emit:e}){
    const {fullscreen,todoList,colorType,modelValue} = _props;
    const type = ref(_props.type);
    if(!colorType){
      throw new Error("colorType is required");
    };
    const boxItemWidth = ref(0);
    const boxWidth = ref(0);

    const selectYear = ref(<any>[]);
    const selectMonth = ref(<any>[]);

    const selectBox = ref(<any>[])

    const year = ref(new Date().getFullYear());
    const month = ref(new Date().getMonth() + 1);

    const initSelectDate = () => {
      const yearArr = [];
      const monthArr = [];
      for(let i = 2013; i <= 2050; i++){
        yearArr.push(i);
      }
      for(let i = 1; i <= 12; i++){
        monthArr.push(i);
      }
      selectYear.value = yearArr;
      selectMonth.value = monthArr;
    }
    initSelectDate();


    const bygroup = (data:Array<any>)=> {
      const arr:any = [];
      const max = 7;
      const lng = data.length / 7;
      for(let i = 0; i < lng; i++){
        arr.push(data.splice(0,max))
      }
      return arr;
    }
    const createCalendar = (year:number,month:number) => {
      const calendarList:any = [];
      const now = new Date();
      const daysInMonth = new Date(year, month, 0).getDate();
      const firstDayOfWeek = new Date(year, month - 1, 1).getDay();
      let date = 1;
      let prevMonthDays = new Date(year, month - 1, 0).getDate();
      for(let i = 0; i < 6; i++){
          for(let j = 0; j < 7; j++){
              if(i == 0 && j < firstDayOfWeek){
                  const newMonth = month - 1 <= 0 ? 12 : month - 1;
                  const newYear = month - 1 <=0 ? year - 1 : year;
                  const days = prevMonthDays - (firstDayOfWeek - j - 1);
                  calendarList.push({
                    lunar:lunar.solar2lunar(newYear,newMonth,days),
                    day:days,
                    month:false,
                    prev: true,
                    select: false
                  });
              }else if(date > daysInMonth){
                  const newMonth = month + 1 > 12 ? 1 : month + 1;
                  const newYear = month + 1 > 12 ? year + 1 : year;
                  const day = date-daysInMonth
                  calendarList.push({
                    lunar:lunar.solar2lunar(newYear,newMonth,day),
                    day:day,
                    month:false,
                    select:false,
                    next:true,
                  })
                  date++;
              }else{
                  const isNowDay = date === now.getDate() && month === now.getMonth() + 1 && year === now.getFullYear();
                  calendarList.push({
                      lunar:lunar.solar2lunar(year,month,date),
                      day:date,
                      now:isNowDay,
                      month:true,
                      select:selectBox.value.includes(`${year}-${month}-${date}`),
                      date:`${year}-${month}-${date}`,
                      showDate:`${month}-${date}`,
                      todoList:[]
                  });
                  date++;
              }
          }
      }
      return bygroup(calendarList);
    }
    const calendarList = ref(createCalendar(year.value,month.value));
    const select = (items:any) => {
      if(items.prev | items.next){
        if(type.value === 'card')return;
        if(items.prev){
          month.value--;
          if(month.value<1){
            month.value = 12;
            year.value--;
          }
          calendarList.value = createCalendar(year.value,month.value);
        }else if(items.next){
          month.value++;
          if(month.value>12){
            month.value = 1;
            year.value++;
          }
          calendarList.value = createCalendar(year.value,month.value);
        }
        return;
      }
      items.select = !items.select;
      if(items.select){
        selectBox.value.push(items.date);
      }else{
        selectBox.value = selectBox.value.filter((item:any)=>item!==items.date);
      }
      e('update:modelValue',selectBox.value);
    }
    const isFullscreenFn = () => {
      const calendar = document.getElementById('calendar') as HTMLElement;
      calendar.style.cssText = 'position:absolute;top:0;left:0;width:100%;z-index:1100;';
      boxItemWidth.value = (window.innerHeight * (100 / calendarList.value.length)) / 100 - (20/calendarList.value.length);
    };
    const noFullscreenFn = () => {
      const calendar = document.getElementById('calendar') as HTMLElement;
      calendar.style.cssText = `width:${boxWidth.value}px`;
      boxItemWidth.value = boxWidth.value / 7;
    }
    const changeCalendar = (year:number,month:number) => {
      calendarList.value = createCalendar(year,month);
      addToDoList();
    }
    onMounted(() => {
      const dom = document.getElementById('calendar')!.parentNode as HTMLElement;
      if(dom.offsetWidth){
        boxWidth.value = dom.offsetWidth;
      }
      if(fullscreen){
        isFullscreenFn();
      }else{
        noFullscreenFn();
      }
    })
    const addToDoList = () => {
      calendarList.value.map((item:any) => {
          item.map((items:any) => {
            items.todoList = []
            todoLists.value.map((todo:any) => {
              if(items.lunar.date === todo.date){
                items.todoList = todo.list;
              }
            })
          })
        })
    };
    const returnFullscreen = () => {
      e('update:fullscreen',false)
    }
    const todoLists = ref<any[]>([])
    watch(() => _props.todoList,(newV) => {
      if(newV.length > 0 && type.value == 'card'){
        todoLists.value = newV;
        addToDoList()
      }
    },{immediate:true})
    watch(() => _props.fullscreen,(newV) => {
      const dom = document.getElementById('calendar')!.parentNode as HTMLElement;
      if(dom.offsetWidth){
        boxWidth.value = dom.offsetWidth;
      }
      if(newV){
        isFullscreenFn();
      }else{
        noFullscreenFn();
      }
    })
    watch(() => _props.type,(newV) => {
      if(newV === 'card' || newV === 'defalut'){
        type.value = newV;
      }
    })
    watch(() => _props.modelValue,(newV) => {
      selectBox.value = newV;
    },{immediate:true})
    return {
      calendarList,
      boxItemWidth,
      select,
      type,
      todoList,
      colorType,
      selectYear,
      selectMonth,
      year,month,
      changeCalendar,
      returnFullscreen
    }
  }
})
</script>

<template>
  <div id="calendar"  class="calendar">
    <div class="serach flex">
      <CptButton v-if="fullscreen" @click="returnFullscreen" type="primary">退出</CptButton>
      <div v-else></div>
      <div class="flex">
        <CptSelect v-model="year" @change="changeCalendar(year,month)" class="item" size="small" style="width:80px" placeholder="">
          <CptOption v-for="item in selectYear" :value="item" :label="item" />
        </CptSelect>
        <CptSelect v-model="month" @change="changeCalendar(year,month)" class="item" size="small" style="width:80px" placeholder="">
          <CptOption v-for="item in selectMonth" :value="item" :label="item" />
        </CptSelect>
      </div>
    </div>
    <table class="card" v-if="type == 'card'">
      <thead>
        <tr>
          <td width="14.28%">日</td>
          <td width="14.28%">一</td>
          <td width="14.28%">二</td>
          <td width="14.28%">三</td>
          <td width="14.28%">四</td>
          <td width="14.28%">五</td>
          <td width="14.28%">六</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(items,index) in calendarList" :key="index">
          <td 
            v-for="(item,indexs) in items" 
            :key="indexs" 
            @click="select(item)"
            :style="{
              'height':boxItemWidth - 4 + 'px',
              'max-height':boxItemWidth - 4 +'px',
              'max-width':boxItemWidth +'px'
            }"
          >
              <div class="showDate">
                {{ item.day }}
              </div>
              <ul v-if="item.todoList && item.todoList.length > 0">
                <li class="ell" v-for="(todo,todoindex) in item.todoList"  :key="todoindex">
                  <span :title="todo.content">
                    <span class="mark" :style="{'background':colorType[todo.type]}"></span>
                    <span>{{todo.content}}</span>
                  </span>
                </li>
              </ul>
              <ul v-else></ul>
          </td>
        </tr>
      </tbody>
    </table>
    <table class="default" v-else>
      <thead>
        <tr>
          <td>日</td>
          <td>一</td>
          <td>二</td>
          <td>三</td>
          <td>四</td>
          <td>五</td>
          <td>六</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in calendarList" :key="index">
          <td 
            v-for="(items,indexs) in item" 
            :key="indexs"
            class="transition overflow-hidden text-nowrap"
            :style="{'height':boxItemWidth - 4.5 +'px','width':boxItemWidth +'px','max-width':boxItemWidth - 4.5 +'px'}"
            :class="[
              items.prev || items.next ? 'prev':'',
              items.now ? 'now' : '',
              items.select ? 'select' : ''
            ]"
            @click="select(items)"
          >
            <div class="">
              <span>{{ items.day }}</span>
              <span v-if="items.lunar">
                <span v-if="items.lunar.festival">{{ items.lunar.festival }}</span>
                <span v-else-if="items.lunar.lunarFestival">{{ items.lunar.lunarFestival }}</span>
                <span v-else>{{ items.lunar.IDayCn }}</span>
              </span>
              <slot></slot>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<style scoped>
@import url("../css/calendar.css");
</style>