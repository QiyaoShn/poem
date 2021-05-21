// pages/home/content/detail/detail.js
const recorderManager = wx.getRecorderManager() //录音对象
const innerAudioContext = wx.createInnerAudioContext() //播放对象
const db = wx.cloud.database({});
const cont = db.collection('poem');
const audioo = wx.createInnerAudioContext()
Page({

  /**
   * 页面的初始数据
   */
  data: {
      isChecked2:true,
      isChecked3:true,
      showTrue:true,
      isshoucang:false,
      bofangurl:' ',//播放路径
      subject: [],
      rec: true,
      
  },
  
  notfound(){
    console.log("404")
    wx.showModal({
      title:"未找到该诗的详情！",
      content:'“数据库有限，未查找到这首诗;\n请等待接入API或更新！\n”',
      confirmText: "好的",
      cancelText: "取消",
      success (res) {
        if (res.confirm) {
        wx.navigateBack({
          complete: (res) => {},
        })
        } else if (res.cancel) {
          wx.showModal({
            showCancel: false,
            title:"康康其他的诗词吧！",
            content:'前往目录页查看 (套娃)',
            confirmText: "let's go",
            success (res) {
              if (res.confirm) {
              wx.navigateBack({
                complete: (res) => {},
              })
              } else if (res.cancel) {
              console.log('用户点击否')
              }
            }
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  
  onLoad: function (options) {
    wx.setNavigationBarTitle({ 
      title: "ID: "+options.id+ " 详情" 
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
          subject: res.data
        })
       
        for (let i = 0; i < this.data.subject.length; i++) {
          if(this.data.subject[i].id == options.id)
          {this.data.subject[options.id].id
            console.log("yes")
            this.setData({
              detail_id: options.id
            })
            return
          }
          this.setData({
            times: i
          })
      }
      
      }
      
    });
    
  },

 yinping:function(e){
  audioo.src="cloud://asd-8i5n5.6173-asd-8i5n5-1302530311/《初中必背古诗文》20饮酒 .mp3";
  
    audioo.play();
    wx.showToast({
      title: '长摁播放',
    })
 },
 ZanTing:function(e){
  audioo.pause();
  console.log("暂停");
 },
  begin:function(e){
    var that=this;
    that.setData({
      showTrue:false,
    })
    wx.showModal({
      showCancel: false,
      title:"录音已开始",
      content:'Tip: 录音时限十分钟，暂时不可暂停！',
      confirmText: "明白",
      success (res) {
        if (res.confirm) {
        console.log('用户确定')
        } else if (res.cancel) {
        console.log('用户点击否')
        }
      }
    })
    const options = {
      duration: 10000,//指定录音的时长，单位 ms
      sampleRate: 16000,//采样率
      numberOfChannels: 1,//录音通道数
      encodeBitRate: 96000,//编码码率
      format: 'mp3',//音频格式，有效值 aac/mp3
      frameSize: 50,//指定帧大小，单位 KB
    }
    //开始录音
    recorderManager.start(options);
    recorderManager.onStart(() => {
      console.log('recorder start')
      that.setData({
        rec: false
      })
    });
    //错误回调
    recorderManager.onError((res) => {
      console.log(res);
    })

  },

  //停止录音
  stop: function (e) {
    var that=this;
    that.setData({
      isChecked2:false,
      showTrue:true
    })
   recorderManager.stop();
    that.setData({
      isChecked2:true
    })  
    recorderManager.onStop((res)=>{
      console.log('停止录音')
      that.setData({
        rec: true,
      })
      if (res.duration < 1000){
        wx.showToast({
          title: '录音时间太短',
        })
        return;
      }else{
      wx.showLoading({
        title: '上传中',
        duration:3000
      });
      var tempFilePath = res.tempFilePath;
      console.log("文件临时路径",tempFilePath)
   /*   wx.uploadFile({  //上传给服务器，目前没有就只存在临时路径上
        filePath: tempFilePath,
        name: 'file',
        url: ' ',  //上传服务器得地址
        header:{
          contentType: "multipart/form-data",
        },
        formData:null,
        success:function(res){
          console.log("上传成功")
          wx.hideLoading();
          that.setData({
            bofangurl: tempFilePath
          })
        },
        fail:function(err){
          wx.hideLoading();
          console.log(err.errMsg);  //上传失败
        }
      });*/
      that.setData({
        bofangurl:tempFilePath
      })
    }
    });
  },
  
  shibie:function(e){
    wx.navigateTo({
      url: '/pages/home/content/shibie/shibie',	//跳转到自定义的一个拍照页面
    })
  },
  //播放录音
  bofang:function(e){
    var that = this;
    that.setData({
      isChecked3:false
    })
    console.log("开始播放",e)
    innerAudioContext.src = that.data.bofangurl;
    innerAudioContext.play();
    innerAudioContext.obeyMuteSwitch = false;
    //播放结束
    innerAudioContext.onEnded(()=>{
      that.setData({
        isChecked3:true
      });
      innerAudioContext.stop();
    });
    //播放录音错误回调
    innerAudioContext.onError((res)=>{
      console.log('播放录音失败')
    })
   },
   /*shoucang:function (e) {
     var Index = e.currentTarget.dataset.index;
     var missionArr = this.data.subject;
     for(let i in missionArr){
       if(i==Index){
         if (missionArr[i].status==0){
           missionArr[i].status = parseInt(missionArr[i].status)+1
         }
       }
     }
     this.setData({
       subject:missionArr
     })
     wx.showToast({
       title: '已收藏',
     })
   },*/
   quxiaoShoucang:function(e){
    var Index = e.currentTarget.dataset.index;
    var missionArr = this.data.subject;
    for(let i in missionArr){
      if(i==Index){
        if (missionArr[i].status==1){
          missionArr[i].status = parseInt(missionArr[i].status)-1
        }
      }
    }
    this.setData({
      subject:missionArr
    })
    wx.showToast({
      title: '取消收藏',
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