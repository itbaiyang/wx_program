//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'I love U',
    userInfo: {},
    list:[]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
      wx.request({
            url: "https://ssl.zhironghao.com/api/financialProduct/list",
            data:{
              pageNo: 1,
              pageSize: 5
            },
            // header: {
            //   'content-type': 'application/json'
            // },
            method: "GET",
            success: function(res){
              console.log(res.data)
              that.data.list = res.data.result.datas
              
            },
            fail: function(res){
               console.log("ggd")
              console.log(res)
            }
        })
    })
  },
  onclick:function() {
    console.log('click')
  },
  list:function () {//产品列表
    console.log('GET')
        
    }
})
