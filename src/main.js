import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import vueSwiper from 'vue-awesome-swiper' //引入vue-awesome-swiper
import 'swiper/dist/css/swiper.css' //引入样式
import fastClick from 'fastclick'
import lazyload from 'vue-lazyload'

import toast from 'components/commom/toast'

Vue.config.productionTip = false

Vue.use(vueSwiper)

// fastClick.attach(document.body)

Vue.use(lazyload,{
    loading:require('./assets/img/ryan.png')
})

Vue.prototype.$bus = new Vue()

Vue.use(toast)
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')