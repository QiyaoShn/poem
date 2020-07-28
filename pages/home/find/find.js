var app=getApp();
var searchValue='';
Page({
  data:{
    inputShow:true,
    searchValue:'',

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
      isrecite: false
    },
    {
      title: "游山西村",
      author: "陆游",
      dynasty: "[北宋]",
      id: 4,
      isrecite: false
   }
    ]
  },
  onLoad: function(e){
    console.log(e.wh) 
    this.setData({
      which: e.wh
    })
  },
  searchValueInput:function(e){
    var value=e.detail.value;
    this.setData({
      searchValue:value,
    })
    console.log(searchValue);
  },
  sousuoId:function(event){
    var shiId = event.currentTarget.dataset.shiId
     console.log(shiId);
    wx.navigateTo({
      url: '/pages/home/content/detail_title/detail?id=' + shiId,
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
        searchValue:' '
      })
    },100)
  }
})