<template>
    <div class="search-content">
        <booklist :booklist="bookdata"></booklist>
    </div>
</template>

<script>
import booklist from '@/components/book-list'
import { getSearch } from '@/api/index'
export default {
  components: {
    booklist
  },
  data () {
    return {
      keyword: this.$route.params.keyword,
      bookdata: ''
    }
  },
  created () {
    this.GetSearch(this.keyword)
  },
  methods: {
    GetSearch (keyword) {
      getSearch(keyword).then(response => {
        console.log(response)
        this.bookdata = response
      })
    }
  }
}
</script>

<style lang="less">

</style>
