<template>
    <div class="read-content" @click="getshow" >

      <div class="readheader" v-if="datashow">
        <div @click="getback">
            <svg-icon icon-class="back"></svg-icon>
        </div>
         <p>{{ booktitle }}</p>
         <p class="switch" @click="switchbook">换源</p>
      </div>
      <div class="readbottom" v-if="datashow">
        <div class="bottom-content">
          <div class="colors" style="background-color: rgb(196, 179, 149);">
          </div>
          <div class="colors" style="background-color: rgb(195, 212, 230);">
          </div>
          <div class="colors" style="background-color: rgb(200, 232, 200);">
          </div>
          <div class="colors" style="background-color: rgb(248, 201, 201);">
          </div>
          <div class="colors" style="background-color: rgb(62, 67, 73);">
          </div>
        </div>
        <div class="bottom-content1">
          <mt-button size="small">A+</mt-button>
          <mt-button size="small" @click="switchbook">换源</mt-button>
          <mt-button size="small">A-</mt-button>
        </div>
        <div class="bottom-content2">
          <mt-button size="small" @click="preChapter">上一章</mt-button>
          <mt-button size="small" @click="directoryshow = true">目录</mt-button>
          <mt-button size="small" @click="nextChapter">下一章</mt-button>
        </div>
      </div>
      <div class="switch-content" v-show="datahy" @click="switchbook">
        <div class="switch-content-center">
            <div class="sy-list" @click="Getsource( item._id )" v-for=" item in this.sy_list" :key="item._id">
              <p>{{ item.name }}</p>
              <p>最后更新{{ item.lastChapter }}</p>
            </div>
        </div>
      </div>
      <div class="read-body">
          <h1>{{contitle}}</h1>
          <div  v-for="(item,i) in con.cpContent" :key="i">
            <p v-html="item"></p>
          </div>
          <div class="t-page">
              <p class="t-page-buttom" @click="preChapter">上一章</p>
              <p class="t-page-buttom" @click="nextChapter"> 下一章</p>
          </div>
      </div>
      <div v-if="directoryshow">
          <directory :directoryData="directorydata" :booktitle="booktitle" v-on:selectchapter="selectChapter"></directory>
      </div>

    </div>
</template>

<script>
import { getBookSources, getBookChapters, getChapters } from '@/api/index'
import directory from '@/components/directory'
export default {
  components: {
    directory
  },
  data () {
    return {
      bookid: this.$route.params.id,
      booktitle: this.$route.params.booktitle,
      sy_list: '',
      datashow: false,
      datahy: false,
      readbody: '',
      sourceid: '',
      link: '',
      con: '',
      contitle: '',
      nowChapters: 0,
      directorydata: '',
      directoryshow: false
    }
  },
  created () {
    console.log(this.bookid)
    this.GetBookSources(this.bookid)
  },
  methods: {
    GetBookSources (bookid) { // 获取书源列表
      getBookSources(bookid).then(response => {
        this.sy_list = response
        this.sourceid = response[0]._id
        console.log(this.sourceid)
        this.GetBookChapters(this.sourceid)
        console.log(response)
      })
    },
    switchbook () {
      this.datahy = !this.datahy
    },
    Getsource (id) {
      this.GetBookChapters(id)
    },
    GetChapters (link) {
      getChapters(link).then(response => {
        console.log(response)
        if (response.ok) {
          var datas = response.chapter
          var content = []
          content.push({
            cpContent: datas.isVip
              ? ['vip章节，请点击换源即可免费阅读']
              : datas.cpContent ? datas.cpContent.split('\n') : datas.body.split('\n')
          })
          this.contitle = datas.title
          this.con = content[0]
        }
      })
    },
    GetBookChapters (id) { // 根据书源id获取章节列表
      getBookChapters(id).then(response => {
        this.directorydata = response.chapters
        this.link = encodeURIComponent(response.chapters[this.nowChapters].link)
        this.GetChapters(this.link)
        console.log(response)
      })
    },
    getback () {
      console.log(111)
      this.$router.go(-1)
    },
    getshow () {
      this.datashow = !this.datashow
    },
    nextChapter () {
      this.nowChapters = this.nowChapters + 1
      this.GetBookChapters(this.sourceid)
    },
    preChapter () {
      if (this.nowChapters >= 0) {
        this.nowChapters = this.nowChapters - 1
        this.GetBookChapters(this.sourceid)
      }
    },
    selectChapter (link) {
      if (link.chapterlink) {
        this.link = encodeURIComponent(link.chapterlink)
        this.GetChapters(this.link)
      }
      this.directoryshow = !this.directoryshow
    }
  }
}
</script>

<style lang="less">
    .read-content {
        overflow-y: auto;
        z-index: 101;
        position: absolute;
        top: 0;
        height: 100%;
        width: 100%;
        background-color: #c4b395;
        line-height: 24px;
        letter-spacing: 2px;
        .svg-icon {
            color: #fff;
            line-height: 35px;
            font-size: 24px!important;
            width: 30px;
            height: 30px;
            vertical-align: middle;
        }
        .switch-content {
          position: fixed;
          left: 0;
          top: 0;
          bottom: 0;
          right: 0;
          background-color: rgba(0,0,0,.7);
          .switch-content-center {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            width: 80%;
            max-height: 60%;
            overflow-y: auto;
            background-color: #fff;
            padding: 10px 10px;
            .sy-list {
              p {
                margin: 0;
              }
              border-bottom: 1px solid grey;
            }
          }

        }
        .readheader {
          position: fixed;
          top: 0;
          width: 100%;
          display: flex;
          justify-content: space-between;
          background-color: rgba(0,0,0,.5);
          height: 35px;
          padding: 0 6px;
          p {
            line-height: 35px;
            color: #fff;
            font-size: 12px;
            margin: 0;
          }
          .switch {
            margin-right: 12px;
          }
        }
        .readbottom {
          position: fixed;
          bottom: 0;
          width: 100%;
          background-color: rgba(0,0,0,.5);
          .colors {
            width: 30px;
            height: 30px;
            border-radius: 50%;
          }
          .bottom-content {
            display: flex;
            justify-content: space-around;
            padding: 10px 0;
          }
          .bottom-content1 {
            display: flex;
            justify-content: space-around;
            padding: 10px 0;
          }
          .bottom-content2 {
            display: flex;
            justify-content: space-around;
            padding: 10px 0;
          }
        }
        .read-body {
          padding: 20px 20px;
          h1 {
            font-size: 20px;
            color: #222;
          }
          .t-page {
            display: flex;
            width: 100%;
            justify-content: space-around;
            margin-top: 20px;
            .t-page-buttom {
                border: 1px solid #ef4f4f;
                background-color: transparent;
                color: #ef4f4f;
                font-size: 14px;
                border-radius: 4px;
                padding: 0 12px;
            }
          }
        }
    }
</style>
