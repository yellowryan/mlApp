import { ADD_CART, USER_REGISTER, USER_LOGIN,USER_RESER } from './mutation-types.js' 

import {removeCookie, setCookie} from '../assets/utils/utils'

export default {
   [ADD_CART](state,payload){
            let oldProduct = null;
            state.cartList.forEach(item=>{
                if(item.id == payload.id){
                    oldProduct = item 
                }
            })
            if(oldProduct){
                oldProduct.count +=1
            }else{
                state.cartList.push(payload)
            }
            localStorage.setItem('cartList',JSON.stringify(state.cartList))
        },
    [USER_REGISTER](state,{user}){
        state.user = user
    },
    [USER_LOGIN](state,user){
        // state.user = {}
        state.user = user
    },
    [USER_RESER](state,name){
        state.user = {}
        removeCookie(name)
    }
}