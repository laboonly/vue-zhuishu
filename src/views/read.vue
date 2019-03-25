<template>
    <div class="read-content" @click="popupVisible = !popupVisible">
        <!-- <mt-popup
            v-model="popupVisible"
            popup-transition="popup-fade">
            <div>
                <p>111111</p>
            </div>
        </mt-popup> -->
        <!-- <mt-popup
            v-model="popupVisible"
            position="top">
            <div>
                 <button >换源</button>
            </div>
        </mt-popup> -->
        <mt-popup
            v-model="popupVisible"
            position="bottom"
            modal="false">
            <div>
                <p>下</p>
            </div>
        </mt-popup>
    </div>
</template>

<script>
import { getBookSources, getBookChapters, getChapters } from '@/api/index'

export default {
  data () {
    return {
      bookid: this.$route.params.id,
      popupVisible: false
    }
  },
  created () {
    console.log(this.bookid)
    this.GetBookSources(this.bookid)
  },
  methods: {
    GetBookSources (bookid) {
      getBookSources(bookid).then(response => {
        console.log(response)
      })
    }
  }
}
</script>

<style lang="less">
    .read-content {
        height: 600px;
    }
</style>
