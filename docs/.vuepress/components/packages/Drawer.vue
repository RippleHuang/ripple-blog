<template>
<transition name="fade">
  <div class="hr-drawer--wrapper" v-show="visible">
    <div class="hr-drawer--container" @click.self="handleClose">
      <transition :name="`${direction}`">
        <div class="hr-drawer"
          :class="`hr-drawer-${direction}`"
          :style="{width: `${size}`}"
          ref="drawer"
          v-show="visible"
        >
          <header class="hr-drawer--header">
            <slot name="title">
              <span class="hr-drawer--header--title">{{title}}</span>
            </slot>
            <button class="hr-drawer--header--btn" @click="handleClose">
              <i class="icon-close"></i>
            </button>
          </header>
          <section class="hr-drawer--body">
            <slot name="body">主体内容</slot>
          </section>
        </div>
      </transition>
    </div>
  </div>
</transition>
</template>
<script>
export default {
  name: 'hr-drawer',
  props: {
    direction: {
      type: String,
      default: 'left'
    },
    size: {
      type: String,
      default: '30%'
    },
    title: {
      type: String,
      default: '标题'
    },
    visible: {
      type: Boolean
    }
  },
  methods: {
    handleClose () {
      this.$emit('update:visible', false)
    }
  }
}
</script>
<style lang="scss">
.hr-drawer--wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: -80px;
  left: 0;
  overflow: hidden;
  margin: 0;
  z-index: 200;
  .hr-drawer--container {
    position: relative;
    left: 0;
    right: 0;
    top: 0;
    bottom: -80px;
    height: 100%;
    width: 100%;
    background-color: rgba(0,0,0, .4);
    z-index: 100;
  }
  .hr-drawer {
    position: absolute;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    box-shadow: 1px 1px 3px rgba(0,0,0, .4);
    overflow: hidden;
    z-index: 99;
    &-left {
      height: 100%;
      left: 0;
    }
    &-right {
      height: 100%;
      right: 0;
    }
    &--header {
      align-items: center;
      color: rgb(114, 118, 123);
      display: flex;
      margin-bottom: 32px;
      padding: 20px 20px 10px;
      padding-bottom: 0;
      &--title {
        margin: 0;
        line-height: inherit;
        font-size: 1rem;
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
      padding: 10px 20px;
    }
  }
}
.left-enter-active {
  animation: drawerLeft .4s;
}
.right-enter-active {
  animation: drawerRight .4s;
}
.fade-enter-active {
  opacity: 1;
  transition: opacity .5s;
}
.fade-leave-active {
  opacity: 0;
  transition: opacity .5s;
}
@keyframes drawerLeft {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}
@keyframes drawerRight {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
