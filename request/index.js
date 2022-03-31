const URL = "http://123.207.32.32:9001/";

class Request {
  request(url, method, params) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: URL + url,
        method: method,
        data: params,
        success: (res) => {
          resolve(res.data.data);
        },
        reject: (err) => {
          reject(err);
        },
      });
    });
  }
  get(url, params) {
    return this.request(url, "GET", params);
  }
  post(url, params) {
    return this.request(url, "POST", params);
  }
}

const request = new Request();

export default request;
