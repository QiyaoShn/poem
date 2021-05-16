//测试用：从云数据库调用数据
//感谢博主https://www.cnblogs.com/hsxyfzh/p/10899318.html
//云数据库初始化
const db = wx.cloud.database({});
const cont = db.collection('poem');

Page({
   data:{
        id:[],  //这是一个空的数组，等下获取到云数据库的数据将存放在其中
    },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    var _this = this;
    //1、引用数据库   
    const db = wx.cloud.database({
      //这个是环境ID不是环境名称     
      env: 'asd-8i5n5'
    })
    //2、开始查询数据了  news对应的是集合的名称   
    db.collection('poem').get({
      //如果查询成功的话    
      success: res => {
        console.log(res.data)
        //这一步很重要，给ne赋值，没有这一步的话，前台就不会显示值      
        this.setData({
          id: res.data
        })
        console.log(this.data.id[0].id);
        for (let i = 1; i < this.data.id.length; ++i) {
          console.log(this.data.id[i].id)
        }
      }
    });
   
    
  },    
})
