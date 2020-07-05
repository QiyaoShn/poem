// pages/home/content/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      isChecked1: true,
      isChecked2:true,
      isChecked3:true,
      subject: [
        {
          ID: 1,
          title: "观刈麦",
          author: "[唐] 白居易",
          content: "田家少闲月，五月人倍忙。\n夜来南风起，小麦覆陇黄。\n妇姑荷箪食，童稚携壶浆，\n相随饷田去，丁壮在南冈。\n足蒸暑土气，背灼炎天光，\n力尽不知热，但惜夏日长。\n复有贫妇人，抱子在其旁，\n右手秉遗穗，左臂悬敝筐。\n听其相顾言，闻者为悲伤。\n家田输税尽，拾此充饥肠。\n今我何功德，曾不事农桑。\n吏禄三百石，岁晏有余粮。\n念此私自愧，尽日不能忘。",
          background: "《观刈麦》是作者早期一首著名讽谕诗。这首诗大约作于唐宪宗元和元年（805年）至元和二年（806年）间，是白居易任陕西盩厔（今陕西省周至县）县尉时有感于当地人民劳动艰苦、生活贫困所写的一首诗。县尉在县里主管缉捕盗贼、征收捐税等事。正因为白居易主管此事，所以他对劳动人民在这方面所受的灾难也知道得最清楚。",
          translate: "农民终年没有闲暇，到了五月加倍繁忙。夜里吹来暖暖南风，地里小麦盖垄熟黄。妇女用筐挑着食物，孩子提壶盛满水汤。相伴到田里送饭食，男人劳作在南山冈。脚被地面热气熏蒸，背烤着火辣的阳光。精疲力竭不觉酷热，只是珍惜夏日天长。又见一位贫苦农妇，抱着孩子跟在人旁。右手拿着捡的麦穗，左臂挂着一个破筐。听她回头述说家境，听的人都为她悲伤。为了缴税家田卖尽，靠捡麦穗填充饥肠。如今我有什么功德，从来没有种田采桑。一年俸禄有三百石，到了年底还有余粮。想到这些暗自惭愧，整日整夜念念不忘。",
          author_sub: "白居易（772～846），唐代诗人。字乐天，号香山居士。生于河南新郑，其先太原（今属山西）人，后迁下邽（今陕西渭南东北）。贞元进士，授秘书省校书郎。元和年间任左袷遗及左赞善大夫。后因上表请求严缉刺死宰相武元衡的凶手，得罪权贵，贬为江州司马。长庆初年任杭州刺史，宝历初年任苏州刺史，后官至刑部尚书。在文学上，主张“文章合为时而著，歌诗合为事而作”，是新乐府运动的倡导者。其诗语言通俗，人有“诗魔”和“诗王”之称。和元稹并称“元白”，和刘禹锡并称“刘白”。有《白氏长庆集》传世。",
          comment: "这首诗叙事明白，结构自然，层次清楚，顺理成章。诗一开头，先交代背景，标明是五月麦收的农忙季节。接着写妇女领着小孩往田里去，给正在割麦的青壮年送饭送水。随后就描写青壮年农民在南冈麦田低着头割麦，脚下暑气熏蒸，背上烈日烘烤，已经累得筋疲力尽还不觉得炎热，只是珍惜夏天昼长能够多干点活。写到此处，这一家农民辛苦劳碌的情景已经有力地展现出来。接下来又描写了另一种令人心酸的情景：一个贫妇人怀里抱着孩子，手里提着破篮子，在割麦者旁边拾麦。她要来拾麦的原因是她家的田地已经“输税尽”──为缴纳官税而卖光了，如今无田可种，无麦可收，只好靠拾麦充饥。这两种情景交织在一起，有差异又有关联：前者揭示了农民的辛苦，后者揭示了赋税的繁重。繁重的赋税既然已经使贫妇人失掉田地，那就也会使这一家正在割麦的农民失掉田地。今日的拾麦者，乃是昨日的割麦者；而今日的割麦者，也可能成为明日的拾麦者。强烈的讽谕意味，自在不言之中。诗人由农民生活的痛苦联想到自己生活的舒适，感到惭愧，内心里久久不能平静。这段抒情文字是全诗的精华所在。它是作者触景生情的产物，表现了诗人对劳动人民的深切同情。白居易写讽谕诗，目的是“唯歌生民病，愿得天子知”。在这首诗中，他以自己切身的感受，把农民和作为朝廷官员的自己作鲜明对比，就是希望“天子”有所感悟，手法巧妙而委婉，可谓用心良苦。"
        },
      ],
      rec: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      detail_id: options.id,
    })
  },

  begin(){
    wx.showModal({
      showCancel: false,
      title:"录音已开始",
      content:'Tip: 录音时限十分钟，暂时不可暂停！',
      confirmText: "明白",
      success (res) {
        if (res.confirm) {
        console.log('用户确定')
        wx.showToast({
          title: '开始录音',
          icon: "success",
          duration: 500
        })
        } else if (res.cancel) {
        console.log('用户点击否')
        }
      }
    })
    this.setData({
      isChecked1: false
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
    wx.getRecorderManager().start(options);
    wx.getRecorderManager().onStart(() => {
      console.log('recorder start')
      this.setData({
        rec: false
      })
    });
    //错误回调
    wx.getRecorderManager().onError((res) => {
      console.log(res);
    })
  },

  //停止录音
  stop: function () {
    this.setData({
      isChecked2:false,
      isChecked1:true
    })
    wx.getRecorderManager().stop();
    this.setData({
      isChecked2:true
    })  
    wx.getRecorderManager().onStop((res) => {
      console.log('停止录音')
      wx.showToast({
        title: '上传中',
        icon: "loading",
        duration: 3000
      }) 
      this.setData({
        rec: true
      })
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