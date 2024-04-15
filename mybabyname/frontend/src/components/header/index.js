// import style from "./index.css"
import React, {useEffect, useState, useLayoutEffect} from "react"
import { localstorage } from "@/utils";
import { USER_INFO } from "@/constant"
import { api } from "@/request/index"

// 登录前
function BeforeLoggingIn({loginRegister }){
    return (
        <React.Fragment>
            <div className="login" onClick={loginRegister}>登录/注册</div>
            {/* <div className="register" onClick={loginRegister}>注册</div> */}
        </React.Fragment>
    )
}
// 登录后
function  AfterLoggingIn({userInfo}){
    const [headers, setHeaders] = useState(undefined);
    const [logoutOk, setLogoutOk] = useState(false);
    const { username, image }  = userInfo;
    const  avatars = (image !== "" && image !== null) ?? image
    useEffect(() => {
        if(headers === undefined){
            console.log("未登录会不会一直走这里")
            const token = localstorage.getLocalStorage("access_token");
            if(token){
                setHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': token
                })
            }
        };
    } , [headers])

    useEffect(() => {
        if(logoutOk){
            localstorage.clearAllLocalStorage()
            window.location.reload();
        }
    }, [logoutOk])

    const logoutSystem = async () => {
        if(headers){
            try {
                const {code, data, message } = await api.post(`auth/logout`, {}, headers);
                console.log()
                if(code === 0){
                    console.log(message || "退出系统")
                    setLogoutOk(true)
                }
            } catch (error) {
                console.log(error)
            }
        }
    }

    return (
        <React.Fragment>
            <div className="afer-login">{ username }</div>
            <div className="after-login-img"><img src={avatars || "/images/user.png"} alit={username} /></div>
            <div className="logOut" onClick={logoutSystem}></div>
        </React.Fragment>
    )
}

// 根据登录前还是登录后，加载不同的组件
function SwitchLogin({userInfo, loginRegister}){
    return userInfo ? <AfterLoggingIn userInfo={userInfo}/> : <BeforeLoggingIn loginRegister={loginRegister}/>
}


export default function Header({children, visible, toggleModal}){
    console.log("visible---->", visible,toggleModal)
    const [userInfo, setUserInfo] = useState(undefined)

    const loginRegister = () => {
        toggleModal && toggleModal(true)
    }
    useLayoutEffect(() => {
        if(!userInfo){
            const user  = localstorage.getLocalStorage(USER_INFO);
            setUserInfo(JSON.parse(user))
        }
    }, [userInfo]);

    return <div className="header_component">
        <div className="nav">
            <div className="site_name">宝宝取名网</div>
            <div className="sit_nav">
                <div className="menu-list">
                <a href="">首页</a>
                <a href="">名字大全</a>
                <a href="">热门名字</a>
                <a href="">起名案例</a>
                <a href="">名字解析</a>
                </div>
            </div>
            <div className="register_logIn">
                <SwitchLogin userInfo={userInfo} loginRegister={loginRegister}/>
            </div>
        </div>
    </div>
  }