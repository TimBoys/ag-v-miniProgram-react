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
    menu: '',

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
    // _this.drawText("本人从事房地产行业多年，你的房地产专家!本人从事房地产行业多年，你的房本人从!本人从事房地产行业多年，你的房", 20, 230, 250);
    ctx.drawImage("../../images/canvas/logo1.jpg", 0, 0, 300, 160)
    ctx.drawImage("../../images/canvas/132.jpg", 75, 320, 150, 120)
    ctx.fillText("长按保存到相册!", 100, 500);

    ctx.draw();
  
    this.showUploadImg();

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
      canvasId: 'uploadImg',
      x: 0,
      y: 0,
      width: 750,
      height: 1492,
      destWidth: 750,
      destHeight: 1492,
      quality:1,
      success:function(res){
        console.log(res.tempFilePath)
        _this.saveImgAlbum(res.tempFilePath)
        wx.getImageInfo({
          src: res.tempFilePath,
          success:function(res){
            console.log(res)
          }
        })
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

     this.ctx.font = "44px Arial";
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
       this.ctx.fillText(row[b], x, y + (b + 1) * 50);
    }
  },
  //展示真实的图片
  showUploadImg:function(){
    var _this = this;
    var ctx = wx.createCanvasContext("uploadImg", this);
    _this.ctx = ctx;
    ctx.setFillStyle("white");
    ctx.fillRect(0, 0, 750, 1492);
    ctx.drawImage("../../images/canvas/logo1.jpg", 0, 0, 750, 420)
    ctx.setFillStyle("black");
    ctx.font = "48px Arial";
    ctx.fillText("吴军炎!", 20, 450);
    ctx.font = "40px Arial";
    ctx.fillText("你的房地产专家!", 20, 500);
    ctx.font = "44px Arial";
    _this.drawText("本人从事房地产行业多年，你的房地产专家!本人从事房地产行业多年，你的房本人从!本人从事房地产行业多年，你的房", 20, 530, 700);
    ctx.drawImage("../../images/canvas/132.jpg", 75, 1000, 550, 520)
    ctx.fillText("长按保存到相册!", 100, 1200);

    ctx.draw();   


  },

  actionSheetTap: function () {
    console.log("195")
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden
    })
  },
  actionSheetbindchange: function () {
    console.log("202")    
    this.setData({
      actionSheetHidden: true
    })
  },
  bindMenu1: function () {
    console.log("208")
    this.setData({
      actionSheetHidden: false
    })
  },
  bindMenu2: function () {
    console.log("214")
    this.setData({
      actionSheetHidden: false
    })
  },
  bindMenu3: function () {
    console.log("220")    
    this.setData({
      actionSheetHidden: false
    })
  },
  animate:function(){
    var _this = this;
    
    var goBack = this.toRotate();
    console.log(goBack)
    setInterval(function(){
      console.log(goBack)
      if (goBack == "go"){
        goBack = _this.toRotate();
      }else{
        goBack = _this.chongZhi();
      }
    },3000)

  },
  toRotate:function(){
    var _this = this;
    _this.animation = wx.createAnimation({
      transformOrigin: "50% 50%",
      duration: 3000,
      timingFunction: "linear",
      delay: 0
    })

      _this.animation.scale(1,1).step()

      _this.animation.translate(300).step();
      this.setData({
        animationData: _this.animation.export()
      })

      // this.initAnimate();
      return "go";

  },
  chongZhi:function(){
    var _this = this;
    _this.animation.translate(0).step()
    _this.animation.scale(1, 1).step()
    this.setData({
      animationData: _this.animation.export()
    })    
    return "back";
  },


 






})