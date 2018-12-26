// pages/detail/vegetable/vegetable.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

 
  onShareAppMessage: function () {

  },

  qingcai:function(e) {
    wx.navigateTo({
      url: '../../dishes/vegetables/vegetables',
    })
  }
})