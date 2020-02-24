import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('../views/home/Home.vue')
const Category = () => import('../views/category/Category.vue')
const Discovery = () => import('../views/discovery/Discovery.vue')
const Cart = () => import('../views/cart/Cart.vue')
const My = () => import('../views/my/My.vue')
const Detail = () =>import('../views/details/Detail.vue')
Vue.use(VueRouter)

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
            component: Discovery
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
            component: My
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
            path: '*',
            component: () =>
                import ('@/components/Error404.vue')
        }

    ],
})
router.beforeEach((to,from,next)=>{
        document.title = to.meta.title
        next() 
    });

export default router