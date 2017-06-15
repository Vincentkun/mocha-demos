var add = require('../src/add.js');
var mul = require('../src/multiply.js');
var expect = require('chai').expect;

describe('加法函数的测试', function () {
  it('1 加 1 应该等于 2', function () {
    expect(add(1, 1)).to.be.equal(2);
  });

  it('任何数加0应该等于自身', function () {
    expect(add(1, 0)).to.be.equal(1);
  });

});

// npm install --save-dev mochawesome
// ../node_modules/.bin/mocha --reporter mochawesome
// 上面代码中，mocha命令使用了项目内安装的版本，而不是全局安装的版本，因为mochawesome模块是安装在项目内的。
// 然后，测试结果报告就在mochaawesome-reports子目录生成。