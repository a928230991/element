/*
 * @Author: your name
 * @Date: 2020-04-14 16:47:05
 * @LastEditTime: 2024-01-04 14:47:41
 * @LastEditors: 范祥龙 fanxl@idss-cn.com
 * @Description: In User Settings Edit
 * @FilePath: /ueba-web/src/assets/icons/index.js
 */
import './iconfont.js';
import './iconfont.css';

const requireAll = requireContext => requireContext.keys().map(requireContext);
const allSvg = require.context('.', false, /\.svg$/);
requireAll(allSvg);
