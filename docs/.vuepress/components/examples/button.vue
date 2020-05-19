<template>
<div class="show">
  <div class="row">
    <p>按钮类型</p>
    <hr-button>原始</hr-button>
    <hr-button type="primary">主要</hr-button>
    <hr-button type="success">成功</hr-button>
    <hr-button type="info">信息</hr-button>
    <hr-button type="warning">警告</hr-button>
    <hr-button type="danger">危险</hr-button>
    <hr-button type="text">文字</hr-button>
  </div>
  <div class="row">
    <p>按钮大小</p>
    <hr-button>原始</hr-button>
    <hr-button type="primary" size="lg">大型</hr-button>
    <hr-button type="success" size="default">默认</hr-button>
    <hr-button type="warning" size="sm">小型</hr-button>
  </div>
  <div class="row">
    <p>按钮形状</p>
    <hr-button>原始</hr-button>
    <hr-button type="primary" shape="orthogon">默认</hr-button>
    <hr-button type="success" shape="round">圆角</hr-button>
    <hr-button type="warning" shape="bullet">弹头</hr-button>
    <hr-button type="info" shape="circle">圆</hr-button>
  </div>
  <div class="row">
    <p>按钮风格</p>
    <hr-button>原始</hr-button>
    <hr-button type="primary" special="hollow">极简</hr-button>
    <hr-button type="success" special="shadow">阴影</hr-button>
    <hr-button type="info" special="shine">闪烁</hr-button>
    <hr-button type="warning" special="slide">滑动</hr-button>
    <hr-button type="danger" special="jelly">果冻</hr-button>
  </div>
  <div class="row">
    <p>按钮图标</p>
    <hr-button icon="download">图标</hr-button>
    <hr-button icon="reduce" type="primary" shape="orthogon">图标</hr-button>
    <hr-button icon="add-select" type="success" shape="round">图标</hr-button>
    <hr-button icon="upload" type="info" shape="bullet">图标</hr-button>
    <hr-button icon="text" type="warning" shape="circle"></hr-button>
  </div>
  <div class="row">
    <p>按钮禁止</p>
    <hr-button type="primary" disabled>禁止</hr-button>
    <hr-button type="success" disabled>禁止</hr-button>
    <hr-button type="info" disabled>禁止</hr-button>
    <hr-button type="warning" disabled>禁止</hr-button>
    <hr-button type="danger" disabled>禁止</hr-button>
  </div>
  <div class="row">
    <p>按钮加载</p>
    <hr-button type="primary" loading>加载中</hr-button>
    <hr-button type="success" loading>加载中</hr-button>
    <hr-button type="info" loading>加载中</hr-button>
    <hr-button type="warning" loading>加载中</hr-button>
    <hr-button type="danger" loading>加载中</hr-button>
  </div>
  <div class="row">
    <p>按钮点击</p>
    <hr-button @click="danger('点击了')">原始</hr-button>
  </div>
</div>
</template>
<script>
import HrButton from '../packages/Button'
import '../packages/fonts/iconfont.css'
export default {
  methods: {
    danger(v) {
      alert(v)
    }
  },
  components: {
    HrButton
  }
}
</script>
<style lang="scss">
.show {
  margin: 20px 0;
  padding: 20px 25px;
  border: 1px solid rgba(0, 0, 0, .1);
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
  &:hover {
    box-shadow: 0 4px 18px 0 rgba(0, 0, 0, .2);
  }
  .row {
    margin-bottom: 20px;
    .hr-button {
      margin-right: 20px;
    }
  }
}
</style>