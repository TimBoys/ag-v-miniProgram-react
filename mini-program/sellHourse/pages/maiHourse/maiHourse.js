

var cityData = require('../../utils/city.js');
Page({
  data: {

    qyContData: ["不限", "温哥华", "列治文", "本拿比", "高贵林", "素里"],
    jgContData: ["不限", "$50万以下", "$50万—100万", "$100万—300万", "$300万—500万", "$500万以上"],
    hxContData: ["户型不限", "一室", "二室", "三室", "四室", "五室", "五室以上"],
    //选择的终点城市暂存数据
    endselect: "",
    //终点缓存的五个城市
    endcitys: [],
    //用户选择省份之后对应的城市和县城
    endkeys: {},
    //用户选择县城
    town: [],
    //所有车长
    commanders: cityData.getcommanders(),
    //所有车型
    models: cityData.getmodels(),
    //选中的车长
    commander: "",
    //选中的车型
    model: "",
    displaycity: 0,
    city: "区域",
    price: "价格",
    //车型
    model: "户型",
    qyopen: false,
    qyshow: true,
    nzopen: false,
    nzshow: true,
    pxopen: false,
    pxshow: true,
    isfull: false,
    cityleft: cityData.getCity(),
    citycenter: {},
    cityright: {},
    select1: '',
    select2: '',
    select3: '',
    shownavindex: '',
    maiHouseData: [{
      imgPath: "https://qswebsite.oss-cn-beijing.aliyuncs.com/concat_service/sell_house/house/house1/house1_2.png",
      ihrTop_title: "列治文三房城市屋",
      ihrCenter_left: "三房三浴",
      ihrCenter_right: "$94.9万",
      ihrBottom_title: "34-9680 Alexander Road",
      urlPath:"../detailHouse/detailHouse?idHouse=1"
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

  onLoad: function (options) {
    var that = this
    var province = ""
    var city = ""

    //先进行一次最近的数据刷新
  },

  onShow:function(){

  },
  //选择区域
  listqy: function (e) {
    console.log(this.data.qyopen)
    if (this.data.qyopen) {
      this.setData({
        qyopen: false,
        nzopen: false,
        pxopen: false,
        nzshow: true,
        pxshow: true,
        qyshow: true,
        isfull: false,
        shownavindex: 0
      })
    } else {
      this.setData({
        qyopen: true,
        pxopen: false,
        nzopen: false,
        nzshow: true,
        pxshow: true,
        qyshow: false,
        isfull: true,
        shownavindex: 1
      })
    }

  },
  //目的地选择价格
  list: function (e) {
    console.log(this.data.nzopen)
    if (this.data.nzopen) {
      this.setData({
        nzopen: false,
        pxopen: false,
        qyopen: false,
        nzshow: true,
        pxshow: true,
        qyshow: true,
        isfull: false,
        shownavindex: 0
      })
    } else {
      this.setData({
        content: this.data.nv,
        nzopen: true,
        pxopen: false,
        qyopen: false,
        nzshow: false,
        pxshow: true,
        qyshow: true,
        isfull: true,
        shownavindex:2
      })
    }
  },
  //选择户型
  listpx: function (e) {
    console.log(this.data.pxopen)
    if (this.data.pxopen) {
      this.setData({
        nzopen: false,
        pxopen: false,
        qyopen: false,
        nzshow: true,
        pxshow: true,
        qyshow: true,
        isfull: false,
        shownavindex: 0
      })
    } else {
      this.setData({
        nzopen: false,
        pxopen: true,
        qyopen: false,
        nzshow: true,
        pxshow: false,
        qyshow: true,
        isfull: true,
        shownavindex: 3 
      })
    }
  },

  // 选择地址
  selectcity: function (e) {
    console.log(e)
    this.setData({
      city: e.target.dataset.city,
    });
    this.listqy();
  },

  // 选择地址
  selectprice: function (e) {
    console.log(e)
    this.setData({
      price: e.target.dataset.city,
    });
    this.list();
  },

  // 选择地址
  selectmodel: function (e) {
    console.log(e)
    this.setData({
      model: e.target.dataset.city,
    });
    this.listpx();
  },
  //关闭遮罩层
  hidebg: function (e) {
    this.setData({
      qyopen: false,
      nzopen: false,
      pxopen: false,
      nzshow: true,
      pxshow: true,
      qyshow: true,
      isfull: false,
      shownavindex: 0
    })
  },


})