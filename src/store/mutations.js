import { ADD_CART } from './mutation-types' 

export default {
   ADD_CART(state,payload){
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
        }
}