<template>
  <div id="app">
    <mt-header title="标题过长会隐藏后面的内容啊哈哈哈哈">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <mt-tabbar v-model="selected">
    <mt-tab-item id="外卖">
      外卖
    </mt-tab-item>
    <mt-tab-item id="订单">
      订单
    </mt-tab-item>
    <mt-tab-item id="发现">
      发现
    </mt-tab-item>
    <mt-tab-item id="我的">
      我的
    </mt-tab-item>
  </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
