<template>
<div class="show">
  <h3>设置 对话框 宽, top, title </h3>
  <hr-button type="primary" @click="visible1 = true">对话框1</hr-button>
  <hr-dialog top="100px" title="信息" :visible.sync="visible1"></hr-dialog>
  <h3>对话框 拖拽效果</h3>
  <hr-button type="primary" @click="visible2 = true">对话框2</hr-button>
  <hr-dialog :visible.sync="visible2" drag></hr-dialog>
  <h3>对话框 自定义内容</h3>
  <hr-button type="primary" @click="visible3 = true">对话框3</hr-button>
  <hr-dialog :visible.sync="visible3">
    <template v-slot:title>
      <h3>自定义标题</h3>
    </template>
    <template v-slot:body>自定义主体内容</template>
    <template v-slot:footer>自定义底部内容</template>
  </hr-dialog><br>
</div>
</template>
<script>
import HrDialog from '../packages/Dialog'
import HrButton from '../packages/Button'
export default {
  data () {
    return {
      visible1: false,
      visible2: false,
      visible3: false
    }
  },
  components: {
    HrDialog,
    HrButton
  }
}
</script>
<style>

</style>