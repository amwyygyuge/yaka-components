'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _yakaEditTable = require('./yaka-edit-table');

var _yakaSwitch = require('./yaka-switch');

var _yakaEditor = require('./yaka-editor');

var _yakaSelect = require('./yaka-select/');

var _yakaDatepicker = require('./yaka-datepicker/');

var _yakaTimepicker = require('./yaka-timepicker/');

var _yakaTable = require('./yaka-table/');

var _yakaRadio = require('./yaka-radio/');

var CheckboxGroup = Checkbox.Group;

exports.default = {
  EditTable: _yakaEditTable.YakaEditTable,
  Switch: _yakaSwitch.YakaSwitch,
  Editor: _yakaEditor.YakaEditor,
  TimePicker: _yakaTimepicker.YakaTimePicker,
  Checkbox: CheckboxGroup,
  Select: _yakaSelect.YakaSelect,
  Table: _yakaTable.YakaTable,
  DatePicker: _yakaDatepicker.YakaDatePicker
};