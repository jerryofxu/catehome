const app = getApp()

Page({
  
  onShareAppMessage: function () {

  },

  fav: function (e) {
    wx.navigateTo({
      url: '../detail/favorite/favorite',
    })
  },

  meat: function (e) {
    wx.navigateTo({
      url: '../detail/meat/meat',
    })
  },

  family: function(e) {
    wx.navigateTo({
      url: '../detail/family/family',
    })
  },

  fast: function (e) {
    wx.navigateTo({
      url: '../detail/fast/fast',
    })
  },

  vege: function (e) {
    wx.navigateTo({
      url: '../detail/vegetable/vegetable',
    })
  },

  cookie: function (e) {
    wx.navigateTo({
      url: '../detail/cookie/cookie',
    })
  },

  noodle: function(e) {
    wx.navigateTo({
      url: '../detail/noodle/noodle',
    })
  },

  drink: function (e) {
    wx.navigateTo({
      url: '../detail/drinking/drinking',
    })
  },

  mmore: function(e) {
    wx.navigateTo({
      url: '../detail/more/more',
    })
  }
})