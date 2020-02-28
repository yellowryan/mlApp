import axios from 'axios'

export default function request(config){
    const instance = axios.create({
        baseUrl:"",
        timeOut:5000
    })

    instance.intercapaters.request.use(on,function(){
        return
    })

     instance(config).then(res=>{

     }).then(err=>{
         
     })
}