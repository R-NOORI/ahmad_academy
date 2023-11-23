<template>
  <div class="container">
    <div class="main-content">
      <div
        v-motion
        :initial="{ opacity: 0, y: 100 }"
        :enter="{ opacity: 1, y: 0 }"
        :delay="200"
        :class="
          getLanguage == 'EN'
            ? 'hero_text hero_text_left'
            : 'hero_text hero_text_right'
        "
      >
        <h4>{{ $t('home.title1') }}</h4>
        <h1>{{ $t('home.title2') }}</h1>
        <h5>
          {{ $t('home.title3') }}
        </h5>
        <AppButon
          @click="this.$router.push('/contact')"
          :btn-text="$t('home.getStarted')"
          :right-icon="[
            'fas',
            getLanguage == 'EN' ? 'arrow-right' : 'arrow-left',
          ]"
        />
      </div>
      <div
        v-motion
        :initial="{ opacity: 0, y: -100 }"
        :enter="{ opacity: 1, y: 0 }"
        :delay="400"
        class="hero_image"
      >
        <img src="@/assets/hero_image_1.png" />
      </div>
    </div>
    <div class="sub-content">
      <el-divider content-position="center"
        ><p class="title_1">{{ $t('home.title4') }}</p></el-divider
      >
      <p class="title_2">{{ $t('home.offerTitle1') }}</p>
      <div class="offers">
        <!-- card 1 -->
        <div class="offers_card">
          <div class="offers_icon_container">
            <font-awesome-icon
              class="icon"
              :icon="['fas', 'briefcase']"
              size="lg"
            />
          </div>
          <h3>{{ $t('home.expretsTitle') }}</h3>
          <p :class="getLanguage == 'EN' ? 'text_left' : 'text_right'">
            {{ $t('home.expertsDetails') }}
          </p>
        </div>
        <!-- card 2 -->
        <div class="offers_card">
          <div class="offers_icon_container">
            <font-awesome-icon
              class="icon"
              :icon="['fas', 'globe']"
              size="lg"
            />
          </div>
          <h3>{{ $t('home.offerTitle2') }}</h3>
          <p :class="getLanguage == 'EN' ? 'text_left' : 'text_right'">
            {{ $t('home.offer2Details') }}
          </p>
        </div>
        <!-- card 3 -->
        <div class="offers_card">
          <div class="offers_icon_container">
            <font-awesome-icon class="icon" :icon="['fas', 'gear']" size="lg" />
          </div>
          <h3>{{ $t('home.offerTitle3') }}</h3>
          <p :class="getLanguage == 'EN' ? 'text_left' : 'text_right'">
            {{ $t('home.offer3Details') }}
          </p>
        </div>
      </div>
    </div>

    <div
      v-motion
      :initial="{ opacity: 0, y: 100 }"
      :enter="{ opacity: 1, y: 0 }"
      :visible="{ opacity: 1, y: 0 }"
      :delay="200"
      class="sub-content"
    >
      <el-divider content-position="center"
        ><p class="title_1">{{ $t('home.instructor') }}</p></el-divider
      >
      <p class="title_2">{{ $t('home.lifeCoaches') }}</p>
      <div class="instructor">
        <!-- if  loading is true -->
        <div
          class="image_container"
          v-for="(item, index) in 3"
          :key="index"
          v-show="is_loading"
        ></div>
        <!-- if  loading  is  false-->
        <div
          class="image_container"
          v-for="(item, index) in instructors"
          :key="index"
          v-show="!is_loading"
        >
          <div class="image_box">
            <div class="image_content">
              <img :src="item.image_link" />
              <div class="content">
                <div
                  class="btn"
                  @click="() => openInNewTab(item.facebook_link)"
                >
                  f
                </div>
              </div>
            </div>
          </div>
          <div class="details">
            <p class="name">{{ item.name + ' ' + item.last_name }}</p>
            <p class="occupation">{{ item.profession }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppButon from '@/components/app_button.vue'
import { db } from '@/firebase/config'
import { ElMessage } from 'element-plus'
import store from '@/store'
export default {
  components: {
    AppButon,
  },

  data() {
    return {
      is_loading: false,
      instructors: [],
    }
  },
  async mounted() {
    await this.getAllInstructor()
  },
  computed: {
    getLanguage: () => store.state.user.language,
  },
  methods: {
    openInNewTab(url) {
      if (url == '' || url == null) {
        ElMessage({
          message: 'Does not have a facebook account',
          type: 'warning',
        })
      } else {
        window.open(url, '_blank', 'noreferrer')
      }
    },
    async getAllInstructor() {
      try {
        this.is_loading = true
        var citiesRef = db.collection('instructor')
        var res = await citiesRef.get()
        let items = []
        res.forEach((doc) => {
          items.push({
            ...doc.data(),
            id: doc.id,
          })
        })
        this.instructors = items
        this.is_loading = false
      } catch (error) {
        this.is_loading = false
        console.log('something went wrong', error)
      }
    },
  },
}
</script>

<style lang="less" scoped>
.container {
  .main-content {
    margin: 30px auto;
    height: 700px;
    display: flex;
    align-items: center;
    justify-content: center;
    .hero_text_left {
      text-align: left;
    }
    .hero_text_right {
      text-align: right;
    }
    .hero_text {
      width: 600px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      margin-right: 40px;
      h4 {
        font-weight: 800;
        font-size: 16px;
        color: #525fe1;
      }
      h1 {
        font-size: 72px;
        margin: 0;
      }
      h5 {
        font-size: 16px;
        color: #54595f;
      }
    }

    .hero_image {
      width: 700px;
      // margin-left: 80px;
      img {
        width: 100%;
        // height: 800px;
      }
    }
  }
  .sub-content {
    margin-top: 150px;
    padding: 0 50px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    .title_1 {
      font-size: 16px;
      font-weight: 800;
      letter-spacing: 0.1em;
      color: @color-secondary;
      text-align: center;
    }
    .title_2 {
      margin-top: 10px;
      font-size: 40px;
      color: black;
      font-weight: bold;
      text-align: center;
    }
    .instructor {
      display: grid;
      grid-template-columns: auto auto auto;
      grid-gap: 2em;
      .image_container {
        .image_box {
          width: 300px;
          height: 300px;
          border-radius: 50%;
          overflow: hidden;
          position: relative;
          background-color: #fabd725c;
          &::before {
            content: '';
            position: absolute;
            inset: -10px 50px;
            background-color: @color-orange;
            transition: 0.3s;
            transform: rotate(-45deg);
          }
          &:hover::before {
            animation: animate 0.3s linear;
            transform: rotate(45deg);
          }
          &::after {
            content: '';
            position: absolute;
            inset: 2px;
            background-color: white;
            border-radius: 50%;
            z-index: 1;
          }
          .image_content {
            border-radius: 50%;
            width: 260px;
            height: 260px;
            overflow: hidden;
            position: absolute;
            inset: 21px;
            // top: 0;
            // left: 0;
            // bottom: 0;
            // right: 0;
            z-index: 3;
            transition: 0.3s;
            img {
              width: 100%;
              height: 100%;
              position: absolute;
              top: 0;
              left: 0;
              object-fit: cover;
            }
            .content {
              border-radius: 50%;
              width: 260px;
              height: 260px;
              overflow: hidden;
              position: absolute;
              // inset: 21px;
              // top: 0;
              // left: 0;
              // bottom: 0;
              // right: 0;
              transition: 0.3s;
              opacity: 0;
              background-color: #23203f77;
              display: flex;
              justify-content: center;
              align-items: center;
              .btn {
                width: 40px;
                height: 40px;
                background-color: white;
                color: @color-secondary;
                font-weight: bolder;
                border-radius: 50%;
                line-height: 40px;
                font-size: 25px;
                margin: 5px;
                cursor: pointer;
                transition: 0.4s;
                &:hover {
                  background-color: @color-secondary;
                  color: white;
                }
              }
              &:hover {
                opacity: 1;
              }
            }
          }
        }
        .details {
          .name {
            font-weight: 900;
            font-size: 25px;
            margin-bottom: 0;
            line-height: 5px;
            letter-spacing: 1px;
          }
        }
      }
    }
    .offers {
      display: flex;
      justify-content: center;
      align-items: center;

      .offers_card {
        width: 252px;
        height: 274px;
        margin: 20px;
        background-color: rgba(249, 249, 249, 0.792);
        margin-right: 30px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        position: relative;
        top: 0;
        transition: top ease 0.5s;
        padding: 20px;
        &:hover {
          box-shadow: -1px 5px 12px #cccccc5e;
          background-color: #ffffff;
          top: -20px;
          .offers_icon_container {
            background-color: @color-secondary;
            .icon {
              text-align: center;
              color: white;
            }
          }
        }

        .offers_icon_container {
          width: 70px;
          height: 70px;
          background-color: #5361df58;
          border-top-left-radius: 50%;
          border-top-right-radius: 50%;
          line-height: 70px;
          margin-bottom: 10px;
          .icon {
            color: @color-secondary;
          }
        }
        .text_left {
          text-align: left;
        }
        .text_right {
          text-align: right;
        }
      }
    }
  }
}

@keyframes animate {
  0% {
    transform: rotate(-45deg);
  }
  100% {
    transform: rotate(45deg);
  }
}
</style>
