export default [{
  path:'/goods',
  icon:'user',
  name:'商品管理',
  children:[{
    name: '品牌',
    path: '/goods/brand',
  }, {
    name: '商品',
    path: '/goods/commodity',
  }, {
    name: '类别',
    path: '/goods/category',
  }, {
    name: '制造商',
    path: '/goods/manufacturer',
  }]
},{
  name: '供应商',
  icon: 'user',
  path: '/supplier',
},{
  path:'askQuotation',
  icon:'user',
  name:'询报价',
  children:[{
    path:'/ask',
    name:'询价',
    children:[{
      name: '客户询价',
      path: '/ask/customerInquiry',
    }, {
      name: '询价需求汇总testtesttesttest',
      path: '/ask/summaryImport',
    }]
  },{
    path:'/quotation',
    name:'报价',
    children:[{
      name: '供应商报价',
      path: '/quotation/supplierQuotation',
      childPath: ['/quotation/supplierQuotationDetail'],
    }, {
      name: '平台报价',
      path: '/quotation/platformQuotation',
      childPath: ['/quotation/platformQuotationDetail'],
    }]
  }]
}];
