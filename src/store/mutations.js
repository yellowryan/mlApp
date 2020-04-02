import {ADD_CART,
        CART_GOOD_ADD,
        CART_GOOD_DECREASE,
        CART_GOOD_DELETE,
        USER_REGISTER,
        USER_LOGIN,
        USER_RESER,
        GET_GOODS_LIST,
        RESET_GOODS_LIST
    } from './mutation-types.js' 

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
    [CART_GOOD_ADD](state,payload){
        state.cartList.forEach(item => {
            if (item.id == payload.id) {
              item.count += 1;
              localStorage.setItem(
                "cartList",
                JSON.stringify(state.cartList)
              );
            }
          });
    },
    [CART_GOOD_DECREASE](state,payload){
        state.cartList.forEach(item => {
            if (item.id == payload.id) {
              item.count == 1 ? 1 : (item.count -= 1);
              localStorage.setItem(
                "cartList",
                JSON.stringify(state.cartList)
              );
            }
          });
    },
    [CART_GOOD_DELETE](state,payload){
        state.cartList.forEach((item, index) => {
            if (item.id == payload.id) {
             state.cartList.splice(index, 1);
             localStorage.setItem(
               "cartList",
               JSON.stringify(state.cartList)
             );
             }
           });
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
    },
    [GET_GOODS_LIST](state,goodsList){
        state.goodsList = goodsList
    },
    [RESET_GOODS_LIST](state,msg){
        state.goodsList = [],
        state.msg = msg
    }
}