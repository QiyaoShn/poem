// pages/my/my.js.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
  userInfo:{},
  isShow:true,
  ok:false
  },
  /**
   * 生命周期函数--监听页面加载
   */
onLoad:function(options){
//初始化工作

console.log('onLoad 页面加载');
console.log(this)

//判断用户是否授权
  wx.login({
    success:function(res){
      console.log(res.code)
      //发送请求
    }
  })
},
/*//获取用户信息
wx.getUserInfo({
  success: (data) => {
    console.log(res.data);
  //更新data中ueserInfo
  this.setData({
    userInfo:data.userInfo
  });
  }
})
},
handleGetUserInfo(data){
     console.log('用户点击了',data);
     //判断用户单击的是否是允许
     if(data.detail.rawData){
       //用户点击的是允许
       this.onLoad();
     }
   },
   
  */ //微信关闭wx.getUserInfo接口
    data: {
     
      multiArray: [['小学', '初中','高中'], ['一年级', '二年级', '三年级', '四年级', '五年级','六年级']],
      objectMultiArray: [
        [
          {
            id: 0,
            name: '小学'
          },
          {
            id: 1,
            name: '初中'
          },
          {
            id:2,
            name:'高中'
          }
        ], [
          {
            id: 0,
            name: '一年级'
          },
          {
            id: 1,
            name: '二年级'
          },
          {
            id: 2,
            name: '三年级'
          },
          {
            id: 3,
            name: '四年级'
          },
          {
            id: 4,
            name: '五年级'
          },
          {
            id:5,
            name:'六年级'
          }
        ], [
          {
            id: 0,
            name: '初一'
          },
          {
            id: 1,
            name: '初二'
          },
          {
            id:2,
            name:'初三'
          }
        ],
        [
          {
            id:0,
            name:'高一'
          },
          {
            id:1,
            name:'高二'
          },
          {
            id:2,
            name:'高三'
          }
        ]
      ],
      multiIndex: [0, 5],
    },
    bindMultiPickerChange: function (e) {
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
        multiIndex: e.detail.value,
        ok:true
      })
    },
    bindMultiPickerColumnChange: function (e) {
      console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
      var data = {
        multiArray: this.data.multiArray,
        multiIndex: this.data.multiIndex
      };
      data.multiIndex[e.detail.column] = e.detail.value;
      switch (e.detail.column) {
        case 0:
          switch (data.multiIndex[0]) {
            case 0:
              data.multiArray[1] = ['一年级', '二年级', '三年级', '四年级', '五年级','六年级'];  
              break;
            case 1:
              data.multiArray[1] = ['初一', '初二', '初三'];
              break;
            case 2:
              data.multiArray[1] = ['高一', '高二', '高三'];  
          }
      
      }
      console.log(data.multiIndex);
      this.setData(data);
    },
  
 
  })

