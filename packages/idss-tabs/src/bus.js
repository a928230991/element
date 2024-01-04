/*
 * @Author: 范祥龙 fanxl@idss-cn.com
 * @Date: 2024-01-02 14:32:45
 * @LastEditors: 范祥龙 fanxl@idss-cn.com
 * @LastEditTime: 2024-01-02 14:32:48
 * @FilePath: /element/packages/idss-tabs/src/bus.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import BusFactory, { Bus } from 'vue-happy-bus';

const EventName = {
  WINDOW_RESIZE: 'window-resize',
  SCROLL_EVENT: 'scroll-event',
  MOUSE_LEAVE_BROWSER: 'mouse-leave-browser',
  MENU_TOGGLE_STATUS: 'menu-toggle-status',
  // tags-view 动态tab
  TAGS_VIEW_CLOSE: 'tags-view-close',
  // insight大盘系统组件刷新
  INSIGHT_REFRESH: 'insight-refresh',
  // 拖拽指令监听拖拽元素大小变化
  DRAG_RESIZE: 'drag-resize',
  TOOLBAR_REFRESH: 'toolbar-refresh',
  // 事件调查看板清空uuid
  EVENT_BOARD_CLEAR_UUID: 'event_board_clear_uuid',
  WEBSOCKET_ASSET_SYNCRONIZE: 'asset-syncronize'
};

export default BusFactory;
export { Bus, EventName };
