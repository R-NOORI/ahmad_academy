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
      <h3 :class="language == 'EN' ? 'text-left' : 'text-right'">
        {{ $t('portalPage.message2Details') }}
      </h3>
      <div class="portal-body-active-course">
        <PortalCourseCard
          v-for="(item, index) in search_value == '' || search_value == null
            ? registeClasses
            : searchCourseValue"
          :key="index"
          :imageName="item.image_name"
          :courseTitle="
            language == 'EN'
              ? item.en_name
              : language == 'PA'
              ? item.pa_name
              : item.fa_name
          "
          :language="
            language == 'EN'
              ? item.en_languages
              : language == 'PA'
              ? item.pa_languages
              : item.fa_languages
          "
          :feeAmount="item.fee_amount"
          :startTime="item.class_start_time"
          :courseId="item.course_id"
          :link="item.link"
          :type="item.type"
          :duration="
            language == 'EN'
              ? item.en_duration
              : language == 'PA'
              ? item.pa_duration
              : item.fa_duration
          "
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
import course from '@/json/courses'
import classes from '@/json/classes'
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
      is_loading: true,
      search_value: '',
      userId: '',
      userName: '',
      profileImage: '',
      classes: [],
      course: [],
      registeClasses: [],
    }
  },
  async mounted() {
    this.courses = course
    this.classes = classes
    console.log(classes)
    console.log(course)
    await this.getRegisterClass(),
      (this.userId = store.state.user.userId),
      (this.userName = store.state.user.userName),
      (this.profileImage = store.state.user.userImage),
      console.log(store.state.user.userImage)
  },
  computed: {
    language: () => store.state.user.language,
    searchCourseValue: function () {
      return this.registeClasses.filter((value) => {
        return value.en_name
          .toLowerCase()
          .match(this.search_value.toLowerCase())
      })
    },
  },
  methods: {
    async getRegisterClass() {
      this.is_loading = true
      const id = await store.state.user.userId
      var citiesRef = db
        .collection('classes')
        .where('class_status', '==', 'progress')
        .where('user_id', '==', id)
      await citiesRef.onSnapshot(
        (snap) => {
          let items = []
          snap.forEach((doc) => {
            if (doc.data().type == 'course') {
              return this.courses.forEach((value) => {
                if (value.id == doc.data().course_id)
                  return items.push({
                    ...doc.data(),
                    image_name: value.image_name,
                    en_name: value.en_name,
                    pa_name: value.pa_name,
                    fa_name: value.fa_name,
                    en_languages: value.en_languages,
                    pa_languages: value.pa_languages,
                    fa_languages: value.fa_languages,
                    en_duration: value.en_duration,
                    pa_duration: value.pa_duration,
                    fa_duration: value.fa_duration,
                    class_start_time: dayjs(doc.data().class_start_time).format(
                      'hh:mm A'
                    ),
                    id: doc.id,
                  })
              })
            } else {
              return this.classes.forEach((value) => {
                if (value.id == doc.data().course_id)
                  return items.push({
                    ...doc.data(),
                    image_name: value.image_name,
                    en_name: value.en_name,
                    pa_name: value.pa_name,
                    fa_name: value.fa_name,
                    en_languages: value.en_languages,
                    pa_languages: value.pa_languages,
                    fa_languages: value.fa_languages,
                    en_duration: value.en_duration,
                    pa_duration: value.pa_duration,
                    fa_duration: value.fa_duration,
                    class_start_time: dayjs(doc.data().class_start_time).format(
                      'hh:mm A'
                    ),
                    id: doc.id,
                  })
              })
            }
          })
          this.registeClasses = items
          this.is_loading = false
          console.log('something went =============', items)
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
    h3 {
      margin-top: 30px;
      width: 100%;
      color: @color-secondary;
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
</style>
