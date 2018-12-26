//index.js
//获取应用实例
const app = getApp()
var list=require('../../Data/data.js')
//console.log(list)
Page({
  data: {
    searchVal:'',

  //   canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onLoad: function () {
    // 查看是否授权
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function (res) {
              console.log(res.userInfo)
            }
          })
        }
      }
    })
  },
  bindGetUserInfo(e) {
    console.log(e.detail.userInfo)
  },

  /*获取input中的数据*/
  wxSearchInput: function(e){
    this.setData({
      searchVal:e.detail.value
    })
    //console.log(this.data.searchVal)
  },

  searchBtn: function () {
    var val = this.data.searchVal
    
    if( (/\s/).test(val) ){
      console.log('em')
    }else{
    //console.log(val)
      if(val=='水煮肉片')
      {
        wx.navigateTo({
          url: '/pages/dishes/shuizhuroupian/roupian',
        })
      }else if(val=='可乐鸡翅'){
        wx.navigateTo({
          url: '/pages/dishes/Chicken/Chicken',
        })
        } else if (val == '香菇青菜') {
          wx.navigateTo({
            url: '/pages/dishes/vegetables/vegetables',
          })
        }else{
          wx.showToast({
            title: '抱歉亲，没找到！',
            icon: 'none'
          })
          //console.log('no')
        }
      }
  },
  
  chooseSort: function (e) {
    wx.navigateTo({
      url: '/pages/detail/kinds',
    })
  },

  zuiai: function (e) {
    wx.navigateTo({
      url: '/pages/detail/jiachang',
    })
  },

  tuijian: function (e) {
    wx.navigateTo({
      url: '/pages/detail/recommend',
    })
  },

  seeR: function (e) {
    wx.navigateTo({
      url: '/pages/dishes/shuizhuroupian/roupian',
    })
  },
  seeT: function (e) {
    wx.navigateTo({
      url: '/pages/dishes/tomato/tomato',
    })
  },
  seeC: function (e) {
    wx.navigateTo({
      url: '/pages/dishes/Chicken/Chicken',
    })
  }
  
})

