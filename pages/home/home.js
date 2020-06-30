const jinrishici = require('../../utils/jinrishici.js')
// pages/in/in.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  content(event){
    var frist = event.currentTarget.dataset.shiCi
     console.log(frist);
    this.setData({
      frist: frist - 1
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;

    
    wx.request({
      url: 'https://api.nextrt.com/V1/Gushi/',

      success: function(res){
        console.log(res.data)

        if(res.statusCode==200){
          that.setData({
            gushi: res.data
          })
          
          wx.setNavigationBarTitle({
            title: "每日诗词"
          })
  
          wx.hideNavigationBarLoading({
            complete: (res) => {},
          })
        }
        else if(res.statusCode==404){
          console.log("获取失败404")
        }
        
      }
    })
    wx.showNavigationBarLoading()

    jinrishici.load(result => {
      // 下面是处理逻辑示例
      console.log(result)
      this.setData({"shici": result.data})
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})