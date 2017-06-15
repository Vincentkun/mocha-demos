// Mocha默认只执行test子目录下面第一层的测试用例，不会执行更下层的用例
// 为了改变这种行为，就必须加上--recursive参数
// 这时test子目录下面所有的测试用例----不管在哪一层----都会执行
// 执行 mocha --recursive

var multiply = require('../../src/multiply');
var expect = require('chai').expect;

describe('乘法函数的测试', function () {

  it('1 乘 1 应该等于 1', function () {
    expect(multiply(1, 1)).to.be.equal(1);
  });

  // 添加乘法测试
  it('任何数乘以0应该等于0', function () {
    expect(mul(3, 0)).to.be.equal(0);
  });

})
