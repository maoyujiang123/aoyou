var util = require("../../utils/util.js");

Page({
    data: {
        registBtnTxt: "提交",
        registBtnBgBgColor: "#0099FF",
        getSmsCodeBtnTxt: "获取验证码",
        getSmsCodeBtnColor: "#0099FF",
        btnLoading: false,
        registDisabled: false,
        smsCodeDisabled: false,
        phoneNum: '',
        verifiIcon: "../../assets/img/verifiIcon.png",
        logIcon: "../../assets/img/logIcon.png",
        pwdIcon: "../../assets/img/pwdIcon.png"

    },
    onLoad: function (options) {
        // 页面初始化 options为页面跳转所带来的参数

    },
    onReady: function () {
        // 页面渲染完成

    },
    onShow: function () {
        // 页面显示

    },
    onHide: function () {
        // 页面隐藏

    },
    onUnload: function () {
        // 页面关闭

    },
    getPhoneNum: function (e) {
        var value = e.detail.value;
        this.setData({
            phoneNum: value
        });
    },
    formSubmit: function (e) {
        var param = e.detail.value;
        this.mysubmit(param);
    },
    mysubmit: function (param) {
        var num = param.username.trim();
        var flag = this.checkUserName(num) && this.checkPhoneIsRegist(param.username) && this.checkPassword(param) && this.checkSmsCode(param)
        var that = this;
        if (flag) {
            this.setregistData1();
            setTimeout(function () {
                wx.showToast({
                    title: '成功',
                    icon: 'success',
                    duration: 1500
                });
                that.setregistData2();
                that.redirectTo(param);
            }, 2000);
        }
    },
    setregistData1: function () {
        this.setData({
            registBtnTxt: "提交中",
            registDisabled: !this.data.registDisabled,
            registBtnBgBgColor: "#999",
            btnLoading: !this.data.btnLoading
        });
    },
    setregistData2: function () {
        this.setData({
            registBtnTxt: "提交",
            registDisabled: !this.data.registDisabled,
            registBtnBgBgColor: "#0099FF",
            btnLoading: !this.data.btnLoading
        });
    },
    checkUserName: function (num) {
        //调用util中手机号码的正则校验
        var phone = util.regexConfig().phone;
        if (phone.test(num)) {
            return true;
        } else {
            wx.showModal({
                title: '提示',
                showCancel: false,
                content: '请输入正确的手机号码'
            });
            return false;
        }
    },
    checkPhoneIsRegist: function (phoneNum) {
        var tempPhoneNum = "13822222221";//测试未注册手机号码
        if (phoneNum == tempPhoneNum) {
            wx.showModal({
                title: '提示',
                showCancel: false,
                content: '该手机尚未注册！'
            });
            return false;
        } else {
            return true;
        }
    },
    checkPassword: function (param) {
        var userName = param.username.trim();
        var password = param.password.trim();
        if (password.length <= 0) {
            wx.showModal({
                title: '提示',
                showCancel: false,
                content: '请设置新密码'
            });
            return false;
        } else if (password.length < 6 || password.length > 20) {
            wx.showModal({
                title: '提示',
                showCancel: false,
                content: '密码长度为6-20位字符'
            });
            return false;
        } else {
            return true;
        }
    },
    getSmsCode: function () {
        var phoneNum = this.data.phoneNum;
        var that = this;
        var count = 60;
        if (this.checkUserName(phoneNum) && this.checkPhoneIsRegist(phoneNum)) {
            var si = setInterval(function () {
                if (count > 0) {
                    count--;
                    that.setData({
                        getSmsCodeBtnTxt: count + ' s',
                        getSmsCodeBtnColor: "#999",
                        smsCodeDisabled: true
                    });
                } else {
                    that.setData({
                        getSmsCodeBtnTxt: "获取验证码",
                        getSmsCodeBtnColor: "#ff9900",
                        smsCodeDisabled: false
                    });
                    count = 60;
                    clearInterval(si);
                }
            }, 1000);
        }
    },
    checkSmsCode: function (param) {
        var smsCode = param.smsCode.trim();
        var tempSmsCode = '000000';//演示效果临时变量，正式开发需要通过wx.request获取
        if (smsCode != tempSmsCode) {
            wx.showModal({
                title: '提示',
                showCancel: false,
                content: '请输入正确的短信验证码'
            });
            return false;
        } else {
            return true;
        }
    },
    redirectTo: function (param) {
        //需要将param转换为字符串
        param = JSON.stringify(param);
        wx.redirectTo({
            url: '../main/index?param=' + param//参数只能是字符串形式，不能为json对象
        })
    }

})