/*
 * @Author       : jincheng
 * @Date         : 2020-12-13 14:01:42
 * @LastEditTime : 2020-12-16 15:40:56
 * @LastEditors  : jincheng
 * @FilePath     : /parent-all/src/pages/RouterPage.js
 */
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import VuePage from '../pages/qiankun/VuePage'

// import start from '../utils'
export default class RouterPage extends Component {
  
  

  render() {
    
    return (
      <div>
        <h3>RouterPage</h3>
       
        <Router>
          <Link to="/">⾸页</Link>
          <Link to="/vue">vue</Link>
          {/* 根路路由要添加exact，实现精确匹配 */} 
          
        <Route
          exact
            path="/"
            component={HomePage}
            //children={() => <div>children</div>}
            //render={() => <div>render</div>}
            />
          <Route path="/vue" component={VuePage} />
          
          </Router>
</div>
); }
}
class HomePage extends Component {
  render() {
    return (
      <div>
        <h3>HomePage</h3>
      </div>
); }
}

