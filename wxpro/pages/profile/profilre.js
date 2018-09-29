Page({

  /**
   * 页面的初始数据
   */
  data: {
    login:true
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
      wx.getStorage({
          key: 'login',
          success: (res) => {
              //console.log(res.data.t);
              if (res.data[0].username== '17630612607' && res.data[0].password == '123456') {
                  this.setData({
                      login: true
                  })
              }
          },
      })
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
    //show.js
    //获取应用实例  
   
        zhgl:function(){
        wx.showModal({
            title: '提示',
            content: '是否退出登录',
            success:  (res)=> {
                if (res.confirm) {
                    //console.log('用户点击确定')
                    this.setData({
                        login:false
                    })
                } else if (res.cancel) {
                    //console.log('用户点击取消')
                }
            }
        })
    },
    godenglu: function () {
        wx.navigateTo({
            url: '../denglu/index',
        })
    },
})

  
