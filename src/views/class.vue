<template>
  <div class="class">
    <h2>男生:</h2>
    <div class="class-male">
      <mt-button class="class-button" v-for="item in categories.male" :key="item.name" @click="Getclass(item.name)" type="default">{{ item.name }}({{ item.bookCount}})</mt-button>
    </div>
  </div>
</template>

<script>
import { getcategories, getclass } from '@/api/index'

export default {
  data () {
    return {
      categories: []
    }
  },
  created () {
    this.Getcategories()
  },
  methods: {
    Getcategories () {
      getcategories().then(response => {
        this.categories = response
      })
    },
    Getclass (major) {
      // let data = {
      //   major: major,
      //   gender: 'male',
      //   type: 'hot',
      //   start: 0,
      //   limit: 20
      // }
      getclass(major).then(response => {
        console.log(response)
      })
    }
  }
}
</script>

<style lang="less">
  .class-male {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .class-button {
      margin-top: 20px;
    }
  }
</style>
