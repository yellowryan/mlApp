<template>
    <header class="serach-wrapper">
        <div class="header-content clearfix">
            <div class="center-container">
                 <slot name="center"></slot>
            </div>
            <div class="left-container">
                <slot name="left"></slot>
            </div>
            <div class="right-container">
                <slot name="right"></slot>
            </div>
        </div>
    </header>

</template>

<style lang="less" scoped>
    .clearfix::after{
        content: "";
        display: block;
        clear: both;
    }
    .serach-wrapper{
        display: block;
        width: 100%;
        //  position: fixed;
        // top: 0;
        // left: 0;
        // right: 0;
        // z-index: 5;
        .header-content{
            width: 100%;
            height: 100%;
            position: relative;
            padding: 0 42px 0 39px;
                .center-container{
                    float: left;
                    height:1.6rem;
                    width: 100%;
                    margin-top: 0.4rem;
                    position: relative;
                }
                .left-container{
                    float: left;
                    width: 2.2rem;
                    margin-left: -100%;
                    position: relative;
                    left: -2rem;
                    height: 2.2rem;
                    line-height: 2.2rem;
                }
                .right-container{
                    float: left;
                    margin-right: -2.1rem;
                    width: 2.1rem;
                    height: 2.1rem;
                    overflow: hidden;
                }
        }
    }
</style>