
Page({
  data: {
    src: "https://countrydream.oss-cn-beijing.aliyuncs.com/giphy.gif",

  }, 
  onShow: function () {
    wx.setNavigationBarTitle({ title: '' })
  },
  map_tap:function(){
    wx.getLocation({//获取当前经纬度
      type: 'wgs84', //返回可以用于wx.openLocation的经纬度，官方提示bug: iOS 6.3.30 type 参数不生效，只会返回 wgs84 类型的坐标信息  
      success: function (res) {
        wx.openLocation({//​使用微信内置地图查看位置。
          latitude: 35.4903900000,//要去的纬度-地址
          longitude: 112.8511300000,//要去的经度-地址
          name: "其实不是这儿（=￣ω￣=） ",
          address: '回村的诱惑~'
        })
      }
    })
  }
})