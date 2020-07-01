// pages/home/content/content.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    catalog: [
      {
          title: "静夜思",
          author: "李白",
          dynasty: "[唐]",
          id: 1,
          isRecite: true
      },
      {
        title: "咏鹅",
        author: "骆宾王",
        dynasty: "[初唐]",
        id: 2,
        isRecite: true
     },
    {
      title: "静夜思",
      author: "李白",
      dynasty: "[唐]",
      id: 3,
      isrecite: false
    },
    {
      title: "咏鹅",
      author: "骆宾王",
      dynasty: "[初唐]",
      id: 4,
      isrecite: false
   }
    ]
  },

  todetail(event){
    var shiId = event.currentTarget.dataset.shiId
     console.log(shiId);
    wx.navigateTo({
      url: '/pages/home/content/detail/detail?id=' + shiId,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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