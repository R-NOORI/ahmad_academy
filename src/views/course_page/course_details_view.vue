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
      :title="course.title"
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
          {{ course.title }}
        </h1>
        <div class="course-description">
          <div
            class="course-description-item_1"
            v-if="$route.params.type == 'courses'"
          >
            <h3>{{ $t('courseDetailsPage.courseDescription') }}</h3>
            <p>
              {{ course.description }}
            </p>
          </div>
          <div class="course-description-item_2" v-else>
            <h3>{{ $t('courseDetailsPage.course1Details') }}</h3>
            <ol>
              <li v-for="(item, index) in course.subjects" :key="index">
                {{ item.sub_name }}
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
                $route.params.type == 'courses'
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
                &nbsp; {{ $t('courseDetailsPage.duration') }}
              </span>
              <span>
                {{ course.duration }}
                {{ $t(`courseDetailsPage.${course.duration_type}`) }}</span
              >
            </div>
            <el-divider style="margin: 0px" />
            <div class="course-details-items">
              <span>
                <font-awesome-icon
                  style="margin-right: 10px"
                  :icon="['fas', 'chart-simple']"
                />
                &nbsp; {{ $t(`courseDetailsPage.skillLevel`) }}</span
              >
              <span>{{ $t(`courseDetailsPage.${course.skill_level}`) }}</span>
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
            <p
              class="message-text"
              v-show="is_register"
              v-motion-slide-visible-top
            >
              {{
                $route.params.type == 'courses'
                  ? $t('courseDetailsPage.title3')
                  : $t('courseDetailsPage.title5')
              }}
            </p>
            <p
              class="message-text"
              v-show="is_exist"
              v-motion-slide-visible-top
            >
              {{
                $route.params.type == 'courses'
                  ? $t('courseDetailsPage.title4')
                  : $t('courseDetailsPage.title6')
              }}
            </p>
            <AppButtonVue
              @click="checkBuyClass"
              style="height: 50px; margin-top: 10px"
              :btnText="
                $route.params.type == 'courses'
                  ? $t('courseDetailsPage.buyCourse')
                  : $t('courseDetailsPage.buyClass')
              "
              v-if="!is_btn_loading"
            />
            <AppButtonVue
              v-else
              v-loading="is_btn_loading"
              :element-loading-svg="svg"
              element-loading-svg-view-box="-10, -10, 50, 50"
              style="height: 50px; margin-top: 10px"
              :btnText="
                $route.params.type == 'courses'
                  ? $t('courseDetailsPage.buyCourse')
                  : $t('courseDetailsPage.buyClass')
              "
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppPageTitleArea from '@/components/app_page_title_area.vue'
import store from '@/store'
import { db, timestamp } from '@/firebase/config'
import AppButtonVue from '@/components/app_button.vue'
import { ElMessage } from 'element-plus'

export default {
  name: 'course-details-page',
  components: { AppPageTitleArea, AppButtonVue },
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
      is_btn_loading: false,
      is_exist: false,
      is_register: false,
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
    this.getCourse(this.$route.params.type, this.$route.params.id)
  },
  methods: {
    async getCourse(type, id) {
      this.is_loading = true
      try {
        const userRef = db.collection(type).doc(id)
        const res = await userRef.get()
        this.course = res.data()
        this.is_loading = false
      } catch (error) {
        this.is_loading = false
        console.log(error.message)
      }
    },
    async checkBuyClass() {
      if (!store.state.user.userId) {
        ElMessage({
          message: this.$t('courseDetailsPage.title7'),
          type: 'error',
        })
        return this.$router.push('/login')
      }
      try {
        this.is_btn_loading = true
        this.is_exist = false
        this.is_register = false
        const collectionRef = db
          .collection('buy_classes')
          .where('user_id', '==', store.state.user.userId)
          .where('c_id', '==', this.$route.params.id)
        const collectionRef2 = db
          .collection('register_classes')
          .where('user_id', '==', store.state.user.userId)
          .where('course_id', '==', this.$route.params.id)
          .where('class_status', '==', 'progress')
        var res2 = await collectionRef2.get()
        var res = await collectionRef.get()
        if (res2.docs.length > 0) {
          this.is_btn_loading = false
          this.is_register = true
          return
        }
        if (res.docs.length > 0) {
          this.is_btn_loading = false
          this.is_exist = true
          return
        }
        await this.buyClasses()
        this.is_btn_loading = false
      } catch (error) {
        this.is_btn_loading = false
        ElMessage({
          message: this.$t('courseDetailsPage.message2Details'),
          type: 'error',
        })
      }
    },
    async buyClasses() {
      try {
        const collectionRef = db.collection('buy_classes')
        await collectionRef.add({
          user_id: store.state.user.userId,
          image_link: store.state.user.userImage,
          user_name: store.state.user.userName,
          email: store.state.user.email,
          phone_number: store.state.user.phoneNumber,
          c_id: this.$route.params.id,
          c_name: this.course.title,
          c_type: this.$route.params.type,
          register_date: timestamp(),
        })
        ElMessage({
          message: this.$t('courseDetailsPage.message1Details'),
          type: 'success',
        })
      } catch (error) {
        this.is_btn_loading = false
        ElMessage({
          message: this.$t('courseDetailsPage.message2Details'),
          type: 'error',
        })
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
        .message-text {
          color: red;
          font-weight: 700;
        }
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

@media @tablet {
  .course-details-page {
    box-sizing: border-box;
    .course-img {
      height: 400px;
    }
    .course-info {
      width: 100%;
      padding: 0px 10px;
      &-summary {
        width: 50%;
        margin: 0px 10px;
        h1 {
          font-size: 30px;
        }
        .course-description {
          width: 100%;
          padding: 15px;
          &-item_1 {
            h3 {
              font-size: 18px;
            }
            p {
              font-size: 14px;
              margin: 0px 0px 20px 0px;
            }
          }
          &-item_2 {
            h3 {
              font-size: 20px;
            }
            ol li {
              font-size: 14px;
            }
          }
        }
      }
      &-sidebar {
        min-width: 50%;
        padding: 0px;
        &-details {
          width: 90%;
          margin-right: 20px;
          .sidebar-img {
            height: 200px;
            padding-top: 20px;
            h2 {
              margin: 0px 0px;
              font-size: 20px;
              font-weight: 800;
            }
          }
        }
      }
    }
  }
}
@media @mobile {
  .course-details-page {
    .course-img {
      height: 300px;
      border-radius: 5px;
      margin: 0px 20px;
      box-sizing: border-box;
      img {
        width: 100%;
        height: 100%;
        background-size: 100% 100%;
      }
    }
    .course-info {
      padding: 0px 20px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      &-summary {
        width: 100%;
        margin: 0px;
        h1 {
          font-size: 40px;
        }
        .course-description {
          width: 100%;
        }
      }
      &-sidebar {
        min-width: 100%;
        padding-left: 0px;
        margin-top: 20px;
        &-details {
          width: 100%;
          padding: 0px;
          top: 0px;
          .sidebar-img {
            align-items: center;
            justify-content: center;
            padding-top: 20px;
            h2 {
              margin: 0px 0px;
              font-size: 25px;
              font-weight: 900;
            }
          }
        }
      }
    }
  }
}
</style>
