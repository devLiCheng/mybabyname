"use strict";
(() => {
var exports = {};
exports.id = 553;
exports.ids = [553];
exports.modules = {

/***/ 4967:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: external "axios"
const external_axios_namespaceObject = require("axios");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_namespaceObject);
;// CONCATENATED MODULE: ./src/utils/localStorage.js
// key value 存储值
function setLocalStorage(key, value) {
    if (true) {
        return null; // or return a default value
    }
    localStorage.setItem(key, value);
}
// 通过key取值
function getLocalStorage(key) {
    if (true) {
        return null; // or return a default value
    }
    return localStorage.getItem(key);
}
// 通过key删除值
function removeLocalStorage(key) {
    if (true) {
        return null; // or return a default value
    }
    return localStorage.removeItem(key);
}
// 清空所有值
function clearAllLocalStorage() {
    if (true) {
        return null; // or return a default value
    }
    localStorage.clear();
}

;// CONCATENATED MODULE: ./src/constant/index.js
const ACCESS_TOKEN = "access_token";
const BEARER = "Bearer";
const USER_INFO = "USER_INFO";

;// CONCATENATED MODULE: ./src/request/index.js



const host = process.env.NEXT_PUBLIC_HOST || "/api";
const client = external_axios_default().create({
    baseURL: host,
    timeout: 5000,
    headers: {
        Authorization: getLocalStorage(ACCESS_TOKEN)
    }
});
let cancelTokenSource;
client.interceptors.request.use((config)=>{
    console.log("token----->", sessionStorage.getItem("access_token"));
    config.headers["Content-Type"] = "application/json";
    config.headers["Authorization"] = getLocalStorage(ACCESS_TOKEN);
    // 设置其他通用头部
    // 如果有正在进行的请求，取消它
    if (cancelTokenSource) {
        cancelTokenSource.cancel("Operation canceled by the user.");
    }
    // 创建新的CancelToken
    cancelTokenSource = external_axios_default().CancelToken.source();
    config.cancelToken = cancelTokenSource.token;
    return config;
}, (error)=>{
    return Promise.reject(error);
});
client.interceptors.response.use((response)=>{
    return response.data;
}, async (error)=>{
    if (external_axios_default().isCancel(error)) {
        console.log("Request canceled:", error.message);
    // 可以在这里处理请求被取消的逻辑
    } else if (error && error.response) {
        switch(error.response.status){
            case 400:
                error.message = "请求错误";
                break;
            case 401:
                error.message = "未授权，请登录";
                break;
            // 其他错误处理
            default:
                error.message = "服务端异常，请联系管理员";
        }
    }
    return Promise.reject(error);
});
// 封装通用的GET、POST、PUT、DELETE方法，并添加请求重试
const api = {
    get: (url, params, config)=>client.get(url, {
            params,
            ...config
        }),
    post: (url, data, config)=>client.post(url, data, config),
    put: (url, data, config)=>client.put(url, data, config),
    delete: (url, data, config)=>client.delete(url, {
            data,
            ...config
        })
};


;// CONCATENATED MODULE: ./src/pages/api/register.js

// export default async function addUser(body) {
//     try {
//         await api.post('/addUser', body);
//     } catch (error) {
//         console.log(error)
//     }
//     // const { method, body } = req;
//     // console.log("req", req)
//     // const METHOD = method.toUpperCase()
//     // switch (METHOD) {
//     //   case 'POST':
//     //     const response = 
//     //     // 返回数据
//     //     res.status(200).json(response.data);
//     //     break;
//     //   default:
//     //     res.setHeader('Allow', ['GET']);
//     //     res.status(405).end(`Method ${method} Not Allowed`);
//     // }
//   }

const register_host = process.env.NEXT_PUBLIC_HOST;
async function handler(req, res) {
    const { method  } = req;
    const param = req.body;
    const url = register_host + "addUser";
    try {
        const response = await external_axios_default().post(url, param);
        res.status(200).json({
            success: true,
            data: response.data
        });
    } catch (error) {
        // res.status(500).json({ error: 'Error fetching data' });
        res.status(405).json({
            success: false,
            message: "Only POST requests are allowed"
        });
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(4967));
module.exports = __webpack_exports__;

})();