const mockjs = require('mockjs');

const accessData = mockjs.mock({
  'list|100': [
    {
      'id|+1': 1,
      name: /testlw[0-10]{5}/,
      manufacturerEnName: /制造商英文简称[0-10]{3}/,
      enTag: /英文标识[0-10]{3}/,
      cnName: /中文简称[0-10]{3}/,
      data: mockjs.Random.date(),
      'warningCount|0-100': 5,
      status: /(运行中|已停止)/,
    },
  ],
});

module.exports = {
    [`GET /brand/brandList`] (req, res) {
      res.json(accessData)
    },
  }
  