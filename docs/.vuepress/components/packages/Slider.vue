<template>
<div class="hr-range" :style="{'width': `${parseInt(width) + 25}px`}" :class="{'disabled': disabled}" v-cloak>
  <span class="hr-range-min">{{min}}</span>
  <input type="range"
    :min="min"
    :max="max"
    :step="step"
    :value="value"
    :style="rangeColor"
    :disabled="disabled"
    :width="width"
    @input="handleRange"
  >
  <div class="hr-range-tooltip" :style="toolTip">{{value}}</div>
  <span class="hr-range-max" :style="{'left': `${parseInt(width) + 35}px`}">{{max}}</span><br>
  <span class="hr-range-content"><slot name="content">数字</slot></span>
</div>
</template>
<script>
export default {
  name: 'HrSlider',
  props: {
    min: {
      type: String,
      default: '0'
    },
    max: {
      type: String,
      default: '100'
    },
    step: {
      type: String,
      default: '1'
    },
    value: {
      type: String,
      default: '0'
    },
    width: {
      type: String,
      default: '200'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleRange (e) {
      this.$emit('input', e.target.value)
    }
  },
  computed: {
    rangeColor () {
      const { min, max, value, width } = this
      const percent = 100 * (value - min) / (max - min)
      return {
        width: width + 'px',
        backgroundSize: percent + '% 100%'
      }
    },
    toolTip () {
      const { min, max, value, width } = this
      const show = (value - min < 0) ? min : value - min
      // 24为滑块的宽度
      // -1为 toolTip 的 -width/2 - padding/2 + 滑块的1/2 + (left - paddingLeft)
      const distance = (width - 24) * show / (max - min) - 1
      return {
        left: distance + 'px'
      }
    }
  }
}
</script>
<style lang="scss">
[v-cloak] {
  display: none;
}
.hr-range {
  position: relative;
  line-height: 40px;
  height: 70px;
  padding: 10px 20px;
  &-tooltip {
    position: relative;
    z-index: 100;
    opacity: 0;
    padding: 6px;
    top: -46px;
    width: 30px;
    height: 30px;
    text-align: center;
    line-height: 28px;
    color: #ffffff;
    background-color: rgba(0, 0, 0, .6);
    border-radius: 3px;
    transition: opacity .3s;
    &::before {
      content: '';
      display: block;
      position: absolute;
      left: 12px;
      bottom: -8px;
      border: {
        left: 8px solid transparent ;
        right: 8px solid transparent;
        top: 8px solid rgba(0, 0, 0, .6);
      }
    }
  }
  input {
    position: absolute;
    left: 25px;
    top: 20px;
    background: linear-gradient(#059CFA, #059CFA) no-repeat;
    background-size: 0% 100%;
    border-radius: 10px;
    &:focus {
      outline: none;
    }
    &:hover {
      cursor: pointer;
    }
    @mixin public {
      -moz-appearance: none;
      -webkit-appearance: none;
    }
    @include public;
    @mixin track {
      height: 15px;
      border-radius: 10px;
      box-shadow: 0 1px 1px #def3f8, inset 0 .125em .125em #0d1112;
    }
    @mixin slider {
      @include public;
      height: 24px;
      width: 24px;
      margin-top: -5px;
      background: #ffffff;
      border-radius: 50%;
      border: solid 0.125em rgba(205, 224, 230, .5);
      box-shadow: 0 .125em .125em #3b4547;
    }
    // 将轨道设为圆角的
    &::-webkit-slider-runnable-track {
      @include track;
    }
    &::-moz-range-track {
      @include track;
    }
    // 设置滑块
    &::-webkit-slider-thumb {
      @include slider;
    }
    &::-moz-range-thumb {
      @include slider;
    }
  }
  &-min {
    position: absolute;
    left: 0;
    top: 10px;
  }
  &-max {
    position: absolute;
    top: 10px;
  }
  &-content {
    position: absolute;
    top: 45px;
  }
}
// 禁用
.disabled {
  color: #c0c0cc;
  opacity: .3;
  cursor: not-allowed;
}
// 淡入淡出
input:hover + .hr-range-tooltip {
  opacity: 1;
  transition: opacity .3s;
}
</style>
