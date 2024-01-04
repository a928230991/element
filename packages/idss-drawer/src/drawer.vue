<!--
 * @Author: 范祥龙 fanxl@idss-cn.com
 * @Date: 2024-01-02 15:43:29
 * @LastEditors: 范祥龙 fanxl@idss-cn.com
 * @LastEditTime: 2024-01-02 16:02:51
 * @FilePath: /element/packages/idss-drawer/1.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <el-drawer
    class="insight-drawer"
    v-bind="attrs"
    @close="emitClose"
    :size="size"
    :title="title"
    :append-to-body="appendBody"
  >
    <div class="drawer-title" slot="title" v-if="$slots.title">
      <slot name="title"></slot>
    </div>
    <div class="drawer-body">
      <slot></slot>
    </div>
    <div class="drawer-footer" v-if="$slots.footer">
      <slot name="footer" />
    </div>
  </el-drawer>
</template>

<script>
export default {
  name: 'IdssDrawer',
  methods: {
    emitClose() {
      this.$emit('update:visible', false);
      this.$emit('close');
    }
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    size: {
      default: '80%'
    },
    appendBody: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    attrs() {
      return {
        wrapperClosable: false, // 点击遮罩层是否可以关闭 Drawer
        ...this.$attrs
      };
    }
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
.insight-drawer {
  top: 73px;
  height: calc(100% - 73px);

  ::v-deep .el-drawer__header {
    font-size: 24px;
    background: #ffffff;
    color: #333333;
    box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.16);
    padding: 16px 20px;
    height: 60px;
    margin: 0;
    position: relative;
    z-index: 1;

    .el-dialog__close {
      color: #888888;
      font-weight: bold;
    }
  }
  ::v-deep .el-drawer__body {
    background: #ffffff;
    z-index: 0;
    padding: 0;

    display: flex;
    flex-direction: column;
  }
}
.drawer-body {
  height: 0;
  overflow: auto;
  flex-shrink: 1;
  flex-grow: 1;
  padding: 16px 20px 16px 20px;
  border: 1px solid #f4f6f9;
  border-left: none;
  border-right: none;
  z-index: 0;
}
.drawer-footer {
  padding: 10px 20px;
  background-color: #fff;
  box-shadow: 0px -3px 5px 0px rgba(0, 0, 0, 0.16);
  z-index: 1;
}
</style>
