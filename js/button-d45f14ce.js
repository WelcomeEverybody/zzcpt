import{C as o,A as n}from"./code-2f2356ed.js";import{d as r,r as i,c,a as t,b as s,w as p,e as d,o as l,f as a}from"./index-0095776b.js";const _=d('<h1>Button 按钮</h1><p>常用的操作按钮</p><h2>基础用法</h2><p>使用 <span class="lable-code">type</span>、 <span class="lable-code">size</span>、 <span class="lable-code">shape</span>、 <span class="lable-code">loading</span>、 <span class="lable-code">disabled</span> 来自定义按钮 </p>',4),u={class:"preview"},y={class:"p-r-1"},b={class:"p-r-1"},m={class:"p-r-1"},C={class:"p-r-1"},h={class:"p-r-1"},f={class:"m-t-1"},v={class:"p-r-1"},g={class:"p-r-1"},x={class:"p-r-1"},w={class:"m-t-1"},z={class:"p-r-1"},B={class:"p-r-1"},N={class:"p-r-1"},V={class:"m-t-1"},k={class:"p-r-1"},A={class:"p-r-1"},E=`<div>
    <Cpt-button type="primary">主要按钮</Cpt-button>
    <Cpt-button type="warning">主要按钮</Cpt-button>
    <Cpt-button>主要按钮</Cpt-button>
    <Cpt-button type="success">主要按钮</Cpt-button>
    <Cpt-button type="text">主要按钮</Cpt-button>
</div>
<div>
    <Cpt-button type="primary" size="large">主要按钮</Cpt-button>
    <Cpt-button type="primary">主要按钮</Cpt-button>
    <Cpt-button type="primary" size="small">主要按钮</Cpt-button>
</div>
<div>
    <Cpt-button type="primary" shape="circle">卐</Cpt-button>
    <Cpt-button type="primary">主要按钮</Cpt-button>
    <Cpt-button type="primary" shape="round">主要按钮</Cpt-button>
</div>
<div>
    <Cpt-button type="primary" loading>卐</Cpt-button>
    <Cpt-button type="primary" disabled>主要按钮</Cpt-button>
</div>
`,F=r({__name:"button",setup(S){return(T,j)=>{const e=i("Cpt-button");return l(),c("div",null,[_,t("div",u,[t("div",null,[t("span",y,[s(e,{type:"primary"},{default:p(()=>[a("主要按钮")]),_:1})]),t("span",b,[s(e,{type:"warning"},{default:p(()=>[a("主要按钮")]),_:1})]),t("span",m,[s(e,null,{default:p(()=>[a("主要按钮")]),_:1})]),t("span",C,[s(e,{type:"success"},{default:p(()=>[a("主要按钮")]),_:1})]),t("span",h,[s(e,{type:"text"},{default:p(()=>[a("主要按钮")]),_:1})])]),t("div",f,[t("span",v,[s(e,{type:"primary",size:"large"},{default:p(()=>[a("主要按钮")]),_:1})]),t("span",g,[s(e,{type:"primary"},{default:p(()=>[a("主要按钮")]),_:1})]),t("span",x,[s(e,{type:"primary",size:"small"},{default:p(()=>[a("主要按钮")]),_:1})])]),t("div",w,[t("span",z,[s(e,{type:"primary",shape:"circle"},{default:p(()=>[a("卐")]),_:1})]),t("span",B,[s(e,{type:"primary"},{default:p(()=>[a("主要按钮")]),_:1})]),t("span",N,[s(e,{type:"primary",shape:"round"},{default:p(()=>[a("主要按钮")]),_:1})])]),t("div",V,[t("span",k,[s(e,{type:"primary",loading:""},{default:p(()=>[a("卐")]),_:1})]),t("span",A,[s(e,{type:"primary",disabled:""},{default:p(()=>[a("主要按钮")]),_:1})])])]),s(o,{code:E}),s(n,{name:"button"})])}}});export{F as default};
