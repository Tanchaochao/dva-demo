import axios from 'axios'
import qs from 'qs'
import promise from 'es6-promise';
promise.polyfill();


const Axios = axios.create({
  timeout: 10000,

});
const AUTH_TOKEN = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NDY0MjU3MjEsInVzZXJfbmFtZSI6ImFkbWluIiwianRpIjoiMzQxMjMxMzQtZTlmZi00M2IwLTg2ZTMtYTM5ZWNhNDEwMzg1IiwiY2xpZW50X2lkIjoidWFhLXNlcnZpY2UiLCJzY29wZSI6WyJzZXJ2aWNlIl19.GEOyORPRVPD6FYpF4YPHa39_MAdLQ3-MgtZ5JYyfykp6NMsaMr9GQdmZqkmE2jAxk-vnhjUoH3SlBnydPtJdG4Q9IsZSclD4fNnSx_wOcpQtyAJWnGBTeDRwW0ZM1x3kGW4HucPHeP7XcfVmgxMwMEsslyisTvsEAjQ4IHuRJEoFs1hMpCMiGiyiOIpluZV9uX0k7Q93CWAEelO4nu1_Xt5ZaDGZ1m6npTYJsiVOAYORcASHIIz3Ji2LjQFxZA39memNZ-brnnqQoLDIcL7dSxfxZwxXnP5vPN2Jz4ZYa8jKxKApmMcfv1VOKHZykCO8LAX0hjgRR7Qovu6oHleu5A";
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
Axios.defaults.headers.common['Authorization'] =`Bearer ${AUTH_TOKEN}`;;

axios.defaults.withCredentials = true;
//POST传参序列化(添加请求拦截器)
Axios.interceptors.request.use(config => {
  if (config.method === 'post') {
    config.data = qs.stringify(config.data);
  }

  return config
}, error => {
  return Promise.reject(error)
})

//返回状态判断(添加响应拦截器)
Axios.interceptors.response.use(res => {
  //需要登陆
  if (res.data.code === '-1') {
   
  }
  //操作错误
  if (res.data.code === '0'){
    return Promise.reject(res.data.info);
  }
  //权限错误
  if (res.data.code === '-2'){
    return Promise.reject(res.data.info);
  }

  return res;

}, error => {
  return Promise.reject(error)
});

export default function request(options) { // * 如果传入json 就用contentType为true来定义
  
  return axios(options)
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
}

