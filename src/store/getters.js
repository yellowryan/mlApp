export default {
    cartList(state) {
        return state.cartList
    },
    cartLength(state) {
        return state.cartList.length
    },
    totalPrice(state) {
        let good = state.cartList.filter(item => {
            return item.isSelected == true
        })
        let tPrice = good.reduce((prev, current) => {
            return prev + current.count * current.price
        }, 0)
        return tPrice
    },
    goodsNum(state) {
        let good = state.cartList.filter(item => {
            return item.isSelected == true
        })
        let num = good.reduce((prev, current) => {
            return prev + current.count
        }, 0)
        return num
    },
    selectAll(state, getters) {
        if (getters.cartLength == 0) { return false }
        let isSelecteAll = state.cartList.every(item => {
            return item.isSelected == true
        })
        return isSelecteAll
    }
}