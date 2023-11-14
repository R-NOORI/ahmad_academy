<template>
  <div class="course-page">
    <AppPageTitleArea
      :currentPath="this.$route.fullPath.split('/')"
      :title="this.$route.name"
    />
    <div
      class="course-page-content"
      v-loading="is_loading"
      element-loading-text="Loading..."
      :element-loading-svg="svg"
      element-loading-svg-view-box="-10, -10, 50, 50"
    >
      <div class="search-content">
        <p>Total {{ total_records }} courses</p>
        <div class="search-content-field">
          <input placeholder="Name*" v-model="search_value" />
          <font-awesome-icon
            class="search-content-field-icon"
            :icon="['fas', 'magnifying-glass']"
          />
        </div>
      </div>
      <div class="course-list">
        <CourseCard
          @click="
            this.$router.push(
              `/course/course-details/${item.id}/${item.instructor_id}`
            )
          "
          v-for="(item, index) in search_value == '' || search_value == null
            ? courses
            : searchCourseValue"
          :key="index"
          :courseImageLink="item.image_link"
          :courseTitle="item.title"
          :lessons="item.lessons"
          :duration="item.duration"
          :courseNewPrice="item.new_fees"
          :courseOldPrice="item.old_fees"
        />
      </div>
      <el-pagination
        v-show="search_value == '' ? true : false"
        v-model:current-page="current_page"
        style="margin-top: 50px"
        background
        layout="prev, pager, next"
        :default-page-size="per_page"
        :total="total_records"
        @next-click="getNextCourse"
        @prev-click="getPreCourse"
        :hide-on-single-page="true"
      />
      <div class="course-list" v-show="search_value == '' ? false : true">
        <CourseCard
          v-for="(item, index) in searchCourseValue"
          :key="index"
          @click="
            this.$router.push(
              `/course/course-details/${item.id}/${item.instructor_id}`
            )
          "
          :courseImageLink="item.image_link"
          :courseTitle="item.title"
          :lessons="item.lessons"
          :duration="item.duration"
          :courseNewPrice="item.new_fees"
          :courseOldPrice="item.old_fees"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { db } from '@/firebase/config'
import CourseCard from './components/course_card.vue'
import AppPageTitleArea from '@/components/app_page_title_area.vue'
export default {
  name: 'course-page',
  components: { CourseCard, AppPageTitleArea },
  data() {
    return {
      svg: `
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
      `,
      is_loading: true,
      search_value: '',
      courses: [],
      all_courses: [],
      total_records: 0,
      current_page: 1,
      per_page: 6,
    }
  },
  async mounted() {
    await this.getAllCourse()
    await this.getCourse()
  },

  computed: {
    searchCourseValue: function () {
      return this.all_courses.filter((value) => {
        return value.title.toLowerCase().match(this.search_value.toLowerCase())
      })
    },
  },
  methods: {
    async getAllCourse() {
      try {
        var citiesRef = db.collection('course').orderBy('regiser_date')
        var res = await citiesRef.get()
        this.total_records = res.docs.length
        var items = []
        res.forEach((doc) => {
          items.push({
            ...doc.data(),
            id: doc.id,
          })
        })
        this.all_courses = items
      } catch (error) {
        console.log('something went wrong', error)
      }
    },
    async getCourse() {
      try {
        var citiesRef = db
          .collection('course')
          .orderBy('regiser_date')
          .limit(this.per_page)
        var res = await citiesRef.get()
        var items = []
        res.forEach((doc) => {
          items.push({
            ...doc.data(),
            id: doc.id,
          })
        })
        this.courses = items
        this.is_loading = false
      } catch (error) {
        this.is_loading = false
        console.log('something went wrong', error)
      }
    },
    async getNextCourse() {
      try {
        var citiesRef = db
          .collection('course')
          .orderBy('regiser_date')
          .startAfter(this.courses[this.courses.length - 1].regiser_date)
          .limit(this.per_page)
        var res = await citiesRef.get()
        var items = []
        res.forEach((doc) => {
          items.push({
            ...doc.data(),
            id: doc.id,
          })
        })
        if (items.length != 0) {
          this.courses = items
        } else {
          console.log('no more data')
        }
      } catch (error) {
        console.log('something went wrong', error)
      }
    },
    async getPreCourse() {
      try {
        var citiesRef = db
          .collection('course')
          .orderBy('regiser_date')
          .endBefore(this.courses[0].regiser_date)
          .limitToLast(this.per_page)
        var res = await citiesRef.get()
        var items = []
        res.forEach((doc) => {
          items.push({
            ...doc.data(),
            id: doc.id,
          })
        })
        if (items.length != 0) {
          this.courses = items
        } else {
          console.log('no more data')
        }
      } catch (error) {
        console.log('something went wrong', error)
      }
    },
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
