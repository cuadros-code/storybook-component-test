var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import MyLabel from "../../components/MyLabel";
export default {
    title: 'Components/Label',
    component: MyLabel,
    argTypes: {
        color: { control: 'color' },
    }
};
var Template = function (args) { return _jsx(MyLabel, __assign({}, args)); };
export var Primary = Template.bind({});
Primary.args = {
    label: 'Primary Label',
    size: "normal",
    color: "white",
    allCaps: false,
    backgroundColor: '#00bcd4',
};
export var Secondary = Template.bind({});
Secondary.args = {
    label: 'Secondary Label',
    size: "normal",
    allCaps: true,
    backgroundColor: '#f0f0f0',
};
export var Tertiary = Template.bind({});
Tertiary.args = {
    label: 'Tertiary Label',
    size: "normal",
    backgroundColor: '#f0f0f0',
};
