"use strict";
exports.id = 673;
exports.ids = [673];
exports.modules = {

/***/ 8190:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CD: () => (/* binding */ USER_INFO),
/* harmony export */   HE: () => (/* binding */ BEARER),
/* harmony export */   LA: () => (/* binding */ ACCESS_TOKEN)
/* harmony export */ });
const ACCESS_TOKEN = "access_token";
const BEARER = "Bearer";
const USER_INFO = "USER_INFO";


/***/ }),

/***/ 5673:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ api)
/* harmony export */ });
/* unused harmony export client */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4603);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8190);



const host = process.env.NEXT_PUBLIC_HOST || "/api";
const client = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
    baseURL: host,
    timeout: 5000,
    headers: {
        Authorization: _utils__WEBPACK_IMPORTED_MODULE_1__/* .getLocalStorage */ .$o(_constant__WEBPACK_IMPORTED_MODULE_2__/* .ACCESS_TOKEN */ .LA)
    }
});
let cancelTokenSource;
client.interceptors.request.use((config)=>{
    console.log("token----->", sessionStorage.getItem("access_token"));
    config.headers["Content-Type"] = "application/json";
    config.headers["Authorization"] = _utils__WEBPACK_IMPORTED_MODULE_1__/* .getLocalStorage */ .$o(_constant__WEBPACK_IMPORTED_MODULE_2__/* .ACCESS_TOKEN */ .LA);
    // 设置其他通用头部
    // 如果有正在进行的请求，取消它
    if (cancelTokenSource) {
        cancelTokenSource.cancel("Operation canceled by the user.");
    }
    // 创建新的CancelToken
    cancelTokenSource = axios__WEBPACK_IMPORTED_MODULE_0___default().CancelToken.source();
    config.cancelToken = cancelTokenSource.token;
    return config;
}, (error)=>{
    return Promise.reject(error);
});
client.interceptors.response.use((response)=>{
    return response.data;
}, async (error)=>{
    if (axios__WEBPACK_IMPORTED_MODULE_0___default().isCancel(error)) {
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



/***/ }),

/***/ 4603:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $o: () => (/* binding */ getLocalStorage),
/* harmony export */   jF: () => (/* binding */ clearAllLocalStorage),
/* harmony export */   qQ: () => (/* binding */ setLocalStorage)
/* harmony export */ });
/* unused harmony export removeLocalStorage */
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


/***/ })

};
;