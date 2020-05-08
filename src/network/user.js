import {ajax} from './request'
const BASE_URL = '/api'
//注册请求
export const reqRegister = (user) => ajax(`${BASE_URL}/register`,user,"POST")

//登录请求
export const reqLogin = (user) => ajax(`${BASE_URL}/login`,user,"POST")

//自动登录
export const reqAutoLogin = () => ajax(`${BASE_URL}/autoLogin`)

//获取验证码
export const reqPhoneCode = (phone) => ajax(`${BASE_URL}/getPhoneCode`,{phone})

//
export const reqPhoneLogin = (code) => ajax(`${BASE_URL}/phoneCodeLogin`,code,"POST")

//搜索商品列表
export const reqGoodsList = (keywords) => ajax(`${BASE_URL}/goods/searchGood`,keywords,"POST")

