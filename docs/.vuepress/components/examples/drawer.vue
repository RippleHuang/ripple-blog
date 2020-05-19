<template>
<div class="show">
  <h3>设置抽屉的宽度,标题</h3>
  <hr-button type="primary" @click="visibled1 = true">抽屉1</hr-button>
  <hr-drawer :visible.sync="visibled1" title="设置的标题" size="35%"></hr-drawer>
  <h3>设置抽屉的类型,从右打开</h3>
  <hr-button type="primary" @click="visibled2 = true">抽屉2</hr-button>
  <hr-drawer :visible.sync="visibled2" direction="right"></hr-drawer>
  <h3>自定义抽屉的内容</h3>
  <hr-button type="primary" @click="visibled3 = true">抽屉3</hr-button>
  <hr-drawer :visible.sync="visibled3">
    <template v-slot:title><h3>自定义标题</h3></template>
    <template v-slot:body>自定义内容</template>
  </hr-drawer>
</div>
</template>
<script>
import HrDrawer from '../packages/Drawer'
import HrButton from '../packages/Button'
export default {
  data () {
    return {
      visibled1: false,
      visibled2: false,
      visibled3: false
    }
  },
  components: {
    HrDrawer,
    HrButton
  }
}
</script>
<style>

</style>