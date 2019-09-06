# yaka 引擎专用组件

## 安装

npm

```js
npm install yaka-components
```

yarn

```js
yarn add yaka-components
```

## 使用

```js
import yakaComponents from "yaka-components"
const { components, layoutComponents } = yakaComponents
```

## 组件列表

### 布局组件

1. Form
2. ROW
3. Logic

### 功能型组件

1. Card
2. EditTable
3. Switch
4. Editor
5. TimePicker
6. Radio
7. DatePicker

### 旧版引用的 igroot 组件

1. Button
2. InputNumber
3. Card
4. CheckboxGroup
5. Input
6. TextArea

## 兼容旧版

```js
import { Button, InputNumber, Card, Checkbox, Input } from "igroot"
const CheckboxGroup = Checkbox.Group
import yakaComponents from "yaka-components"
const { components, layoutComponents } = yakaComponents

const oldComponents = {
  ...components,
  Checkbox: CheckboxGroup,
  Button,
  Input,
  InputNumber,
  Card,
  TextArea: Input.TextArea
}
```

## 目录结构

```
├── README.md
├── dist   打包后的文件
│   ├── components
│   │   ├── index.js
│   │   ├── yaka-datepicker
│   │   │   └── index.js
│   │   ├── yaka-edit-table
│   │   │   ├── index.css
│   │   │   └── index.js
│   │   ├── yaka-editor
│   │   │   ├── index.css
│   │   │   └── index.js
│   │   ├── yaka-radio
│   │   │   └── index.js
│   │   ├── yaka-select
│   │   │   └── index.js
│   │   ├── yaka-switch
│   │   │   └── index.js
│   │   ├── yaka-table
│   │   │   └── index.js
│   │   └── yaka-timepicker
│   │       └── index.js
│   ├── index.js
│   └── layoutComponents
│       ├── Logic.js
│       ├── Row.js
│       ├── formBlock.js
│       └── index.js
├── lib   源码入口
│   ├── components  组件
│   │   ├── index.js
│   │   ├── yaka-datepicker   日期选择
│   │   │   └── index.jsx
│   │   ├── yaka-edit-table   可编辑表格
│   │   │   ├── index.css
│   │   │   └── index.jsx
│   │   ├── yaka-editor     富文本编辑
│   │   │   ├── index.css
│   │   │   └── index.jsx
│   │   ├── yaka-radio     单选框
│   │   │   └── index.jsx
│   │   ├── yaka-select   下拉框
│   │   │   └── index.jsx
│   │   ├── yaka-switch   开关
│   │   │   └── index.jsx
│   │   ├── yaka-table   表格
│   │   │   └── index.jsx
│   │   └── yaka-timepicker   时间选择器
│   │       └── index.jsx
│   ├── index.js  入口文件
│   └── layoutComponents   布局组件
│       ├── Logic.jsx  逻辑组件
│       ├── Row.jsx   row组件
│       ├── formBlock.jsx  表单组件
│       └── index.js
└── yarn.lock
```

## 技术栈

js + react + igroot

## 发布方式

yarn publish
