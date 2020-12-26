/*
 * @Author       : jincheng
 * @Date         : 2020-12-16 16:41:55
 * @LastEditTime : 2020-12-16 16:48:33
 * @LastEditors  : jincheng
 * @FilePath     : /parent-all/src/utils/common.js
 */
import { initGlobalState, MicroAppStateActions } from "qiankun";

const initialState = {};
const actions: MicroAppStateActions = initGlobalState(initialState);

export default actions;