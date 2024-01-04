/*
 * @Author: 范祥龙 fanxl@idss-cn.com
 * @Date: 2024-01-02 14:15:42
 * @LastEditors: 范祥龙 fanxl@idss-cn.com
 * @LastEditTime: 2024-01-04 14:38:15
 * @FilePath: /element/packages/idss-tabs/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import IdssIconSvg from './src/idss-icon-svg';

/* istanbul ignore next */
IdssIconSvg.install = function(Vue) {
  Vue.component(IdssIconSvg.name, IdssIconSvg);
};

export default IdssIconSvg;
