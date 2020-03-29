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

export  function ajax(url,data={},type='GET') {
	if(type === 'GET'){
		let subString = '';
		Object.keys(data).forEach(key=>{
			subString += data + "=" + data[key] + "&"
		})

		if(subString){
			subString = subString.substring(0,subString.lastIndexOf('&'));
			url = url + '?' + subString
		}
		return axios.get(url)
	}else{
		return axios.post(url,data)
	}
}