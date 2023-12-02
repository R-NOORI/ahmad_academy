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
      <div class="tab-content">
        <div class="tab-content-items">
          <div
            :class="
              tab == 'all_courses'
                ? 'tab-content-items-active'
                : 'tab-content-items-deactive'
            "
            @click="handleTabChange('all_courses')"
          >
            {{ $t('coursesPage.title3') }}
          </div>
          <div
            @click="handleTabChange('all_classes')"
            :class="
              tab == 'all_classes'
                ? 'tab-content-items-active'
                : 'tab-content-items-deactive'
            "
          >
            {{ $t('coursesPage.title4') }}
          </div>
        </div>
        <p>
          {{ $t('coursesPage.total') }}
          {{ tab == 'all_courses' ? courses.length : classes.length }}
          {{
            tab == 'all_courses'
              ? $t('coursesPage.courses')
              : $t('coursesPage.classes')
          }}
        </p>
      </div>
      <div class="course-list">
        <CourseCard
          @click="this.$router.push(`/course/course-details/course/${item.id}`)"
          v-for="(item, index) in courses"
          :key="index"
          :imageName="item.image_name"
          :courseTitle="
            selectLanguage == 'EN'
              ? item.en_name
              : selectLanguage == 'PA'
              ? item.pa_name
              : item.fa_name
          "
          :language="
            selectLanguage == 'EN'
              ? item.en_languages
              : selectLanguage == 'PA'
              ? item.pa_languages
              : item.fa_languages
          "
          :duration="
            selectLanguage == 'EN'
              ? item.en_duration
              : selectLanguage == 'PA'
              ? item.pa_duration
              : item.fa_duration
          "
          :fee="item.fee"
          type="course"
          v-show="tab == 'all_courses' ? true : false"
        />
        <CourseCard
          v-for="(item, index) in classes"
          :key="index"
          @click="this.$router.push(`/course/course-details/class/${item.id}`)"
          :imageName="item.image_name"
          :courseTitle="
            selectLanguage == 'EN'
              ? item.en_name
              : selectLanguage == 'PA'
              ? item.pa_name
              : item.fa_name
          "
          :language="
            selectLanguage == 'EN'
              ? item.en_languages
              : selectLanguage == 'PA'
              ? item.pa_languages
              : item.fa_languages
          "
          :duration="
            selectLanguage == 'EN'
              ? item.en_duration
              : selectLanguage == 'PA'
              ? item.pa_duration
              : item.fa_duration
          "
          :fee="item.fee"
          v-show="tab == 'all_classes' ? true : false"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { db } from '@/firebase/config'
import CourseCard from './components/course_card.vue'
import AppPageTitleArea from '@/components/app_page_title_area.vue'
import AllClasses from '@/json/classes'
import AllCourses from '@/json/courses'
import store from '@/store'
// import imeg from ''

export default {
  name: 'course-page',
  components: { CourseCard, AppPageTitleArea },
  data() {
    return {
      tab: 'all_courses',
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
      classes: [],
      courses: [],
    }
  },
  async mounted() {
    this.classes = AllClasses
    this.courses = AllCourses
  },

  computed: {
    selectLanguage: () => store.state.user.language,
  },
  methods: {
    handleTabChange(tab) {
      this.tab = tab
    },
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

    .tab-content {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 40px;
      width: 100%;
      &-items {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 300px;
        height: 50px;
        border-radius: 150px;
        -webkit-box-shadow: 0px 3px 28px 2px rgba(66, 68, 90, 0.09);
        -moz-box-shadow: 0px 3px 28px 2px rgba(66, 68, 90, 0.09);
        box-shadow: 0px 3px 28px 2px rgba(66, 68, 90, 0.09);
        &-deactive,
        &-active {
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
        }
        &-deactive {
          height: 50px;
          width: 50%;
          &:hover {
            color: @color-light;
            cursor: pointer;
          }
        }
        &-active {
          height: 50px;
          width: 50%;
          border-radius: 150px;
          color: whitesmoke;
          background-color: @color-secondary;
          &:hover {
            cursor: pointer;
            transition: 0.5s;
          }
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
