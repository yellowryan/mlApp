import Toast from './Toast'

const obj = {
    install: function(Vue) {
        //创建组件构造器
        const ToastConstructor = Vue.extend(Toast)

        //创建组件对象的实例
        const toast = new ToastConstructor()

        toast.$mount(document.createElement('div'))

        document.body.appendChild(toast.$el)

        Vue.prototype.$toast = toast
    }
}

export default obj