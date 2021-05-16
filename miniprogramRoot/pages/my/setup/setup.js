// pages/my/setup/setup.js
Page({

  
    data: {
      background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
      indicatorDots: true,
      vertical: false,
      autoplay: false,
      interval: 2000,
      duration: 500
    },
  
    changeIndicatorDots() {
      this.setData({
        indicatorDots: !this.data.indicatorDots
      })
    },
  
    intervalChange(e) {
      this.setData({
        interval: e.detail.value
      })
    },
  })
