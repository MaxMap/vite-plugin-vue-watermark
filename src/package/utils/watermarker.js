//js代码
export default function paintFixedWaterMark(dom,data) {//在Vue中可改为ES6写法
    var wrap = dom;//创建一个div
    // wrap.className = "fixed-water-mark";//给div添加类名
    var wm = document.createElement("canvas");//单个水印画布
    wm.id = "watermark";//给canvas标签添加id
    wm.width = data.width;//设置canvas宽
    wm.height = data.height;//设置canvas高
    wm.style.display = "none";//设置画布隐藏属性
    wrap.appendChild(wm);//在div中添加画布
    var rwm = document.createElement("canvas");//重复绘制水印画布，用于整个页面
    rwm.id = "repeat-watermark";
    wrap.appendChild(rwm);
    document.body.appendChild(wrap);
    //绘制单个水印
    var cw = document.getElementById('watermark');
    var ctx = cw.getContext("2d");
    ctx.clearRect(0, 0, 100, 80);//清空矩形
    ctx.font =data.font;//设置字体
    ctx.rotate(data.angle * Math.PI / 180);//逆时针旋转20度
    ctx.fillStyle = data.color;//填充透明度为0.2的灰色
    ctx.fillText(data.text, -10, 60);//填充内容为工号
    //在另一个画布上重复绘制单个水印
    var crw = document.getElementById('repeat-watermark');
    crw.width = window.innerWidth;//设置画布宽度等于窗口显示宽度
    crw.height = window.innerHeight;//设置画布高度等于窗口显示高度
    var ctxr = crw.getContext("2d");
    ctxr.clearRect(0, 0, crw.width, crw.height);
    var pat = ctxr.createPattern(cw, "repeat");//在水平和垂直方向重复绘制单个水印
    ctxr.fillStyle = pat;
    ctxr.fillRect(0, 0, crw.width, crw.height);
}
