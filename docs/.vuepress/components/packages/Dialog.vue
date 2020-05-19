<template>
  <transition name="fade">
    <div class="hr-dialog--wrapper" v-show="visible" @click.self="handleClose">
      <div class="hr-dialog" :style="{width,marginTop:top}" ref="drag" :class="{'dialogDrag': drag}" @mousedown="handleDrag">
        <div class="hr-dialog--header">
          <!-- 默认内容提示,插槽有内容替换 -->
          <slot name="title">
            <span class="hr-dialog--header--title">{{title}}</span>
          </slot>
          <button class="hr-dialog--header--btn" @click="handleClose">
            <i class="icon-close"></i>
          </button>
        </div>
        <div class="hr-dialog--body">
          <slot name="body"><span>主体内容</span></slot>
        </div>
        <div class="hr-dialog--footer">
          <slot name="footer">
            <hr-button size="sm" @click="handleClose">确定</hr-button>
            <hr-button type="primary" size="sm" @click="handleClose">取消</hr-button>
          </slot>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import $ from 'jquery'
import HrButton from '../packages/Button'
export default {
  name: 'HrDialog',
  props: {
    title: {
      type: String,
      default: '提示'
    },
    width: {
      type: String,
      default: '30%'
    },
    top: {
      type: String,
      default: '15vh'
    },
    visible: {
      type: Boolean,
      default: false
    },
    drag: {
      type: Boolean,
      default: false
    }
  },
  components: {
    HrButton
  },
  methods: {
    handleClose () {
      this.$emit('update:visible', false)
    },
    handleDrag (e) {
      const drag = this.$refs.drag
      if (drag.style.position === 'relative') {
        drag.style.position = 'absolute'
        drag.style.left = e.clientX + 'px'
        drag.style.top = e.clientY + 'px'
      }
    }
  },
  mounted () {
    $('.dialogDrag').mousedown(function (ev) {
      var offsetX = ev.pageX - $(this).position().left
      var offsetY = ev.pageY - $(this).position().top
      $(this).css('cursor', 'move')
      $('.dialogDrag').mousemove(function (ev) {
        var x = ev.pageX - offsetX
        var y = ev.pageY - offsetY
        $(this).css({
          left: x,
          top: y
        })
      })
      ev.preventDefault()
    })
    $(document).mouseup(function () {
      $('.dialogDrag').css('cursor', 'default')
      $('.dialogDrag').off('mousemove')
    })
  }
}
</script>
<style lang="scss">
.hr-dialog--wrapper {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: -80px;
  overflow: hidden;
  margin: 0;
  z-index: 1000;
  background-color: rgba(0,0,0, .4);
  .hr-dialog {
    position: relative;
    margin: 15vh auto 40px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 1px 1px 3px rgba(0,0,0, .4);
    box-sizing: border-box;
    &--header {
      padding: 20px 20px 10px;
      &--title {
        line-height: 24px;
        font-size: 16px;
        color: black;
      }
      &--btn {
        position: absolute;
        top: 20px;
        right: 20px;
        background-color: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
      }
    }
    &--body {
      padding: 30px 20px;
      color: grey;
      font-size: 14px;
      word-break: break-all;
    }
    &--footer {
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      .hr-button:first-child {
        margin-right: 20px;
      }
    }
  }
}
.fade-enter-active {
  animation: fade .4s;
}
.fade-leave-active {
  animation: fade .4s reverse;
}
@keyframes fade {
  0% {
    transform: translateY(-80px);
    opacity: 0;
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
}
</style>
