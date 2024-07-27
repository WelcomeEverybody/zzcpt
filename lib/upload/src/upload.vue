<script lang="ts">
import { defineComponent,ref } from 'vue';
import {CptButton} from "../../button/index"
export default defineComponent({
  name:'CptUpload',
  emits:['change'],
  setup(_props, {emit:e}) {
    const filesList:any = ref([])
    function handleFileSelect(){
      let inputFile = document.createElement('input') as any;
      inputFile.type = 'file';
      inputFile.multiple = true;
      inputFile.onchange = inputChange;
      inputFile.click();
      function inputChange(){
        if(!inputFile.files)return ;
        for(let i = 0;i<inputFile.files.length;i++){
          const file = inputFile.files[i];
          const formData = new FormData();
          formData.append('file',file);
          filesList.value.push({name:file.name,id:file.lastModified,formData})
          e('change',filesList.value)
        }
        inputFile = '';
      }
    }
    return {
      handleFileSelect,
      filesList
    }
  },
})
</script>
<template>
  <div>
    <CptButton @click="handleFileSelect" multiple >upload</CptButton>
    <div>
      <p v-for="item in filesList" :key="item.id">{{ item.name }}</p>
    </div>
  </div>
</template>
<style scoped>
</style>