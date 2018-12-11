export default [{
  path:'/goods',
  icon:'icon-timeicon',
  level:1,
  name:'商品管理',
  children:[{
    name: '品牌',
    path: '/goods/brand',
    level:2,
  }, {
    name: '商品',
    path: '/goods/commodity',
    level:2,
  }, {
    name: '类别',
    path: '/goods/category',
    level:2,
  }, {
    name: '制造商',
    path: '/goods/manufacturer',
    level:2,
  }]
},{
  name: '供应商',
  icon: 'icon-jiaoqi',
  path: '/supplier',
  level:1,
},{
  path:'askQuotation',
  icon:'icon-xunjia',
  name:'询报价',
  level:1,
  children:[{
    path:'/ask',
    name:'询价',
    level:2,
    children:[{
      name: '客户询价',
      path: '/ask/customerInquiry',
      level:3,
    }, {
      name: '询价需求汇总testtesttesttest',
      path: '/ask/summaryImport',
      level:3,
    }]
  },{
    path:'/quotation',
    name:'报价',
    level:2,
    children:[{
      name: '供应商报价',
      path: '/quotation/supplierQuotation',
      childPath: ['/quotation/supplierQuotationDetail'],
      level:3,
    }, {
      name: '平台报价',
      path: '/quotation/platformQuotation',
      childPath: ['/quotation/platformQuotationDetail'],
      level:3,
    }]
  }]
}];
