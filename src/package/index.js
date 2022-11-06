import watermark from './watermark/watermark.vue';
const comlist = [watermark]
export default {
    install: (app) => {
        // app.component('watermark',watermark)
        comlist.forEach(com =>{
            app.component(com.name,com)
        })
    }
  }
  