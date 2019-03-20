<template>
    <div class="clylist-content">
        <booklist :booklist="boolistdata"></booklist>
    </div>
</template>

<script>
import booklist from '@/components/book-list'
import { getclylist } from '@/api/index'

export default {
  components: {
    booklist
  },
  data () {
    return {
      boolistdata: [],
      gender: this.$route.params.gender,
      major: this.$route.params.major,
      type: 'hot',
      minor: '',
      start: 0,
      limit: 15
    }
  },
  created () {
    this.Getclylist(this.gender, this.type, this.major, this.minor, this.start, this.limit)
  },
  methods: {
    Getclylist (gender, type, major, minor = '', start = 0, limit = 20) {
      getclylist(gender, type, major, minor = '', start = 0, limit = 20).then(response => {
        this.boolistdata = response
        console.log(response)
      })
    }
  }
}
</script>

<style lang="less">

</style>
