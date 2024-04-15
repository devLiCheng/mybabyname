(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 4529:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2F_absolutePagePath_private_next_pages_2Findex_js_preferredRegion_),
  getServerSideProps: () => (/* binding */ getServerSideProps),
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

// NAMESPACE OBJECT: ./src/pages/index.js
var src_pages_namespaceObject = {};
__webpack_require__.r(src_pages_namespaceObject);
__webpack_require__.d(src_pages_namespaceObject, {
  "default": () => (pages_Index)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages/module.js
var pages_module = __webpack_require__(3185);
var module_default = /*#__PURE__*/__webpack_require__.n(pages_module);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(7182);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./src/pages/index.css
var pages = __webpack_require__(4039);
var pages_default = /*#__PURE__*/__webpack_require__.n(pages);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./src/utils/localStorage.js
var localStorage = __webpack_require__(4603);
// EXTERNAL MODULE: ./src/constant/index.js
var constant = __webpack_require__(8190);
// EXTERNAL MODULE: ./src/request/index.js
var request = __webpack_require__(5673);
;// CONCATENATED MODULE: ./src/components/header/index.js
// import style from "./index.css"





// 登录前
function BeforeLoggingIn({ loginRegister  }) {
    return /*#__PURE__*/ jsx_runtime.jsx((external_react_default()).Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "login",
            onClick: loginRegister,
            children: "登录/注册"
        })
    });
}
// 登录后
function AfterLoggingIn({ userInfo  }) {
    const [headers, setHeaders] = (0,external_react_.useState)(undefined);
    const [logoutOk, setLogoutOk] = (0,external_react_.useState)(false);
    const { username , image  } = userInfo;
    const avatars = (image !== "" && image !== null) ?? image;
    (0,external_react_.useEffect)(()=>{
        if (headers === undefined) {
            console.log("未登录会不会一直走这里");
            const token = localStorage/* getLocalStorage */.$o("access_token");
            if (token) {
                setHeaders({
                    "Content-Type": "application/json",
                    "Authorization": token
                });
            }
        }
        ;
    }, [
        headers
    ]);
    (0,external_react_.useEffect)(()=>{
        if (logoutOk) {
            localStorage/* clearAllLocalStorage */.jF();
            window.location.reload();
        }
    }, [
        logoutOk
    ]);
    const logoutSystem = async ()=>{
        if (headers) {
            try {
                const { code , data , message  } = await request/* api */.h.post(`auth/logout`, {}, headers);
                console.log();
                if (code === 0) {
                    console.log(message || "退出系统");
                    setLogoutOk(true);
                }
            } catch (error) {
                console.log(error);
            }
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)((external_react_default()).Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "afer-login",
                children: username
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "after-login-img",
                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                    src: avatars || "/images/user.png",
                    alit: username
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "logOut",
                onClick: logoutSystem
            })
        ]
    });
}
// 根据登录前还是登录后，加载不同的组件
function SwitchLogin({ userInfo , loginRegister  }) {
    return userInfo ? /*#__PURE__*/ jsx_runtime.jsx(AfterLoggingIn, {
        userInfo: userInfo
    }) : /*#__PURE__*/ jsx_runtime.jsx(BeforeLoggingIn, {
        loginRegister: loginRegister
    });
}
function Header({ children , visible , toggleModal  }) {
    console.log("visible---->", visible, toggleModal);
    const [userInfo, setUserInfo] = (0,external_react_.useState)(undefined);
    const loginRegister = ()=>{
        toggleModal && toggleModal(true);
    };
    (0,external_react_.useLayoutEffect)(()=>{
        if (!userInfo) {
            const user = localStorage/* getLocalStorage */.$o(constant/* USER_INFO */.CD);
            setUserInfo(JSON.parse(user));
        }
    }, [
        userInfo
    ]);
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "header_component",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "nav",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "site_name",
                    children: "宝宝取名网"
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "sit_nav",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "menu-list",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("a", {
                                href: "",
                                children: "首页"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("a", {
                                href: "",
                                children: "名字大全"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("a", {
                                href: "",
                                children: "热门名字"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("a", {
                                href: "",
                                children: "起名案例"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("a", {
                                href: "",
                                children: "名字解析"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "register_logIn",
                    children: /*#__PURE__*/ jsx_runtime.jsx(SwitchLogin, {
                        userInfo: userInfo,
                        loginRegister: loginRegister
                    })
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./src/components/first-page/index.js

function FirstPage() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "first-page-component",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "img-one"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "img-two"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "img-three"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("h1", {
                className: "web-site-name",
                children: "宝宝取名网"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("p", {
                className: "web-site-slogan",
                children: "宝宝取名网是一个专业为您的宝宝免费取名的平台,提供各种有创意、有意义的名字。我们有多年的命名经验,为您的宝宝取一个好名字,帮助他们开启美好人生。"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/two-page/index.js

function two_page_FirstPage() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "two-page-component",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "just-born"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "des-name",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("h2", {
                        children: "给小宝宝取名"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                        children: "欢迎来到给小宝宝取名网站！在这里,您可以找到一些有关给宝宝取名的灵感和建议。无论您是准妈妈还是准爸爸,我们都希望能够帮助您为宝宝取到一个美丽、有意义的名字。"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                        children: "开始起名"
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/three-page/index.js

function Index() {
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "three-page-component"
    });
}

;// CONCATENATED MODULE: external "lodash"
const external_lodash_namespaceObject = require("lodash");
;// CONCATENATED MODULE: ./src/components/form/index.js






const defaultNames = {
    surname: "",
    sex: "",
    data: []
};
function form_Index({ visible , toggleModal , flushLogin  }) {
    const [names, setNames] = (0,external_react_.useState)(defaultNames); // 生成的名字
    const [showNames, setShowNames] = (0,external_react_.useState)(false);
    const [userRegisterInfo, setUserRegisterInfo] = (0,external_react_.useState)({
        email: "",
        password: ""
    });
    const [expired, setExpired] = (0,external_react_.useState)(false); // 是否已经过期
    const [showGeneratorMask, setShowGeneratorMask] = (0,external_react_.useState)(false); // 生成名字时需要有个遮罩
    const [modalHegiht, setModalHegiht] = (0,external_react_.useState)(350);
    const [formData, setFormData] = (0,external_react_.useState)({
        surname: "",
        gender: "",
        birthDatetime: "",
        keyword: "",
        description: "" // 描述
    });
    const [headers, setHeaders] = (0,external_react_.useState)(undefined);
    const toggleLoginModal = (bool)=>{
        toggleModal && toggleModal(bool);
    };
    (0,external_react_.useEffect)(()=>{
        if (headers === undefined) {
            console.log("未登录会不会一直走这里");
            const token = localStorage/* getLocalStorage */.$o("access_token");
            if (token) {
                setHeaders({
                    "timeout": 99000,
                    "Content-Type": "application/json",
                    "Authorization": token
                });
            }
        }
        ;
    }, [
        headers
    ]);
    (0,external_react_.useEffect)(()=>{
        if (visible) {
            let h = window.scrollY + 350;
            setModalHegiht(h);
        }
    }, [
        visible
    ]);
    (0,external_react_.useEffect)(()=>{
        if (expired) {
            alert("登录过期，请重重新登陆");
            localStorage/* clearAllLocalStorage */.jF();
            // window.location.reload();
            toggleLoginModal(true);
        }
    }, [
        expired
    ]);
    // 创建一个防抖函数
    const debouncedSetInputValue = (0,external_lodash_namespaceObject.debounce)((name, value)=>{
        setUserRegisterInfo({
            ...userRegisterInfo,
            [name]: value
        });
    }, 500); // 设置延迟时间为500毫秒
    // 调用生成接口
    const GPTGenerationName = async ({ birthDatetime , description , surname , keyword , gender  })=>{
        try {
            setShowGeneratorMask(true);
            // const {code, data, message} = await api.post("/nameGeneration", {birthDatetime, description, surname, keyword, gender}, headers);
            const url = `/toGenerateName?${new URLSearchParams({
                birthDatetime,
                description,
                surname,
                keyword,
                gender
            }).toString()}`;
            const { code , data , message  } = await request/* api */.h.get(url);
            console.log("gpt生成的名字", code, data, message);
            if (code === 200 && Array.isArray(data.data)) {
                window.scrollTo(0, 150); // 将页面滚动到距离顶部50px的位置
                setNames(data);
                setShowNames(true);
            }
            // if(code === 0){
            //     const text = data?.name?.choices[0]?.text
            //     const nameList = text ? str.formartNames(text) : [];
            //     setNames(nameList);
            //     console.log("nameList",nameList)
            //     setShowGeneratorMask(false)
            // }
            console.log("names", names);
            setShowGeneratorMask(false);
        } catch (error) {
            setShowGeneratorMask(false);
            const expire = error?.response?.status === 401; // 401 token过期
            if (expire) {
                setExpired(true);
                console.log("从新登录");
            } else {
                console.log(error);
            }
        }
    };
    const validateFormdata = ({ birthDatetime , description , surname , keyword , gender  })=>{
        console.log("性别", gender);
        const checkoutRes = {
            status: true,
            msg: ""
        };
        const isEmpt = (str)=>str === "" || str === null || str === undefined;
        if (isEmpt(birthDatetime)) {
            checkoutRes.msg = "请填写出生年月日";
            checkoutRes.status = false;
        }
        if (isEmpt(description)) {
            checkoutRes.msg = "请填写描述，描述越丰富，名字越好";
            checkoutRes.status = false;
        }
        if (isEmpt(surname)) {
            checkoutRes.msg = "请填写姓氏";
            checkoutRes.status = false;
        }
        if (isEmpt(gender)) {
            checkoutRes.msg = "请填选择性别";
            checkoutRes.status = false;
        }
        return checkoutRes;
    };
    const startGeneratorName = async ()=>{
        console.log("表格数据", formData);
        if (headers) {
            const { birthDatetime , description , surname , keyword , gender  } = formData;
            const { status , msg  } = validateFormdata({
                birthDatetime,
                description,
                surname,
                keyword,
                gender
            });
            if (!status) {
                alert(msg);
                return;
            }
            await GPTGenerationName({
                birthDatetime,
                description,
                surname,
                keyword,
                gender
            });
            return;
        } else {
            toggleLoginModal(true);
            console.log("还未注册，先将用户信息存起来，注册后，自动填写到表单");
        }
    };
    function isEmail(email) {
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return regex.test(email);
    }
    // 根据用户名判断该用户是否是已经注册的用户 在注册的时候，邮箱默认设置为用户名
    async function isRegistered(username) {
        try {
            const url = `findUserByName/${username}`;
            const res = await request/* api */.h.get(url);
            return res;
        } catch (error) {
            console.log(error);
        }
    }
    // 登录
    async function login({ username , password  }) {
        try {
            const res = await request/* api */.h.post("/auth/login", {
                username,
                password
            });
            console.log("登录接口返回的值", res);
            return res;
        } catch (error) {
            console.log(error);
        }
    }
    // 注册
    async function httpRegister({ email , password , username  }) {
        try {
            const data = await request/* api */.h.post("/addUser", {
                email,
                password,
                username
            });
            console.log("注册接口", data);
            return data;
        } catch (error) {
            console.log(error);
        }
    }
    // 登录成功后获取用户信息
    async function queryUserInfo(userId) {
        try {
            const url = `getUserById/${userId}`;
            const { code , data  } = await request/* api */.h.get(url);
            if (code === 0) {
                console.log("这是用户信息", data);
                localStorage/* setLocalStorage */.qQ(constant/* USER_INFO */.CD, JSON.stringify(data));
                toggleLoginModal(false);
                // window.location.reload();
                flushLogin(true);
            }
        } catch (error) {
            console.log(error);
        }
    }
    const register = async ()=>{
        localStorage/* clearAllLocalStorage */.jF();
        console.log("start reg", userRegisterInfo);
        const checkEmail = isEmail(userRegisterInfo.email);
        const isNotEmpt = userRegisterInfo.password !== "";
        const verificationPassed = checkEmail && isNotEmpt;
        const loginWebSite = async ()=>{
            try {
                const logined = await login({
                    username: userRegisterInfo.email,
                    password: userRegisterInfo.password
                });
                console.log("logined", logined);
                if (logined.code === 0) {
                    const access_token = `${constant/* BEARER */.HE} ${logined.data.access_token}`;
                    localStorage/* setLocalStorage */.qQ(constant/* ACCESS_TOKEN */.LA, access_token);
                    await queryUserInfo(logined.data.userId);
                    console.log("登录成功", logined);
                } else {
                    alert(logined.message || "登录失败，请检查用户名密码");
                }
            } catch (error) {
                console.log(error);
            }
        };
        if (!checkEmail) {
            alert("邮箱格式不对");
            return;
        }
        if (!isNotEmpt) {
            alert("密码不能为空");
            return;
        }
        if (verificationPassed) {
            const { code , data  } = await isRegistered(userRegisterInfo.email); // 判断此用户前是否已经注册过了
            const haveUser = code === 0 && data;
            if (haveUser) {
                await loginWebSite();
            }
            if (!haveUser) {
                const registerResult = await httpRegister({
                    email: userRegisterInfo.email,
                    password: userRegisterInfo.password,
                    username: userRegisterInfo.email
                });
                if (registerResult.code === 0) {
                    await loginWebSite();
                } else {
                    alert(registerResult.message || "注册失败,请重试！");
                }
            }
            // httpRegister({email: userRegisterInfo.email, password: userRegisterInfo.password});
            return;
        }
        toggleLoginModal(false);
    };
    const handleChange = (event)=>{
        const value = event.target.value;
        const name = event.target.name;
        debouncedSetInputValue(name, value);
    };
    (0,external_react_.useEffect)(()=>{
        // 在组件卸载时取消防抖函数的调用，防止内存泄漏
        return ()=>{
            debouncedSetInputValue.cancel();
        };
    }, []);
    const handlerChange = (event, key)=>{
        console.log("性别----》", event.target.value);
        const value = event.target.value;
        setFormData({
            ...formData,
            [key]: value
        });
    };
    const handlerChangeGender = (value, key)=>{
        setFormData({
            ...formData,
            [key]: value
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "form-component",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("h2", {
                className: "form-title",
                children: "填写宝宝信息"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("p", {
                className: "form-des",
                children: "请填写以下信息以帮助我们为您的宝宝取名。"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "form",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "item-row",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "item-col",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "form-item",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            children: "宝宝姓氏"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("input", {
                                            placeholder: "请输入宝宝姓氏",
                                            value: formData.surname,
                                            onChange: (e)=>handlerChange(e, "surname")
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "item-col",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "form-item",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            children: "邮箱"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("input", {
                                            placeholder: "请输入你的邮箱"
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "item-row",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "item-col",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "form-item",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            children: "出生日期"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("input", {
                                            placeholder: "请输入宝宝的出生日期",
                                            value: formData.birthDatetime,
                                            onChange: (e)=>handlerChange(e, "birthDatetime")
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "item-col",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "form-item",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            children: "性别"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "gender",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                    className: "male",
                                                    type: "radio",
                                                    name: "gender",
                                                    value: formData.gender,
                                                    onChange: (e)=>handlerChangeGender("男", "gender")
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                    children: "男"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                    className: "female",
                                                    type: "radio",
                                                    name: "gender",
                                                    value: formData.gender,
                                                    onChange: (e)=>handlerChangeGender("女", "gender")
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                    children: "女"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "more-info",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "item",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                    children: "更多的祝愿"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("textarea", {
                                    name: "message",
                                    rows: "4",
                                    cols: "50",
                                    value: formData.description,
                                    placeholder: "描写的越详细出来的结果更好",
                                    onChange: (e)=>handlerChange(e, "description")
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "checkbox-list",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "options-label",
                                children: "关键词"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "options",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "checkbox-item",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                type: "checkbox",
                                                name: "option1",
                                                value: "1"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                children: "喜庆"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "checkbox-item",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                type: "checkbox",
                                                name: "option1",
                                                value: "2"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                children: "寓意深远"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "checkbox-item",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                type: "checkbox",
                                                name: "option1",
                                                value: "3"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                children: "文雅"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "checkbox-item",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                type: "checkbox",
                                                name: "option1",
                                                value: "4"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                children: "时尚"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "checkbox-item",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                type: "checkbox",
                                                name: "option1",
                                                value: "5"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                children: "独特"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "checkbox-item",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                children: "其它"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                type: "text",
                                                name: "option1",
                                                placeholder: "多个关键词用逗号隔开"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "start-generator-name",
                        children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                            onClick: startGeneratorName,
                            children: "开始起名"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "footer",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "footer-base-col left-copyright",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "copyright",
                            children: [
                                "宝宝起名网 \xa92023 产品版权所有。保留所有权利 ",
                                /*#__PURE__*/ jsx_runtime.jsx("a", {
                                    href: "https://beian.miit.gov.cn/#/Integrated/index",
                                    target: "_blank",
                                    children: "鄂ICP备2023010334号"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "footer-base-col right-link",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("a", {
                                href: "next/index",
                                children: "隐私政策"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("a", {
                                href: "next/index",
                                children: "服务条款"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("a", {
                                href: "next/index",
                                children: "Cookie设置"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "generator-name-mask",
                style: {
                    display: showGeneratorMask ? "block" : "none"
                }
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "generator-name-tips",
                style: {
                    display: showGeneratorMask ? "flex" : "none"
                },
                children: "正在生成名字，请等待....."
            }),
            visible && /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "mask",
                id: "mask"
            }),
            visible && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "login-modal",
                id: "loginModal",
                style: {
                    top: modalHegiht + "px"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("i", {
                        className: "login-modal-close",
                        onClick: ()=>toggleLoginModal(false),
                        children: "关闭"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("h3", {
                        children: "欢迎加入我们"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                        children: "注册后可将宝宝名字及解析发送到您的邮箱，还可获取更多精彩内容"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("input", {
                        type: "email",
                        name: "email",
                        placeholder: "请输入邮箱",
                        onChange: handleChange
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("input", {
                        type: "password",
                        name: "password",
                        placeholder: "请输入密码",
                        onChange: handleChange
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("button", {
                        className: "login-register",
                        onClick: register,
                        children: "登录/注册"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "more-option"
                    })
                ]
            }),
            showNames && /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "mask",
                id: "mask"
            }),
            showNames && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "login-modal names-modal",
                id: "loginModal",
                style: {
                    top: modalHegiht + "px"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("i", {
                        className: "login-modal-close",
                        onClick: ()=>{
                            setNames(defaultNames);
                            setShowNames(false);
                        },
                        children: "关闭"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "name-list",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "name-top",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("strong", {
                                        className: "surname",
                                        children: [
                                            "姓： ",
                                            names.surname
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("strong", {
                                        className: "sex",
                                        children: [
                                            "性别： ",
                                            names.sex === "boy" ? "男" : "女"
                                        ]
                                    })
                                ]
                            }),
                            names.data.map((name, i)=>{
                                return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "name-item",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "name-item-name",
                                            children: name.name
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "name-item-tag",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    className: "weigth",
                                                    children: "用字分析："
                                                }),
                                                name.tag
                                            ]
                                        }),
                                        name?.description?.length > 0 && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "name-item-description",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    className: "weigth",
                                                    children: "意蕴内涵："
                                                }),
                                                name.description,
                                                " "
                                            ]
                                        })
                                    ]
                                }, i);
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/pages/index.js

 // 引入 Less 文件






function pages_Index({ info  }) {
    const [visible, setVisible] = (0,external_react_.useState)(false);
    const toggleModal = (bool)=>setVisible(bool);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (pages_default()).main,
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(Header, {
                visible: visible,
                toggleModal: toggleModal
            }),
            /*#__PURE__*/ jsx_runtime.jsx(FirstPage, {}),
            /*#__PURE__*/ jsx_runtime.jsx(two_page_FirstPage, {}),
            /*#__PURE__*/ jsx_runtime.jsx(Index, {}),
            /*#__PURE__*/ jsx_runtime.jsx(form_Index, {
                visible: visible,
                toggleModal: toggleModal
            })
        ]
    });
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2F&absolutePagePath=private-next-pages%2Findex.js&preferredRegion=!

        // Next.js Route Loader
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2F_absolutePagePath_private_next_pages_2Findex_js_preferredRegion_ = ((0,helpers/* hoist */.l)(src_pages_namespaceObject, "default"));

        // Re-export methods.
        const getStaticProps = (0,helpers/* hoist */.l)(src_pages_namespaceObject, "getStaticProps")
        const getStaticPaths = (0,helpers/* hoist */.l)(src_pages_namespaceObject, "getStaticPaths")
        const getServerSideProps = (0,helpers/* hoist */.l)(src_pages_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(src_pages_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(src_pages_namespaceObject, "reportWebVitals")

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(src_pages_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(src_pages_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(src_pages_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(src_pages_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(src_pages_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/index","pathname":"/","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({ ...options, userland: src_pages_namespaceObject })
        
        
    

/***/ }),

/***/ 4039:
/***/ (() => {



/***/ }),

/***/ 2167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 3076:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 3100:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [812,673], () => (__webpack_exec__(4529)));
module.exports = __webpack_exports__;

})();