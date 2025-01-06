const data = {
    button: [
        { a: "type", b: "类型", c: { name: "menu", alert: "'primary' | 'warning' | 'default' | 'success' | 'text'", }, d: "default", },
        { a: "size", b: "按钮大小", c: { name: "menu", alert: "'large' | 'default' | 'small'", }, d: "default", },
        { a: "shape", b: "按钮形状", c: { name: "menu", alert: "'circle' | 'default' | 'round'", }, d: "default", },
        { a: "loading", b: "是否为加载中状态", c: "boolean", d: "false" },
        { a: "disabled", b: "是否为禁用状态", c: "boolean", d: "false" },
    ],
    dropdown: [
        { a: "text", b: "按钮文字", c: "string", d: "dropdown" },
        { a: "trigger", b: "触发方式", c: { name: "menu", alert: "'hover' | 'click'" }, d: "hover" },
        { a: "btnType", b: "按钮类型", c: { name: "menu", alert: "'primary' | 'warning' | 'default' | 'success' | 'text'" }, d: "primary" },
        { a: "handle", b: "点击子项收起", c: "boolean", d: "false" },
    ],
    calendar: [
        { a: 'modelValue', b: '选中的日期（card）', c: 'string[]', d: '[]' },
        { a: 'todoList', b: '待办列表（default）', c: 'string[]', d: '[]' },
        { a: 'type', b: '类型', c: { name: 'menu', alert: '"card" | "default"' }, d: 'default' },
        { a: 'fullscreen', b: '是否全屏', c: 'boolean', d: 'false' },
        { a: 'colorType', b: '颜色类型（自定义添加）', c: 'object', d: '{"success":"#67C23A","danger":"#f00"}' },
    ],
    switch: [
        { a: 'modelValue', b: '绑定值', c: 'string', d: '-' },
        { a: 'activeBg', b: '选中背景颜色', c: 'string', d: '#409EFF' },
        { a: 'closeBg', b: '未选中背景颜色', c: 'string', d: '#BFBFBF' },
        { a: 'checked', b: '选中时显示文字', c: 'string', d: '-' },
        { a: 'unChecked', b: '未选中显示文字', c: 'string', d: '-' },
        { a: 'disabled', b: '是否禁用', c: 'boolean', d: 'false' },
        { a: 'loading', b: '是否为加载中状态', c: 'boolean', d: 'false' },
    ],
    select: [
        { a: 'modelValue', b: '绑定值', c: 'string', d: '-' },
        { a: 'size', b: '按钮大小', c: { name: 'menu', alert: '"large" | "default" | "small"' }, d: 'default' },
        { a: 'labelBg', b: '标签背景颜色', c: 'string', d: '#f0f0f0' },
        { a: 'labelColor', b: '标签文字颜色', c: 'string', d: '#000' },
        { a: 'multiline', b: '是否多选', c: 'boolean', d: 'false' },
        { a: 'placeholder', b: '占位符', c: 'string', d: 'Please select' },
    ],
    selectoption: [
        { a: 'value', b: '选项值', c: 'string', d: '-' },
        { a: 'label', b: '选项文字', c: 'string', d: '-' },
        { a: 'disabled', b: '是否禁用', c: 'boolean', d: 'false' },
    ],
    checkbox: [
        { a: 'modelValue', b: '绑定值', c: 'string', d: '-' },
        { a: 'title', b: '名称', c: 'string', d: 'check' },
        { a: 'type', b: '类型', c: { name: 'menu', alert: '"radio" | "checkbox"' }, d: 'radio' },
    ],
    "checkbox-group": [
        { a: 'modelValue', b: '绑定值', c: 'string[]', d: '[]' },
        { a: 'multiline', b: '是否多选', c: 'boolean', d: 'false' },
    ],
    showtext: [
        { a: "line", b: "显示行数", c: 'string', d: "3" }
    ],
    loading: [
        { a: "v-loading", b: "是否显示加载中", c: 'boolean', d: "false" },
        { a: "v-loading-text", b: "加载中文字", c: 'string', d: "loading" },
        { a: "v-loading-color", b: "加载中颜色", c: 'string', d: "#409EFF" },
    ],
    dialog: [
        { a: "modelValue", b: "绑定值", c: "boolean", d: "-" },
        { a: "width", b: "宽度", c: "string", d: "60%" },
        { a: "title", b: "标题", c: "string", d: "提示" },
        { a: "headBg", b: "头部背景色", c: "string", d: "#F1F4F8" },
        { a: "headColor", b: "头部字体颜色", c: "string", d: "#000" },
        { a: "headShow", b: "是否显示头部", c: "boolean", d: "true" },
        { a: "footShow", b: "是否显示底部", c: "boolean", d: "true" },
        { a: "bgClose", b: "点击遮罩关闭", c: "boolean", d: "true" },
        { a: "leaveText", b: "取消文字", c: "string", d: "取消" },
        { a: "enterText", b: "确定文字", c: "string", d: "确定" },
        { a: "leaveColor", b: "取消文字颜色", c: "string", d: "#000" },
        { a: "enterColor", b: "确定文字颜色", c: "string", d: "#000" },
        { a: "leaveType", b: "取消按钮类型", c: "string", d: "primary" },
        { a: "enterType", b: "确定按钮类型", c: "string", d: "warning" },
        { a: "leaveShow", b: "是否显示取消按钮", c: "boolean", d: "true" },
        { a: "enterShow", b: "是否显示确定按钮", c: "boolean", d: "true" },
        { a: "事件", b: "事件", c: "事件", d: "事件" },
        { a: "close", b: "关闭时触发/遮罩也会触发", c: "fn", d: "()=>{}" },
        { a: "enter", b: "确定时触发", c: "fn", d: "()=>{}" },
    ],
    slider: [
        { a: "modelValue", b: "绑定值", c: "number", d: "0" },
        { a: "min", b: "最小值", c: "number", d: "0" },
        { a: "max", b: "最大值", c: "number", d: "100" },
        { a: "step", b: "步长", c: "number", d: "1" },
        { a: "showTips", b: "是否显示提示", c: "boolean", d: "true" },
        { a: "showStops", b: "是否显示间断点", c: "boolean", d: "false" },
        { a: "reverse", b: "是否反向", c: "boolean", d: "false" },
        { a: "disabled", b: "是否禁用", c: "boolean", d: "false" },
        { a: "range", b: "是否为范围选择", c: "boolean", d: "false" },
    ],
    scrollbar: [
        { a: "height", b: "高度", c: "string", d: "100%" },
    ],
    backtop: [
        { a: "target", b: "绑定值", c: "string", d: "~" },
        { a: "top", b: "距离顶部的距离", c: "number", d: "100" },
        { a: "right", b: "元素右侧定位", c: "number", d: "100" },
        { a: "bottom", b: "元素底部定位", c: "number", d: "100" },
        { a: "width", b: "宽度", c: "string", d: "40px" },
        { a: "height", b: "高度", c: "string", d: "40px" },
        { a: "bgColor", b: "背景颜色", c: "string", d: "#7ac1ff" },
        { a: "事件", b: "事件", c: "事件", d: "事件" },
        { a: "click", b: "点击时触发", c: "fn", d: "()=>{}" },
        { a: "插槽", b: "插槽", c: "插槽", d: "插槽" },
        { a: "default", b: "default", c: "default", d: "UP" },
    ],
    canvassign: [
        { a: "target", b: "绑定值", c: "string", d: "-" },
        { a: "width", b: "宽度", c: "string", d: "400" },
        { a: "height", b: "高度", c: "string", d: "300" },
        { a: "事件", b: "事件", c: "事件", d: "事件" },
        { a: "save", b: "点击时触发", c: "fn", d: "()=>{}" },
        { a: "插槽", b: "插槽", c: "插槽", d: "插槽" },
        { a: "option", b: "option", c: "option", d: "default" },
    ]
};
export default data;
