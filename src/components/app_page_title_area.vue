<template>
  <div class="page-title-area">
    <div class="page-title-area-content">
      <div class="page-title-area-content-title">
        {{
          translate
            ? title.toUpperCase()
            : $t(`pageTitleArea.${title}`).toUpperCase()
        }}
      </div>
      <div class="page-title-area-content-path changeDirection">
        <el-breadcrumb>
          <el-breadcrumb-item
            v-for="items in data"
            :key="items"
            :to="{ path: '/' + items }"
            >{{
              items == ''
                ? $t('pageTitleArea.home')
                : $t(`pageTitleArea.${items}`)
            }}</el-breadcrumb-item
          >
        </el-breadcrumb>
      </div>
    </div>
  </div>
</template>
<script>
import store from '@/store'
export default {
  name: 'app_page_title_area',
  props: ['currentPath', 'title', 'translate'],
  data() {
    return {
      data: [],
    }
  },
  computed: {
    language: () => store.state.user.language,
  },
  mounted() {
    for (let i = 0; i < this.currentPath.length; i++) {
      this.data.push(this.currentPath[i])
    }
  },
  watch: {
    language: {
      handler: function (search) {
        console.log(search)
        const elems2 = document.getElementsByClassName('changeDirection')

        for (let elem of elems2) {
          elem.style.direction = 'ltr'
        }
      },
      deep: true,
    },
  },
}
</script>
<style lang="less" scoped>
.page-title-area {
  width: 100%;
  // height: 215px;
  margin-bottom: 120px;
  padding: 50px 0px;
  background-size: 100% 100%;
  background-image: url('../assets/bg.jpg');
  &-content {
    max-width: 1100px;
    margin: 0px auto;
    padding-left: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    &-title {
      color: #231f40;
      font-size: 40px;
      font-weight: 700;
      margin-bottom: 20px;
    }
    &-path {
      font-size: 14px;
      color: #6f6b80;
      direction: ltr;
      unicode-bidi: embed;
    }
  }
}
@media @mobile {
  .page-title-area {
    width: 100%;
    // height: 215px;
    margin-bottom: 50px;
    padding: 30px 0px;
    &-content {
      padding-left: 20px;
      &-title {
        color: #231f40;
        font-size: 30px;
        font-weight: 700;
        margin-bottom: 10px;
      }
      &-path {
        font-size: 13px;
        direction: ltr;
        unicode-bidi: embed;
      }
    }
  }
}
</style>
