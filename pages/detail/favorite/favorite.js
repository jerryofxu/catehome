// pages/detail/favorite/favorite.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  detail:function(e) {
    wx.navigateTo({
      url: '../../dishes/mian/mian',
    })
  },

  roupian: function (e) {
    wx.navigateTo({
      url: '../../dishes/shuizhuroupian/roupian',
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})