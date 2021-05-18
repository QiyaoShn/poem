const audioo = wx.createInnerAudioContext()
Page({
  data:{
    check:true,
  },
  click1:function(){
    this.yinping();
    console.log(this.data.check)
    this.setData({
      check:false
    })
  },
 yinping:function(e){
   
   audioo.src="cloud://asd-8i5n5.6173-asd-8i5n5-1302530311/《初中必背古诗文》20饮酒 .mp3"
   audioo.play()
 },
 stop:function(e){
  audioo.pause()
  this.setData({
    check:true
  })
 }
 })