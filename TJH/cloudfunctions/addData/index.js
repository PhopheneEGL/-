const cloud = require('wx-server-sdk')

cloud.init()

let db=cloud.database()

exports.main = async (event, context) => {
    return await db.collection('location').add({
      name:'function',
    })
}