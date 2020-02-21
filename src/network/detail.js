import {request} from "./request"

export function getDetailInformation(id){
    return request({
        url : "../data/detailData/detail"+ id +".json"
    })
}