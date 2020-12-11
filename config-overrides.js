/*
 * @Author       : jincheng
 * @Date         : 2020-12-11 11:07:18
 * @LastEditTime : 2020-12-11 11:45:54
 * @LastEditors  : jincheng
 * @FilePath     : /parent-all/config-overrides.js
 */
 
//配置完成后记得重启下
const { override,fixBabelImports,addDecoratorsLegacy } = require("customize- cra");
module.exports = override( 
  // fixBabelImports("import",{
  //   libraryName:"antd",
  //   libraryDirectory:"es",
  //   style:"css"
  // })
  // ,
addDecoratorsLegacy()//配置装饰器器 
);