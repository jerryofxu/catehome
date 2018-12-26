// pages/detail/fast/fast.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  onShareAppMessage: function () {

  },

  tomato:function(e) {
    wx.navigateTo({
      url: '../../dishes/tomato/tomato',
    })
  }
})