<template>
    <div class="header">
      <div
        class="header-item"
        @click="onChangeFragment(item, index)"
        v-for="(item, index) in toolBarData"
        :key="index"
      >
        <img class="item-img" :src="[index === selectIndex ? item.hIcon : item.nIcon]">
        <p class="item-name" :class="{'tool-bar-item-name-h' : index === selectIndex}">{{item.name}}</p>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Header',
  data: function () {
    return {
      toolBarData: [
        {
          // 默认图片
          nIcon: require(),
          // 高亮图片
          hIcon: require(),
          // 名称
          name: '首页',
          // 组件名称
          componentName: 'home'
        },
        {
          // 默认图片
          nIcon: require(),
          // 高亮图片
          hIcon: require(),
          // 名称
          name: '数据入库',
          // 组件名称
          componentName: 'shopping'
        },
        {
          // 默认图片
          nIcon: require(),
          // 高亮图片
          hIcon: require(),
          // 名称
          name: '服务共享',
          // 组件名称
          componentName: 'my'
        },

      ],
      selectItemIndex: 0
    }
  },
  methods: {
    onChangeFragment: function (item, index) {
      this.selectIndex = index
      this.$emit('onChangeFragment', item.componentName)
    }
  }
}
</script>

<style scoped>
  .header{
    width: 100%;
    height: 100%;
  }


</style>
