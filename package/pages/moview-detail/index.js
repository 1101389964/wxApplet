import request from "../../../request/index";

// pages/moview-detail/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    mvUrl: null,
    mvDetail: null,
    mvRelated: null,
    direction: -90, //设置视频全频时旋转的方向
  },

  //自定义事件
  jumpTarget(event) {
    const id = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: `./index?id=${id}`,
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const id = options.id; //通过options获取上一层组件传递过来的数据
    //获取mv地址
    request.get("mv/url", { id }).then((res)=>{
      this.setData({
        mvUrl: res.url
      })
    })
    //获取mv详情
    request.get("mv/detail", { mvid: id }).then((res)=>{
      this.setData({
        mvDetail: res,
      })
    })
    //获取相关地址：
    request.get("related/allvideo", { id }).then((res)=>{
      this.setData({
        mvRelated: res,
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
});
