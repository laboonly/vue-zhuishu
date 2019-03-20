<template>
  <div id="app">
    <!--header -->
    <mt-header title="Vue-Book">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <div class="vue-content">
      <router-view></router-view>
    </div>
    <!--footer -->
    <mt-tabbar >
      <mt-tab-item>
        <router-link to="/home">
          <mt-button>首页</mt-button>
        </router-link>
      </mt-tab-item>
      <mt-tab-item>
        <router-link to="/bookcase">
          <mt-button>书架</mt-button>
        </router-link>
      </mt-tab-item>
      <mt-tab-item>
        <router-link to="/class">
          <mt-button>分类</mt-button>
        </router-link>
      </mt-tab-item>
      <mt-tab-item>
        <router-link to="/rank">
          <mt-button>排行</mt-button>
        </router-link>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
  body {
    margin: 0;
  }
  .vue-content {
    height: 100%;
    overflow: scroll;
    position: fixed;
  }
</style>
