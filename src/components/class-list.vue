<template>
    <div>
        <div class="class-list-content" v-for="cate in classlist" :key="cate.title">
            <h2>{{ cate.title }}</h2>
            <div class="class-male">
                <div class="class-list-button" v-for="item in cate.catList" :key="item.name">
                    <router-link  :to="{ name:'clylist',params:{major:item.name,gender:cate.gender}}" >{{item.name}}<br/>{{item.bookCount}}本</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: ['classlist']
}
</script>

<style lang="less">
    .class-list-content {
        h2 {
            border-left: 2px solid #00C98C;
            padding-left: 10px;
            color: #333;
            font-size: 16px;
            margin: 5px 15px 5px 3px;
        }
        .class-male {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            .class-list-button {

                width: 29%;
                border: 1px solid #00c98c;
                border-radius: 15px;
                text-align: center;
                font-size: 13px;
                padding: 2px 1px;
                margin: 2%;
                a {
                    color: #00c98c!important;
                }
            }
        }

    }
</style>
