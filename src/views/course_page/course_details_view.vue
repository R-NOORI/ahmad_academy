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
      translate="true"
    />
    <div class="course-img">
      <img src="@/assets/course-details-page/image_5.png" />
    </div>
    <div
      :class="
        selectLanguage == 'EN'
          ? 'course-info text-left'
          : 'course-info text-right'
      "
    >
      <div class="course-info-summary">
        <h1>
          {{
            selectLanguage == 'EN'
              ? course.en_name
              : selectLanguage == 'PA'
              ? course.pa_name
              : course.fa_name
          }}
        </h1>
        <div class="course-description">
          <div
            class="course-description-item_1"
            v-if="$route.params.type == 'course'"
          >
            <h3>{{ $t('courseDetailsPage.courseDescription') }}</h3>
            <p>
              {{
                selectLanguage == 'EN'
                  ? course.en_discription
                  : selectLanguage == 'PA'
                  ? course.pa_discription
                  : course.fa_discription
              }}
            </p>
          </div>
          <div class="course-description-item_2" v-else>
            <h3>{{ $t('courseDetailsPage.course1Details') }}</h3>
            <ol>
              <li v-for="(item, index) in course.subjects" :key="index">
                {{
                  selectLanguage == 'EN'
                    ? item.en_name
                    : selectLanguage == 'PA'
                    ? item.pa_name
                    : item.fa_name
                }}
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div class="course-info-sidebar">
        <div class="course-info-sidebar-details">
          <div class="sidebar-img">
            <h2>{{ $t('courseDetailsPage.online') }}</h2>
            <h2>
              {{
                $route.params.type == 'course'
                  ? $t('courseDetailsPage.courses')
                  : $t('courseDetailsPage.classes')
              }}
            </h2>
            <!-- <img src="@/assets/course-details-page/image_1.png" /> -->
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
              <span>{{
                selectLanguage == 'EN'
                  ? course.en_duration
                  : selectLanguage == 'PA'
                  ? course.pa_duration
                  : course.fa_duration
              }}</span>
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
              <span>{{
                selectLanguage == 'EN'
                  ? course.en_skill_level
                  : selectLanguage == 'PA'
                  ? course.pa_skill_level
                  : course.fa_skill_level
              }}</span>
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
              <span>{{
                selectLanguage == 'EN'
                  ? course.en_languages
                  : selectLanguage == 'PA'
                  ? course.pa_languages
                  : course.fa_languages
              }}</span>
            </div>
            <el-divider style="margin: 0px" />
            <div class="course-details-items">
              <span>
                <font-awesome-icon
                  style="margin-right: 10px"
                  :icon="['fas', 'money-check']"
                />
                &nbsp;
                {{
                  $route.params.type == 'course'
                    ? $t('coursesPage.title2')
                    : $t('coursesPage.title1')
                }}</span
              >
              <span> {{ course.fee }} $</span>
            </div>
            <el-divider style="margin: 0px" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppPageTitleArea from '@/components/app_page_title_area.vue'
import AllClasses from '@/json/classes'
import AllCourses from '@/json/courses'
import store from '@/store'
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
      type: '',
      path_value: '/course/courseDetails',
      course_title: '',
    }
  },
  computed: {
    selectLanguage: () => store.state.user.language,
  },
  mounted() {
    console.log('===============> ', this.$route.params.id)
    console.log('===============> ', this.$route.params.type)
    this.getCourse(this.$route.params.type, this.$route.params.id)
    console.log('===============> ', this.course.subjects)
  },
  methods: {
    getCourse(type, id) {
      this.is_loading = true
      try {
        if (type == 'course') {
          AllCourses.filter((item) => {
            if (id == item.id) {
              this.course = item
            }
          })
        } else {
          AllClasses.filter((item) => {
            if (id == item.id) {
              this.course = item
            }
          })
        }
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
  .text-left {
    text-align: left;
  }

  .text-right {
    text-align: right;
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
      h1 {
        color: #231f40;
        font-size: 40px;
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
        &-item_1 {
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
        }
        &-item_2 {
          h3 {
            margin: 0px;
            color: #231f40;
            font-size: 24px;
            margin: 0px 0px 20px 0px;
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
          background-image: url('@/assets/course-details-page/image_1.png');
          background-size: 100% 100%;
          width: 100%;
          height: 290px;
          overflow: hidden;
          border-radius: 5px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding-top: 20px;
          h2 {
            margin: 0px 0px;
            font-size: 25px;
            font-weight: 900;
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
