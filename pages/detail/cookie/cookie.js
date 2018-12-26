// pages/detail/cookie/cookie.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

 
  onShareAppMessage: function () {

  },

  banji:function(e) {
    wx.navigateTo({
      url: '../../dishes/tiandian/tiandian',
    })
  }
})