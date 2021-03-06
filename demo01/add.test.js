// 测试脚本里面应该包括一个或多个describe块
// 每个describe块应该包括一个或多个it块
var add = require('./add.js');

// 断言功能由断言库来实现，Mocha本身不带断言库，所以必须先引入断言库。
var expect = require('chai').expect;

// describe块称为"测试套件"（test suite），表示一组相关的测试
// 它是一个函数，第一个参数是测试套件的名称（"加法函数的测试"），第二个参数是一个实际执行的函数
describe('加法函数的测试', function() {

  // it块称为"测试用例"（test case），表示一个单独的测试，是测试的最小单位
  // 它也是一个函数，第一个参数是测试用例的名称（"1 加 1 应该等于 2"），第二个参数是一个实际执行的函数
  it('1 加 1 应该等于 2', function() {
    
    // 测试脚本里面，有一句断言
    // 所谓"断言"，就是判断源码的实际执行结果与预期结果是否一致，如果不一致就抛出一个错误
    // 上面这句断言的意思是，调用add(1, 1)，结果应该等于2
    expect(add(1, 1)).to.be.equal(2);
    // 上面代码引入的断言库是chai，并且指定使用它的expect断言风格
    // expect断言的优点是很接近自然语言

    // expect断言的写法都是一样的
    // 头部是expect方法，尾部是断言方法，比如equal、a/an、ok、match等。两者之间使用to或to.be连接。
    // 如果expect断言不成立，就会抛出一个错误
    // 事实上，只要不抛出错误，测试用例就算通过
    
  });

});
