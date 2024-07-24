import Message from './message.vue'
import { createVNode, render,h  } from 'vue'

const div = document.createElement('div')
div.setAttribute('class', 'cpt-massage-container')
document.body.appendChild(div)
let id = 1;
export default (text:any,type:any) => {// 未来在使用函数时需要传入的组件的props属性
  const VNode = createVNode(Message, { type, text,id:++id}) // 将组件编译为虚拟dom节点
  render(VNode, div) // 将虚拟dom添加到div容器中
  let timer = null  // 定时器标识（用来3秒后关闭消息提示）
//必要步骤以完成，以下为关闭消息提示的定时器功能
  timer = setTimeout(() => {
    // VNode.component?.exposed?.close();
    const node = document.getElementById(`${id}`) as HTMLElement
    div.removeChild(node)
  }, 3000)
}
