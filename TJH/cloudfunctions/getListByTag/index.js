// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()
const _ = db.command
// 云函数入口函数
exports.main = async (event, context) => {
  var result = db.collection("TJthree")
    .where({
      tag: event.tag
    })
    .field({ //显示哪些字段
      _id: false, //默认显示_id，这个隐藏
      imagePath: true,
      name: true,
      paraphrase: true,
      sy: true,
      pronunciation: true,
    })
    .get() //获取根据查询条件筛选后的集合数据
    
  return result
}