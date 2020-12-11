/*
 * @Author       : jincheng
 * @Date         : 2020-12-11 10:24:44
 * @LastEditTime : 2020-12-11 11:30:44
 * @LastEditors  : jincheng
 * @FilePath     : /qiankun/parent-all/src/pages/Zsq.js
 */
import React, { Component } from 'react'





const foo = Cmp => props =>{
  return (
    <div>
      <Cmp {...props} />
    </div>
  )
} 


@foo
class Child extends Component {
  render() {
    return (
       <div> Child</div>
    )
  }
}

export default class Zsq extends Component {
  render() {
    return (
      <div>
        HocPage
        <Child />
      </div>
    )
  }
}
