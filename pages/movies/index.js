import request from "../../request/index.js";

Page({
  data: {
    MVdata: [],
  },

  onLoad() {
    request.get("top/mv", { limit: 30 }).then((res) => {
      this.setData({
        MVdata: res,
      });
    });
  },

  //下滑加载更多数据，服务器有问题offset无效？？
  onReachBottom() {
    /* const offset = this.data.MVdata.length / 10;
    request.get("top/mv", { limit: 10, offset }).then((res) => {
      this.setData({
        MVdata: this.data.MVdata.concat(res),
      });
    }); */
  },

  //下拉刷新出发该方法
  onPullDownRefresh() {
    request.get("top/mv", { limit: 30 }).then((res) => {
      this.setData({
        MVdata: res,
      });
      wx.stopPullDownRefresh(); //当数据加载完毕之后关闭刷新
    });
  },

  skipToDetails: function (event) {
    const id = event.currentTarget.dataset.id; //通过组建里面的属性获取数据
    wx.navigateTo({
      url: `../../package/pages/moview-detail/index?id=${id}`,
    });
  },
});
