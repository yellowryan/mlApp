import axios from 'axios'

export function request(config){
    const instance = axios.create({
        baseURL: '',
        timeout: 5000
    })
    instance.interceptors.request.use(config=>{
        return config
    },error=>{

    })
    return instance(config)
}

export function ajax(url,data={},type='GET') {
	if(type === 'GET'){
		return axios.get(url,{
		   params:data
		})
	}else{
		return axios.post(url,data)
	}
}
