import{C as l,A as i}from"./code-37b41cb6.js";import{d as s,r as a,c as m,a as o,b as t,w as p,f as e,o as c}from"./index-4e3a7888.js";const d=o("h1",null,"Dropdown 按钮",-1),_=o("p",null,"常用的操作按钮",-1),u=o("h2",null,"基础用法",-1),y=o("p",null,[e("使用 "),o("span",{class:"lable-code"},"trigger"),e("、 "),o("span",{class:"lable-code"},"btnType"),e("、 "),o("span",{class:"lable-code"},"text"),e("、 来修改下拉框 ")],-1),C={class:"preview flex"},b={class:"p-r-1"},v=` <Cpt-dropdown text="Hover me" title="Hover me" trigger='hover' btnType='primary'>
    <Cpt-button type="primary">Hover me</Cpt-button>
    <Cpt-button type="primary">Hover me</Cpt-button>
    <Cpt-button type="primary">Hover me</Cpt-button>
</Cpt-dropdown>
<Cpt-dropdown text="Click me" trigger='click' btnType='primary'>
    <Cpt-button type="primary">Click me</Cpt-button>
    <Cpt-button type="primary">Click me</Cpt-button>
    <Cpt-button type="primary">Click me</Cpt-button>
</Cpt-dropdown>
`,x=s({__name:"dropdown",setup(f){return(h,k)=>{const r=a("Cpt-button"),n=a("Cpt-dropdown");return c(),m("div",null,[d,_,u,y,o("div",C,[o("span",b,[t(n,{text:"Hover me",title:"Hover me",trigger:"hover",btnType:"primary"},{default:p(()=>[t(r,{type:"primary"},{default:p(()=>[e("Hover me")]),_:1}),t(r,{type:"primary"},{default:p(()=>[e("Hover me")]),_:1}),t(r,{type:"primary"},{default:p(()=>[e("Hover me")]),_:1})]),_:1})]),o("span",null,[t(n,{text:"Click me",trigger:"click",btnType:"primary"},{default:p(()=>[t(r,{type:"primary"},{default:p(()=>[e("Click me")]),_:1}),t(r,{type:"primary"},{default:p(()=>[e("Click me")]),_:1}),t(r,{type:"primary"},{default:p(()=>[e("Click me")]),_:1})]),_:1})])]),t(l,{code:v}),t(i,{name:"dropdown"})])}}});export{x as default};
