// axios 作为一个库类使用

import axios from '../../axios';

export async function getList(params: any) {
  return axios({
    method: 'get',
    url: '/demo/get',
    params
  });
}

export async function getDemoList(params: any) {
  return axios({
    method: 'post',
    url: 'https://httpstat.us/200?sleep=3000',
    params
  });
}
