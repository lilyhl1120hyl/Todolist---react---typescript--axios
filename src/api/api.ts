// api简易封装

import request from './axios-request';


export function GetData(data:any) {
    return request.get(`https://reqres.in/api/things/1`, {data})
}

export function PostData(param:any) {
    return request.post(`https://reqres.in/api/things/1`, {param})
}


export default {
    GetData,
    PostData
}
