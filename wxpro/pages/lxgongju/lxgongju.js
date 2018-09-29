// pages/lxgongju/lxgongju.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },
    // intoMap: function () {
    //     wx.openLocation({        //这里要直接输入该地方的经纬度，由于每个地图得到的经纬度不一样，所以精确度会有差别，我亲测了百度地图和腾讯地图的经纬度，发现使用腾讯地图的经纬度的精确度很高，至于为什么，毕竟都是腾讯应用嘛，大家懂的！后面给大家写了一个获取腾讯地图经纬度的文章：http://www.cnblogs.com/silent007/p/9023799.html
    //         latitude: 39.9095200000,
    //         longitude: 116.2945900000,
    //         name: "北京市海淀区万寿路文博大厦",
    //         address: "北京市海淀区万寿路文博大厦",
    //         scale: 28
    //     })
    // },
    gomap:function(){
        wx:wx.navigateTo({
            url: '../map/map',
            
        })
    }
})