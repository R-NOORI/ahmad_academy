<template>
  <div class="course-page">
    <AppPageTitleArea
      :currentPath="this.$route.fullPath.split('/')"
      :title="this.$route.name"
    />
    <div
      v-loading="is_loading"
      element-loading-text="Loading..."
      :element-loading-svg="svg"
      element-loading-svg-view-box="-10, -10, 50, 50"
      class="loading-div"
      v-if="is_loading"
    ></div>
    <div class="course-page-content" v-else>
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
          @click="
            this.$router.push(`/course/course-details/courses/${item.id}`)
          "
          v-for="(item, index) in courses"
          :key="index"
          :imageLink="item.image_link"
          :courseTitle="item.title"
          :language="item.language"
          :durationType="item.duration_type"
          :durationNumber="item.duration"
          :fee="item.fee"
          v-show="tab == 'all_courses' ? true : false"
        />
        <CourseCard
          v-for="(item, index) in classes"
          :key="index"
          @click="
            this.$router.push(`/course/course-details/classes/${item.id}`)
          "
          :imageLink="item.image_link"
          :courseTitle="item.title"
          :language="item.language"
          :durationType="item.duration_type"
          :durationNumber="item.duration"
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
import store from '@/store'

export default {
  name: 'course-page',
  components: { CourseCard, AppPageTitleArea },
  data() {
    return {
      tab: 'all_courses',
      is_loading: false,
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
    await this.getAllCourse()
    await this.getAllClasses()
  },

  computed: {
    selectLanguage: () => store.state.user.language,
  },
  methods: {
    handleTabChange(tab) {
      this.tab = tab
    },
    async getAllCourse() {
      this.is_loading = true
      try {
        var citiesRef = db.collection('courses')
        var res = await citiesRef.get()
        this.total_records = res.docs.length
        var items = []
        res.forEach((doc) => {
          items.push({
            ...doc.data(),
            id: doc.id,
          })
        })
        this.courses = items
        console.log(items)
        this.is_loading = false
      } catch (error) {
        this.is_loading = false

        console.log('something went wrong', error)
      }
    },
    async getAllClasses() {
      try {
        var citiesRef = db.collection('classes')
        var res = await citiesRef.get()
        this.total_records = res.docs.length
        var items = []
        res.forEach((doc) => {
          items.push({
            ...doc.data(),
            id: doc.id,
          })
        })
        this.classes = items
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
  .loading-div {
    max-width: 1290px;
    height: 200px;
    margin: 0px auto;
  }
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
@media @mobile {
  .course-page {
    width: 100%;
    .loading-div {
      width: 100%;
      height: 100px;
    }
    &-content {
      width: 100%;
      box-sizing: border-box;
      padding: 0px 15px;
      .tab-content {
        margin-bottom: 30px;
        &-items {
          height: 45px;
          width: 200px;
          border-radius: 150px;
          &-deactive,
          &-active {
            font-weight: 700;
            width: 50%;
            font-size: 13px;
            border-radius: 100px;
            height: 45px;
          }
        }
        p {
          font-size: 14px;
        }
      }
      .course-list {
        width: 100%;
        display: grid;
        grid-template-columns: 100%;
        grid-gap: 1em;
      }
    }
  }
}
</style>
