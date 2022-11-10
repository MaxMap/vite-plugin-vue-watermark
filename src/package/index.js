import watermark from './watermark/watermark.vue';
const comlist = [watermark]
export default {
    install: (app) => {
        comlist.forEach(com =>{
            app.component(com.name,com)
        })
    }
  }
  