import dynamic from 'dva/dynamic';

function capitalize(s) {
  return s[0].toUpperCase() + s.slice(1);
}

/* eslint-disable no-unused-vars */
function dynamicWrapper(app, feature, hasModel = true) {
  return dynamic({
    app,
    models: () => {
      return hasModel
        ? [import(`../pages/${feature}/model.js`)]
        : [];
    },
    component: () => import(`../pages/${feature}/${capitalize(feature.split('/').pop())}`),
  });
}

export default function getRouterConfig(app) {
  const routers = [
    {
      path: '/',
      exact: true,
      component: dynamicWrapper(app, 'home', false),
      title: '首页',
    },{
      path: '/inquiry', // 询价 /客户询价列表
      exact: true,
      component: dynamicWrapper(app, 'inquiryQuotation/myInquiry', false),
      title: '我的询价',
    },
    {
      path: '*', // 默认其他路由至首页
      exact: true,
      component: dynamicWrapper(app, 'home', false),
      title: '首页',
    },
  ];
  return routers;
}
