<template>
  <div class="hr-card" :style="{'width': width + 'px','height': height + 'px'}">
    <div class="hr-card-title" :style="cardTitle" :class="[`hr-card-title-${type}`]">
      <slot name="title"><span>标题</span></slot>
    </div>
    <div class="hr-card-body" :style="cardBody" :class="[`hr-card-body-${type}`]">
      <slot name="body"><span>这里是图片或内容</span></slot>
      <div v-show="maskingVisible" class="hr-card-body-masking" :style="cardBody">
        <slot name="masking">这是蒙版</slot>
      </div>
    </div>
  </div>
</template>
<script>
import $ from 'jquery'
export default {
  name: 'HrCard',
  props: {
    width: {
      type: String,
      default: '480'
    },
    height: {
      type: String,
      default: '300'
    },
    type: {
      type: String,
      default: 'top'
    },
    maskingVisible: {
      type: Boolean,
      default: false
    }
  },
  mounted () {
    const { height } = this
    $('.hr-card-title-top').css('top', 0)
    $('.hr-card-title-bottom').css('top', height * 0.8)
    $('.hr-card-body-top').css('top', 0)
    $('.hr-card-body-bottom').css('top', -height * 0.2)
  },
  computed: {
    cardTitle () {
      const { height } = this
      return {
        height: height * 0.2 + 'px'
      }
    },
    cardBody () {
      const { height, type } = this
      const bodyHeight = (type === 'none') ? height : height * 0.8
      return {
        height: bodyHeight + 'px'
      }
    }
  }
}
</script>
<style lang="scss">
.hr-card {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 1px 2px 4px rgba(0,0,0, .4);
  transition: box-shadow .4s ease-in-out;
  &:hover {
    box-shadow: 1px 4px 8px rgba(0,0,0, .4);
  }
  &-title {
    position: relative;
    box-sizing: border-box;
    // 类型
    &-top {
      padding: 15px 20px 0;
      border-bottom: 1px solid rgba(150, 147, 147, 0.4);
    }
    &-none {
      padding: 15px 20px 0;
      display: none;
    }
    &-bottom {
      padding: 5px 20px 0;
      border-top: 1px solid rgba(150, 147, 147, 0.4);
    }
  }
  &-body {
    position: relative;
    z-index: 20;
    box-sizing: border-box;
    padding: 20px 20px 0;
    &-masking {
      position: absolute;
      right: 0;
      left: 0;
      bottom: 0;
      z-index: 5;
      color: #fff;
      margin: 0;
      background-color: rgba(0,0,0,.8);
      opacity: 0;
      transition: opacity .3s;
    }
    &:hover > .hr-card-body-masking {
      opacity: 1;
      transition: opacity .3s;
    }
  }
}
</style>
