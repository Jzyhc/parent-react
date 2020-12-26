/*
 * @Author       : jincheng
 * @Date         : 2020-12-14 11:10:03
 * @LastEditTime : 2020-12-16 10:10:48
 * @LastEditors  : jincheng
 * @FilePath     : /parent-all/src/apps.js
 */
// export function val(event){
//   const { bootstrap,mount,unmount } = exports ?? {}
//   return isFunction(bootstrap) && isFunction(mount) && isFunction(unmount)
// }
const apps = [
  {
    name: "VueMicroApp",
    entry: "//localhost:9000",
    container: "#frame",
    activeRule: "/vue",
  },
  {
    name: "ReactMicroApp",
    entry: "//localhost:10100",
    container: "#frame",
    activeRule: "/react",
  },
];

export default apps;