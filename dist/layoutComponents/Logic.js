'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (item, _ref, props) {
    var yakaApis = _ref.yakaApis,
        bindingProps = _ref.bindingProps,
        componentCheck = _ref.componentCheck,
        elementWalk = _ref.elementWalk;
    var value = props.value,
        eles = props.eles,
        key = props.key;

    if (Array.isArray(eles)) {
        return _react2.default.createElement(
            'div',
            null,
            eles.map(function (_ele) {
                var ele = _ele.ele;

                if (Array.isArray(value)) {
                    if (value.some(function (val) {
                        return val === _ele.value;
                    })) {
                        return elementWalk(Array.isArray(ele) ? ele : [ele], yakaApis, key);
                    } else {
                        return null;
                    }
                } else {
                    if (value === _ele.value) {
                        return elementWalk(Array.isArray(ele) ? ele : [ele], yakaApis, key);
                    } else {
                        return null;
                    }
                }
            })
        );
    } else {

        return eles.value === value ? elementWalk(Array.isArray(eles.ele) ? eles.ele : [eles.ele], yakaApis, key) : null;
    }
};

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }