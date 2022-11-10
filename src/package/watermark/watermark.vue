<template>
    <div class="fixed-water-mark" ref="watermark">
        
    </div>
</template>

<script>
export default {
  name: 'watermark'
}
</script>
<script setup>
import {ref,onMounted,reactive} from 'vue'
import paintFixedWaterMark from '../utils/watermarker'
const watermark = ref()
const props = defineProps({
  text: {
    type:String,
    default:'我是水印'
  },
  width:{
    type:Number,
    default:120
  },
  height:{
    type:Number,
    default:100
  },
  angle:{
    type:Number,
    default:-40
  },
  font: {
    type:String,
    default:"15px 黑体"
  },
  color: {
    type:String,
    default:'rgba(100,100,100,0.2)'
  },

})

const data = reactive({
    text:props.text,//文本
    width:props.width,
    height:props.height,
    angle:props.angle,//角度
    font:props.font,// 字体
    color:props.color

})
onMounted(()=>{
    paintFixedWaterMark(watermark.value,data)
})
</script>

<style lang="scss" scoped>
.fixed-water-mark {
     position: fixed;
     pointer-events: none;
     top: 0;
     bottom: 0;
     left: 0;
     right: 0;
     z-index: 1600;
     #watermark {
     text-align: center;
     position: absolute;
     top: 0;
     left: 0;
     right: 0;
     opacity: 0.4;
     margin: 0 auto;
}
}
</style>