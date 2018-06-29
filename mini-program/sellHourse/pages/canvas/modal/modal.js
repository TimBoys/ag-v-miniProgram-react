Page({
  data: {
    showModalStatus: false
  },
  powerDrawer: function (e) {
    console.log(e)
    var currentStatu = e.currentTarget.dataset.statu;
    this.util(currentStatu);
  },
  util: function (currentStatu) {
    /* 动画部分 */
    // 第1步：创建动画实例 
    var animation = wx.createAnimation({
      duration:300, //动画时长 
      timingFunction: "linear", //线性 
      delay: 0 //0则不延迟 
    });

    // 第2步：这个动画实例赋给当前的动画实例 
    this.animation = animation;

    // 第3步：执行第一组动画 
    animation.opacity(0).rotateX(-100).step();

    // 第4步：导出动画对象赋给数据对象储存 
    this.setData({
      animationData: animation.export()
    })

    // 显示 
    if (currentStatu == "open") {
      this.setData(
        {
          showModalStatus: true
        }
      );
    }      //关闭 
    else if (currentStatu == "close") {
      this.setData(
        {
          showModalStatus: false
        }
      );
    }

      // 第5步：设置定时器到指定时候后，执行第二组动画 
      // 执行第二组动画 
      animation.opacity(1).rotateX(0).step();
      // 给数据对象储存的第一组动画，更替为执行完第二组动画的动画对象 
      this.setData({
        animationData: animation
      })
  },

  animatess:function(res){
    var _this = this;
    var animate = wx.createAnimation({
      duration: 450, //动画时长 
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
    setTimeout(function(){
      animate.translateX(-50).step();
      _this.setData({
        animateData: animate.export()
      })   
    },200)
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
      animate.translateX(0).step();
      _this.setData({
        animateData: animate.export()
      })
    }, 450) 
  }

})