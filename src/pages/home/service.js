import API from '../../config/api';
import request from '../../utils/request';

const api = `${API}/inquiryapi`;
// const api = `${API}`;
// 获取品牌列表
export const getInquiryList = (params) => {
  return request({
    url: `/brand/brandList`,
    params,
  });
};