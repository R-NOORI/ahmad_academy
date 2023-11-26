<template>
  <div
    v-loading="is_loading"
    element-loading-text="Loading..."
    :element-loading-svg="svg"
    element-loading-svg-view-box="-10, -10, 50, 50"
    class="loading-div"
    v-if="is_loading"
  ></div>
  <div class="course-details-page" v-else>
    <AppPageTitleArea
      :currentPath="path_value.split('/')"
      :title="course_title"
    />
    <div class="course-img">
      <img src="@/assets/about-page/image_5.png" />
    </div>
    <div class="course-info">
      <div class="course-info-summary">
        <div class="instructor-info">
          <img :src="instructor.image_link" />
          <span>{{ instructor.name + ' ' + instructor.last_name }}</span>
        </div>
        <h1>{{ course.title }}</h1>
        <div class="course-description">
          <h3>{{ $t('courseDetailsPage.courseDescription') }}</h3>
          <p>
            {{ course.description }}
          </p>
          <h3>{{ $t('courseDetailsPage.course1Details') }}</h3>
          <ol>
            <li>
              {{ course.course_objectives_1 }}
            </li>
            <li>
              {{ course.course_objectives_2 }}
            </li>
            <li>
              {{ course.course_objectives_3 }}
            </li>
            <li>
              {{ course.course_objectives_4 }}
            </li>
          </ol>
        </div>
      </div>
      <div class="course-info-sidebar">
        <div class="course-info-sidebar-details">
          <div class="sidebar-img">
            <img :src="course.image_link" />
            <div class="sidebar-brn"></div>
          </div>
          <div class="course-details">
            <div class="course-details-items">
              <span>
                <font-awesome-icon
                  style="margin-right: 10px"
                  :icon="['fa', 'clock']"
                />
                &nbsp; {{ $t('courseDetailsPage.duration') }}</span
              >
              <span>{{ course.duration }}</span>
            </div>
            <el-divider style="margin: 0px" />
            <div class="course-details-items">
              <span>
                <font-awesome-icon
                  style="margin-right: 10px"
                  :icon="['fas', 'clipboard-list']"
                />
                &nbsp; {{ $t('courseDetailsPage.lessons') }}</span
              >
              <span>{{ course.lessons }}</span>
            </div>
            <el-divider style="margin: 0px" />
            <div class="course-details-items">
              <span>
                <font-awesome-icon
                  style="margin-right: 10px"
                  :icon="['fas', 'chart-simple']"
                />
                &nbsp; {{ $t('courseDetailsPage.skillLevel') }}</span
              >
              <span>{{ course.skill_level }}</span>
            </div>
            <el-divider style="margin: 0px" />
            <div class="course-details-items">
              <span>
                <font-awesome-icon
                  style="margin-right: 10px"
                  :icon="['fas', 'language']"
                />
                &nbsp; {{ $t('courseDetailsPage.language') }}</span
              >
              <span>{{ course.language }}</span>
            </div>
            <el-divider style="margin: 0px" />
            <div class="course-details-items">
              <span>
                <font-awesome-icon
                  style="margin-right: 10px"
                  :icon="['far', 'user']"
                />
                &nbsp; {{ $t('courseDetailsPage.instructor') }}</span
              >
              <span>{{ instructor.name + ' ' + instructor.last_name }}</span>
            </div>
            <el-divider style="margin: 0px" />
            <div class="course-details-items">
              <span>
                <font-awesome-icon
                  style="margin-right: 10px"
                  :icon="['fas', 'money-check']"
                />
                &nbsp; {{ $t('courseDetailsPage.fee') }}</span
              >
              <span>{{ course.new_fees }}</span>
            </div>
            <el-divider style="margin: 0px" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from '@/firebase/config'
import AppPageTitleArea from '@/components/app_page_title_area.vue'
export default {
  name: 'course-details-page',
  components: { AppPageTitleArea },
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
      instructor: {},
      course: {},
      path_value: '/course/courseDetails',
      course_title: '',
    }
  },
  async mounted() {
    await this.getCourse(this.$route.params.course_id)
    await this.getInstructor(this.$route.params.instructor_id)
  },
  methods: {
    async getCourse(id) {
      this.is_loading = true
      try {
        const userRef = db.collection('course').doc(id)
        const res = await userRef.get()
        this.course = res.data()
        this.course_title = res.data().title
      } catch (error) {
        this.is_loading_page = false
        console.log(error.message)
      }
    },
    async getInstructor(id) {
      this.is_loading = true
      try {
        const userRef = db.collection('instructor').doc(id)
        const res = await userRef.get()
        this.instructor = res.data()
        this.is_loading = false
      } catch (error) {
        this.is_loading = false
        console.log(error.message)
      }
    },
  },
}
</script>

<style scoped lang="less">
.loading-div {
  max-width: 1290px;
  height: 200px;
  margin: 0px auto;
}
.course-details-page {
  .course-img {
    margin: 0px auto;
    max-width: 1290px;
    height: 570px;
    overflow: hidden;
    border-radius: 5px;
    img {
      width: 100%;
      height: 100%;
      background-size: 100% 100%;
    }
  }
  .course-info {
    max-width: 1090px;
    padding: 0px 20px;
    margin: 0px auto;
    background-color: #ffff;
    display: flex;
    flex-direction: row;
    &-summary {
      width: 100%;
      margin: 0px 20px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      .instructor-info {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        margin: 60px 0px 30px 0px;
        img {
          width: 40px;
          height: 40px;
          border-radius: 100%;
        }
        span {
          font-size: 16px;
          color: #231f40;
          font-weight: 600;
          margin: 0px 10px;
        }
      }
      h1 {
        color: #231f40;
        font-size: 40px;
        margin: 0px 0px 50px 0px;
      }
      .course-description {
        width: 100%;
        box-sizing: border-box;
        border-radius: 8px;
        border: 1px solid #eeeeee;
        padding: 30px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        h3 {
          margin: 0px;
          color: #231f40;
          font-size: 24px;
          margin: 0px 0px 20px 0px;
        }
        p {
          font-size: 16px;
          color: #6f6b80;
          line-height: 1.7em;
          margin: 0px 0px 30px 0px;
        }
        ol {
          padding: 0px 0px 0px 20px;
          margin: 0px 18px 30px 0px;
        }
        ol li {
          font-size: 16px;
          color: #6f6b80;
          margin: 10px 0px;
        }
      }
    }
    &-sidebar {
      max-width: 100%;
      min-width: 360px;
      padding-left: 20px;
      &-details {
        width: 100%;
        padding: 20px;
        top: -50px;
        position: relative;
        border-radius: 15px;
        box-sizing: border-box;
        background-color: white;
        -webkit-box-shadow: 0px 0px 43px 4px rgba(66, 68, 90, 0.12);
        -moz-box-shadow: 0px 0px 43px 4px rgba(66, 68, 90, 0.12);
        box-shadow: 0px 0px 43px 4px rgba(66, 68, 90, 0.12);
        .sidebar-img {
          width: 100%;
          height: 240px;
          overflow: hidden;
          border-radius: 5px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .course-details {
          margin-top: 35px;
          padding: 0px 20px 20px 20px;
          width: 100%;
          height: 100%;
          box-sizing: border-box;
          .course-details-items {
            margin: 20px 0px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            font-size: 16px;
            color: #6f6b80;
            span {
              display: flex;
              justify-content: center;
              align-items: center;
            }
          }
        }
      }
    }
  }
}
</style>
