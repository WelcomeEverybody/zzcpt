<script setup lang="ts">
import { ref } from 'vue';
import {CptMessage} from "../lib/main";
let num = 1;
const alert = () => {

  CptMessage('ceshi' + ++num,'sdf')
}
const is = ref(false);
const list:any = ref([]);
setTimeout(() => {
  list.value = [
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
    },
  ]
}, 2000);
setTimeout(() => {
  list.value = [
    { 
      date:'9/10',
      list:[
        { type: 'danger', content: 'This is danger event.' },
        { type: 'success', content: 'This is danger event.' },
      ]
    },
    { 
      date:'9/19',
      list:[
      { type: 'danger', content: 'This is danger event.12333333333333333' },
        { type: 'danger', content: 'This is danger event.' },
        { type: 'danger', content: 'This is danger event.' },
      ]
    },
  ]
}, 5000);
const isFullScreen = ref(false);
const colorType = {
  'success':'#67C23A',
  'danger':'#f00',
}
let types = ref('');
const changeFn = () => {
  if(types.value === 'defalut'){
    types.value = 'card';
  }
  else if(types.value === 'card'){
    types.value = 'defalut';
  }
}

const fileList = (e: any) => {
  console.log(e);
}

const switchP = ref(true);
const switchF = ref(true);
const switchLoading = ref(false);
setTimeout(() => {
  switchLoading.value = true;
  setTimeout(() => {
    switchLoading.value = false;
  }, 3000);
}, 1000);

const selectVal = ref();
const selectOption:Array<any> = []

setTimeout(() => {
  for(let i = 1;i < 100;i++){
    selectOption.push({id:i,label:`label${i}`,value:`value${i}`})
    if(i === 10){
      selectOption[9].disabled = true;
    }
    if(i === 5){
  
    }
  }
}, 1000);
setTimeout(() => {
  selectVal.value = 'value1';
}, 2000);

const sphereList = [
  {id:1,name:'首页',path:'/home',url:'https://img1.baidu.com/it/u=2953940086,3621245794&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500'},
  {id:2,name:'订单',path:'/order',url:'https://img1.baidu.com/it/u=2549395856,3285294368&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800'},
  {id:3,name:'新闻',path:'/user',url:'https://img0.baidu.com/it/u=293908263,3152125914&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281'}
]

const checkBoxIs = ref(2);
const checkBoxSelect = ref(['2','4']);
const checkBoxButton = ref(2);

// const slider = ref(0);
const slider = ref([10,50]);
const loadings = ref(false);
setTimeout(() => {
  loadings.value = true;
  setTimeout(() => {
    loadings.value = false;
  }, 3000);
}, 2000);
</script>

<template>
  <div style="width: 500px;height: 700px;" >
    <cpt-Button  type="text" @click="alert">message</cpt-Button>
    
    <cpt-dropdown text="下拉菜单" trigger="click"  list btn-type="primary">
      <cpt-button type="success" v-for="item in 10" :key="item">{{ item }}4654654</cpt-button>
    </cpt-dropdown>
    <cpt-button @click="changeFn" style="z-index: 1101;">changeFn</cpt-button>
    <cpt-button @click="isFullScreen = !isFullScreen,changeFn" style="z-index: 1101;">click</cpt-button>
    <cpt-calendar :fullscreen="isFullScreen" :type="types" :todoList="list" >
    </cpt-calendar>
    <div style="width: 100%;text-align: center;">
      <cpt-switch v-model="switchP" />
      <cpt-switch 
        v-model="switchF" 
        :loading="switchLoading" 
        checked="open" 
        unChecked="close">
      </cpt-switch>
    </div>
    <div>
      <cpt-upload @change="fileList"></cpt-upload>
    </div>
    <div>
      <cpt-select 
        v-loading="loadings"
        label-bg="#409EFF" 
        label-color="#fff" 
        :multiline="true" 
        size="defalut" 
        placeholder="请选择" 
        v-model="selectVal"
        >
        <cpt-option 
          :disabled="item.disabled" 
          v-for="item in selectOption" 
          :key="item.id" 
          :label="item.label" 
          :value="item.value" />
      </cpt-select>
    </div>
    <!-- <p style="height:200px"></p> -->
    <!-- <cpt-message></cpt-message> -->
    <CptLevitatedSphere direction="down" size="50px" top="50px" left="50px">
      <div v-for="(item,index) in sphereList" :key="index">{{ item.name }}</div>
    </CptLevitatedSphere>
    <div style="margin-left: 20px;margin-top: 20px;">
      <p></p>
      <p>{{ checkBoxIs }}</p>
      <p></p>
      <cpt-checkbox title="check1" v-model="checkBoxIs" name="1"></cpt-checkbox>
      <cpt-checkbox title="check2" v-model="checkBoxIs" name="2"></cpt-checkbox>
      <cpt-checkbox title="check3" v-model="checkBoxIs" name="3"></cpt-checkbox>
      <p></p>
      <p>{{ checkBoxSelect }}</p>
      <p></p>
      <cpt-checkbox-group v-model="checkBoxSelect" >
        <cpt-checkbox type="checkbox" title="check1" name="1"></cpt-checkbox>
        <cpt-checkbox type="checkbox" title="check2" name="2"></cpt-checkbox>
        <cpt-checkbox type="checkbox" title="check3" name="3"></cpt-checkbox>
        <cpt-checkbox type="checkbox" title="check4" name="4"></cpt-checkbox>
      </cpt-checkbox-group>
      
    </div>
    <div style="margin-left:100px">
      {{slider}}
      <CptSlider  
        v-model="slider" 
        :range="true" 
        :step="1"
        :show-stops="false" 
        :reverse="false" 
        :show-tips="true" 
      />
      
    </div>
    <div style="width:300px;overflow:hidden">
      <cpt-show-text line="3" >大夫日日日日夫日日日夫日夫日夫日日日夫日夫日日日夫日夫日日日夫日夫日夫日夫日日日日3日夫日夫日夫日日夫日夫日夫日日夫日夫日夫日日夫日夫日夫日33d日日日333d日日日333dsf士大夫日日日日333ds</cpt-show-text>
    </div>
    <div style="height:20px"></div>
    <div>
      <input  type="text">
      <cpt-input  style="height:50px" type="text" left-text="姓名：" right-text=".com" />
    </div>
    <div style="height:200px"></div>
  </div>
</template>

<style>
html{
  font-size: 14px;
}
</style>
