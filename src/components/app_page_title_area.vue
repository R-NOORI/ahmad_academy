<template>
  <div class="page-title-area">
    <div class="page-title-area-content">
      <div class="page-title-area-content-title">
        {{ currentPath.toUpperCase() }}
      </div>
      <div class="page-title-area-content-path">
        <el-breadcrumb>
          <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
          <el-breadcrumb-item>{{ currentPath }}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'app_page_title_area',
  props: ['currentPath'],
  data() {
    return {}
  },
}
</script>
<style lang="less" scoped>
.page-title-area {
  width: 100%;
  // height: 215px;
  background-color: red;
  margin-bottom: 120px;
  padding: 50px 0px;
  background-size: 100% 100%;
  background-image: url('../assets/bg.jpg');
  &-content {
    text-align: left;
    max-width: 1100px;
    margin: 0px auto;
    padding-left: 20px;
    &-title {
      color: #231f40;
      font-size: 40px;
      font-weight: 700;
      margin-bottom: 20px;
    }
    &-path {
      font-size: 14px;
      color: #6f6b80;
    }
  }
}
</style>
