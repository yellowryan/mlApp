import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var cart = JSON.parse(localStorage.getItem('cartList') || '[]' )

export default new Vuex.Store({
    state: {
        cartList:cart
    },
    getters:{
        cartList(state){
            return state.cartList
        },
        cartLength(state){
            return state.cartList.length
        },
        totalPrice(state){
          let good = state.cartList.filter(item=>{
                return item.isSelected == true
            })
            let tPrice = good.reduce((prev,current)=>{
                return  prev+ current.count * current.price
            },0)
            return tPrice
        },
        goodsNum(state){
            let good = state.cartList.filter(item=>{
                return item.isSelected == true
            })
            let num = good.reduce((prev,current)=>{
                return prev + current.count
            },0)
            return num
        },
        selectAll(state,getters){
            if(getters.cartLength==0){return false}
          let isSelecteAll = state.cartList.every(item=>{
                return item.isSelected == true
            })
            return isSelecteAll
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
            localStorage.setItem('cartList',JSON.stringify(state.cartList))
        }
    },  
    actions: {

    },
    modules: {

    }
})