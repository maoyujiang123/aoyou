// pages/lvxing/lvxing.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      isShow: true,
      currentTab: 0,
      lvxinglist:[]
  },
    tabNav: function (e) {
        // console.log(e.target.dataset.current,
        //     111, this.data.currentTab)
        if (this.data.currentTab === e.target.dataset.current) {
            return false;
        } else {

            var showMode = e.target.dataset.current == 0;

            this.setData({
                currentTab: e.target.dataset.current,
                isShow: showMode
            })
        }
    },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      wx.request({
          url: 'http://maoyujiang.applinzi.com/lvxing',
          success:(res)=>{
              console.log(res.data)   
                  this.setData({
                      lvxinglist:res.data
                  })    
          }
      })
      /*wx.request({
          url: 'http://localhost:3000/lvxinglist',
          success:(res)=>{
              this.setData({
                  lvxinglist:res.data
              })
          }
      })*/
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