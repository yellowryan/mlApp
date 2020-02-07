import {request} from "./require"


export function getIcons(){
    return request({
        url : "data/navIconData/nav.json"
    })
}

export function getSecKillList(){
    return request({
       url : "data/seckillData/seckill.json"
    })
}

export function getDailyList(){
    return request({
        url : "data/dailyData/daily.json"
    })
}