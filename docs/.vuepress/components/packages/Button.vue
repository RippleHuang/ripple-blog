<template>
  <button class="hr-button" :class="[`hr-button-t-${type}`,
  `hr-button-s-${shape}`,
  `hr-button-sp-${special}`,
  `hr-button-si-${size}`, {
    'disabled': disabled,
    'loading': loading
  }]"
    @click="handle"
  >
    <svg v-if="loading" viewBox="25 25 50 50">
        <circle cx="50" cy="50" r="20"></circle>
    </svg>
    <i v-if="icon" :class="`icon-${icon}`"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>
<script>
export default {
  name: 'HrButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'default'
    },
    shape: {
      type: String,
      default: 'orthogon'
    },
    icon: {
      type: String,
      default: ''
    },
    special: {
      type: String,
      default: 'default'
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handle (event) {
      this.$emit('click', event)
    }
  }
}
</script>
<style lang="scss">
.hr-button {
  // 默认样式
  font: {
    family: inherit;
    weight: 500;
  }
  position: relative;
  overflow: hidden;
  color: darkslateblue;
  background-color: #fff;
  padding: 0.5em 1em;
  outline: none;
  border: 1px solid #409eff;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  text-align: center;
  -webkit-appearance: none;
  box-sizing: border-box;
  margin: 0;
  transition: 0.2s;
  // 禁止文字被选中
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  border-radius: 4px;
  &:hover,
  &:focus {
    color: blue;
    background-color: lavender;
    border-color: #409eff;
  }
  &:active {
    border-color: blue;
  }
  // 处理类型
  @each $type, $color, $afColor in (primary, #409eff, #40beff),
                                   (success, #85ce61, #85ee61),
                                   (info, #909399, #90b399),
                                   (warning, #e6a23c, #e6c23c),
                                   (danger, #f56c6c, #f58c6c),
                                   (text, transparent, transparent) {
    &-t-#{$type} {
      @if $type == text {
        color: blue;
        &:hover,
        &:focus {
          color: #40beff;
        }
        &:active {
          color: blue;
        }
      }@else {
        color: #fff;
        &:hover,
        &:focus {
          color: darkslateblue;
        }
      }
      background-color: $color;
      border-color: $color;
      &:hover,
      &:focus {
        background-color: $afColor;
        border-color: $afColor;
      }
      &:active {
        background-color: $color;
        border-color: $color;
      }
    }
  }
  // 处理大小
  @each $size, $height, $width in (lg, 14px, 20px),
                                     (default, 12px, 18px),
                                     (sm, 8px, 10px) {
    &-si-#{$size} {
      font-size: $height;
      padding: $height $width;
    }
  }
  // 处理形状
  @each $shape, $radius in (round, 20px),
                           (circle, 50%),
                           (bullet, 50%),
                           (orthogon, 4px) {
    &-s-#{$shape} {
      @if $shape == circle {
        padding: 1em 1em;
        border-radius: $radius;
      }@else if $shape == bullet {
        border-radius: 0 $radius $radius 0;
      }@else {
        border-radius: $radius;
      }
    }
  }
  // 处理风格
  &-sp {
    // 默认
    &-default {
      margin: 0;
    }
    // 极简
    &-hollow {
      color: darkslateblue;
      background-color: #fff;
    }
    // 阴影
    &-shadow {
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.5);
    }
    @mixin public {
      content: '';
      z-index: 1;
      position: absolute;
    }
    // 闪烁风格
    &-shine {
      border: none;
      &::after {
        @include public;
        background-color: hsla(0, 0%, 100%, 0.2);
        top: -50%;
        bottom: -60%;
        width: 1.8em;
        transform: translate3d(-525%, 0, 0) rotate(35deg);
      }
      &:hover::after {
        transition: transform .5s ease-in-out;
        transform: translate3d(250%, 0, 0) rotate(35deg);
      }
    }
    // 滑动风格
    &-slide {
      border: none;
      &::before {
        @include public;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        opacity: .5;
        background-color: #2ffca7;
        transform-origin: center right;
        transform: scaleX(0);
        transition: transform 0.25s ease-in-out;
      }
      &:hover::before,
      &:focus::before {
        transform-origin: center left;
        transform: scaleX(1);
      }
    }
    // 果冻风格
    &-jelly:hover {
      cursor: pointer;
      animation: jelly 0.5s;
    }
    @keyframes jelly {
      0%,
      100% {
        transform: scale(1, 1);
      }
      25% {
        transform: scale(0.9, 1.1);
      }
      50% {
        transform: scale(1.1, 0.9);
      }
      75% {
        transform: scale(0.95, 1.05);
      }
    }
  }
  // 处理icon与内容间距
  & [class*=icon]+span {
    margin-left: 5px;
  }
  // 加载
  svg {
    width: 1em;
    position: relative;
    left: -5px;
    top: 1px;
    transform-origin: center;
    animation: rotate 2s linear infinite;
    circle {
      fill: none;
      stroke:darkslateblue;
      stroke-width: 2;
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
      stroke-linecap: round;
      animation: dash 1.5s ease-in-out infinite;
    }
    @keyframes rotate {
      100% {
        transform: rotate(360deg);
      }
    }
    @keyframes dash {
      0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
      }
      50% {
        stroke-dasharray: 90, 200;
        stroke-dashoffset: -35px;
      }
      100% {
        stroke-dashoffset: -125px;
      }
    }
  }
}
// 禁用
.disabled {
  pointer-events: none;
  opacity: 0.5;
}
</style>
