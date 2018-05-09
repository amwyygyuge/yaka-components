'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _components = require('./components/');

var _components2 = _interopRequireDefault(_components);

var _layoutComponents = require('./layoutComponents/');

var _layoutComponents2 = _interopRequireDefault(_layoutComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _extends({}, _components2.default, _layoutComponents2.default);