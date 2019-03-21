<template>
    <div class="book-list-content">
        <router-link :to="{ name: 'book', params:{ bookid: item._id }}" class="book-list-card" v-for="item in booklist.books" :key="item.id">

            <img :src="'http://statics.zhuishushenqi.com'+ item.cover"/>
            <div class="booklist-p">
                <span class="title">{{ item.title}}</span>
                <div class="author-save">
                    <p class="author">{{ item.author }}</p>
                    <span class="save">{{ item.retentionRatio}}%读者留存</span>
                </div>
                <p class="short-intro">{{ item.shortIntro }}</p>
            </div>
            <!-- <div class="badge">
                <mt-badge size="normal">10</mt-badge>
                <mt-badge size="normal">10</mt-badge>
                <mt-badge size="normal">10</mt-badge>
            </div> -->
        </router-link>
    </div>
</template>

<script>
export default {
  props: ['booklist'],
  created () {
    console.log(this.booklist)
  }
}
</script>

<style lang="less">
    a {
        text-decoration: none;
    }
    .book-list-card {
        padding: 11px 15px;
        display: flex;
        position: relative;
        &:before {
            position: absolute;
            right: 0;
            left: 0;
            top: 0;
            height: 1px;
            content: "";
            -webkit-transform: scaleY(.5);
            transform: scaleY(.5);
            background-color: #c8c7cc;
        }
        img {
            max-width: 64px;
            height: 100px;
            margin-right: 10px;
        }
        .booklist-p {
            height: 100px;
            position: relative;
            p {
                line-height: 1;
                margin-top: 5px;
                margin-bottom: 5px;

            }
            .title {
                    color: #333;
                    font-size: 14px;
                }
            .author-save {
                display: flex;
                justify-content: space-between;
                .author {
                    font-weight: 400;
                    font-size: 14px;
                    color: #8f8f94;
                    white-space: nowrap;
                }
                .save {
                    color: #00c98c;
                    padding-right: 5px;
                    font-size: 12px;
                }
            }
            .short-intro {
                height: 48px;
                font-size: 12px;
                color: #333;
                overflow: hidden;
                word-break: break-all;
                text-overflow: ellipsis;
            }
        }
        .badge {
            width: 17%;
        }

    }
</style>
