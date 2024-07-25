const data: any = {
  button: [
    {a:"type",b:"类型",c: {  name: "menu",  alert: "'primary' | 'warning' | 'default' | 'success' | 'text'",},d: "default",},
    {a:"size",b:"按钮大小",c: {  name: "menu",  alert: "'large' | 'default' | 'small'",},d: "default",},
    {a:"shape",b:"按钮形状",c: {name: "menu",alert: "'circle' | 'default' | 'round'",},d: "default",},
    {a: "loading", b:"是否为加载中状态",c:"boolean",d:"false" },
    {a: "disabled", b:"是否为禁用状态",c:"boolean",d:"false" },
  ],
  dropdown:[
    {a:"text",b:"按钮文字",c:"string",d:"dropdown"},
    {a:"trigger",b:"触发方式",c:{name:"menu",alert:"'hover' | 'click'"},d:"hover"},
    {a:"btnType",b:"按钮类型",c:{name:"menu",alert:"'primary' | 'warning' | 'default' | 'success' | 'text'"},d:"primary"},
    {a:"handle",b:"点击子项收起",c:"boolean",d:"false"},
  ],
  calendar:[
    {a:'modelValue',b:'选中的日期（card）',c:'string[]',d:'[]'},
    {a:'todoList',b:'待办列表（default）',c:'string[]',d:'[]'},
    {a:'type',b:'类型',c:{name:'menu',alert:'"card" | "default"'},d:'default'},
    {a:'fullscreen',b:'是否全屏',c:'boolean',d:'false'},
    {a:'colorType',b:'颜色类型（自定义添加）',c:'object',d:'{"success":"#67C23A","danger":"#f00"}'},
  ],
  switch:[
    {a:'modelValue',b:'绑定值',c:'string',d:'-'},
    {a:'activeBg',b:'选中背景颜色',c:'string',d:'#409EFF'},
    {a:'closeBg',b:'未选中背景颜色',c:'string',d:'#BFBFBF'},
    {a:'checked',b:'选中时显示文字',c:'string',d:'-'},
    {a:'unChecked',b:'未选中显示文字',c:'string',d:'-'},
    {a:'disabled',b:'是否禁用',c:'boolean',d:'false'},
    {a:'loading',b:'是否为加载中状态',c:'boolean',d:'false'},
  ],
  select:[
    {a:'modelValue',b:'绑定值',c:'string',d:'-'},
    {a:'size',b:'按钮大小',c:{name:'menu',alert:'"large" | "default" | "small"'},d:'default'},
    {a:'labelBg',b:'标签背景颜色',c:'string',d:'#f0f0f0'},
    {a:'labelColor',b:'标签文字颜色',c:'string',d:'#000'},
    {a:'multiline',b:'是否多选',c:'boolean',d:'false'},
    {a:'placeholder',b:'占位符',c:'string',d:'Please select'},
  ],
  selectoption:[
    {a:'value',b:'选项值',c:'string',d:'-'},
    {a:'label',b:'选项文字',c:'string',d:'-'},
    {a:'disabled',b:'是否禁用',c:'boolean',d:'false'},
  ],
  checkbox:[
    {a:'modelValue',b:'绑定值',c:'string',d:'-'},
    {a:'title',b:'名称',c:'string',d:'check'},
    {a:'type',b:'类型',c:{name:'menu',alert:'"radio" | "checkbox"'},d:'radio'},
  ],
  "checkbox-group":[
    {a:'modelValue',b:'绑定值',c:'string[]',d:'[]'},
    {a:'multiline',b:'是否多选',c:'boolean',d:'false'},
  ],
  showtext:[
    {a:"line",b:"显示行数",c:'string',d:"3"}
  ],
  loading:[
    {a:"v-loading",b:"是否显示加载中",c:'boolean',d:"false"},
    {a:"v-loading-text",b:"加载中文字",c:'string',d:"loading"},
    {a:"v-loading-color",b:"加载中颜色",c:'string',d:"#409EFF"},
  ]
};
export default data;
