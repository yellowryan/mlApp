import {ajax} from './request'
const BASE_URL = '/api'
//注册请求
export const reqRegister = (user) => ajax(`${BASE_URL}/register`,user,"POST")

//登录请求
export const reqLogin = (user) => ajax(`${BASE_URL}/login`,user,"POST")

//自动登录
export const reqAutoLogin = () => ajax(`${BASE_URL}/autoLogin`)

//搜索商品列表
export const reqGoodsList = (keywords) => ajax(`${BASE_URL}/goods/searchGood`,keywords,"POST")
