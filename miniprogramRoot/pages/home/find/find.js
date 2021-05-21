var app=getApp();
const db = wx.cloud.database({});
const cont = db.collection('poem');
var searchValue=''; 
var title='';
Page({
  data:{
    inputShow:true,
    searchValue:'',
    catalog: []
  },
  onLoad: function(e){
    console.log(e.wh) 
    this.setData({
      which: e.wh
    })
    var _this = this;
    //1、引用数据库   
    const db = wx.cloud.database({  
      env: 'asd-8i5n5'
    });
    //2、开始查询数据了  news对应的是集合的名称   
    db.collection('poem').get({
      //如果查询成功的话    
      success: res => {
        console.log(res.data)
        //赋值，没有这一步的话，前台就不会显示值      
        this.setData({
          catalog: res.data,
        })
      }
    });
  },
  searchValueInput:function(e){
    var  value = e.detail.value
    this.setData({
      searchValue:value,
    })
  },
  sousuoId:function(event){
    var shiId = event.currentTarget.dataset.shiId
    console.log(shiId)
    wx.navigateTo({
      url: '/pages/home/content/detail/detail?id='+shiId,
    })
  },
  tocontent(e){
    var lei = e.currentTarget.dataset.shiId
      wx.navigateTo({
        url: '/pages/home/content/content?classic='+lei,
      })
  },
  clean:function(){
    var that = this;
    setTimeout(function () {
      that.setData({
        searchValue:''
      })
    },100)
  }
})