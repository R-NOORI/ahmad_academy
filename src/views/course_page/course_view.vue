<template>
  <div class="course-page">
    <AppPageTitleArea
      :currentPath="this.$route.fullPath.split('/')"
      :title="this.$route.name"
    />
    <div class="course-page-content">
      <div class="search-content">
        <p>Showing 1-6 Of 15 Results</p>
        <div class="search-content-field">
          <input placeholder="Name*" />
          <font-awesome-icon
            class="search-content-field-icon"
            :icon="['fas', 'magnifying-glass']"
          />
        </div>
      </div>
      <div class="course-list">
        <CourseCard @click="this.$router.push('/course/course-details')" />
        <CourseCard @click="this.$router.push('/course/course-details')" />
        <CourseCard @click="this.$router.push('/course/course-details')" />
        <CourseCard @click="this.$router.push('/course/course-details')" />
        <CourseCard @click="this.$router.push('/course/course-details')" />
        <CourseCard @click="this.$router.push('/course/course-details')" />
      </div>
      <el-pagination
        style="margin-top: 50px"
        background="red"
        color="red"
        layout="prev, pager, next"
        :total="1000"
      />
    </div>
  </div>
</template>

<script>
import CourseCard from './components/course_card.vue'
import AppPageTitleArea from '@/components/app_page_title_area.vue'
export default {
  name: 'course-page',
  components: { CourseCard, AppPageTitleArea },
  data() {
    return {}
  },
}
</script>

<style scoped lang="less">
.course-page {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &-content {
    background-color: #ffff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1080px;
    padding: 0px 20px;

    .search-content {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 40px;
      width: 100%;
      .search-content-field {
        background-color: #f5f5f5;
        padding: 0px 30px;
        font-size: 14px;
        height: 60px;
        width: 200px;
        border-radius: 10px;
        font-family: inherit;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        &-icon {
          font-size: medium;
        }
        input {
          background-color: transparent;
          outline: none;
          border: none;
          font-size: 14px;
          width: 100%;
        }
      }
    }
    .course-list {
      display: grid;
      grid-template-columns: auto auto auto;
      grid-gap: 1em;
    }
  }
}
</style>
