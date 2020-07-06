var app=getApp();
var searchValue='';
Page({
  data:{
    inputShow:true,
    searchValue:'',
  },
  onLoad: function(e){
  
  },
  searchValueInput:function(e){
    var value=e.detail.value;
    this.setData({
      searchValue:value,
    })
    console.log(searchValue);
  },
  sousuoId:function(e){
    var ID=event.currentTarget.dataset.ID
    console.log(ID)
    wx.navigateTo({
      url: '/pages/home/content/detail/detail',
    })
  }
  
})