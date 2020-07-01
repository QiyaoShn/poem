const jinrishici = require('../../utils/jinrishici.js')
// pages/in/in.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {
        listName:"小学古诗",
        listId:1,
        listExample:"静夜思"
      },{
        listName:"小学古文",
        listId:2,
        listExample:"揠苗助长"
      },{
        listName:"初中古诗",
        listId:3,
        listExample:"明月几时有"
      },{
        listName:"初中古文",
        listId:4,
        listExample:"湖心亭看雪"
      },{
        listName:"高中古诗",
        listId:5,
        listExample:"鱼我所欲也"
      },{
        listName:"高中古文",
        listId:6,
        listExample:"孔雀东南飞"
      },
    ]
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