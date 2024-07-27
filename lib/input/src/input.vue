<script lang="ts">
import { defineComponent,useSlots } from 'vue';

export default defineComponent({
  name: 'CptInput',
  props:{
    type:{type:String,default:'text'},
    leftText:{type:String,default:''},
    rightText:{type:String,default:''},
  },
  setup(props) {
    const isUseSlot = useSlots();
    function ininput(e:any){
      if(props.type=='number'){
        e.target.value = e.target.value.replace(/[^\d]/g,'')
      }
    }
    function chageType(){
      return props.type;
    }
    return {
      ininput,
      chageType,
      isUseSlot
    };
  },
})
</script>

<template>
  <div class="cpt-input flex-center">
    <div v-if="isUseSlot.left">
      <slot name="left"></slot>
    </div>
    <span class="label left-text" v-else-if="leftText">
      {{leftText}}
    </span>
    <input :type="chageType()" @input="ininput" />
    <div v-if="isUseSlot.right">
      <slot name="right"></slot>
    </div>
    <span class="label right-text" v-else-if="rightText">
      {{rightText}}
    </span>
  </div>
</template>
<style scoped>
.cpt-input {
  --d-h:40px;
  --p:10px;
  width: 100%;
  border: 1px solid #ccc;
  height: var(--d-h);
  border-radius:10px;
  overflow:hidden;
  transition: var(--transition);
}

.cpt-input input{
  padding:0;
  margin:0;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 5px;
  outline: none;
  font-size: 16px;
  padding: 0 var(--p);
  border-radius:10px;
}
.cpt-input:has(input:focus) {
  border: 1px solid var(--blue);
}
.label{
  height:100%;
  padding:0 var(--p);
  background: rgba(0, 0, 0, 0.03);
  display: flex;
  align-items: center;
  white-space: nowrap;
  line-height: 1;
}
.left-text{
  border-right:1px solid rgba(0, 0, 0, 0.03);
}
.right-text{
  border-left:1px solid rgba(0, 0, 0, 0.03);
}
</style>