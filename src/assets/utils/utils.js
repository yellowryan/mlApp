export function timeCount(){
    const seconds = new Date().getSeconds();
    const minutes = new Date().getMinutes();
}



export function debounce(fun,delay){
    let timer = null;
    return function(...args){
        if(timer)clearTimeout(timer);
        timer = setTimeout(()=>{
            fun.apply(this,args)
        },delay)
    }
}


export function throttle(fun,wait){
    let prev = 0;
    return function(...args){
        let that = this;
        let now = +new Date();
        if(now - prev > wait){
            fun.apply(that,args);
            prev = now;
        }
    }
   
}

export function getCookie(name){
    const strCookies = document.cookie;
    //截取变成cookie数组
    const array = strCookies.split(';');
    //循环每个cookie
    for (let i = 0; i < array.length; i++) {
        //将cookie截取成两部分
        const item = array[i].split("=");
        //判断cookie的name 是否相等
        if (item[0] == name) {
            return item[1];
        }
    }
    return null;
}

export function removeCookie(name){
    setCookie(name,'',-1)
}

export function setCookie(name, value, days) {

    var d = new Date;

    d.setTime(d.getTime() + 24*60*60*1000*days);

    window.document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString();

}