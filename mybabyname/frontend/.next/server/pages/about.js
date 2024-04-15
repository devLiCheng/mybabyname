"use strict";
(() => {
var exports = {};
exports.id = 521;
exports.ids = [521];
exports.modules = {

/***/ 9830:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2Fabout_absolutePagePath_private_next_pages_2Fabout_2Findex_js_preferredRegion_),
  getServerSideProps: () => (/* binding */ next_route_loaderpage_2Fabout_absolutePagePath_private_next_pages_2Fabout_2Findex_js_preferredRegion_getServerSideProps),
  getStaticPaths: () => (/* binding */ getStaticPaths),
  getStaticProps: () => (/* binding */ getStaticProps),
  reportWebVitals: () => (/* binding */ reportWebVitals),
  routeModule: () => (/* binding */ routeModule),
  unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
  unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
  unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
  unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
  unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
});

// NAMESPACE OBJECT: ./src/pages/about/index.js
var about_namespaceObject = {};
__webpack_require__.r(about_namespaceObject);
__webpack_require__.d(about_namespaceObject, {
  "default": () => (About),
  getServerSideProps: () => (getServerSideProps)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages/module.js
var pages_module = __webpack_require__(3185);
var module_default = /*#__PURE__*/__webpack_require__.n(pages_module);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(7182);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./src/pages/about/index.js
// export function getStaticProps(){
//   return {
//     props:{
//       info:"about info"
//     }
//   }
// }

function About({ info , data  }) {
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
            children: [
                "data: ",
                data
            ]
        })
    });
}
// 创建一个单独的函数来请求接口数据
async function fetchData() {
    const apiUrl = "http://localhost:3000/api/about"; // 替换为实际的接口地址
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
}
async function getServerSideProps(content) {
    const data = await fetchData();
    console.log("data", data);
    return {
        props: {
            data: data.name
        }
    };
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2Fabout&absolutePagePath=private-next-pages%2Fabout%2Findex.js&preferredRegion=!

        // Next.js Route Loader
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2Fabout_absolutePagePath_private_next_pages_2Fabout_2Findex_js_preferredRegion_ = ((0,helpers/* hoist */.l)(about_namespaceObject, "default"));

        // Re-export methods.
        const getStaticProps = (0,helpers/* hoist */.l)(about_namespaceObject, "getStaticProps")
        const getStaticPaths = (0,helpers/* hoist */.l)(about_namespaceObject, "getStaticPaths")
        const next_route_loaderpage_2Fabout_absolutePagePath_private_next_pages_2Fabout_2Findex_js_preferredRegion_getServerSideProps = (0,helpers/* hoist */.l)(about_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(about_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(about_namespaceObject, "reportWebVitals")

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(about_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(about_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(about_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(about_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(about_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/about","pathname":"/about","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({ ...options, userland: about_namespaceObject })
        
        
    

/***/ }),

/***/ 3076:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 3100:
/***/ ((module) => {

module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [812], () => (__webpack_exec__(9830)));
module.exports = __webpack_exports__;

})();