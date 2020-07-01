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
        listCode:"xiaoxue",
        listExample:"静夜思",
        listImage:"/images/changtiao.png"
      },{
        listName:"小学古文",
        listCode:"xiaoxue1",
        listExample:"揠苗助长",
        listImage:"/images/changtiao1.png"
      },{
        listName:"初中古诗",
        listCode:"chuzhong",
        listExample:"明月几时有",
        listImage:"/images/changtiao2.png"
      },{
        listName:"初中古文",
        listCode:"chuzhong1",
        listExample:"湖心亭看雪",
        listImage:"/images/changtiao.png"
      },{
        listName:"高中古诗",
        listCode:"gaozhong",
        listExample:"鱼我所欲也",
        listImage:"/images/changtiao.png"
      },{
        listName:"高中古文",
        listCode:"gaozhong1",
        listExample:"孔雀东南飞",
        listImage:"/images/changtiao.png"
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