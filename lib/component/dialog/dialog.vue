<script>
import { ref,defineComponent,onMounted,watch } from 'vue';
import { Close } from "@element-plus/icons-vue";
export default defineComponent({
	name: 'CptAlert',
	props:{
		modelValue:{type:Boolean,default:false},
		width:{type:String,default:'60%'},
		title:{type:String,default:"提示"},
		headBg:{type:String,default:'#F1F4F8'},
		headColor:{type:String,default:'#000'},
		headShow:{type:Boolean,default:true},
		iconShow:{type:Boolean,default:true},
		footShow:{type:Boolean,default:true},
		bgClose:{type:Boolean,default:true},
		leaveText:{type:String,default:'取消'},
		enterText:{type:String,default:'确定'},
		leaveColor:{type:String,default:'#000'},
		enterColor:{type:String,default:'#000'},
		leaveShow:{type:Boolean,default:true},
		enterShow:{type:Boolean,default:true},
	},
	components:{
		Close
	},
	emits:['update:modelValue','close','enter'],
	setup(prop,{emit}){
		const pointX = ref();
		const pointY = ref();
		const is = ref(false)

		const width = ref(prop.width);

		const bg = ref();
		const content = ref();
		const head = ref();
		function closeDialog(type){
			if(type == 'bg' && !prop.bgClose) return;
			reset();
			close();
		}
		function enterTransitionFn(){
			content.value.style.transition = 'all 0.3s ease-in-out';
			content.value.style.top = '20%';
			content.value.style.left = '50%';
			content.value.style.transform = "scale(1) translate(-50%, 0)";
			// 移除事件
			content.value.removeEventListener('transitionend',enterTransitionFn);
		}
		function leaveTransitionFn(){
			content.value.style.width = 0;
			content.value.style.left = 0;
			content.value.style.top = 0;
			content.value.style.transition = '';
			content.value.style.transform = ``;
			content.value.removeEventListener('transitionend',leaveTransitionFn);
			is.value = false;
			emit('update:modelValue',false);
		}
		function enter(x,y){
			is.value = true;
			content.value.style.width = width + 'px';
			content.value.style.left = x + 'px';
			content.value.style.top = y + 'px';
			content.value.style.transition = 'all 1ms ease-in-out';
			content.value.style.transform = `scale(0) translate(${0}px,${0}px)`;
			content.value.addEventListener('transitionend',enterTransitionFn)
		}
		function changePoint(){
			document.body.addEventListener('mousedown',(e) => {
				if(is.value) return;
				pointX.value = e.clientX;
				pointY.value = e.clientY;
			})
		}
	  function reset(){
			content.value.style.width = width + 'px';
			content.value.style.left = pointX.value + 'px';
			content.value.style.top = pointY.value + 'px';
			content.value.style.transform = "scale(0) translate(0px, 0px)";
			content.value.addEventListener('transitionend',leaveTransitionFn)
		}
		function close(){
			emit('close',true)
		}
		function BtnEnter(){
			emit('enter',true)
		}
		changePoint();
		onMounted(() => {
		})
		watch(() => prop.modelValue, (newVal) => {
			setTimeout(() => {
				if(newVal){
					enter(pointX.value,pointY.value)
				}
			});
		})
		return {
			bg,
			content,
			closeDialog,
			BtnEnter,
			prop,
			reset
		}
	}
});
</script>
<template>
	<teleport to='body'>
		<div class="CptAlert" v-show="prop.modelValue">
			<div ref="bg" class="bg" @click="closeDialog('bg')"></div>
			<div ref="content" class="content" :style="{width:width}">
				<div class="head" :style="{background:headBg,color:headColor}" ref="head" v-if="headShow">
					{{ title }}
					<el-icon v-if="iconShow" @click="closeDialog"  class="icon"><Close /></el-icon>
				</div>
				<div class="body">
					<slot></slot>
				</div>
				<div class="btn" v-if="footShow">
					<button v-if="leaveShow" :style="{color:leaveColor}" @click="closeDialog">{{leaveText}}</button>
					<button v-if="enterShow" :style="{color:enterColor}" @click="BtnEnter">{{enterText}}</button>
				</div>
			</div>
		</div>
	</teleport>
</template>
<style lang="scss" scoped>
.CptAlert{
	z-index: 1000;
	.content{
		--f-s:18px;
		box-sizing: border-box;
		position: absolute;
		height: fit-content;
		background-color: #fff;
		z-index: 1001;
		border-radius: 8px;
		transform-origin: 0 0;
		transform: scale(0);
		overflow: hidden;
		.body{
			box-sizing: border-box;
			word-wrap: break-word;
			padding: 20px;
		}
		.btn{
			display: flex;
			border-top:1px solid #CFD9E4;
			height: 56px;
			button{
				font-size: var(--f-s);
				font-weight: 400;
				flex: 1;
				border-left: 1px solid #CFD9E4;
				cursor: pointer;
			}
			button::last-child{
				border-right: none;
			}
		}
		.head{
			font-size: var(--f-s);
			font-weight: 400;
			height: 55px;
			line-height: 55px;
			text-align: center;
			position: relative;
			.icon{
				position: absolute;
				right: 20px;
				top: 50%;
				transform: translateY(-50%);
				cursor: pointer;
			}
		}
	}
	.bg{
		z-index: 1000;
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background-color: rgba($color: #000000, $alpha: 0.25);
	}
}
</style>