// pages/detail/drinking/drinking.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },


  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  yumizhi:function(e) {
    wx.navigateTo({
      url: '../../dishes/yumizhi/yumizhi',
    })
  }
})