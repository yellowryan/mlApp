import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('../views/home/Home.vue')
const Category = () => import('../views/category/Category.vue')
const Discovery = () => import('../views/discovery/Discovery.vue')
const Cart = () => import('../views/cart/Cart.vue')
const My = () => import('../views/my/My.vue')
const Login = () => import('../views/login/Login.vue')
const Register = () => import('../views/register/Register.vue')
const Detail = () =>import('../views/details/Detail.vue')

Vue.use(VueRouter)

import {getCookie} from '../assets/utils/utils.js'

const router =  new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            redirect: '/home'
        }, {
            path: '/home',
            component: Home,
            name: 'home',
            meta:{
                title : "首页 -- 麋鹿商城"
            }
        }, {
            path: '/category',
            name: 'category',
            component: Category,
            meta:{
                title : "分类"
            }
        }, {
            path: '/discovery',
            name: 'discovery',
            component: Discovery,
            meta:{
                title : "我的世界",
                requireAuth:true
            }
        }, {
            path: '/cart',
            name: 'cart',
            component: Cart,
            meta:{
                title : "购物车"
            }
        }, {
            path: '/my',
            name: 'my',
            component: My,
            meta:{
                title:"我的麋鹿",
                requireAuth:true
            }
        },
        {
            path: '/detail/:id',
            name: 'detail',
            component: Detail,
            meta:{
                title:"详情页"
            }
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
            meta:{
                title:"请登录"
            }
        },
        {
            path:'/register',
            name:'register',
            component:Register,
            meta:{
                title:"请注册"
            }
        },
        {
            path: '*',
            component: () =>
                import ('@/components/Error404.vue')
        }

    ],
})
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requireAuth)){ // 判断该路由是否需要登录权限
        if(getCookie('userid')) { // 判断当前是否登录
         next(); //如果登录了next()就表示允许跳转到要去的路由
        }
        else { //否则就跳转到下面的登录界面
         next({
         path: '/login'
         })
        }
    }
    else {  //如果该路由不需要登录验证就直接允许跳转
    next();
    }
   });

export default router