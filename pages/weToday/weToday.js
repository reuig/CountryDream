// pages/weToday/weToday.js
var util = require('../../utils/util.js');
Page({
  data: {
    currentIndex: 0,
    cardRightIn: false,
    cardLeftIn: false,
  },
  onLoad: function (options) {
    let list = [
      {
        _id:2018070400,
        author: "乡梦",
        tag: '晋城',
        cover: "https://countrydream.oss-cn-beijing.aliyuncs.com/7_4_0.jpg",
        time: "2018年07月4日 ",
        title: "鸽子",
        agree: false,
        comment: [{
          txt: '“天空一无所有\n为何给我安慰”'
        }]
      },
      {
        _id:2018070401,
        author: "乡梦",
        tag: '晋城',
        cover: "https://countrydream.oss-cn-beijing.aliyuncs.com/7_4_1.jpeg",
        time: "2018年07月4日 ",
        title: "小巷",
        agree: false,
        comment: [{
          txt: '“面对大海我无限惭愧\n我年华空度 空有一身疲倦\n和所有以梦为马的诗人一样\n岁月易逝 一滴不剩”'
        }]
      },
      {
        _id:2018070402,
        author: "乡梦",
        tag: '晋城',
        cover: "https://countrydream.oss-cn-beijing.aliyuncs.com/7_4_2.jpg",
        time: "2018年07月4日 ",
        title: "佛塔",
        agree: false,
        comment: [{
          txt: '“活在这珍贵的人间\n太阳强烈\n水波温柔”'
        }]
      },
      {
        _id:2018070403,
        author: "乡梦",
        tag: '晋城',
        cover: "https://countrydream.oss-cn-beijing.aliyuncs.com/7_4_3.jpg",
        time: "2018年07月4日 ",
        title: "嫁衣",
        agree: false,
        comment: [{
          txt: '“今夜我不关心人类\n我只想你”'
        }]
      }
    ]
    for (let i of list) {
      i.fromNow = util.fromNow(i.createtime)
    }
    this.setData({ list })
  },
  toAgree: function (e) {
    let id = e.currentTarget.dataset.id;
    let list = this.data.list
    for (let i of list) {
      if (i._id == id) {
        i.agree = !i.agree
      }
      if (i._id == id && i.agree) {
        i.agreeNum = i.agreeNum + 1;
        wx.showToast({
          title: '喜欢(^o^)'
        });
      } 
      else if (i._id == id && !i.agree) {
        i.agreeNum = i.agreeNum - 1;
        wx.showToast({
          title: '不喜欢(￢_￢)'
        });
      }
    } 
      this.setData({ list })
  },
  //手指触摸动作开始 记录起点X坐标
  touchstart: function (e) {
    this.setData({
      startX: e.changedTouches[0].clientX,
      startY: e.changedTouches[0].clientY
    })
  },
  //滑动事件处理
  touchmove: function (e) {
    let idx = e.currentTarget.dataset.index;
    let startX = this.data.startX,//开始X坐标
      startY = this.data.startY,//开始Y坐标
      touchMoveX = e.changedTouches[0].clientX,//滑动变化坐标
      touchMoveY = e.changedTouches[0].clientY,//滑动变化坐标
      //获取滑动角度
      angle = this.angle({ X: startX, Y: startY }, { X: touchMoveX, Y: touchMoveY });

    //滑动超过45度角 return
    if (Math.abs(angle) > 45) return;

    if (touchMoveX > startX) { //右滑
      this.setData({
        currentIndex: idx == 0 ? 0 : idx - 1,
        cardRightIn: false,
        cardLeftIn: true
      })
    } else {
      this.setData({
        currentIndex: idx == this.data.list.length - 1 ? idx : idx + 1,
        cardRightIn: true,
        cardLeftIn: false
      })
    }
    wx.pageScrollTo({
      scrollTop: 0
    })

  },
  angle: function (start, end) {
    var _X = end.X - start.X,
      _Y = end.Y - start.Y
    //返回角度 /Math.atan()返回数字的反正切值
    return 360 * Math.atan(_Y / _X) / (2 * Math.PI)
  }
})