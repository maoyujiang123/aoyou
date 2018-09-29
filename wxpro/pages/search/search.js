let timeId = null;
Page({
    data: {
        history: [],
        hot: ['旅行', '美食日记', '境外购'],
        result: [
            {
                id: 1,
                url: '../details/details',
                title: ''
                
            }
        ],
        showKeywords: false,
        keywords: ['浪漫土耳其', '秦始皇兵马俑', '香格里拉', '法国河谷城堡','特拉维斯跳蚤市场'],
        value: '',
        showResult: false,
    },
    cancelSearch() {
        this.setData({
            showResult: false,
            showKeywords: false,
            value: ''
        })
    },
    searchInput(e) {
        if (!e.detail.value) {
            this.setData({
                showKeywords: false
            })
        } else {
            if (!this.data.showKeywords) {
                timeId && clearTimeout(timeId);
                timeId = setTimeout(() => {
                    this.setData({
                        showKeywords: true
                    })
                }, 1000)
            }
        }
    },
    keywordHandle(e) {
        const text = e.target.dataset.text;
        this.setData({
            value: text,
            showKeywords: false,
            showResult: true
        })
        this.historyHandle(text);
    },
    historyHandle(value) {
        let history = this.data.history;
        const idx = history.indexOf(value);
        if (idx === -1) {
            // 搜索记录只保留8个
            if (history.length > 7) {
                history.pop();
            }
        } else {
            history.splice(idx, 1);
        }
        history.unshift(value);
        wx.setStorageSync('history', JSON.stringify(history));
        this.setData({
            history
        });
    },
    onLoad() {
        const history = wx.getStorageSync('history');
        if (history) {
            this.setData({
                history: JSON.parse(history)
            })
            console.log(this.data.history);
        }
    }
})