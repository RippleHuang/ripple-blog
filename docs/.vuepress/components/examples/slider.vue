<template>
<div class="show">
  <h3>1.可以设置最大值,最小值,步长,宽</h3>
  <hr-slider min="-50" max="50" step="2" width="300" v-model="range"></hr-slider>
  <h3>可以设置滑块禁用</h3>
  <hr-slider disabled v-model="range1"></hr-slider>
  <h3>可以自定义滑块的信息</h3>
  <hr-slider min="0" max="1" step="0.01" v-model="range2">
    <template v-slot:content>透明度</template>
  </hr-slider>
</div>
</template>
<script>
import HrSlider from '../packages/Slider'
export default {
  data () {
    return {
      range: '-50',
      range1: '0',
      range2: '0'
    }
  },
  components: {
    HrSlider
  }
}
</script>
<style>

</style>