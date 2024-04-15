import { useState, useEffect } from 'react';
import { debounce } from 'lodash'; 
import { api } from "@/request/index"
import { localstorage, str } from "@/utils"
import { ACCESS_TOKEN, BEARER, USER_INFO } from "@/constant"
const defaultNames = {
    surname:'',
    sex:'',
    data: []
}

export default function Index({visible, toggleModal, flushLogin }){
    const [names, setNames] = useState(defaultNames); // 生成的名字
    const [showNames, setShowNames] = useState(false)
    const [userRegisterInfo, setUserRegisterInfo] = useState({email: '', password: ''})
    const [expired, setExpired] = useState(false); // 是否已经过期
    const [showGeneratorMask, setShowGeneratorMask] = useState(false); // 生成名字时需要有个遮罩
    const [modalHegiht, setModalHegiht]= useState(350);
    const [formData, setFormData] = useState({
        surname: "", // 姓名
        gender: "", // 性别
        birthDatetime: "", // 出生日期
        keyword: "", // g关键字
        description:"" // 描述
        // email: '', // 邮箱
    });
    const [headers, setHeaders] = useState(undefined);
    const toggleLoginModal = (bool) => {
        toggleModal && toggleModal(bool)
    }


    
    useEffect(() => {
        if(headers === undefined){
            console.log("未登录会不会一直走这里")
            const token = localstorage.getLocalStorage("access_token");
            if(token){
                setHeaders({
                    "timeout": 99000,
                    'Content-Type': 'application/json',
                    'Authorization': token
                })
            }
        };
    } , [headers])


    useEffect(() => {
        if(visible){
            let h = window.scrollY + 350;
            setModalHegiht(h)
        }
    }, [visible])


    useEffect(() => {
        if(expired){
            alert("登录过期，请重重新登陆")
            localstorage.clearAllLocalStorage();
            // window.location.reload();
            toggleLoginModal(true)
        }
    }, [expired])
    

    // 创建一个防抖函数
    const debouncedSetInputValue = debounce((name,value) => {
        setUserRegisterInfo({
            ...userRegisterInfo,
            [name]: value
        });
    }, 500);  // 设置延迟时间为500毫秒


    // 调用生成接口
    const GPTGenerationName = async ({birthDatetime, description, surname, keyword, gender}) => {
        try {
            setShowGeneratorMask(true)
            // const {code, data, message} = await api.post("/nameGeneration", {birthDatetime, description, surname, keyword, gender}, headers);
            const url = `/toGenerateName?${new URLSearchParams({birthDatetime, description, surname, keyword, gender}).toString()}`;
            const {code, data, message} = await api.get(url);
            console.log("gpt生成的名字", code, data, message)
            if(code === 200 && Array.isArray(data.data)){
                window.scrollTo(0, 150); // 将页面滚动到距离顶部50px的位置
                setNames(data)
                setShowNames(true)
            }
            // if(code === 0){
            //     const text = data?.name?.choices[0]?.text
            //     const nameList = text ? str.formartNames(text) : [];
            //     setNames(nameList);
            //     console.log("nameList",nameList)
            //     setShowGeneratorMask(false)
            // }
            console.log("names", names)
            setShowGeneratorMask(false)
        } catch (error) {
            setShowGeneratorMask(false)
            const  expire = error?.response?.status === 401; // 401 token过期
            if(expire){
                setExpired(true)
                console.log("从新登录",)
            }else{
                console.log(error)
            }
        }
    }

    const validateFormdata = ({birthDatetime, description, surname, keyword, gender}) => {
        console.log("性别",gender)
        const checkoutRes = {
            status: true,
            msg: ""
        };
        const isEmpt = (str) => str === "" || str === null || str === undefined;
        if(isEmpt(birthDatetime)){
            checkoutRes.msg = "请填写出生年月日"
            checkoutRes.status = false;
        }
        if(isEmpt(description)){
            checkoutRes.msg = "请填写描述，描述越丰富，名字越好"
            checkoutRes.status = false;
        }
        if(isEmpt(surname)){
            checkoutRes.msg = "请填写姓氏"
            checkoutRes.status = false;
        }
        if(isEmpt(gender)){
            checkoutRes.msg = "请填选择性别"
            checkoutRes.status = false;
        }

        return checkoutRes;
        
    }
    const startGeneratorName = async () => {
        console.log("表格数据", formData)
        if(headers){
            const {birthDatetime, description, surname, keyword, gender} = formData;
            const {status, msg} = validateFormdata({birthDatetime, description, surname, keyword, gender});
            if(!status){
                alert(msg);
                return;
            }
            await GPTGenerationName({birthDatetime, description, surname, keyword, gender});
            return;
        }else {
            toggleLoginModal(true)
            console.log("还未注册，先将用户信息存起来，注册后，自动填写到表单")
           
        }
    };
    function isEmail(email) {
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return regex.test(email);
    }



    // 根据用户名判断该用户是否是已经注册的用户 在注册的时候，邮箱默认设置为用户名
    async function isRegistered(username){
        try {
            const url = `findUserByName/${username}`
            const res = await api.get(url);
            return res;
        } catch (error) {
            console.log(error)
        }
    }

    // 登录
    async function login({username, password}){
        try {
            const res = await api.post("/auth/login", {
                username,
                password
            });
            console.log("登录接口返回的值",res);
            return res
        } catch (error) {
            console.log(error)
        }
    }

    // 注册
    async function httpRegister({email, password, username}){
        try {
            const data = await api.post("/addUser", {
                email,
                password,
                username
            });
            console.log("注册接口",  data)
            return data;
        } catch (error) {
            console.log(error)
        }
    }


    // 登录成功后获取用户信息
    async function queryUserInfo(userId){
        try {
            const url = `getUserById/${userId}`
            const {code, data} = await api.get(url)
            if(code === 0){
                console.log("这是用户信息", data)
                localstorage.setLocalStorage(USER_INFO, JSON.stringify(data));
                toggleLoginModal(false)
                // window.location.reload();
                flushLogin(true)
            }
        } catch (error) {
            console.log(error)
        }
    }


    const register = async () => {
        localstorage.clearAllLocalStorage()
        console.log("start reg", userRegisterInfo)
        const checkEmail = isEmail(userRegisterInfo.email);
        const isNotEmpt = userRegisterInfo.password !== "";
        const verificationPassed = checkEmail && isNotEmpt;
        const loginWebSite = async () => {
            try {
                const logined = await login({username:userRegisterInfo.email, password: userRegisterInfo.password});
                console.log("logined", logined)
                if(logined.code === 0){
                    const access_token = `${BEARER} ${logined.data.access_token}`;
                    localstorage.setLocalStorage(ACCESS_TOKEN, access_token);
                    await queryUserInfo(logined.data.userId)
                    console.log("登录成功", logined)
                }else{
                  alert(logined.message || "登录失败，请检查用户名密码")   
                }
            } catch (error) {
                console.log(error)
            }
        }
        if(!checkEmail){
            alert("邮箱格式不对")
            return;
        }
        if(!isNotEmpt){
            alert("密码不能为空")
            return;
        }
        if(verificationPassed){
            const {code, data} = await isRegistered(userRegisterInfo.email); // 判断此用户前是否已经注册过了
            const haveUser = code === 0 && data
            if(haveUser){
                await loginWebSite()
            }
            if(!haveUser){
                const registerResult = await httpRegister({email: userRegisterInfo.email, password: userRegisterInfo.password, username: userRegisterInfo.email})
               if(registerResult.code === 0){
                    await loginWebSite()
               } else {
                alert(registerResult.message || "注册失败,请重试！")
               }
            }
            // httpRegister({email: userRegisterInfo.email, password: userRegisterInfo.password});
            return;
        }
        toggleLoginModal(false)
    }

    const handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        debouncedSetInputValue(name, value);
    }
    useEffect(() => {
        // 在组件卸载时取消防抖函数的调用，防止内存泄漏
        return () => {
            debouncedSetInputValue.cancel();
        };
    }, []);

    const handlerChange = (event, key) => {
        console.log("性别----》", event.target.value)
        const value = event.target.value;
        setFormData({
            ...formData,
            [key]: value
        })
    }

    const handlerChangeGender = (value, key) => {
        setFormData({
            ...formData,
            [key]: value
        })
    }

    

    return(<div className="form-component">
        <h2 className="form-title">填写宝宝信息</h2>
        <p className="form-des">请填写以下信息以帮助我们为您的宝宝取名。</p>
        <div className="form">
            <div className="item-row">
               <div className="item-col">
                    <div className="form-item">
                        <span>宝宝姓氏</span>
                        <input placeholder="请输入宝宝姓氏" value={formData.surname} onChange={(e) => handlerChange(e, "surname")}/>
                    </div>
               </div>
               <div className="item-col">
                    <div className="form-item">
                        <span>邮箱</span>
                        <input placeholder="请输入你的邮箱" />
                    </div>
               </div>
            </div>
            <div className="item-row">
               <div className="item-col">
                    <div className="form-item">
                        <span>出生日期</span>
                        <input placeholder="请输入宝宝的出生日期" value={formData.birthDatetime} onChange={(e) => handlerChange(e, "birthDatetime")}/>
                    </div>
               </div>
               <div className="item-col">
                    <div className="form-item">
                        <span>性别</span>
                        <div className="gender">
                            <input className="male" type="radio" name="gender" value={formData.gender} onChange={(e) => handlerChangeGender("男", "gender")} /><label>男</label>
                            <input className="female" type="radio" name="gender" value={formData.gender} onChange={(e) => handlerChangeGender("女", "gender")}/><label>女</label>
                        </div>
                    </div>
               </div>
            </div>
            <div className="more-info">
                <div className="item">
                    <span>更多的祝愿</span>
                    <textarea name="message" rows="4" cols="50" value={formData.description} placeholder="描写的越详细出来的结果更好" onChange={(e) => handlerChange(e, "description")}></textarea>
               </div>
            </div>
            <div className="checkbox-list">
                <div className="options-label">关键词</div>
                <div className="options">
                    <div className="checkbox-item">
                        <input type="checkbox"  name="option1" value="1" />
                        <label >喜庆</label>
                    </div>
                    <div className="checkbox-item">
                        <input type="checkbox"  name="option1" value="2" />
                        <label >寓意深远</label>
                    </div>
                    <div className="checkbox-item">
                        <input type="checkbox"  name="option1" value="3" />
                        <label >文雅</label>
                    </div>
                    <div className="checkbox-item">
                        <input type="checkbox"  name="option1" value="4" />
                        <label >时尚</label>
                    </div>
                    <div className="checkbox-item">
                        <input type="checkbox"  name="option1" value="5" />
                        <label >独特</label>
                    </div>
                    <div className="checkbox-item">
                        <span >其它</span>
                        <input type="text"  name="option1" placeholder="多个关键词用逗号隔开"/>
                    
                    </div>
                </div>
            </div>
            <div className="start-generator-name">
                <button onClick={startGeneratorName}>开始起名</button>
            </div>
        </div>
       
        <div className="footer">
            <div className="footer-base-col left-copyright">
                   <div className="copyright">宝宝起名网 ©2023 产品版权所有。保留所有权利 <a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank">鄂ICP备2023010334号</a></div> 
            </div>
            <div className="footer-base-col right-link">
                <a href="next/index">隐私政策</a>
                <a href="next/index">服务条款</a>
                <a href="next/index">Cookie设置</a>
            </div>
        </div>

        <div className="generator-name-mask" style={{ display: showGeneratorMask ? "block" : "none" }}></div>
        <div className="generator-name-tips" style={{ display: showGeneratorMask ? "flex" : "none" }}>正在生成名字，请等待.....</div>

{
    visible && <div className="mask" id="mask"></div>
  
}
{
    visible && <div className="login-modal" id="loginModal" style={{ top: modalHegiht + 'px'}}>
                    <i className='login-modal-close' onClick={() => toggleLoginModal(false)}>关闭</i>        
                    <h3>欢迎加入我们</h3>
                    <p>注册后可将宝宝名字及解析发送到您的邮箱，还可获取更多精彩内容</p>
                    <input type="email"  name='email' placeholder="请输入邮箱"  onChange={handleChange}/>
                    <input type="password" name="password" placeholder="请输入密码"  onChange={handleChange}/>
                    <button className="login-register" onClick={register}>登录/注册</button>
                    <div className="more-option"></div>
                </div>
}


{
   showNames && <div className="mask" id="mask"></div>
}

{
    showNames && <div className="login-modal names-modal" id="loginModal" style={{ top: modalHegiht + 'px'}}>
                     <i className='login-modal-close' onClick={() =>{
                         setNames(defaultNames);
                         setShowNames(false);
                     }}>关闭</i>   
                     <div className="name-list">
                        <div className='name-top'>
                            <strong className='surname'>姓： {names.surname}</strong>
                            <strong className='sex'>性别： {names.sex === 'boy' ? '男' : '女'}</strong>
                        </div>
                        {
                            names.data.map((name,i) => {
                                return(<div key={i} className='name-item'>
                                    <div className='name-item-name'>{ name.name }</div>
                                    <div className='name-item-tag'><span className='weigth'>用字分析：</span>{ name.tag }</div>
                                    {name?.description?.length > 0 && <div className='name-item-description'><span className='weigth'>意蕴内涵：</span>{ name.description} </div>}
                                </div>)
                            })
                        }    
                    </div>     
            </div>
}

    </div>)
}



