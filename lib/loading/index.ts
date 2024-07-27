import type {App, VNode,} from "vue"
import { render,createVNode } from "vue";
import Loading from "./loading.vue";
function hasClass(element:Element, className:string) {
  return element.classList.contains(className);
}
export default {
  install(app:App){
    const VNode: VNode = createVNode(Loading)
    app.directive("loading",{
      mounted(el,binding){
        if(el&&binding.value){
          el.classList.add('zzcpt-loading')
          render(VNode,el)
        }
      },
      updated(el,binding){
        if(binding.value){
          if(!hasClass(el,"zzcpt-loading")){
            el.classList.add("zzcpt-loading")
            render(VNode,el)
            VNode.component?.exposed?.show()
          }
        }else{
          if(hasClass(el,"zzcpt-loading")){
            el.classList.remove("zzcpt-loading")
            VNode.component?.exposed?.hide()
          }
        }
      },
      unmounted(el){
          el.classList.remove("zzcpt-loading")
          VNode.component?.exposed?.hide()
      },
    })
    app.directive("loading-text",{
      mounted(el,binding){
        if(el){
          VNode.component?.exposed?.text(binding.value)
        }
      },
    })
    app.directive("loading-color",{
      mounted(el,binding){
        if(el){
          VNode.component?.exposed?.color(binding.value)
        }
      },
    })
  }
}