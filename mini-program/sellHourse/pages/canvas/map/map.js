// pages/canvas/map/map.js
var app = getApp();

let animationShowHeight = 300; 
Page({

  /**
   * 页面的初始数据
   */
  data: {
    markers: [{
      // iconPath: "https://qswebsite.oss-cn-beijing.aliyuncs.com/concat_service/sell_house/house/house1/house1_6.png",
      iconPath: "../../../images/detail/person.png",
      id: 0,
      latitude: 23.099994,
      longitude: 113.334520,
      width: 30,
      height: 30,
      title:"我家在这123",
      callout:{
        content:"我是callout",
        color:"#f00",
        fontSize: "16",
        borderRadius: "10",
        bgColor: "#ffffff",
        padding: "10",
        display: "ALWAYS"  
      },
      label:{
        content:"我是label",
        color:"#0f0",
        fontSize: "16",
        textAlign:"center"
      },
      anchor: { x: .5, y: .5 }
    }],
    polyline: [{
      points: [{
        longitude: 113.3245211,
        latitude: 23.10229
      }, {
        longitude: 113.324520,
        latitude: 23.21229
      }],
      color: "#FF0000DD",
      width: 2,
      arrowIconPath: true
    }],
    controls: [{
      id: 1,
      iconPath: '../../../images/detail/phone.png',
      position: {
        left: 0,
        top: 300 - 50,
        width: 30,
        height: 30
      },
      clickable: true
    }],
    animationData: "",
    showModalStatus: false,
    imageHeight: 0,
    imageWidth: 0 
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.mapCtx = wx.createMapContext('map')
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

    let that = this;
    wx.getSystemInfo({
      success: function (res) {
        animationShowHeight = res.windowHeight;
      }
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  regionchange(e) {
    console.log(e)
  },
  markertap(e) {
    console.log(e)
  },
  controltap(e) {
    console.log(e)
  },
  moveToLocation: function () {
   
    this.mapCtx.moveToLocation();
  },

  // 自定义弹出框
  imageLoad: function (e) {
    console.log("xxx``")
  },
  showModal: function () {
    // 显示遮罩层  
    console.log(animationShowHeight)
    var animation = wx.createAnimation({
      duration: 10,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(animationShowHeight).step()
    this.setData({
      animationData: animation.export(),
      showModalStatus: true
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 200)
  },
  hideModal: function () {
    // 隐藏遮罩层  
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation;
    animation.translateY(animationShowHeight).step()
    this.setData({
      animationData: animation.export(),
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export(),
        showModalStatus: false
      })
    }.bind(this), 200)
  },  


})