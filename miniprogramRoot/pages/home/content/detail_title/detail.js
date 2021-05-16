// pages/home/content/detail/detail.js
const recorderManager = wx.getRecorderManager() //录音对象
const innerAudioContext = wx.createInnerAudioContext() //播放对象
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
      subject: [
        {
          ID: 1,
          title: "观刈麦",
          author: "[唐] 白居易",
          content: "田家少闲月，五月人倍忙。\n夜来南风起，小麦覆陇黄。\n妇姑荷箪食，童稚携壶浆，\n相随饷田去，丁壮在南冈。\n足蒸暑土气，背灼炎天光，\n力尽不知热，但惜夏日长。\n复有贫妇人，抱子在其旁，\n右手秉遗穗，左臂悬敝筐。\n听其相顾言，闻者为悲伤。\n家田输税尽，拾此充饥肠。\n今我何功德，曾不事农桑。\n吏禄三百石，岁晏有余粮。\n念此私自愧，尽日不能忘。",
          background: "《观刈麦》是作者早期一首著名讽谕诗。这首诗大约作于唐宪宗元和元年（805年）至元和二年（806年）间，是白居易任陕西盩厔（今陕西省周至县）县尉时有感于当地人民劳动艰苦、生活贫困所写的一首诗。县尉在县里主管缉捕盗贼、征收捐税等事。正因为白居易主管此事，所以他对劳动人民在这方面所受的灾难也知道得最清楚。",
          translate: "农民终年没有闲暇，到了五月加倍繁忙。夜里吹来暖暖南风，地里小麦盖垄熟黄。妇女用筐挑着食物，孩子提壶盛满水汤。相伴到田里送饭食，男人劳作在南山冈。脚被地面热气熏蒸，背烤着火辣的阳光。精疲力竭不觉酷热，只是珍惜夏日天长。又见一位贫苦农妇，抱着孩子跟在人旁。右手拿着捡的麦穗，左臂挂着一个破筐。听她回头述说家境，听的人都为她悲伤。为了缴税家田卖尽，靠捡麦穗填充饥肠。如今我有什么功德，从来没有种田采桑。一年俸禄有三百石，到了年底还有余粮。想到这些暗自惭愧，整日整夜念念不忘。",
          author_sub: "白居易（772～846），唐代诗人。字乐天，号香山居士。生于河南新郑，其先太原（今属山西）人，后迁下邽（今陕西渭南东北）。贞元进士，授秘书省校书郎。元和年间任左袷遗及左赞善大夫。后因上表请求严缉刺死宰相武元衡的凶手，得罪权贵，贬为江州司马。长庆初年任杭州刺史，宝历初年任苏州刺史，后官至刑部尚书。在文学上，主张“文章合为时而著，歌诗合为事而作”，是新乐府运动的倡导者。其诗语言通俗，人有“诗魔”和“诗王”之称。和元稹并称“元白”，和刘禹锡并称“刘白”。有《白氏长庆集》传世。",
          comment: "这首诗叙事明白，结构自然，层次清楚，顺理成章。诗一开头，先交代背景，标明是五月麦收的农忙季节。接着写妇女领着小孩往田里去，给正在割麦的青壮年送饭送水。随后就描写青壮年农民在南冈麦田低着头割麦，脚下暑气熏蒸，背上烈日烘烤，已经累得筋疲力尽还不觉得炎热，只是珍惜夏天昼长能够多干点活。写到此处，这一家农民辛苦劳碌的情景已经有力地展现出来。接下来又描写了另一种令人心酸的情景：一个贫妇人怀里抱着孩子，手里提着破篮子，在割麦者旁边拾麦。她要来拾麦的原因是她家的田地已经“输税尽”──为缴纳官税而卖光了，如今无田可种，无麦可收，只好靠拾麦充饥。这两种情景交织在一起，有差异又有关联：前者揭示了农民的辛苦，后者揭示了赋税的繁重。繁重的赋税既然已经使贫妇人失掉田地，那就也会使这一家正在割麦的农民失掉田地。今日的拾麦者，乃是昨日的割麦者；而今日的割麦者，也可能成为明日的拾麦者。强烈的讽谕意味，自在不言之中。诗人由农民生活的痛苦联想到自己生活的舒适，感到惭愧，内心里久久不能平静。这段抒情文字是全诗的精华所在。它是作者触景生情的产物，表现了诗人对劳动人民的深切同情。白居易写讽谕诗，目的是“唯歌生民病，愿得天子知”。在这首诗中，他以自己切身的感受，把农民和作为朝廷官员的自己作鲜明对比，就是希望“天子”有所感悟，手法巧妙而委婉，可谓用心良苦。",
          status:0
        },{
          ID: 2,
          title: "夜雨寄北",
          author: "[唐] 李商隐",
          content: "君问归期未有期，巴山夜雨涨秋池。\n何当共剪西窗烛，却话巴山夜雨时。",
          background:"这首诗选自《玉溪生诗》卷三，是李商隐留滞巴蜀（今四川省）时寄怀长安亲友之作。因为长安在巴蜀之北，故题作《夜雨寄北》。在南宋洪迈编的《万首唐人绝句》里，这首诗的题目为《夜雨寄内》，意思是诗是寄给妻子的。他们认为，李商隐于大中五年（851）七月赴东川节度使柳仲郢梓州幕府，而王氏是在这一年的夏秋之交病故，李商隐过了几个月才得知妻子的死讯。现传李诗各本题作《夜雨寄北》，“北”就是北方的人，可以指妻子，也可以指朋友。有人经过考证认为它作于作者的妻子王氏去世之后，因而不是“寄内”诗，而是写赠长安友人的。就诗的内容看，按“寄内”解，便情思委曲，悱恻缠绵；作“寄北”看，便嫌细腻恬淡，未免纤弱。",
          translate:"你问我什么时候回去，日期还难以确定。此刻巴山的夜雨淅淅沥沥，雨水涨满了秋天的池塘。什么时候我才能回到家乡，在西窗下我们一边剪烛一边谈心，那时我再对你说说，今晚在巴山作客听着绵绵夜雨，我是多么思念你！",
          author_sub:"李商隐（约813年-约858年），字义山，号玉溪（谿）生、樊南生，唐代著名诗人，祖籍河内（今河南省焦作市）沁阳，出生于郑州荥阳。他擅长诗歌写作，骈文文学价值也很高，是晚唐最出色的诗人之一，和杜牧合称“小李杜”，与温庭筠合称为“温李”，因诗文与同时期的段成式、温庭筠风格相近，且三人都在家族里排行第十六，故并称为“三十六体”。其诗构思新奇，风格秾丽，尤其是一些爱情诗和无题诗写得缠绵悱恻，优美动人，广为传诵。但部分诗歌过于隐晦迷离，难于索解，至有“诗家总爱西昆好，独恨无人作郑笺”之说。因处于牛李党争的夹缝之中，一生很不得志。死后葬于家乡沁阳（今河南焦作市沁阳与博爱县交界之处）。作品收录为《李义山诗集》。",
          comment:"诗的开头两句以问答和对眼前环境的抒写，阐发了孤寂的情怀和对妻子深深的思念。后两句即设想来日重逢谈心的欢悦，反衬今夜的孤寂。这首诗即兴写来，写出了诗人刹那间情感的曲折变化。语言朴实，在遣词、造句上看不出修饰的痕迹。与李商隐的大部分诗词表现出来的的辞藻华美，用典精巧，长于象征、暗示的风格不同，这首诗却质朴、自然，同样也具有“寄托深而措辞婉”的艺术特色。开首点题，“君问归期未有期”，一问一答，先停顿，后转折，跌宕有致，极富表现力。其羁旅之愁与不得归之苦，已跃然纸上。诗前省去一大段内容，可以猜测，此前诗人已收到妻子的来信，信中盼望丈夫早日回归故里。诗人自然也希望能早日回家团聚。但因各种原因，愿望一时还不能实现。首句流露出离别之苦，思念之切。次句“巴山夜雨涨秋池”是诗人告诉妻子自己身居的环境和心情。秋山夜雨，总是唤起离人的愁思，诗人用这个寄人离思的景物来表了他对妻子的无限思念。仿佛使人想象在一个秋天的某个秋雨缠绵的夜晚，池塘涨满了水，诗人独自在屋内倚床凝思。想着此时此刻妻子在家中的生活和心境；回忆他们从前在一起的共同生活；咀嚼着自己的孤独。三、四句“何当共剪西窗烛，却话巴山夜雨时”，这是对未来团聚时的幸福想象。心中满腹的寂寞思念，只有寄托在将来。那时诗人返回故乡，同妻子在西屋的窗下窃窃私语，情深意长，彻夜不眠，以致蜡烛结出了蕊花。他们剪去蕊花，仍有叙不完的离情，言不尽重逢后的喜悦。这首诗既描写了今日身处巴山倾听秋雨时的寂寥之苦，又想象了来日聚首之时的幸福欢乐。此时的痛苦，与将来的喜悦交织一起，时空变换，此诗语言朴素流畅，情真意切。“巴山夜雨”首末重复出现，令人回肠荡气。“何当”紧扣“未有期”，有力地表现了作者思归的急切心情。",
          status:0
        }
      ],
      rec: true
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
      title: options.id
    }) 
    for (let i = 0; i < this.data.subject.length; ++i) {
        if(this.data.subject[i].title == options.id)
        {
          this.setData({
            detail_id: options.id
          })
          return
        }
        this.setData({
          times: i
        })
    }
      
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
   shoucang:function (e) {
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
   },
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