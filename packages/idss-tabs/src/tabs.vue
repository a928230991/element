<template>
  <div class="tabs">
    <span class="tab-prev" v-if="showSwitch" @click="prev">
      <idss-icon-svg name="arrow_left"></idss-icon-svg>
    </span>
    <div class="tab-container">
      <div
        class="tab"
        ref="tab"
        :style="`transform: translateX(-${offset}px);`"
      >
        <div
          :key="item.key"
          class="tab-item idss-text-overflow"
          v-for="(item, index) in data"
          @click="handleClick(index)"
          :class="item.key === value ? 'active' : ''"
        >
          {{ item.value }}
        </div>
      </div>
    </div>
    <span class="tab-next" v-if="showSwitch" @click="next">
      <idss-icon-svg name="arrow_right"></idss-icon-svg>
    </span>
  </div>
</template>
<script>
import BusFactory, { EventName } from './bus';
export default {
  name: 'idssTabs',
  props: {
    value: [String, Number],
    /**
     * tabs数据源，示例数据 [{ key: '', value: '' }]
     * key: v-model绑定的值
     * value: 显示的中文字段值
     */
    data: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      showSwitch: false, // 显示切换按钮，默认false
      offset: 0 // 偏移量
    };
  },
  watch: {
    // value改变时会触发change事件
    value: {
      handler(val) {
        this.$emit('change', val);
      },
      immediate: true
    }
  },
  methods: {
    handleClick(index) {
      const item = this.data[index];
      if (item.key !== this.value) {
        this.$emit('input', item.key);
        this.showSwitch && this.rollingVisible(index);
      }
    },
    // 由于滚动，点击元素可能显示不完整，该方法矫正偏移量，保证点击元素完整显示
    rollingVisible(index) {
      const tabRef = this.$refs.tab;
      const tabRect = tabRef.getBoundingClientRect();
      const currentItemRect = tabRef.children[index].getBoundingClientRect();
      const offset = currentItemRect.left - tabRect.left;
      const diff = 4; // 3px padding + 1px border
      // 开始位置未显示完整
      if (this.offset > offset) {
        this.offset = offset - diff;
      }
      // 结束位置未显示完整
      if (this.offset + this.elWidth - offset < currentItemRect.width) {
        this.offset = offset + currentItemRect.width - this.elWidth + diff;
      }
    },
    // 计算是否要显示左右箭头
    calcTab() {
      const elRect = this.$el.getBoundingClientRect();
      const tabRect = this.$refs.tab.getBoundingClientRect();
      // tab总宽度大于容器宽度时显示左右箭头
      if (tabRect.width > elRect.width) {
        // 容器宽度
        this.elWidth = elRect.width - 40; // 40为左右margin
        // 总页数
        this.totalNum = Math.ceil(tabRect.width / this.elWidth);
        // 最后一页剩余偏移量
        this.remainX = tabRect.width % this.elWidth;
      }
      this.showSwitch = tabRect.width > elRect.width;
      // 滚动到v-model指定位置
      let index = this.data.findIndex((item) => item.key === this.value);
      if (index === -1) {
        this.handleClick(0);
      } else {
        this.rollingVisible(index);
      }
      // 设置对应的pageNum
      this.pageNum = Math.ceil(this.offset / this.elWidth) + 1;
    },
    prev() {
      // 当前页码为第一页时，可能存在矫正点击元素位置造成偏移的情况，故需要重新计算偏移量
      if (this.pageNum === 1) {
        this.offset = 0;
      } else {
        this.offset = (this.pageNum - 2) * this.elWidth;
        this.pageNum--;
      }
    },
    next() {
      // 当前页码等于总页数时，可能存在矫正点击元素位置造成偏移的情况，故需要重新计算偏移量
      if (this.pageNum === this.totalNum) {
        this.offset = (this.pageNum - 2) * this.elWidth + this.remainX;
        return;
      }
      if (this.pageNum + 1 === this.totalNum) {
        this.offset = (this.pageNum - 1) * this.elWidth + this.remainX;
      } else {
        this.offset = this.pageNum * this.elWidth;
      }
      this.pageNum++;
    }
  },
  mounted() {
    const bus = BusFactory(this);
    bus.$on(EventName.WINDOW_RESIZE, () => {
      this.calcTab();
    });
    // 监听data和value变化，防止data和value同时变化时重复调用
    // this.$watch(
    //   () => ({ data: this.data, value: this.value }),
    //   async () => {
    //     await this.$nextTick();
    //     this.calcTab();
    //   },
    //   { immediate: true }
    // );
  }
};
</script>
<style lang="scss" scoped>
.tabs {
  --guan-gray-5: #c5cad1;
  --guan-gray-10: #1f222b;
  --guan-gray-4-a60: rgba(209, 214, 222, 0.6);
  --color-font-1: var(--guan-gray-10);
  --font-size-default: var(--font-size-6);
  position: relative;

  .tab-prev,
  .tab-next {
    top: 0;
    cursor: pointer;
    line-height: 32px;
    position: absolute;

    .idss-svg-icon {
      width: 16px;
      height: 32px;
      fill: var(--guan-gray-5);
    }
  }

  .tab-prev {
    left: 0;
  }

  .tab-next {
    right: 0;
  }

  .tab-prev + .tab-container {
    margin: 0 20px;
  }

  .tab-container {
    overflow: hidden;
  }

  .tab {
    padding: 3px;
    cursor: pointer;
    border-radius: 4px;
    display: inline-flex;
    transition: transform 0.3s;
    border: 1px solid var(--guan-gray-4-a60);
  }

  .tab-item {
    padding: 0 10px;
    max-width: 160px;
    line-height: 24px;
    border-radius: 2px;
    white-space: nowrap;
    color: var(--color-font-1);
    font-size: var(--font-size-default);

    &.active {
      background: var(--blue-5);
      color: var(--color-font-5);
    }
  }
}
</style>
