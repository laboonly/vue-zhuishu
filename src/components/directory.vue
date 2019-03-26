<template>
    <div class="directory-content">
        <div class="directory-header">
            <p @click="selectchapter(null)"><svg-icon icon-class="back"></svg-icon>返回</p>
            <p>{{ booktitle }}</p>
        </div>
        <div class="directory-list">
            <div class="directory-list-h">
                <p>共{{ directoryData.length }}章</p>
                <p @click="reverse">倒叙</p>
            </div>
            <ul >
                <li v-for="item in directoryData" @click="selectchapter(item.link)" :key="item.id">{{ item.title }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  props: ['directoryData', 'booktitle'],
  data () {
    return {

    }
  },
  created () {
    console.log('directorydata:', this.directorydata)
  },
  methods: {
    reverse () {
      this.directoryData.reverse()
    },
    selectchapter (link) {
      this.$emit('selectchapter', { 'chapterlink': link })
    }
  }
}
</script>

<style lang="less">
    .directory-content{
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow-y: auto;
        z-index: 9999;
        background-color: #fff;
        .directory-header {
            display: flex;
            justify-content: space-around;
            background-color: #00c98c;
            height: 30px;
            color: #fff;
        }
        .directory-list {
            .directory-list-h {
                display: flex;
                justify-content: space-around;
                color: #00bc79;
                font-size: 15px;
            }
        }
        ul {
            padding: 10px 10px;
            margin: 0;
            li {
                list-style: none;
                line-height: 40px;
                border-bottom: 1px solid #c8c7cc;
                font-size: 13px;
                color: #333;
            }
        }

    }
</style>
