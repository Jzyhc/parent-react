/*
 * @Author       : jincheng
 * @Date         : 2020-12-13 14:32:01
 * @LastEditTime : 2020-12-16 16:58:43
 * @LastEditors  : jincheng
 * @FilePath     : /parent-all/src/pages/qiankun/Vuepage.js
 */
import React, { Component,Fragment } from "react";


import { loadMicroApp } from 'qiankun';
import actions from '../../utils/common'

class VuePage  extends Component {
    componentDidMount(){
        // start()
        loadMicroApp(
          { 
            // name: 'VueMicroApp', 
            // entry: '//localhost:9000',
            // container: '#frame', 
            name: "ReactMicroApp",
            entry: "//localhost:10100",
            container: "#frame",
          }
        );

      actions.onGlobalStateChange((state, prevState) => {
        // state: 变更后的状态; prevState: 变更前的状态
        console.log("主应用观察者：token 改变前的值为 ", prevState.token);
        console.log("主应用观察者：登录状态发生改变，改变后的 token 的值为 ", state.token);
      });
      actions.setGlobalState({token:'12345789'});
      }
  render() { 
    return ( 
      <Fragment>
      21121312
        <div id='frame'></div>
          <div ref={this.containerRef} />
      </Fragment>
     );
  }
}
 
export default VuePage;