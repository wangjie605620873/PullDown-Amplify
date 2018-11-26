//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    list: 20,
    direction: '',
    startX : 0,
    startY : 0,
    scale : 1,

  },
  start: function (e) {
    this.setData({
      startY : e.touches[0].pageY,
      startX : e.touches[0].pageX
    })

  },
  onPageScroll: function (e) {
    var direction = "";
    if (e.scrollTop <= 0) {
      this.setData({
        direction : "up"
      })
    }
  },

  touchMove: function (e) {
    if (this.direction == 'up') {
      var dDis = Math.abs(e.touches[0].pageX - this.data.startX) - Math.abs(e.touches[0].pageY - this.data.startY);
      if (dDis <= 0) return false
    }
    if (e.changedTouches[0].pageY - this.data.startY >=0 && this.data.direction == 'up') {
      var scale = (1 + (e.changedTouches[0].pageY - this.data.startY) / (2 * 350)).toFixed(2);
      console.log(scale,'scalescale')
      this.setData({
        scale : scale
      })
// 开始执行动效，显示需要放大动效的DOM结构
// 执行放大动效及主体内容下拉动效
//       copyHeader.scaleX = copyHeader.scaleY = scale;
      // topEffect.translateY = bannerHeight * (scale - 1);


    }
  }
})
