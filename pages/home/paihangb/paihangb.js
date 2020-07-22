var app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    navTab: ['周榜','今日榜单','月榜'],        
    currentTab: 0,
    sendList:[],
  },
  select: {
    page: 1,
    size: 6,
    isEnd: false
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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
    this.getData()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  currentTab: function (e) {
    if (this.data.currentTab == e.currentTarget.dataset.idx){
      return;
    }
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
    this.select={
      page: 1,
      size: 6,
      isEnd: false
    }
    this.data.sendList=[];
    this.getData()
  },
  getData:function(){
    var _this=this;
    if (this.select.isEnd){
      return
    }
    var type = this.data.currentTab == 0 ? 'ALL' : this.data.currentTab == 1 ? 'WAIT_DELIVER' : 'DELIVER';
    util.request(`你的接口地址，后面的是参数` + type + `/` + this.select.page + `/` + this.select.size, {}, 'GET', function (res) {
      var content = res.data.data;
      _this.setData({
        sendList: (_this.data.sendList).concat(content) 
      })
      if (content.length>0){
        _this.select.page++
      }else{
        _this.select.isEnd=true
      }
    })
  },
})