<template>
    <div class="vue-content">
        <!-- header -->
        <mt-header title="Vue-Book">
            <router-link to="/" slot="left">
                <mt-button @click="getback" icon="back">返回</mt-button>
            </router-link>
        </mt-header>
        <router-view></router-view>
        <!--footer -->
        <mt-tabbar>
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
  data () {
    return {

    }
  },
  methods: {
    getback () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="less">
    .mint-tabbar  {
        position: fixed;
    }
    .vue-content {
    margin-bottom: 62px;
    height: 100%;
  }
</style>
