Page({
  data:{
    ticai:["诗", "词", "文言文",],
    chaodai:["先秦","两汉","魏晋","南北朝","隋代","唐代","五代", "宋代","金朝","元代","明代","清代","近代",],
    zuozhe: ["李白","杜甫","杜牧","陆游","曹操","李煜","元楨","韩愈","苏轼","王维","岑参","贾岛","柳永","李贺","曹植","张籍","孟部","皎然","许浑","罗隐","韦庄","屈原","王勃","张祜","王建","晏殊","岳飞","姚合","卢纶","秦观","钱起","朱熹","韩偓","高迁","方干","李峤","赵嘏","贺铸","郑谷","郑變","张说","张炎","白居易","辛弃疾","李清照","刘禹锡","李商隐","马钓远","陶渊明","孟浩然","柳宗元","王安石","欧阳修","韦应物","温庭筠","刘长卿","王昌龄","杨万里","诸葛亮","范仲淹","陆龟蒙","晏几道","周邦彦","杜荀鹤","吴文英","皮日休","左丘明","张九龄","权德舆","黄庭坚","司马迁","等等",],
    tags:["海棠", "热爱", "悲愁", "颂歌", "行军", "艰准", "奴隶", "看花", "寺庙", "述志", "传说", "留客", "大雁", "旷达", "梦游", "月宫", "中秋", "咏怀", "官吏", "忧思", "凄凉", "规功", "儿歌", "婉约", "士卒", "婚姻", "过年", "对月", "离愁", "回信", "侠客", "夜晚", "寂寞", "份春", "心情", "失恋", "祝酒", "考试", "悲剧", "沙漠", "告诚", "亲人", "父亲", "骚体", "忧民", "写诗", "愁绪", "秋游", "边将", "游玩", "吊古", "书法", "杏花", "哀歌", "美景", "四李", "惜花", "写树", "父母", "感思", "启示", "清明", "愤慨", "艺术", "志向", "长篇", "悲伤", "即景", "寓情", "咏柳", "风雨", "旅途", "悼念", "写雷", "写鬼", "钓鱼", "怨刺", "关怀", "生命", "哀怨", "春景",],
  },

  tocontent(e){
    var lei = e.currentTarget.dataset.lei
      wx.navigateTo({
        url: '/pages/home/content/content?classic='+lei,
      })
  },
})