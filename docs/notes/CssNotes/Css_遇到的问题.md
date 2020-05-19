---
title: css 遇到的问题
date: 2020-1-23
categories:
  - css
tags:
  - css
---

::: tip
css 遇到的问题
:::

<!-- more -->

## position: fixed 失效

设置了`position: fixed`固定定位属性的元素会脱离文档流，达到“超然脱俗”的境界。
也就是说此时给这种元素设置 top, left, right, bottom 等属性是根据浏览器窗口定位的，与其上级元素的位置无关

但是有一种情况例外：
若是设置了`position: fixed`属性的元素，它的上级元素设置了 transform 属性则会导致固定定位属性失效。
无论你的 transform 设置的是什么属性都会影响到`position: fixed`

注意，这个特性表现，目前只在 Chrome 浏览器/FireFox 浏览器下有，IE 浏览器，包括 IE11, fixed 还是 fixed 的表现

其实不仅仅是给父级加 transform 属性会失效，只要上级存在 transform 属性都会导致`position: fixed`失效
