<template>
  <div class="home-content">
    <div class="search">
      <input type="text" v-model="keyword" class="inputs"  @keyup.enter="searchbook" placeholder="请输入您要搜索的关键字">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      keyword: ''
    }
  },
  methods: {
    searchbook () {
      this.$router.push({name: 'search', params: {'keyword': this.keyword}})
    }
  }
}
</script>

<style lang="less">
  .home-content{
    padding: 10px 10px;
    .search {
      position: relative;
      width: 100%;
      .inputs{
        width: 100%;
        margin-top: 5px;
        background-color: #fff;
        border: 1px solid #999;
        padding-top: 10px;
        padding-bottom: 10px;
      }
    }
  }
</style>
