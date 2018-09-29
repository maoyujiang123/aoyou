// pages/details/details.js
Page({
    

  /**
   * 页面的初始数据
   */
  data: {
      bmylist:[],
      inputVal: '',
      msgData: [
          { msg: '暂无评论快来抢沙发吧' }
      ]

  },
    //index.js
    //获取应用实例
  
        // 删除留言
        del(e){
        var that = this
    var n = e.target.dataset.index;
        var list = that.data.msgData
    wx.showModal({
            title: '提示',
            content: '是否删除该条数据',
            success: function (res) {
                console.log(res.confirm)
                if (res.confirm) {
                    list.splice(n, 1);
                    that.setData({
                        msgData: list
                    })
                    wx.showToast({
                        title: '删除成功',
                    })
                }

            }
        })

    },
    // 添加留言
    add(e){
        if(this.data.inputVal == '') {
    wx.showToast({
        title: '请留言',
    })
    return false;
}
var list = this.data.msgData;
var a = list ? list : []
a.push({
    msg: this.data.inputVal
})
wx.setStorage({
    key: 'info',
    data: a,
})
this.setData({
    msgData: a,
    inputVal: ''
})
  },
changeinputVal(e){
    this.setData({
        inputVal: e.detail.value
    })
},
onLoad: function () {
    var that = this;
    wx.getStorage({
        key: 'info',
        success: function (res) {
            //msgData还是空的
            var list = that.data.msgData;
            var a = list ? list : []
            var apple = res.data
            //将数据加入到msgData
            a = apple
            that.setData({
                msgData: a
            })
        }
    })
},



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      wx.request({
          url: 'http://localhost:3000/bmylist',
         
          success: (res)=>{
              console.log(res)
              this.setData({
                  bmylist:res.data
              })
          }
         
      })
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
  showok: function () {
        wx.showToast({
            title: '关注成功',
            icon: 'success',
            duration: 2000
        })
    },
})