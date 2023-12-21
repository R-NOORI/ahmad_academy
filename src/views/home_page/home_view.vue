<template>
  <div class="background-image">
    <el-carousel
      indicator-position="none"
      style="height: 550px"
      interval="20000"
    >
      <el-carousel-item>
        <img src="@/assets/home-page/image_1.jpg" />
      </el-carousel-item>
      <el-carousel-item>
        <img src="@/assets/home-page/image_2.jpg" />
      </el-carousel-item>
      <el-carousel-item>
        <img src="@/assets/home-page/image_3.jpg" />
      </el-carousel-item>
      <el-carousel-item>
        <img src="@/assets/home-page/image_4.jpg" />
      </el-carousel-item>
      <el-carousel-item>
        <img src="@/assets/home-page/image_5.jpg" />
      </el-carousel-item>
    </el-carousel>
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
        <h4>{{ $t('homePage.title1') }}</h4>
        <h1>{{ $t('homePage.title2') }}</h1>
        <h5>
          {{ $t('homePage.title3') }}
        </h5>
      </div>

      <!-- <div
        v-motion
        :initial="{ opacity: 0, y: -100 }"
        :enter="{ opacity: 1, y: 0 }"
        :delay="400"
        class="hero_image"
      >
        <img src="@/assets/hero_image_1.png" />
      </div> -->
    </div>
  </div>
  <div class="main-image">
    <div class="main-image-container">
      <p>
        {{ $t('homePage.title5') }}
      </p>
      <AppButon
        @click="this.$router.push('/course')"
        :btn-text="$t('homePage.getStarted')"
        :right-icon="[
          'fas',
          getLanguage == 'EN' ? 'arrow-right' : 'arrow-left',
        ]"
      />
    </div>
  </div>
  <div class="container">
    <div class="sub-content">
      <el-divider content-position="center"
        ><p class="title_1">{{ $t('homePage.title4') }}</p></el-divider
      >
      <p class="title_2">{{ $t('homePage.offerTitle1') }}</p>
      <div class="offers">
        <div
          class="offers_card"
          v-motion
          :initial="{ opacity: 0, y: 150 }"
          :enter="{
            opacity: 1,
            y: 0,
            transition: {
              mass: 1,
            },
          }"
          :visible="{
            opacity: 1,
            y: 0,
            transition: {
              mass: 1,
            },
          }"
        >
          <div class="offers_icon_container">
            <font-awesome-icon
              class="icon"
              :icon="['fas', 'briefcase']"
              size="lg"
            />
          </div>
          <h3>{{ $t('homePage.expretsTitle') }}</h3>
          <p :class="getLanguage == 'EN' ? 'text_left' : 'text_right'">
            {{ $t('homePage.expertsDetails') }}
          </p>
        </div>
        <div
          class="offers_card"
          v-motion
          :initial="{ opacity: 0, y: 150 }"
          :enter="{
            opacity: 1,
            y: 0,
            transition: {
              mass: 1,
            },
          }"
          :visible="{
            opacity: 1,
            y: 0,
            transition: {
              mass: 1,
            },
          }"
          :delay="200"
        >
          <div class="offers_icon_container">
            <font-awesome-icon
              class="icon"
              :icon="['fas', 'globe']"
              size="lg"
            />
          </div>
          <h3>{{ $t('homePage.offerTitle2') }}</h3>
          <p :class="getLanguage == 'EN' ? 'text_left' : 'text_right'">
            {{ $t('homePage.offer2Details') }}
          </p>
        </div>
        <div
          class="offers_card"
          v-motion
          :initial="{ opacity: 0, y: 150 }"
          :enter="{
            opacity: 1,
            y: 0,
            transition: {
              mass: 1,
            },
          }"
          :visible="{
            opacity: 1,
            y: 0,
            transition: {
              mass: 1,
            },
          }"
          :delay="300"
        >
          <div class="offers_icon_container">
            <font-awesome-icon class="icon" :icon="['fas', 'gear']" size="lg" />
          </div>
          <h3>{{ $t('homePage.offerTitle3') }}</h3>
          <p :class="getLanguage == 'EN' ? 'text_left' : 'text_right'">
            {{ $t('homePage.offer3Details') }}
          </p>
        </div>
      </div>
    </div>
    <div class="sub-content">
      <el-divider content-position="center"
        ><p class="title_1">{{ $t('homePage.instructor') }}</p></el-divider
      >
      <div class="instructor">
        <div
          class="image_container"
          v-show="is_loading"
          v-loading="is_loading"
          element-loading-text="Loading..."
          :element-loading-svg="svg"
          element-loading-svg-view-box="-10, -10, 50, 50"
        ></div>
        <el-carousel
          class="phone-carousel"
          :interval="5000"
          arrow="always"
          indicator-position="none"
        >
          <el-carousel-item v-for="(item, index) in instructors" :key="index">
            <div
              class="phone-image_container"
              v-for="(item, index) in instructors"
              :key="index"
              v-show="!is_loading"
            >
              <div class="image_box">
                <div class="image_content">
                  <img :src="item.image_link" />
                </div>
              </div>
              <div class="details">
                <p class="occupation">
                  "
                  {{
                    getLanguage == 'EN'
                      ? item.comment
                      : getLanguage == 'PA'
                      ? item.p_comment
                      : item.f_comment
                  }}
                  "
                </p>
                <p class="name">
                  {{
                    getLanguage == 'EN'
                      ? item.name + ' ' + item.last_name
                      : item.pf_name + ' ' + item.pf_last_name
                  }}
                </p>
              </div>
            </div>
          </el-carousel-item>
        </el-carousel>
        <div
          class="image_container"
          v-for="(item, index) in instructors"
          :key="index"
          v-show="!is_loading"
        >
          <div class="image_box">
            <div class="image_content">
              <img :src="item.image_link" />
            </div>
          </div>
          <div class="details">
            <p class="occupation">
              "
              {{
                getLanguage == 'EN'
                  ? item.comment
                  : getLanguage == 'PA'
                  ? item.p_comment
                  : item.f_comment
              }}
              "
            </p>
            <p class="name">
              {{
                getLanguage == 'EN'
                  ? item.name + ' ' + item.last_name
                  : item.pf_name + ' ' + item.pf_last_name
              }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <AppWhatsapp />
</template>

<script>
import AppButon from '@/components/app_button.vue'
import { db } from '@/firebase/config'
import { ElMessage } from 'element-plus'
import AppWhatsapp from '@/components/whatsapp_btn.vue'

import store from '@/store'
export default {
  components: {
    AppButon,
    AppWhatsapp,
  },

  data() {
    return {
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
      images: [
        '@/assets/home-page/image_1.jpg',
        '@/assets/home-page/image_2.jpg',
        '@/assets/home-page/image_3.jpg',
        '@/assets/home-page/image_4.jpg',
        '@/assets/home-page/image_5.jpg',
      ],
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
    getImage(imagePath) {
      console.log(imagePath)
      return require(imagePath)
    },
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
        var citiesRef = db.collection('students_comments')
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

<style scoped lang="less">
.el-carousel__item {
  height: 550px;
}
.hero_text_left {
  text-align: left;
}
.hero_text_right {
  text-align: right;
}
.background-image {
  height: 550px;
  position: relative;

  img {
    width: 100%;
    height: 100%;
  }
  .main-content {
    margin: 0px auto;
    max-width: 1140px;
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    .hero_text {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      margin-right: 40px;
      box-sizing: border-box;
      h4 {
        text-shadow: 0px -1px 50px rgba(0, 0, 0, 0.66);
        font-weight: 800;
        font-size: 16px;
        color: white;
      }
      h1 {
        text-shadow: 4px 3px 0 #7a7a7a;
        font-size: 70px;
        margin: 0;
        color: white;
        width: 600px;
      }
      h5 {
        text-shadow: 0px -1px 50px rgba(0, 0, 0, 0.66);
        font-size: 16px;
        color: white;
      }
    }
  }
}
.main-image {
  width: 100%;
  background-size: 130% 130%;
  background-image: url('@/assets/bg.jpg');
  &-container {
    margin: 0px auto;
    padding: 20px;
    max-width: 1140px;
    text-align: center;
    p {
      margin: 0px 0px 20px 0px;
      color: @color-primary;
    }
  }
}

.container {
  max-width: 1200px;
  margin: 0px auto;
  .sub-content {
    margin-top: 100px;
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
      padding-top: 40px;

      .phone-carousel {
        display: none;
      }
      .image_container {
        min-height: 300px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .image_box {
          width: 200px;
          height: 200px;
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
            width: 160px;
            height: 160px;
            overflow: hidden;
            position: absolute;
            inset: 21px;
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
          }
        }
        .details {
          .occupation {
            color: #54595f7d;
            font-style: italic;
            max-width: 300px;
          }
          .name {
            font-weight: 900;
            font-size: 20px;
            margin-bottom: 0;
            line-height: 5px;
            letter-spacing: 1px;
          }
        }
      }
    }
    .offers {
      display: grid;
      grid-template-columns: auto auto auto;
      grid-gap: 1em;
      .offers_card {
        // width: 252px;
        height: 274px;
        margin: 10px;
        background-color: rgba(249, 249, 249, 0.792);
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
          background-color: @color-light;
          border-top-left-radius: 50%;
          border-top-right-radius: 50%;
          line-height: 70px;
          margin-bottom: 10px;
          .icon {
            color: whitesmoke;
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

@media @tablet {
  .background-image {
    .main-content {
      .hero_text {
        padding: 0px 40px;
        margin-right: 0px;
      }
    }
  }
  .container {
    .sub-content {
      padding: 0 15px;
      .title_1 {
        font-size: 14px;
      }
      .title_2 {
        margin-top: 10px;
        font-size: 30px;
      }
      .instructor {
        display: grid;
        grid-template-columns: auto auto auto;
        grid-gap: 2em;
        padding-top: 40px;
        .image_container {
          min-height: 300px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          .image_box {
            width: 200px;
            height: 200px;
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
              width: 160px;
              height: 160px;
              overflow: hidden;
              position: absolute;
              inset: 21px;
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
            }
          }
          .details {
            .occupation {
              color: #54595f7d;
              font-style: italic;
              max-width: 300px;
            }
            .name {
              font-weight: 900;
              font-size: 20px;
              margin-bottom: 0;
              line-height: 5px;
              letter-spacing: 1px;
            }
          }
        }
      }
      .offers {
        display: grid;
        grid-template-columns: auto auto auto;
        grid-gap: 1em;
        .offers_card {
          // width: 252px;
          // height: 250px;
          // margin: 20px;
          background-color: rgba(249, 249, 249, 0.792);
          border-radius: 10px;
          padding: 0px 15px;
          .offers_icon_container {
            width: 40px;
            height: 40px;
            line-height: 0px;
            margin-bottom: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            .icon {
              font-size: 16px;
            }
          }
        }
      }
    }
  }
}

@media @mobile {
  .el-carousel__item {
    height: 400px;
  }
  .background-image {
    height: 400px;
    .main-content {
      padding: 0px 20px;
      .hero_text {
        margin-right: 0px;
        padding: 0px 0px;

        h4 {
          font-size: 14spx;
        }
        h1 {
          font-size: 40px;
          margin: 0;
          width: 100%;
        }
      }
    }
  }
  .main-image {
    width: 100%;
    background-size: 100% 100%;
    background-image: url('@/assets/bg.jpg');
    &-container {
      margin: 0px auto;
      padding: 20px;
      max-width: 1140px;
      text-align: center;
      p {
        margin: 0px 0px 20px 0px;
        color: @color-primary;
        font-size: 14px;
      }
    }
  }

  .container {
    .sub-content {
      margin-top: 100px;
      padding: 0px;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;

      .title_1 {
        font-size: 13px;
        font-weight: 700;
      }
      .title_2 {
        margin-top: 10px;
        font-size: 25px;
        font-weight: bold;
      }
      .instructor {
        width: 100%;
        // height: 200px;
        display: grid;
        grid-template-columns: auto;
        grid-gap: 0;
        padding-top: 0px;
        .phone-carousel {
          display: block;
        }
        .phone-image_container,
        .image_container {
          min-height: 300px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          .image_box {
            width: 200px;
            height: 200px;
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
              width: 160px;
              height: 160px;
              overflow: hidden;
              position: absolute;
              inset: 21px;
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
            }
          }
          .details {
            .occupation {
              color: #54595f7d;
              font-style: italic;
              max-width: 300px;
            }
            .name {
              font-weight: 900;
              font-size: 25px;
              margin-bottom: 0;
              line-height: 5px;
              letter-spacing: 1px;
            }
          }
        }
        .image_container {
          display: none;
        }
      }
      .offers {
        // display: flex;
        // justify-content: center;
        // align-items: center;
        display: grid;
        grid-template-columns: auto;
        grid-gap: 0.5em;
        .offers_card {
          box-sizing: border-box;
          width: 100%;
          height: 230px;
          margin: 0px;
          background-color: #ffffff;
          border-radius: 10px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          position: relative;
          top: 0;
          transition: top ease 0.5s;
          padding: 0px 20px;
          &:hover {
            box-shadow: none;
            background-color: #ffffff;
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
            background-color: @color-light;
            border-top-left-radius: 50%;
            border-top-right-radius: 50%;
            line-height: 70px;
            margin-bottom: 10px;
            .icon {
              color: whitesmoke;
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
}
</style>
