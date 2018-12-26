App({
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  
    // 展示本地存储能力
   
  onLaunch: function () {
   this._getUserInfo();
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  _getUserInfo: function () {
    wx.getUserInfo({
      success: function (res) {
        const userInfo = res.userInfo
        const nickName = userInfo.nickName
        const avatarUrl = userInfo.avatarUrl
        const gender = userInfo.gender // 性别 0：未知、1：男、2：女
        const province = userInfo.province
        const city = userInfo.city
        const country = userInfo.country
      }
    })
  },

  globalData:{
    g_userInfo:null
  }
})
