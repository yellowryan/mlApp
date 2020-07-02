import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

var cart = JSON.parse(localStorage.getItem('cartList') || '[]')

export default new Vuex.Store({
    state: {
        cartList: cart,
        user: {},
        goodsList: [],
        msg: ''
    },
    getters,
    mutations,
    actions
})