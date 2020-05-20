---
title: vue 组件库 hripple-ui
date: 2020-04-12
categories:
  - vue框架
tags:
  - vue
  - 组件库
---

::: tip
自己封装的 vue组件库
:::

<!-- more -->

## 安装

``` bash
npm i hripple-ui -S
```

## 引入

``` js
//main.js
import 'hripple-ui/dist/hripple-ui.min.css'
import HrippleUi from 'hripple-ui'
Vue.use(HrippleUi)
```

## 按钮 button

### 按钮示例

<examples-button></examples-button>

::: details 点击查看代码

<<< @/docs/.vuepress/components/examples/button.vue

:::

### 按钮具体参数

参数 | 说明 |  接受类型 | 可接受值 |  默认值 |
|:-:|:-:|:-:|:-:|:-:|
type | 按钮类型 | String| default, primary, success, info, warning, danger, text| default |
size | 按钮大小 | String| lg, default, sm | default |
shape | 按钮形状 | String| orthogon, round, bullet, circle | orthogon |
special | 按钮风格 | String | default, hollow, shadow, shine, slide, jelly | default |
icon | 按钮图标 | String | <a href="/.vuepress/components/packages/fonts/demo.html" target="_blank">具体图标使用</a> | - |
disabled | 按钮禁用 | Boolean | false, true | false |
loading | 按钮加载 | Boolean | false, true | false |

### 支持事件

事件 | 说明 |
|:-:|:-:|
click | 点击事件 |

## 卡片 Card

### 卡片示例

<examples-card></examples-card>

::: details 点击查看代码

<<< @/docs/.vuepress/components/examples/card.vue

:::

### 卡片具体参数

参数 | 说明 |  接受类型 | 可接受值 |  默认值 |
|:-:|:-:|:-:|:-:|:-:|
width | 卡片宽 | String| 单位为px,不需带单位 | 480 |
height | 卡片高 | String| 单位为px,不需带单位 | 300 |
type | 卡片类型 | String| top, bottom, none| top |
maskingVisible | 蒙版效果 | Boolean | false, true | false |

### 卡片插槽

| name | 说明 |
|:-:|:-:|
| title | card标题内容，如不传显示默认标题 |
| body | card主体内容，如不传显示默认主体内容 |
| masking | card蒙版内容，需要开启蒙版效果，如不传显示默认内容 |

## 对话框 Dialog

### 对话框示例

<examples-dialog></examples-dialog>

::: details 点击查看代码

<<< @/docs/.vuepress/components/examples/dialog.vue

:::

### 对话框具体参数

参数 | 说明 |  接受类型 | 可接受值 |  默认值 |
|:-:|:-:|:-:|:-:|:-:|
title | 对话框标题 | String| - | 提示 |
width | 对话框宽 | String| - | 30% |
top | 对话框离顶部的距离 | String| - | 15vh |
visible | 对话框隐藏 | Boolean | false, true | false |
drag | 对话框拖拽效果 | Boolean | false, true | false |

### 对话框插槽

| name | 说明 |
|:-:|:-:|
| title | dialog标题内容，如不传显示默认标题 |
| body | dialog主体内容，如不传显示默认主体内容 |
| footer | dialog底部内容，如不传显示默认内容 |

## 抽屉 Drawer

### 抽屉示例

<examples-drawer></examples-drawer>

::: details 点击查看代码

<<< @/docs/.vuepress/components/examples/drawer.vue

:::

### 抽屉具体参数

参数 | 说明 |  接受类型 | 可接受值 |  默认值 |
|:-:|:-:|:-:|:-:|:-:|
title | 抽屉标题 | String| - | 提示 |
width | 抽屉宽 | String| - | 30% |
direction | 抽屉类型 | String| left,right | left |
visible | 抽屉隐藏 | Boolean | false, true | false |

### 抽屉插槽

| name | 说明 |
|:-:|:-:|
| title | drawer标题内容，如不传显示默认标题 |
| body | drawer主体内容，如不传显示默认主体内容 |

## 滑块 Slider

### 滑块示例

<examples-slider></examples-slider>

::: details 点击查看代码

<<< @/docs/.vuepress/components/examples/slider.vue

:::

### 滑块具体参数

参数 | 说明 |  接受类型 | 可接受值 |  默认值 |
|:-:|:-:|:-:|:-:|:-:|
min | 滑块最小值 | String| - | 0 |
max | 滑块最大值 | String| - | 100 |
step | 步长 | String| - | 1 |
value | 显示值 | String | - | 0 |
width | 滑块宽度 | String | 单位为px,不需带单位 | 200 |
disabled | 是否禁用 | Boolean | false, true | false |

### 滑块插槽

| name | 说明 |
|:-:|:-:|
| content | slider说明内容，如不传显示默认说明 |
