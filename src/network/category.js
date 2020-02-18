import {request} from './request'

export function getCategoryList(){
    return request({
        url:'data/category/categoryData.json'
    })
}