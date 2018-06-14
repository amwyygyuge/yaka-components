'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _row = require('igroot/lib/row');

var _row2 = _interopRequireDefault(_row);

var _col2 = require('igroot/lib/col');

var _col3 = _interopRequireDefault(_col2);

exports.default = function (item, _ref, props) {
    var yakaApis = _ref.yakaApis,
        bindingProps = _ref.bindingProps,
        elementWalk = _ref.elementWalk;
    var subs = item.subs,
        children = item.children,
        name = item.name;

    var _children = subs || children;
    if ('style' in props) {
        Object.assign({ marginTop: 15 }, props.style);
    } else {
        props.style = { marginTop: 15 };
    }
    return _react2.default.createElement(
        _row2.default,
        props,
        _children.map(function (_col, index) {
            return _react2.default.createElement(
                _col3.default,
                { span: _col.col ? _col.col : null, key: props.key + '.' + index },
                elementWalk([_col], yakaApis, props.key + '.' + index)
            );
        })
    );
};

require('igroot/lib/row/style');

require('igroot/lib/col/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }