'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _row = require('igroot/lib/row');

var _row2 = _interopRequireDefault(_row);

var _col = require('igroot/lib/col');

var _col2 = _interopRequireDefault(_col);

var _form = require('igroot/lib/form');

var _form2 = _interopRequireDefault(_form);

exports.default = function (item, _ref) {
    var yakaApis = _ref.yakaApis,
        form = _ref.form,
        bindingProps = _ref.bindingProps,
        componentCheck = _ref.componentCheck,
        elementWalk = _ref.elementWalk;

    var FormItem = _form2.default.Item;
    var props = item.props,
        children = item.children,
        subs = item.subs,
        name = item.name;
    var colWidth = props.colWidth,
        labelCol = props.labelCol,
        wrapperCol = props.wrapperCol,
        gutter = props.gutter,
        onSubmit = props.onSubmit,
        title = props.title;

    var _subs = subs || children;
    var rowNum = Math.floor(24 / colWidth);
    var times = Math.ceil(_subs.length / rowNum);
    var _children = [];
    for (var i = 0; i < times; ++i) {
        _children.push(_subs.slice(i * rowNum, (i + 1) * rowNum));
    }
    var getFieldDecorator = form.getFieldDecorator;

    var styles = {
        title: {
            fontSize: 18,
            borderBottom: '2px solid #1DA57A',
            padding: '0 15px'
        },
        block: {
            background: '#fff'
        }
    };
    var _props = bindingProps(item, yakaApis);
    return _react2.default.createElement(
        _row2.default,
        { gutter: gutter ? gutter : 0, style: styles.block, key: name },
        _children.map(function (row, index) {
            return _react2.default.createElement(
                _row2.default,
                { gutter: gutter ? gutter : 0, key: '' + name + index },
                row.map(function (col, subindex) {
                    var colProps = bindingProps(col, yakaApis);
                    var ele = col.ele,
                        component = col.component,
                        value = col.value,
                        rules = col.rules;

                    var _ele = ele || component;
                    return _react2.default.createElement(
                        _col2.default,
                        {
                            span: col.col && col.col || colWidth,
                            key: '' + name + index + subindex },
                        colProps.show === false ? _react2.default.createElement('div', null) : _react2.default.createElement(
                            FormItem,
                            {
                                label: col.label,
                                labelCol: { span: col.labelCol ? col.labelCol : labelCol },
                                wrapperCol: { span: col.wrapperCol ? col.wrapperCol : wrapperCol }
                            },
                            _ele && componentCheck(_ele) ? getFieldDecorator('' + col.name, {
                                initialValue: value ? value : null,
                                rules: rules ? rules : null
                            })(elementWalk([col], yakaApis)[0]) : _react2.default.createElement(
                                'div',
                                null,
                                '\u975E\u6CD5\u8868\u5355\u7EC4\u4EF6'
                            )
                        )
                    );
                })
            );
        })
    );
};

require('igroot/lib/row/style');

require('igroot/lib/col/style');

require('igroot/lib/form/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }