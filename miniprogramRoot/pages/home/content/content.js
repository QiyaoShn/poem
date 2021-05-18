// pages/home/content/content.js
const db = wx.cloud.database({});
const cont = db.collection('poem');
Page({

  /**
   * 页面的初始数据
   */
  
  data: {
    catalog: []
  },

  todetail(event){
    var shiId = event.currentTarget.dataset.shiId
     console.log(shiId);
    wx.navigateTo({
      url: '/pages/home/content/detail/detail?id=' + shiId,
    })
  },

  recite(e){
    var id = e.currentTarget.dataset.id
    
     for (let i = 1; i < this.data.catalog.length; ++i){
          if(i == id){
            if(this.data.catalog[1].isRecite == true){
              this.setData({
                ["catalog["+id+"].isRecite"]: false
              })
            }
            else
            {
              this.setData({
                ["catalog["+id+"].isRecite"]: true
              })
            }
          }
     }
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    //1、引用数据库   
    const db = wx.cloud.database({  
      env: 'asd-8i5n5'
    })
    //2、开始查询数据了  news对应的是集合的名称   
    db.collection('poem').get({
      //如果查询成功的话    
      success: res => {
        console.log(res.data)
        //赋值，没有这一步的话，前台就不会显示值      
        this.setData({
          catalog: res.data
        })
      }
    })
      if(options.id)
      {
        console.log(options.id)
        wx.setNavigationBarTitle({
          title: this.data.catalog[options.id].bbs_title
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