const cloud = require('wx-server-sdk')

cloud.init()
let db = wx.cloud.database()
exports.main = async (event, context) => {
  db.collection("")
  const fileID = 'cloud://tjh-y46yc.746a-tjh-y46yc-1302943820/卡片image/幺蛾子.jpg'
  const res = await cloud.downloadFile({
    fileID: fileID,
  })
  const buffer = res.fileContent
  return buffer.toString('utf8')
}
