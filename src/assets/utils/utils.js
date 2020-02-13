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