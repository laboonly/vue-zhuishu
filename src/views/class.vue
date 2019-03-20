<template>
  <div class="class-conetent">
    <classlist :classlist="categories"></classlist>
  </div>
</template>

<script>
import classlist from '@/components/class-list'
import { getcategories } from '@/api/index'

export default {
  components: {
    classlist
  },
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
        console.log(response)
        for (let [key, value] of Object.entries(response)) { // Object.entries方法返回一个数组
          let obj = null
          if (key === 'male') {
            obj = {
              title: '男生',
              gender: 'male',
              catList: value
            }
          } else if (key === 'female') {
            obj = {
              title: '女生',
              gender: 'female',
              catList: value
            }
          } else if (key === 'press') {
            obj = {
              title: '出版',
              gender: 'press',
              catList: value
            }
          }
          if (obj !== null) {
            this.categories.push(obj)
          }
        }
      })
    }
  }
}
</script>

<style lang="less">
.class-conetent{
  position: relative;
  height: 100%;
  overflow: scroll;
   padding: 0 5px;
  .class-male {

    .class-button {
      margin-top: 20px;
    }
  }
}
</style>
