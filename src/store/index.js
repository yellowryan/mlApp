import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

var cart = JSON.parse(localStorage.getItem('cartList') || '[]' )

export default new Vuex.Store({
    state: {
        cartList:cart
    },
    getters,
    mutations, 
})