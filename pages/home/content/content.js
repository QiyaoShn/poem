// pages/home/content/content.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    catalog: [
      {
          title: "观刈麦",
          author: "白居易",
          dynasty: "[唐]",
          id: 1,
          isRecite: true
      },
      {
        title: "夜雨寄北",
        author: "李商隐",
        dynasty: "[晚唐]",
        id: 2,
        isRecite: true
     },
    {
      title: "春望",
      author: "杜甫",
      dynasty: "[唐]",
      id: 3,
      isRecite: false
    },
    {
      title: "游山西村",
      author: "陆游",
      dynasty: "[北宋]",
      id: 4,
      isRecite: false
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

  recite(e){
    var that = this.data.catalog
    for(let i=0; i < that.length; ++i){
              that[i].isRecite = that[i].isRecite ? false: true

    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      if(options.classic)
      {
        console.log(options.classic)
        wx.setNavigationBarTitle({
          title: options.classic
        })
      }
      else
      {
        wx.setNavigationBarTitle({
          title: "小学/初/高中诗词目录",
        })
      }
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