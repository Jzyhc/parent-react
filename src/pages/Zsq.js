/*
 * @Author       : jincheng
 * @Date         : 2020-12-11 10:24:44
 * @LastEditTime : 2020-12-13 13:56:05
 * @LastEditors  : jincheng
 * @FilePath     : /parent-all/src/pages/Zsq.js
 */
import React, { Component } from 'react'

const foo = Cmp => props =>{
  return (
    <div>
      <Cmp {...props} />
    </div>
  )
} 

const foo2 = Cmp => props =>{
  return (
    <div>
    eqweqw
      <Cmp {...props} />
    </div>
  )
} 

@foo2
@foo
class Child extends Component {
  render() {
    return (
       <div> Child@</div>
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
