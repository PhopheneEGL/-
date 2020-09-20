const app = getApp()
const db = wx.cloud.database()

Page({
  data: {
    sortlist: [{
      text: "四大神兽",
      id: "0",
      cls: "cur-shiren"
    }, {
      text: "十大地标",
      id: "1",
      cls: ""
    }, {
      text: "天津三绝",
      id: "2",
      cls: ""
    }, {
      text: "打卡地点",
      id: "3",
      cls: ""
    },{
      text: "特色早点",
      id: "4",
      cls: ""
    },{
      text: "曲艺之乡",
      id: "5",
      cls: ""
    },{
      text: "特色小吃",
      id: "6",
      cls: ""
    },{
      text: "著名景区",
      id: "7",
      cls: ""
    }],
    tag: 0
  },
  getData() {
    var that = this
    wx.cloud.callFunction({
      name: "getListByTag",
      data: {
        tag: that.data.tag.toString()
      }
    }).then((res) => {
      that.setData({
        list: res.result.data
      })
    }).then(()=>{
    })
  },
  clickitem: function (e) {
    var sortlist = this.data.sortlist;
    var id = e.currentTarget.id;
    for (var i = 0; i < sortlist.length; i++) {
      if (sortlist[i].id == id) {
        sortlist[i].cls = "cur-shiren";
      } else {
        sortlist[i].cls = "shiren"
      }
    }
    this.setData({
      tag: id
    }, () => {
      this.getData()
    })

    this.setData({
      sortlist: sortlist
    })
  },
  onLoad() {
    this.getData()
  }

})