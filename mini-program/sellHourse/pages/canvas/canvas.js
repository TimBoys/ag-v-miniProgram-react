// pages/canvas/canvas.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // text:"这是一个页面"
    actionSheetHidden: true,
    actionSheetItems: [
      { bindtap: 'Menu1', txt: '菜单1' },
      { bindtap: 'Menu2', txt: '菜单2' },
    ],
    menu: ''
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
    var _this = this;
    var ctx = wx.createCanvasContext("myCanvas", this);
    _this.ctx = ctx;
    ctx.setFillStyle("white");
    ctx.fillRect(0,0,300,500);
    ctx.font = "14px Arial";
    ctx.setFillStyle("black");
    ctx.fillText("吴军炎!",20,200);
    ctx.font = "10px Arial";
    ctx.fillText("你的房地产专家!", 20, 220);
    ctx.font = "12px Arial";
    _this.drawText("本人从事房地产行业多年，你的房地产专家!本人从事房地产行业多年，你的房本人从!本人从事房地产行业多年，你的房", 20, 230, 250);
    ctx.drawImage("../../images/canvas/logo1.jpg", 0, 0, 300, 160)
    ctx.drawImage("../../images/canvas/132.jpg", 75, 320, 150, 120)
    ctx.fillText("长按保存到相册!", 100, 500);

    ctx.draw();
  
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

  longTouchCanvas:function(){
    var _this = this;
    wx.showLoading({
      title: '图片保存中',
    })
    wx.getSetting({
      success(res) {
        if (!res.authSetting['scope.writePhotosAlbum']) {
          wx.authorize({
            scope: 'scope.writePhotosAlbum',
            success() {
              // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
              console.log("writePhotosAlbum")
            }
          })
        }
      }
    })
    wx.canvasToTempFilePath({
      canvasId: 'myCanvas',
      x: 0,
      y: 0,
      width: 300,
      height: 540,
      destWidth: 300,
      destHeight:540,
      success:function(res){
        console.log(res.tempFilePath)
        _this.saveImgAlbum(res.tempFilePath)
      }
    }, this)
  },

  saveImgAlbum:function(url){
    wx.saveImageToPhotosAlbum({
      filePath: url,
      success:function(res){
        console.log(res)
        wx.showToast({
          title: '成功保存到相册',
        })
      },
      complete:function(res){
        wx.hideLoading();
      }

    })


  },
  //canvas换行
  drawText: function (t, x, y, w){

    var chr = t.split("");
    console.log(chr)
    var temp = "";
    var row = [];

     this.ctx.font = "12px Arial";
    console.log()
    for (var a = 0; a < chr.length; a++) {
      if ( this.ctx.measureText(temp).width >= w) {
        row.push(temp);
        temp = "";
      }
      temp += chr[a];
    }

    row.push(temp);
    for (var b = 0; b < row.length; b++) {
       this.ctx.fillText(row[b], x, y + (b + 1) * 20);
    }
  },


  actionSheetTap: function () {
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden
    })
  },
  actionSheetbindchange: function () {
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden
    })
  },
  bindMenu1: function () {
    this.setData({
      menu: 1,
      actionSheetHidden: !this.data.actionSheetHidden
    })
  },
  bindMenu2: function () {
    this.setData({
      menu: 2,
      actionSheetHidden: !this.data.actionSheetHidden
    })
  },
  bindMenu3: function () {
    this.setData({
      menu: 3,
      actionSheetHidden: !this.data.actionSheetHidden
    })
  }
})