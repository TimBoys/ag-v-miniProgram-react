// pages/detailHouse/detailMap/detailMap.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mineMarkers: [{
      iconPath: "",
      id: 0,
      latitude: 49.219699,
      longitude: -122.952495,
      width: 14,
      height: 24,
      title: "我家在这123",
      callout: {
        content: "我的房子",
        color: "#f00",
        fontSize: "10",
        borderRadius: "4",
        bgColor: "#ffffff",
        padding: "2",
        display: "ALWAYS"
      },
      anchor: {
        x: .5,
        y: .5
      }
    }],
    // 娱乐标记
    yuleMarkers: [{
      iconPath: "../../../images/detail/yule.png",
      id: 1,
      latitude: 49.256679,
      longitude: -123.007040,
      width: 20,
      height: 20,
      callout: {
        content: "赌场",
        color: "#f00",
        fontSize: "10",
        borderRadius: "4",
        bgColor: "#ffffff",
        padding: "2",
        display: "ALWAYS"
      },
      anchor: {
        x: .5,
        y: .5
      }
    }, {
      iconPath: "../../../images/detail/yule.png",
      id: 2,
      latitude: 49.226770,
      longitude: -122.998894,
      width: 20,
      height: 20,
      callout: {
        content: "KTV",
        color: "#f00",
        fontSize: "10",
        borderRadius: "4",
        bgColor: "#ffffff",
        padding: "2",
        display: "ALWAYS"
      },
      anchor: {
        x: .5,
        y: .5
      }
    }],
    // 交通标记
    busMarkers: [{
      iconPath: "../../../images/detail/bus.png",
      id: 3,
      latitude: 49.227314,
      longitude: -123.005178,
      width: 20,
      height: 20,
      callout: {
        content: "铁道镇站",
        color: "#f00",
        fontSize: "10",
        borderRadius: "4",
        bgColor: "#ffffff",
        padding: "2",
        display: "ALWAYS"
      },
      anchor: {
        x: .5,
        y: .5
      }
    }, {
      iconPath: "../../../images/detail/bus.png",
      id: 4,
      latitude: 49.220028,
      longitude: -122.988307,
      width: 20,
      height: 20,
      callout: {
        content: "Royal Oak Station",
        color: "#f00",
        fontSize: "10",
        borderRadius: "4",
        bgColor: "#ffffff",
        padding: "2",
        display: "ALWAYS"
      },
      anchor: {
        x: .5,
        y: .5
      }
    }],
    // 超市标记
    martMarkers: [{
      iconPath: "../../../images/detail/mart.png",
      id: 5,
      latitude: 49.231103,
      longitude: -123.005352,
      width: 20,
      height: 20,
      callout: {
        content: "Old Orchard Shopping Centre",
        color: "#f00",
        fontSize: "10",
        borderRadius: "4",
        bgColor: "#ffffff",
        padding: "2",
        display: "ALWAYS"
      },
      anchor: {
        x: .5,
        y: .5
      }
    }, {
      iconPath: "../../../images/detail/mart.png",
      id: 6,
      latitude: 49.259058,
      longitude: -123.026927,
      width: 20,
      height: 20,
      callout: {
        content: "沃尔玛",
        color: "#f00",
        fontSize: "10",
        borderRadius: "4",
        bgColor: "#ffffff",
        padding: "2",
        display: "ALWAYS"
      },
      anchor: {
        x: .5,
        y: .5
      }
    }],
    // 餐厅标记
    restMarkers: [{
      iconPath: "../../../images/detail/rest.png",
      id: 7,
      latitude: 49.266895,
      longitude: -123.005708,
      width: 20,
      height: 20,
      callout: {
        content: "加拿大风味餐馆",
        color: "#f00",
        fontSize: "10",
        borderRadius: "4",
        bgColor: "#ffffff",
        padding: "2",
        display: "ALWAYS"
      },
      anchor: {
        x: .5,
        y: .5
      }
    }, {
      iconPath: "../../../images/detail/rest.png",
      id: 8,
      latitude: 49.231923,
      longitude: -123.027358,
      width: 20,
      height: 20,
      callout: {
        content: "菲律宾风味餐馆",
        color: "#f00",
        fontSize: "10",
        borderRadius: "4",
        bgColor: "#ffffff",
        padding: "2",
        display: "ALWAYS"
      },
      anchor: {
        x: .5,
        y: .5
      }
    }],
    // 学区标记
    schoolMarkers: [{
      iconPath: "../../../images/detail/school.png",
      id: 9,
      latitude: 49.244226,
      longitude: -122.974723,
      width: 20,
      height: 20,
      callout: {
        content: "Burnaby Central Secondary(高中)",
        color: "#f00",
        fontSize: "10",
        borderRadius: "4",
        bgColor: "#ffffff",
        padding: "2",
        display: "ALWAYS"
      },
      anchor: {
        x: .5,
        y: .5
      }
    }, {
      iconPath: "../../../images/detail/school.png",
      id: 10,
      latitude: 49.243446,
      longitude: -122.983755,
      width: 20,
      height: 20,
      callout: {
        content: "Gilpin Elementary(小学)",
        color: "#f00",
        fontSize: "10",
        borderRadius: "4",
        bgColor: "#ffffff",
        padding: "2",
        display: "ALWAYS"
      },
      anchor: {
        x: .5,
        y: .5
      }
    }],

    markers: [{
      iconPath: "",
      id: 0,
      latitude: 49.219699,
      longitude: -122.952495,
      width: 14,
      height: 24,
      title: "我家在这123",
      callout: {
        content: "我的房子",
        color: "#f00",
        fontSize: "10",
        borderRadius: "4",
        bgColor: "#ffffff",
        padding: "2",
        display: "ALWAYS"
      },
      anchor: {
        x: .5,
        y: .5
      }
    }],
    mapIndex: 0,
    itemArray: [{
        title: "全部",
        selColor: ""
      },
      {
        title: "娱乐",
        selColor: ""
      },
      {
        title: "交通",
        selColor: ""
      },
      {
        title: "超市",
        selColor: ""
      },
      {
        title: "餐厅",
        selColor: ""
      },
      {
        title: "学区",
        selColor: ""
      }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // console.log(options.mapIndex);
    this.addLocation(options.mapIndex);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  addLocation: function(e) {
    // console.log(e)    
    var _this = this;
    var mapIndex = null;
    var allItemArray = [{
        title: "全部",
        selColor: ""
      },
      {
        title: "娱乐",
        selColor: ""
      },
      {
        title: "交通",
        selColor: ""
      },
      {
        title: "超市",
        selColor: ""
      },
      {
        title: "餐厅",
        selColor: ""
      },
      {
        title: "学区",
        selColor: ""
      }
    ];
    if (typeof e == "string" || typeof e == "number") {
      mapIndex = e;
    } else {
      mapIndex = e.currentTarget.dataset.seldata;
    }
    // console.log(mapIndex);
    if (mapIndex == 0) {
      _this.data.markers = _this.data.mineMarkers.concat([],_this.data.schoolMarkers, _this.data.restMarkers, _this.data.martMarkers, _this.data.busMarkers, _this.data.yuleMarkers);
    } else if (mapIndex == 1) {
      _this.data.markers = _this.data.mineMarkers.concat(_this.data.yuleMarkers);
    } else if (mapIndex == 2) {
      _this.data.markers = _this.data.mineMarkers.concat(_this.data.busMarkers);
    } else if (mapIndex == 3) {
      _this.data.markers = _this.data.mineMarkers.concat(_this.data.martMarkers);
    } else if (mapIndex == 4) {
      _this.data.markers = _this.data.mineMarkers.concat(_this.data.restMarkers);
    } else if (mapIndex == 5) {
      _this.data.markers = _this.data.mineMarkers.concat(_this.data.schoolMarkers);
    }else{
      _this.data.markers = _this.data.mineMarkers;
    }
    allItemArray[mapIndex].selColor = "selColor";
    _this.setData({
      markers: _this.data.markers,
      itemArray: allItemArray
    })
  },

})