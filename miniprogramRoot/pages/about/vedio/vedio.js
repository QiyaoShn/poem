// pages/my/vedio/vedio.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   topBars:[
     {id: 1,name:"关注"},
     {id: 2,name:"推荐"},
     {id: 3,name:"收藏"},
     {id: 4,name:"我的"}
    ],
     selectType: 1,
  },
  selectBar(e){
    var typeId = e.currentTarget.dataset.typeid;
    this.setData({
      selectType:typeId,
    });
  },
  photo:function(){
      wx.navigateTo({
        url: '/pages/about/photo/photo',	//跳转到自定义的一个拍照页面
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