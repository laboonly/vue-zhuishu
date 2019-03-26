<template>
    <div class="book-content">
        <div class="book-content-one border-gery">
            <div class="book-info">
                <img :src="'http://statics.zhuishushenqi.com'+ this.bookrelated.cover"/>
                <div class="book-title">
                    <h1>{{ this.bookrelated.title }}</h1>
                    <p>{{ this.bookrelated.author }} | {{ this.bookrelated.cat }} | {{ this.bookrelated.wordCount }}</p>
                </div>
            </div>
            <div class="book-read">
                <button class="jion-button">加入书架</button>
                <button class="read-button" @click="read">立即阅读</button>
            </div>
        </div>
        <div class="book-content-two border-gery">
            <div class="two-p">
                <p class="color-gery">追人气</p>
                <p>{{ this.bookrelated.latelyFollower }}</p>
            </div>
            <div class="two-p">
                <p class="color-gery">读者留存率</p>
                <p>{{ this.bookrelated.retentionRatio }}%</p>
            </div>
            <div class="two-p">
                <p class="color-gery">日更新字数/天</p>
                <p>{{ this.bookrelated.serializeWordCount }}</p>
            </div>
        </div>
        <div class="book-content-intro border-gery">
            <p>{{ this.bookrelated.longIntro }}</p>
        </div>
        <div class="book-last-chapter border-gery">
            <p class="color-gery">目录</p>
            <p class="color-gery">{{ this.bookrelated.updated }}</p>
            <p class="color-gery">{{ this.bookrelated.lastChapter }}</p>
        </div>
        <div class="book-content-comments">
            <h2>热门评论</h2>
            <div class="comments-content " >
                <div class="comments-card border-gery" v-for="item in this.comments" :key="item.id">
                    <img :src="'http://statics.zhuishushenqi.com'+ item.author.avatar">
                    <div class="comments-card-p">
                        <div class="card-p1">
                            <p class="color-gery">{{ item.author.nickname }}</p>
                            <p>{{ item.updated }}</p>
                        </div>
                        <p>{{ item.title }}</p>
                        <p class="color-gery">{{ item.content }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="recommend">
            <div class="recommend-title">
                <h2>同类推荐</h2>
                <p>更多</p>
            </div>
            <div class="recommend-content">
                <div class="recommend-card" v-for="item in this.commend" :key="item._id">
                    <img :src="'http://statics.zhuishushenqi.com' + item.cover" />
                    <p>{{ item.title }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getBookRelated, getcomment, getreCommend } from '@/api/index'
export default {
  data () {
    return {
      bookid: this.$route.params.bookid,
      bookrelated: {},
      comments: [],
      sort: 'updated',
      type: 'normal',
      start: '21',
      limit: '20',
      commend: ''
    }
  },
  created () {
    this.GetBookRelated(this.bookid)
    this.Getcomment(this.bookid)
    this.GetreCommend(this.bookid)
    console.log('bookid:' + this.bookid)
  },
  methods: {
    GetBookRelated (bookid) {
      getBookRelated(bookid).then(response => {
        this.bookrelated = response
        console.log(response)
      })
    },
    Getcomment (bookid) {
      getcomment(bookid).then(response => {
        this.comments = response.posts
        console.log(this.comments)
        console.log(response.posts)
      })
    },
    GetreCommend (bookid) {
      getreCommend(bookid).then(response => {
        this.commend = response.books
        console.log(response)
      })
    },
    read () {
      this.$router.push({name: 'read', params: { id: this.bookid, booktitle: this.bookrelated.title }})
    }
  }
}
</script>

<style lang="less">
    p {
        margin: 0;
        word-break: break-word;
    }
    .color-gery {
        color: #8f8f94;
    }
    .book-content {
        width: 100%;
        font-size: 14px;
        .border-gery {
            &:after {
                position: absolute;
                right: 0;
                left: 0;
                bottom: 0;
                height: 1px;
                content: "";
                -webkit-transform: scaleY(.5);
                transform: scaleY(.5);
                background-color: #c8c7cc;
            }
        }
        .book-content-one {
            position: relative;
            padding: 11px 15px;

        }
        .book-info {
            display: flex;
            text-align: left;
            img {
                max-width: 64px;
                height: 100px;
                margin-right: 10px;
            }
            .book-title {
                h1 {
                    margin: 0;
                    font-size: 14px;
                }
                p {
                    margin: 0;
                    font-size: 12px;
                    color: #666;
                }
            }
        }
        .book-read {
            display: flex;
            justify-content: space-around;
            padding: 15px 10px 10px;
            button {
                padding: 8px 33px;
                font-size: 14px;
                text-align: center;
                font-weight: 400;
                line-height: 1.42;
                border-radius: 4px;
            }
            .jion-button {
                color: #00c98c;
                border: 1px solid #00c98c;
                background-color: #fff;
            }
            .read-button {
                color: #fff;
                background-color: #00c98c;
            }
        }
        .book-content-two {
            display: flex;
            justify-content: space-around;
            font-size: 14px;
            text-align: center;
            padding: 10px 10px 10px 10px;
            position: relative;
        }
        .book-content-intro {
            position: relative;
            height: 59px;
            p {
                height: 59px;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            padding: 10px 10px 10px 10px;
        }
        .book-last-chapter {
            display: flex;
            justify-content: space-around;
            padding: 10px 10px 10px 10px;
            position: relative;
            font-size: 12px;
        }
        .book-content-comments {
            padding: 11px 15px;

            h2 {
                font-size: 14px;
                margin: 0;
                padding-bottom: 11px;
            }
            .comments-content {
                position: relative;
                max-height: 400px;
                overflow-y: auto;
                .comments-card {
                    display: flex;
                    position: relative;
                    font-size: 12px;
                    padding: 11px 0;
                    img {
                        width: 42px;
                        height: 42px;
                        margin-right: 10px;
                    }
                    .comments-card-p {
                        width: 100%;
                    }
                    .card-p1 {
                        display: flex;
                        justify-content: space-between;
                    }
                }
            }
        }
        .recommend {
            position: relative;
            width: 100%;
            .recommend-title {
                display: flex;
                justify-content: space-around;
                h2 {
                    font-size: 14px;
                    margin: 0;
                    padding-bottom: 11px;
                }
                p {

                }
            }
            .recommend-content {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-around;
                text-align: center;
                .recommend-card {
                    margin-top: 10px;
                    margin-left: 14px;
                    img {
                        width: 80px;
                        height: auto;
                    }
                }
            }
        }
    }
</style>
