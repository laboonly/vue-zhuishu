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
                <button class="read-button">立即阅读</button>
            </div>
        </div>
    </div>
</template>

<script>
import { getBookRelated } from '@/api/index'
export default {
  data () {
    return {
      bookid: this.$route.params.bookid,
      bookrelated: {}
    }
  },
  created () {
    this.GetBookRelated(this.bookid)
  },
  methods: {
    GetBookRelated (bookid) {
      getBookRelated(bookid).then(response => {
        this.bookrelated = response
        console.log(response)
      })
    }
  }
}
</script>

<style lang="less">
    .book-content {
        width: 100%;
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
    }
</style>
