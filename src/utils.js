/*
 * @Author       : jincheng
 * @Date         : 2020-12-14 10:57:05
 * @LastEditTime : 2020-12-15 16:54:49
 * @LastEditors  : jincheng
 * @FilePath     : /parent-all/src/utils.js
 */// micro-app-main/src/micro/apps.ts
// 此时我们还没有微应用，所以 apps 为空


// micro-app-main/src/micro/index.ts
// 一个进度条插件
import NProgress from "nprogress";
import "nprogress/nprogress.css";
// import { message } from "ant-design-vue";
import {
  registerMicroApps,
  addGlobalUncaughtErrorHandler,
  start,
} from "qiankun";


// 微应用注册信息
import apps from "./apps";

/**
 * 注册微应用
 * 第一个参数 - 微应用的注册信息
 * 第二个参数 - 全局生命周期钩子
 */
console.log('apps----',apps)
registerMicroApps(apps, {
  // qiankun 生命周期钩子 - 微应用加载前
  beforeLoad: (app) => {
    // 加载微应用前，加载进度条
    NProgress.start();
    console.log("before load-------", app.name);
    return Promise.resolve();
  },
  // qiankun 生命周期钩子 - 微应用挂载后
  afterMount: (app) => {
    // 加载微应用前，进度条加载完成
    NProgress.done();
    console.log("after mount", app.name);
    return Promise.resolve();
  },
});

/**
 * 添加全局的未捕获异常处理器
 */
addGlobalUncaughtErrorHandler((event) => {
  // console.error(event);
  const { message: msg } = event;
  // 加载失败时提示
  console.log('msg.includes',msg);
  if (msg && msg.includes("died in status LOADING_SOURCE_CODE")) {
    // alert("微应用加载失败，请检查应用是否可运行");
  }
});

// 导出 qiankun 的启动函数
export default start;