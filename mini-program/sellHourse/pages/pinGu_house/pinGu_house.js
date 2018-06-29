// pages/pinGu_house/pinGu_house.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array_xiaoqu:["上南一村","罗秀三村","丝庐雅苑","古北新城","明申花园","名都城2期"],
    index_xiaoqu:0,
    array_huxin: [["1室", "2室", "3室", "4室", "5室", "6室", "7室", "8室", "9室"], ["0厅", "1厅", "2厅", "3厅", "4厅", "5厅", "6厅", "7厅", "8厅", "9厅"], ["0卫", "1卫", "2卫", "3卫", "4卫", "5卫", "6卫", "7卫", "8卫", "9卫"]],
    index_huxin: [0,0,0],    
    array_chaoxiang: ["东", "南", "西", "北", "东南", "东北", "西北", "西南","东西"],
    index_chaoxiang: 0,
    array_louceng: ["1层", "2层", "3层", "4层", "5层", "6层", "7层", "8层", "9层", "10层", "11层", "12层", "13层", "14层", "15层", "16层", "17层", "18层", "19层", "20层", "21层", "22层", "23层", "24层", "25层", "26层", "27层", "28层", "29层", "30层", "32层", "33层", "34层", "35层", "36层", "37层", "38层", "39层", "40层", "41层", "42层", "43层", "44层", "45层", "46层", "47层", "48层", "49层", "50层" ],
    index_louceng: 0,
    mianji:null,
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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

  bindPickerChange_xiaoqu:function(e){
    this.setData({
      index_xiaoqu: e.detail.value
    })
  },
  bindPickerChange_huxin: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index_huxin: e.detail.value
    })
  },
  bindPickerChange_chaoxiang: function (e) {
    this.setData({
      index_chaoxiang: e.detail.value
    })
  },
  bindPickerChange_louceng: function (e) {
    this.setData({
      index_louceng: e.detail.value
    })
  },
  conts_btn:function(){
    if (!this.data.mianji){
      this.animatess();
      return false;
    }
    wx.showToast({
      title: '评估功能暂未开放！',
      icon:"none"
    })
    setTimeout(function(){
    wx.hideToast();
    },2000)
  },

  mianji:function(e){
    console.log(e.detail.value);
    this.data.mianji = e.detail.value;
  },
  //抖动动画
  animatess: function (res) {
    var _this = this;
    var animate = wx.createAnimation({
      duration: 650, //动画时长 
      timingFunction: "linear", //线性 
      delay: 0 //0则不延迟 
    })
    this.animate = animate;
    setTimeout(function () {
      animate.translateX(50).step();
      _this.setData({
        animateData: animate.export()
      })
    }, 100)
    setTimeout(function () {
      animate.translateX(-50).step();
      _this.setData({
        animateData: animate.export()
      })
    }, 200)
    setTimeout(function () {
      animate.translateX(50).step();
      _this.setData({
        animateData: animate.export()
      })
    }, 300)
    setTimeout(function () {
      animate.translateX(-50).step();
      _this.setData({
        animateData: animate.export()
      })
    }, 400)
    setTimeout(function () {
      animate.translateX(50).step();
      _this.setData({
        animateData: animate.export()
      })
    },500)
    setTimeout(function () {
      animate.translateX(-50).step();
      _this.setData({
        animateData: animate.export()
      })
    }, 600)
    setTimeout(function () {
      animate.translateX(0).step();
      _this.setData({
        animateData: animate.export()
      })
    }, 650)
  }
  

})