// pages/detailHouse/detailHouse.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    houseData:[{
      swiperList: [{
        carouseladdress: "https://qswebsite.oss-cn-beijing.aliyuncs.com/concat_service/sell_house/house/house1/house1_6.png"
      }, {
          carouseladdress: "https://qswebsite.oss-cn-beijing.aliyuncs.com/concat_service/sell_house/house/house1/house1_2.png"
      }, {
          carouseladdress: "https://qswebsite.oss-cn-beijing.aliyuncs.com/concat_service/sell_house/house/house1/house1_3.png"
      }, {
        carouseladdress: "https://qswebsite.oss-cn-beijing.aliyuncs.com/concat_service/sell_house/house/house1/house1_4.png"
      }, {
        carouseladdress: "https://qswebsite.oss-cn-beijing.aliyuncs.com/concat_service/sell_house/house/house1/house1_5.png"
      }, {
        carouseladdress: "https://qswebsite.oss-cn-beijing.aliyuncs.com/concat_service/sell_house/house/house1/house1_1.png"
      }],
      swiperLength:6,
      houseGold:"单边单位，公园景，学区房!",
      housePrice:"$94.9万",
      housePlace:"三房三浴",
      houseMin:"622平方尺",
      houseJjprice:"$949000",
      houseYueheprice:"$92万",
      houseFwmin:"622平方尺",
      houseTudimin:"730平方尺",
      houseHome:"3",
      houseBathroom:"3",
      houseKitch:"2",
      houseOld:"2016年",
      houseDetail:"34-9680 Alexander Road 列治文MUSEO城市屋，单边单位，公园景，学区房! 两年新，三房三浴，叫价仅94.9 万"
    }, {
      swiperList: [{
        carouseladdress: "https://qswebsite.oss-cn-beijing.aliyuncs.com/concat_service/sell_house/house/house2/house2_9.png"
      }, {
        carouseladdress: "https://qswebsite.oss-cn-beijing.aliyuncs.com/concat_service/sell_house/house/house2/house2_2.png"
      }, {
        carouseladdress: "https://qswebsite.oss-cn-beijing.aliyuncs.com/concat_service/sell_house/house/house2/house2_3.png"
      }, {
        carouseladdress: "https://qswebsite.oss-cn-beijing.aliyuncs.com/concat_service/sell_house/house/house2/house2_4.png"
      }, {
        carouseladdress: "https://qswebsite.oss-cn-beijing.aliyuncs.com/concat_service/sell_house/house/house2/house2_5.png"
      }, {
        carouseladdress: "https://qswebsite.oss-cn-beijing.aliyuncs.com/concat_service/sell_house/house/house2/house2_6.png"
      }, {
        carouseladdress: "https://qswebsite.oss-cn-beijing.aliyuncs.com/concat_service/sell_house/house/house2/house2_7.png"
      }, {
        carouseladdress: "https://qswebsite.oss-cn-beijing.aliyuncs.com/concat_service/sell_house/house/house2/house2_8.png"
      }, {
        carouseladdress: "https://qswebsite.oss-cn-beijing.aliyuncs.com/concat_service/sell_house/house/house2/house2_1.png"
      }],
      swiperLength:9,
      houseGold: "1年新独立屋!",
      housePrice: "$928万",
      housePlace: "独立屋",
      houseMin: "4,617平方尺",
      houseJjprice: "$1,888,888",
      houseYueheprice: "$928万",
      houseFwmin: "4,617平方尺",
      houseTudimin: "6.600平方尺",
      houseHome: "8",
      houseBathroom: "6",
      houseKitch: "4",
      houseOld: "2017年",
      houseDetail: "1年新独立屋，土地面积6,600，房屋面积近4,700。私人订制装潢设备，门窗采用磨砂玻璃，采光度极佳。一楼客厅高楼底，附有宽敞副主人房，大面积采用枫木地板，精心细节并配上法式吊灯。大型家庭休息区域，双排落地们可直通后院。开放式厨房，大型中岛，石英台面，厨房器具使用不锈钢材料，橱柜等均附有缓冲系统保护柜角与柜门。宽敞中厨附有独立煤气灶，强力抽油烟系统与大型粮食储藏间。二楼起居区域，4房3卫均为套房。主人房宽敞明亮，私人卫浴与大型衣帽间。地下室共3房2卫，并附有2个厨房。出租单位独立厨房，洗衣间，2房一厅套间可成套出租并独立出入。房屋朝南向，享受阳光夕阳，日起日落。别墅位于北三角洲 Nordel区，步行即可到图书馆，健身房，超级市场与各式餐厅等娱乐场所。"
      }, {
        swiperList: [{
          carouseladdress: "https://qswebsite.oss-cn-beijing.aliyuncs.com/concat_service/sell_house/house/house3/house3_6.png"
        }, {
          carouseladdress: "https://qswebsite.oss-cn-beijing.aliyuncs.com/concat_service/sell_house/house/house3/house3_2.png"
        }, {
          carouseladdress: "https://qswebsite.oss-cn-beijing.aliyuncs.com/concat_service/sell_house/house/house3/house3_3.png"
        }, {
          carouseladdress: "https://qswebsite.oss-cn-beijing.aliyuncs.com/concat_service/sell_house/house/house3/house3_4.png"
        }, {
          carouseladdress: "https://qswebsite.oss-cn-beijing.aliyuncs.com/concat_service/sell_house/house/house3/house3_5.png"
        }, {
          carouseladdress: "https://qswebsite.oss-cn-beijing.aliyuncs.com/concat_service/sell_house/house/house3/house3_1.png"
        }, {
          carouseladdress: "https://qswebsite.oss-cn-beijing.aliyuncs.com/concat_service/sell_house/house/house3/house3_7.png"
        }, {
          carouseladdress: "https://qswebsite.oss-cn-beijing.aliyuncs.com/concat_service/sell_house/house/house3/house3_8.png"
        }],
        swiperLength: 8,
        houseGold: "最新调价Richmond公寓!",
        housePrice: "$74.9万",
        housePlace: "大三房+ 书房",
        houseMin: "1152平方尺",
        houseJjprice: "$749000",
        houseYueheprice: "$70万",
        houseFwmin: "1152平方尺",
        houseTudimin: "1252平方尺",
        houseHome: "4",
        houseBathroom: "3",
        houseKitch: "2",
        houseOld: "2013年",
        houseDetail: "最新调价Richmond 大三房+ 书房公寓最新价格 $74.9 万，townhouse的享受 ，condo的价格，您不容错过"
    }, {
      swiperList: [{
        carouseladdress: "https://qswebsite.oss-cn-beijing.aliyuncs.com/concat_service/sell_house/house/house4/house4_2.png"
      }, {
        carouseladdress: "https://qswebsite.oss-cn-beijing.aliyuncs.com/concat_service/sell_house/house/house4/house4_3.png"
      }, {
        carouseladdress: "https://qswebsite.oss-cn-beijing.aliyuncs.com/concat_service/sell_house/house/house4/house4_2.png"
      }, {
        carouseladdress: "https://qswebsite.oss-cn-beijing.aliyuncs.com/concat_service/sell_house/house/house4/house4_4.png"
      }, {
        carouseladdress: "https://qswebsite.oss-cn-beijing.aliyuncs.com/concat_service/sell_house/house/house4/house4_5.png"
      }, {
        carouseladdress: "https://qswebsite.oss-cn-beijing.aliyuncs.com/concat_service/sell_house/house/house4/house4_6.png"
      }],
      swiperLength: 6,
      houseGold: "Metrotown 四年高质量超赞联排屋！",
      housePrice: "$98.8万",
      housePlace: "二房二浴",
      houseMin: "1338平方尺",
      houseJjprice: "$988000",
      houseYueheprice: "$92万",
      houseFwmin: "1338平方尺",
      houseTudimin: "1538平方尺",
      houseHome: "2",
      houseBathroom: "2",
      houseKitch: "1",
      houseOld: "2014年",
      houseDetail: "Metrotown 四年高质量超赞联排屋。绝好地点，旺中带静，南北朝向，精美厨房，高级配置，quartz 台面，超大主卧。著名建商 Mosaic 出品。步行3分钟至Royal Oak Station。步行至图书馆，大统华，shopping center，学校，餐厅。绝对是投资自住首选。"
      }, {
        swiperList: [{
          carouseladdress: "https://qswebsite.oss-cn-beijing.aliyuncs.com/concat_service/sell_house/house/house5/house5_1.png"
        }, {
          carouseladdress: "https://qswebsite.oss-cn-beijing.aliyuncs.com/concat_service/sell_house/house/house5/house5_2.png"
        }, {
          carouseladdress: "https://qswebsite.oss-cn-beijing.aliyuncs.com/concat_service/sell_house/house/house5/house5_3.png"
        }, {
          carouseladdress: "https://qswebsite.oss-cn-beijing.aliyuncs.com/concat_service/sell_house/house/house5/house5_4.png"
        }, {
          carouseladdress: "https://qswebsite.oss-cn-beijing.aliyuncs.com/concat_service/sell_house/house/house5/house5_5.png"
        }, {
          carouseladdress: "https://qswebsite.oss-cn-beijing.aliyuncs.com/concat_service/sell_house/house/house5/house5_6.png"
        }],
        swiperLength: 6,
        houseGold: "私人顶层阳台，尽享北岸山景与海景!",
        housePrice: "$2970000",
        housePlace: "四房四浴",
        houseMin: "1466平方尺",
        houseJjprice: "$2970000",
        houseYueheprice: "$2670000",
        houseFwmin: "1466平方尺",
        houseTudimin: "1566平方尺",
        houseHome: "3",
        houseBathroom: "3",
        houseKitch: "1",
        houseOld: "2006年",
        houseDetail: "著名开发商Intracorp精心打造， 室內3780平方英尺，独特空间设计，如同独立屋宽敞空间的享受，私人顶层阳台，尽享北岸山景与海景。家庭厅延伸出去的庭院，让您家人和朋友在朝南温暖的阳光下 BBQ。地下室一睡房，一卫浴，一个影音室，多个储藏间。楼上3 睡房，一大開放式書房/辦公廳。 頂層閣樓還有一大房，可當小孩遊戲房或者是第五睡房"
      },],
    showHouseData:[],
    isShowModal:false,
    lianxi_msg:[{
      person:"小张",
      dkcNum:"2",
      phone:"18305626606"
    }, {
        person: "小李",
      dkcNum: "12",
      phone: "18323226606"
      }, {
        person: "小王",
        phone: "18305622222",
        dkcNum: "5",
      }],
      idHouse:null,
      
      detailMap:"../../images/detail/detailMap.png"

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    var _this = this;
    this.mapCtx = wx.createMapContext('map');
    this.setData({
      showHouseData: _this.data.houseData[options.idHouse - 1] || 0,
      idHouse: options.idHouse,
      titieHouse: _this.data.houseData[options.idHouse - 1].houseGold || "自定义转发标题"
    })
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function (res) {
    var app = getApp();
    console.log(res)
    wx.showShareMenu({
      withShareTicket: true,
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
  onShareAppMessage: function (res) {
    var _this = this;
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: this.data.titieHouse,
      path: '/pages/detailHouse/detailHouse?idHouse=' + _this.data.idHouse,
    }
  },

  // 自定义事件
  detailAddr:function(){
    var that = this;
    //温哥华经纬度
    wx.openLocation({
      latitude: 49.219699,
      longitude: -122.952495,
      name:"7070 walker ave burnaby",
      scale: 14
    })
    
  },
  lianxi:function(){
    this.setData({
      isShowModal:true
    })

  },
  disableModal:function(){
    this.setData({
      isShowModal: false
    })
  },
  call_phone: function (e) {
    wx.makePhoneCall({
      phoneNumber: e.currentTarget.dataset.phone
    })
  },
  navToPersion:function(e){
    wx.navigateToMiniProgram({
      appId: 'wx1503c073bfb77e83',
      // envVersion:'develop'
      envVersion:'trial'
    })
  },

  //移动到某位置
  moveMineHome: function () {
    // this.mapCtx.moveToLocation();
    this.mapCtx.translateMarker({
      markerId:1,
      autoRotate: true,
      duration: 200,
      destination: {
        latitude: 49.256679,
        longitude: -123.007040,
      },
      animationEnd() {
        console.log('animation end')
      }
    })
  },

  //选择
  addAllLocations:function(e){
    // console.log(e.currentTarget.dataset.seldata);
    var mapIndex = e.currentTarget.dataset.seldata;
    wx.navigateTo({
      url: './detailMap/detailMap?mapIndex='+mapIndex,
    })

  }

      
})