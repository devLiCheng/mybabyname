"use strict";
(() => {
var exports = {};
exports.id = 237;
exports.ids = [237];
exports.modules = {

/***/ 3998:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ api)
});

// NAMESPACE OBJECT: ./src/pages/api/register.js
var register_namespaceObject = {};
__webpack_require__.r(register_namespaceObject);

// EXTERNAL MODULE: ./src/request/index.js
var request = __webpack_require__(5673);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
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

const host = process.env.NEXT_PUBLIC_HOST;
async function handler(req, res) {
    const { method  } = req;
    const param = req.body;
    const url = host + "addUser";
    try {
        const response = await axios.post(url, param);
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

;// CONCATENATED MODULE: ./src/pages/api/index.js

const API = {
    addUser: register_namespaceObject.addUser
};
/* harmony default export */ const api = (API);


/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [673], () => (__webpack_exec__(3998)));
module.exports = __webpack_exports__;

})();