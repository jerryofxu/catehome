// pages/detail/meat/meat.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  onShareAppMessage: function () {

  },

  paigu:function(e) {
    wx.navigateTo({
      url: '../../dishes/paigu/paigu',
    })
  }
})