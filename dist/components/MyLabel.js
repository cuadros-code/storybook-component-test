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
import './mylabel.css';
/**
 * Label component
 */
export var MyLabel = function (props) {
    var _a = props.label, label = _a === void 0 ? 'Default label' : _a, _b = props.size, size = _b === void 0 ? 'normal' : _b, _c = props.color, color = _c === void 0 ? 'black' : _c, _d = props.backgroundColor, backgroundColor = _d === void 0 ? 'white' : _d, _e = props.allCaps, allCaps = _e === void 0 ? false : _e;
    return (_jsx("span", __assign({ className: "".concat(size, " ").concat(allCaps && 'uppercase'), style: { color: color, backgroundColor: backgroundColor } }, { children: label })));
};
export default MyLabel;
