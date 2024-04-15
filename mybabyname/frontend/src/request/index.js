import axios from 'axios';
import { localstorage } from "@/utils"
import { ACCESS_TOKEN, BEARER } from "@/constant"


const host = process.env.NEXT_PUBLIC_HOST || '/api'
const client = axios.create({
  baseURL: host,
  timeout: 5000,
  headers: {
    Authorization:  localstorage.getLocalStorage(ACCESS_TOKEN)
  }
});

let cancelTokenSource;

client.interceptors.request.use(
  config => {
    console.log("token----->", sessionStorage.getItem("access_token"))
     config.headers['Content-Type'] = 'application/json';
     config.headers['Authorization'] = localstorage.getLocalStorage(ACCESS_TOKEN)

    // 设置其他通用头部

    // 如果有正在进行的请求，取消它
    if (cancelTokenSource) {
      cancelTokenSource.cancel('Operation canceled by the user.');
    }

    // 创建新的CancelToken
    cancelTokenSource = axios.CancelToken.source();
    config.cancelToken = cancelTokenSource.token;

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

client.interceptors.response.use(
  response => {
    return response.data;
  },
  async error => {
    if (axios.isCancel(error)) {
      console.log('Request canceled:', error.message);
      // 可以在这里处理请求被取消的逻辑
    } else if (error && error.response) {
      switch (error.response.status) {
        case 400:
          error.message = '请求错误';
          break;
        case 401:
          error.message = '未授权，请登录';
          break;
        // 其他错误处理
        default:
          error.message = '服务端异常，请联系管理员';
      }
    }
    return Promise.reject(error);
  }
);

// 封装通用的GET、POST、PUT、DELETE方法，并添加请求重试
const api = {
  get: (url, params, config) => client.get(url, { params, ...config }),
  post: (url, data, config) => client.post(url, data, config),
  put: (url, data, config) => client.put(url, data, config),
  delete: (url, data, config) => client.delete(url, { data, ...config }),
}

export { api, client };
