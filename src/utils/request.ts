import Taro from '@tarojs/taro';

const TIME_OUT = 6000;
const BASE_URL = 'http://api.hado-official.cn:8087';

const request = (options) => {
  // 判断是不是完整的地址，不是的话，拼接上baseUrl
  let urlPath = '';
  if (options.url.indexOf('http') === -1) {
    urlPath = BASE_URL + options.url;
  } else {
    urlPath = options.url;
  }
  console.log('请求的url是:', urlPath);
  return new Promise((resolve, reject) => {
    Taro.request({
      url: BASE_URL + options.url,
      method: options.method || 'GET',
      timeout: TIME_OUT,
      data: options.data || {},
      success(res) {
        // 可以根据自己的数据状态处理响应
        resolve(res.data);
      },
      fail(err) {
        reject(err);
      },
    });
  });
};

export default request;
