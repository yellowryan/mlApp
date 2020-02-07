<template>
    <div class="advert">
        <transition name="fade">
        <div class="backGround" v-if="isShow">
            <span class="ads" @click="cancelAd">广告倒计时:<b>{{n}}</b></span>
            <img src="imgs/bg.jpg" alt="">
        </div>
        </transition>
    </div>
</template>

<style lang="less" scoped>
    .advert{
        width: 100vw;
        .backGround{
            position: fixed;
            width: 100vw;
            height: 100vh;
            left: 0;
            top: 0;
            z-index: 1000;
                span{
                display: inline-block;
                position: absolute;
                right: 10px;
                top: 5px;
                color: aliceblue;
                }
            img {
                width: 100%;
                height: 100%;
                }
        }
    }

    .fade-enter, .fade-leave-to{
        opacity: 0;
    }
    .fade-enter-active, .fade-leave-active{
        opacity: 0.1;
        transform: scale(1.2);
        transition: all .8s ease-in
    }

</style>

<script>
export default {
    data(){
        return {
            isShow: true,
            n : 5,
            timer : null
        }
    },
    methods :{
        descrease(){
            this.timer =  setInterval(() => {
                this.n --;
                 if(this.n == 0){
                this.isShow =false;
                clearInterval(this.timer);
                this.timer = null
            }
            }, 1000)
        },
        cancelAd(){
            this.isShow = false;
            clearInterval(this.timer);
                this.timer = null
        }
    },
    mounted(){
        this.descrease()
    }
}
</script>