const SelectProps = {
    modelValue: {},
    size: { type: String, default: 'default' },
    labelBg: { type: String, default: '#f0f0f0' },
    labelColor: { type: String, default: '#000' },
    multiline: { type: Boolean, default: false },
    placeholder: { type: String, default: 'Please select' }
};
const SelectOptionProps = {
    value: { required: true },
    label: { required: true },
    disabled: { type: Boolean, default: false },
};
export { SelectProps, SelectOptionProps };
