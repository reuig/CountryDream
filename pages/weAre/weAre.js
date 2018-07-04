// pages/weAre/weAre.js
Page({
  data: {
    swiperList: [{
      swpClass: "swp-center",
      imgsrc: "https://countrydream.oss-cn-beijing.aliyuncs.com/0.png"
    }, {
      swpClass: "swp-right",
      imgsrc: "https://countrydream.oss-cn-beijing.aliyuncs.com/1.png"
    }, {
      swpClass: "swp-rightNo",
      imgsrc: "https://countrydream.oss-cn-beijing.aliyuncs.com/2.png"
    },{
      swpClass: "swp-rightNo",
      imgsrc: "https://countrydream.oss-cn-beijing.aliyuncs.com/3.png"
    }, {
      swpClass: "swp-rightNo",
      imgsrc: "https://countrydream.oss-cn-beijing.aliyuncs.com/4.png"
    }, {
      swpClass: "swp-rightNo",
      imgsrc: "https://countrydream.oss-cn-beijing.aliyuncs.com/5.png"
    }, {
      swpClass: "swp-rightNo",
      imgsrc: "https://countrydream.oss-cn-beijing.aliyuncs.com/6.png"
    }, {
      swpClass: "swp-rightNo",
      imgsrc: "https://countrydream.oss-cn-beijing.aliyuncs.com/8.png"
    }, {
      swpClass: "swp-rightNo",
      imgsrc: "https://countrydream.oss-cn-beijing.aliyuncs.com/9.png"
    }, {
      swpClass: "swp-rightNo",
      imgsrc: "https://countrydream.oss-cn-beijing.aliyuncs.com/10.png"
    }, {
      swpClass: "swp-rightNo",
      imgsrc: "https://countrydream.oss-cn-beijing.aliyuncs.com/11.png"
    }
    ]
  },
  swpBtn: function (e) {
    var swp = this.data.swiperList;
    var max = swp.length;
    var idx = e.currentTarget.dataset.index;
    var prev = swp[idx - 1];//前一个
    var next = swp[idx + 1];//后一个
    var curView = swp[idx];//当前
    if (prev) {//如果当前的前面有
      if (next) {//当前的后面有
        next.swpClass = "swp-right";
      }
      prev.swpClass = "swp-left";
      curView.swpClass = "swp-center";
      for (var i = 0; i < idx; i++) { //当前前一个的前面所有
        swp[i].swpClass = 'swp-leftNo'
      }
    }
    if (next) {//如果当前的后面有
      if (prev) {//当前的前面有
        prev.swpClass = "swp-left";
      }
      curView.swpClass = "swp-center";
      next.swpClass = "swp-right";
      for (var i = (idx + 2); i < max; i++) {//当前后一个的后面所有
        swp[i].swpClass = 'swp-rightNo'
      }
    } else {
      prev.swpClass = "swp-left";
      curView.swpClass = "swp-center";
    }
    this.setData({
      swiperList: swp
    })
  },
})
