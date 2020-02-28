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


export default throttle(fun,wait){
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