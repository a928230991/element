/*
 * @Author: 范祥龙 fanxl@idss-cn.com
 * @Date: 2024-01-02 14:15:42
 * @LastEditors: 范祥龙 fanxl@idss-cn.com
 * @LastEditTime: 2024-01-02 15:44:08
 * @FilePath: /element/packages/idss-tabs/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import IdssDrawer from './src/drawer';

/* istanbul ignore next */
IdssDrawer.install = function(Vue) {
  Vue.component(IdssDrawer.name, IdssDrawer);
};

export default IdssDrawer;
