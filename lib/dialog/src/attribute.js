const dialogProps = {
    modelValue: { type: Boolean, default: false },
    width: { type: String, default: '60%' },
    title: { type: String, default: "提示" },
    headBg: { type: String, default: '#F1F4F8' },
    headColor: { type: String, default: '#000' },
    headShow: { type: Boolean, default: true },
    footShow: { type: Boolean, default: true },
    bgClose: { type: Boolean, default: true },
    leaveText: { type: String, default: '取消' },
    enterText: { type: String, default: '确定' },
    leaveColor: { type: String, default: '#000' },
    enterColor: { type: String, default: '#000' },
    leaveType: { type: String, default: "primary" },
    enterType: { type: String, default: 'warning' },
    leaveShow: { type: Boolean, default: true },
    enterShow: { type: Boolean, default: true },
};
export { dialogProps };
