/* global process */
const { NODE_ENV } = process.env;


// const API = 'http://localhost:9999/api';
// const API = 'http://192.168.5.40:8026'; // 后台姜超接口
// const API = 'http://192.168.5.252:8888';// 青松后台接口
// const API = 'http://192.168.6.51:8049';// 易蔺成接口
// const API = 'http://192.168.6.57:8030';// 蒋聪接口
// const API = 'http://192.168.6.31:8203';// 王涛接口
// const API = 'http://192.168.6.58:8043';// 王攀
// const API = 'http://192.168.6.57:8026';// 蒋聪接口
// const API = 'http://192.168.5.252:8889';// 公用接口
// const API = 'http://192.168.5.53:8043';// 青松后台接口
// const API = 'http://192.168.5.252:9999';// 公用接口1
const API = 'http://103.235.234.105:9999';// 公用接口2
// const API = 'http://192.168.6.63:8028'; // 崔耀男
// const API = 'http://192.168.5.31:8043'; // 姜超
// =======================================================================
const api = {
  production: 'http://103.235.234.105:9999',
  development: API,
};
console.log(api, api[NODE_ENV], NODE_ENV);
export default api[NODE_ENV];
