/*
 * @Author       : jincheng
 * @Date         : 2020-12-11 10:24:44
 * @LastEditTime : 2020-12-11 10:30:03
 * @LastEditors  : jincheng
 * @FilePath     : /qiankun/parent-all/src/pages/Hocpage.js
 */
import React, { Component } from 'react'

// 高阶组件
function Child(props){
  return <div> Child</div>
}

const foo = Cmp => props =>{
  return (
    <div>
      <Cmp {...props} />
    </div>
  )
} 
const Foo = foo(Child)

export default class Hocpage extends Component {
  render() {
    return (
      <div>
        HocPage
        <Foo />
      </div>
    )
  }
}
