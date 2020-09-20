const app = getApp()
const db=wx.cloud.database()

Page({
  data:{
  },
  getData(){
    wx.cloud.callFunction({
      name:"getList"
    }).then((res)=>{
      this.setData({
         list:res.result.data,
      })
     })
   },
  onLoad(){
    this.getData()
  },
  
})