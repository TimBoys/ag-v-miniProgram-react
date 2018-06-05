// pages/zuHourse/zuHourse.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperList: [{
      carouseladdress: "../../images/index/banner0.jpg"
    }, {
      carouseladdress: "../../images/index/banner1.jpg"
    }, {
      carouseladdress: "../../images/index/banner2.jpg"
    }],
    maiHouseData: [{
      imgPath: "https://qswebsite.oss-cn-beijing.aliyuncs.com/concat_service/sell_house/house/house1/house1_2.png",
      ihrTop_title: "列治文三房城市屋",
      ihrCenter_left: "三房三浴",
      ihrCenter_right: "$94.9万",
      ihrBottom_title: "34-9680 Alexander Road",
      urlPath: "../detailHouse/detailHouse?idHouse=1"
    }, {
      imgPath: "https://qswebsite.oss-cn-beijing.aliyuncs.com/concat_service/sell_house/house/house2/house2_2.png",
      ihrTop_title: "8680 Shepherd Way,Delta",
      ihrCenter_left: "1年新独立屋",
      ihrCenter_right: "$928万",
      ihrBottom_title: "北三角洲 Nordel区",
      urlPath: "../detailHouse/detailHouse?idHouse=2"
    }, {
      imgPath: "https://qswebsite.oss-cn-beijing.aliyuncs.com/concat_service/sell_house/house/house3/house3_2.png",
      ihrTop_title: "列治文Mayfair独立出入户型",
      ihrCenter_left: "大三房+ 书房公寓",
      ihrCenter_right: "$74.9万",
      ihrBottom_title: "151-9388 Mckim Way Richmond",
      urlPath: "../detailHouse/detailHouse?idHouse=3"
    }, {
      imgPath: "https://qswebsite.oss-cn-beijing.aliyuncs.com/concat_service/sell_house/house/house4/house4_1.png",
      ihrTop_title: "高质量超赞联排屋",
      ihrCenter_left: "精美厨房，quartz 台面，超大主卧",
      ihrCenter_right: "$98.8万",
      ihrBottom_title: "53 6868 Burlington Ave,Burnaby",
      urlPath: "../detailHouse/detailHouse?idHouse=4"
    }, {
      imgPath: "https://qswebsite.oss-cn-beijing.aliyuncs.com/concat_service/sell_house/house/house5/house5_1.png",
      ihrTop_title: "私人海景房",
      ihrCenter_left: "独立屋宽敞空间，私人顶层阳台",
      ihrCenter_right: "$297万",
      ihrBottom_title: "6002 Chancellor Blvd,Vancouver",
      urlPath: "../detailHouse/detailHouse?idHouse=5"
    }]
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
  
  }
})