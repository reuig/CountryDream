// pages/index/index.js
Page({
  data: {
    src: "https://countrydream.oss-cn-beijing.aliyuncs.com/dream.png",
  },
   onShow: function (options) {
    wx.setNavigationBarTitle({ title: '' })
   },
   tap:function()
   {
     wx.switchTab({
       url: '../weToday/weToday',
     })
   }
})