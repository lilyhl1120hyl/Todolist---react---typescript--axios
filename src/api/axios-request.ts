//  这是一个简易的axios封装

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse,AxiosError } from 'axios';

const server: AxiosInstance = axios.create();

//请求拦截
server.interceptors.request.use((config: AxiosRequestConfig) => {
    return config;
});
// 响应拦截
server.interceptors.response.use((res: AxiosResponse) => {
    if (res.status === 200) {//请求成功后 直接需要的返回数据
        res = res.data;
    }
    return res;
},(err:AxiosError)=>{});


export default server;
