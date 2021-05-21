const app = getApp()
Page({
  data: {
    
  },
  //登录获取code
  onLoad:function(){
    wx.login({
      success(res){
      console.log(res.code)
      }
      })
  }
  
})
