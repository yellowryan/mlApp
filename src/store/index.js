import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        cartList:[]
    },
    getters:{
        cartLength(state){
            return state.cartList.length
        }
    },
    mutations: {
        addCart(state,payload){
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
        }
    },  
    actions: {

    },
    modules: {

    }
})