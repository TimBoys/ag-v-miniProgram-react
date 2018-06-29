var WxParse = require('../../wxParse/wxParse.js');

//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    touch:false,
    bo_zan:0
  },
  onLoad: function () {
    var _this = this;
    wx.onBackgroundAudioStop(function(){
      _this.setData({ bo_zan: 0 })
    })

  },
  onShow:function(){


  },
  //自定义事件
  mai_house:function(){
    wx.navigateTo({
      url: '../maiHourse/maiHourse',
    })
  }, 
  zu_house: function () {
    wx.navigateTo({
      url: '../zuHourse/zuHourse',
    })
  }, 
  pinGu_house:function(){
    wx.navigateTo({
      url: '../pinGu_house/pinGu_house',
    })
  },
  search_house: function () {
    wx.showToast({
      title: '搜索功能暂未开放！',
      icon: "none"
    })
    setTimeout(function () {
      wx.hideLoading();
    },1000)
  },
  bo:function(e){
    console.log(e.currentTarget.dataset.bozan);
    if (Number(e.currentTarget.dataset.bozan)){
        wx.playBackgroundAudio({
          dataUrl: 'https://qswebsite.oss-cn-beijing.aliyuncs.com/concat_service/sell_house/house/music/%E5%B0%9A%E5%A3%AB%E8%BE%BE%20-%20%E7%BA%B8%E7%9F%AD%E6%83%85%E9%95%BF%EF%BC%88Cover%EF%BC%9A%E7%83%9F%E6%8A%8A%E5%84%BF%EF%BC%89.mp3',
          title: '纸短情长',
          coverImgUrl: 'https://qswebsite.oss-cn-beijing.aliyuncs.com/concat_service/sell_house/house/house5/house5_1.png',
          success: function (res) {
            console.log(res)
          }
        })
        this.setData({bo_zan:1})
    }else{
        wx.pauseBackgroundAudio();
        wx.onBackgroundAudioPause(function (res) {
          console.log(res)
        })
        this.setData({bo_zan: 0})
    }

  },

})
