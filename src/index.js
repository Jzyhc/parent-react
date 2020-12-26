/*
 * @Author       : jincheng
 * @Date         : 2020-12-10 16:17:15
 * @LastEditTime : 2020-12-26 15:21:43
 * @LastEditors  : jincheng
 * @FilePath     : /parent-all/src/index.js
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import MyRouter from './router';



// function render() {
  ReactDOM.render(
    <ConfigProvider locale={zhCN}>
      <HashRouter>
        <MyRouter />
      </HashRouter>
    </ConfigProvider>,
    document.getElementById('root')
  );
// }

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

