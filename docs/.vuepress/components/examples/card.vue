<template>
<div class="show">
  <h3>1.卡片的类型</h3>
  <p>这是标题在上的卡片</p>
  <hr-card type="top"></hr-card>
  <p>这是标题在下的卡片</p>
  <hr-card type="bottom"></hr-card>
  <p>这是简易的卡片</p>
  <hr-card type="none"></hr-card>
  <h3>2.支持蒙版效果</h3>
  <hr-card type="top" maskingVisible></hr-card>
  <h3>3.自定义卡片的内容</h3>
  <p>提供三个插槽:title, body, masking</p>
  <hr-card type="top" maskingVisible>
    <div slot="title">自定义内容</div>
    <!-- 推荐使用这种方式 -->
    <template v-slot:body>主体内容</template>
    <div slot="masking">自定义内容</div>
  </hr-card>
</div>
</template>
<script>
import HrCard from '../packages/Card'
export default {
  components: {
    HrCard
  }
}
</script>
<style>

</style>