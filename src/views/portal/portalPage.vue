<template>
  <div
    v-loading="is_loading"
    element-loading-text="Loading..."
    :element-loading-svg="svg"
    element-loading-svg-view-box="-10, -10, 50, 50"
    class="loading-div"
    v-if="is_loading"
  ></div>
  <div
    class="portal"
    v-else
    v-motion
    :initial="{ opacity: 0, y: 300 }"
    :enter="{
      opacity: 1,
      y: 0,
      transition: {
        mass: 1,
      },
    }"
    :visible-once="{ opacity: 1, y: 0 }"
    :delay="350"
  >
    <div class="portal-header">
      <div class="portal-header-user">
        <el-avatar :size="60" :src="profileImage" @error="errorHandler">
          <img
            src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"
          />
        </el-avatar>

        <div class="portal-header-user-info">
          <p :class="language == 'EN' ? 'text-left' : 'text-right'">
            {{ $t('portalPage.welcome') }}
          </p>
          <!-- userImage -->
          <h3>{{ userName }}</h3>
        </div>
      </div>
      <div class="portal-header-items">
        <div class="portal-header-items-search">
          <font-awesome-icon
            class="portal-header-items-search-icon"
            :icon="['fas', 'magnifying-glass']"
          />
          <input
            :placeholder="$t('portalPage.message1Details')"
            v-model="search_value"
          />
        </div>
        <button @click="this.$router.push('/portal/setting')">
          <font-awesome-icon style="margin: 0px 5px" :icon="['fas', 'gear']" />
          {{ $t('portalPage.btn1') }}
        </button>
      </div>
    </div>
    <div v-if="registeClasses.length == 0" class="portal-empty">
      <img src="@/assets/portal-page/empty.png" />
      <h3>{{ $t('portalPage.message4Details') }}</h3>
      <p>
        {{ $t('portalPage.message5Details') }}
      </p>
    </div>
    <div class="portal-body" v-else>
      <div class="portal-body-bacground-div"></div>
      <div class="portal-body-tab-content">
        <h3 :class="language == 'EN' ? 'text-left' : 'text-right'">
          {{ $t('portalPage.message2Details') }}
        </h3>
        <div class="portal-body-tab-content-items">
          <div
            :class="tab == 'progress' ? 'items-active' : 'items-deactive'"
            @click="getRegisterClass('progress')"
          >
            Progress
          </div>
          <div
            @click="getRegisterClass('complete')"
            :class="tab == 'complete' ? 'items-active' : 'items-deactive'"
          >
            Complete
          </div>
        </div>
      </div>
      <div class="portal-body-active-course">
        <PortalCourseCard
          v-for="(item, index) in search_value == '' || search_value == null
            ? registeClasses
            : searchCourseValue"
          :key="index"
          :imageLink="item.image_link"
          :courseTitle="item.title"
          :language="item.language"
          :feeAmount="item.fee"
          :startTime="item.format_date"
          :courseId="item.course_id"
          :registerClassId="item.id"
          :link="item.link"
          :type="item.type"
          :duration="item.duration"
          :durationType="item.duration_type"
        />
      </div>
    </div>
  </div>
</template>

<script>
import PortalCourseCard from './components/portal_course_card.vue'
import { db } from '@/firebase/config'
import dayjs from 'dayjs'
import store from '@/store'
export default {
  components: { PortalCourseCard },
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
      tab: 'progress',
      is_loading: true,
      search_value: '',
      userId: '',
      userName: '',
      profileImage: '',
      classes: [],
      courses: [],
      registeClasses: [],
    }
  },
  async mounted() {
    ;(this.userId = store.state.user.userId),
      (this.userName = store.state.user.userName),
      (this.profileImage = store.state.user.userImage),
      await this.getCourses()
    await this.getClasses()
    await this.getRegisterClass('progress')
  },
  computed: {
    language: () => store.state.user.language,
    searchCourseValue: function () {
      return this.registeClasses.filter((value) => {
        return value.title.toLowerCase().match(this.search_value.toLowerCase())
      })
    },
  },
  methods: {
    getCourses() {
      var citiesRef = db.collection('courses')
      citiesRef.onSnapshot(
        (snap) => {
          let items = []
          snap.forEach((doc) => {
            items.push({
              ...doc.data(),
              id: doc.id,
            })
          })
          this.courses = items
        },
        (err) => {
          console.log('something went wrong', err)
        }
      )
    },
    getClasses() {
      var citiesRef = db.collection('classes')
      citiesRef.onSnapshot(
        (snap) => {
          let items = []
          snap.forEach((doc) => {
            items.push({
              ...doc.data(),
              id: doc.id,
            })
          })
          this.classes = items
        },
        (err) => {
          console.log('something went wrong', err)
        }
      )
    },
    async getRegisterClass(type) {
      this.tab = type
      this.is_loading = true
      var citiesRef = db
        .collection('register_classes')
        .where('class_status', '==', type)
        .where('user_id', '==', this.userId)
      citiesRef.onSnapshot(
        (snap) => {
          let items = []
          snap.forEach((doc) => {
            if (doc.data().type == 'courses') {
              return this.courses.forEach((value) => {
                if (doc.data().course_id == value.id) {
                  return items.push({
                    ...doc.data(),
                    title: value.title,
                    duration: value.duration,
                    duration_type: value.duration_type,
                    language: value.language,
                    image_link: value.image_link,
                    format_date: dayjs(doc.data().class_start_time).format(
                      'hh:mm A'
                    ),
                    id: doc.id,
                  })
                }
              })
            } else {
              return this.classes.forEach((value) => {
                if (doc.data().course_id == value.id) {
                  return items.push({
                    ...doc.data(),
                    title: value.title,
                    duration: value.duration,
                    duration_type: value.duration_type,
                    language: value.language,
                    image_link: value.image_link,
                    format_date: dayjs(doc.data().class_start_time).format(
                      'hh:mm A'
                    ),
                    id: doc.id,
                  })
                }
              })
            }
          })
          this.registeClasses = items
          this.is_loading = false
        },
        (err) => {
          this.is_loading = false
          console.log('something went wrong', err)
        }
      )
    },
  },
}
</script>

<style lang="less" scoped>
.text-left {
  text-align: left;
}

.text-right {
  text-align: right;
}

.loading-div {
  max-width: 1120px;
  height: 400px;
  margin: 0px auto;
}
.portal {
  margin: 0px auto;
  max-width: 1120px;
  // border: 1px solid red;
  &-header {
    height: 100px;
    width: 100%;
    border-radius: 20px;
    margin-bottom: 40px;
    margin-top: 30px;
    padding: 0px 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    -webkit-box-shadow: 0px 0px 43px 4px rgba(66, 68, 90, 0.12);
    -moz-box-shadow: 0px 0px 43px 4px rgba(66, 68, 90, 0.12);
    box-shadow: 0px 0px 43px 4px rgba(66, 68, 90, 0.12);
    &-user {
      display: flex;
      flex-direction: row;
      align-items: center;
      &-info {
        margin: 0px 10px;
        p {
          margin: 0px;
          padding: 0px;
        }
        h3 {
          margin: 5px 0px 0px 0px;
          padding: 0px;
        }
      }
    }

    &-items {
      display: flex;
      flex-direction: row;
      align-items: center;
      &-search {
        background-color: #ffffff;
        margin: 0px 20px;
        padding: 0px 15px;
        font-size: 14px;
        height: 40px;
        width: 300px;
        border-radius: 10px;
        font-family: inherit;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        border: 1px solid rgba(128, 128, 128, 0.416);
        &-icon {
          font-size: 15px;
          margin: 0px 10px;
          color: @color-secondary;
        }
        input {
          background-color: transparent;
          outline: none;
          border: none;
          font-size: 14px;
          width: 100%;
        }
      }
      button {
        background-color: @color-secondary;
        color: #ffffff;
        border: 0px;
        padding: 10px 15px;
        font-size: 15px;
        border-radius: 10px;
        transition: 0.5s;
        &:hover {
          cursor: pointer;
          background-color: @color-light;
          transition: 0.5s;
        }
      }
    }
  }
  &-body {
    width: 100%;
    position: relative;
    padding: 0px 35px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    &-tab-content {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      .text-left {
        text-align: left;
      }

      .text-right {
        text-align: right;
      }

      h3 {
        margin-top: 30px;
        width: 100%;
        color: @color-secondary;
      }
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
        .items-deactive,
        .items-active {
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
        }
        .items-deactive {
          height: 50px;
          width: 50%;
          &:hover {
            color: @color-light;
            cursor: pointer;
          }
        }
        .items-active {
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

    &-bacground-div {
      background-color: #28aae20f;
      width: 100%;
      height: 400px;
      position: absolute;
      border-radius: 20px;
      z-index: -1;
    }
    &-active-course {
      box-sizing: border-box;
      width: 100%;
      display: grid;
      grid-template-columns: 32% 32% 32%;
      grid-gap: 1em;
    }
  }
  &-empty {
    img {
      width: 300px;
      height: 300px;
    }
  }
}

@media @tablet {
  .portal {
    margin: 0;
    max-width: 100%;
    box-sizing: border-box;
    // border: 1px solid red;
    &-header {
      &-items {
        &-search {
          width: 200px;
        }
        button {
          padding: 13px 10px;
          font-size: 13px;
        }
      }
    }
    &-body {
      width: 100%;
      padding: 0px 20px;
      &-active-course {
        grid-template-columns: auto auto;
      }
    }
    &-empty {
      img {
        width: 50%;
      }
    }
  }
}
@media @mobile {
  .portal {
    margin: 0px;
    max-width: 100%;

    &-header {
      padding: 0px 10px;
      border-radius: 10px;
      &-user {
        &-info {
          margin: 0px 10px;
          p {
            margin: 0px;
            padding: 0px;
          }
          h3 {
            margin: 5px 0px 0px 0px;
            padding: 0px;
          }
        }
      }
      &-items {
        width: 50%;
        flex-direction: column-reverse;
        &-search {
          box-sizing: border-box;
          margin: 0px;
          padding: 0px;
          height: 35px;
          width: 100%;
          border-radius: 5px;
          &-icon {
            font-size: 15px;
            margin: 0px 10px;
            color: @color-secondary;
          }
          input {
            background-color: transparent;
            outline: none;
            border: none;
            font-size: 10px;
            width: 100%;
          }
        }
        button {
          margin-bottom: 5px;
          width: 100%;
          padding: 8px 15px;
          border-radius: 5px;
        }
      }
    }
    &-body {
      width: 100%;
      padding: 0px 20px;
      &-tab-content {
        h3 {
          font-size: 17px;
        }
        &-items {
          height: 45px;
          width: 350px;
          border-radius: 150px;
          .items-deactive,
          .items-active {
            font-weight: 700;
            width: 50%;
            font-size: 13px;
            border-radius: 100px;
            height: 45px;
          }
        }
      }

      &-active-course {
        grid-template-columns: auto;
      }
    }
    &-empty {
      img {
        width: 60%;
      }
    }
  }
}
</style>
