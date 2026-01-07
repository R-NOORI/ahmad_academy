<template>
  <AppPageTitleArea
    :currentPath="this.$route.fullPath.split('/')"
    :title="this.$route.name"
  />
  <div
    :class="
      getLanguage == 'EN'
        ? 'who-we-are align-text-left'
        : 'who-we-are align-text-right'
    "
  >
    <div
      :class="
        getLanguage == 'EN'
          ? 'elementor-images margin-right'
          : 'elementor-images margin-left'
      "
    >
      <div class="elementor-images-large">
        <img
          v-motion
          :initial="{ opacity: 0, y: 300 }"
          :enter="{
            opacity: 1,
            y: 0,
          }"
          :visible-once="{ opacity: 1, y: 0 }"
          :delay="350"
          class="small"
          src="@/assets/about-page/image_4.png"
          alt=""
        />
        <img
          v-motion
          :initial="{ opacity: 0, y: 300 }"
          :enter="{
            opacity: 1,
            y: 0,
          }"
          :visible-once="{
            opacity: 1,
            y: 0,
          }"
          :delay="350"
          class="animate"
          src="@/assets/about-page/image_2.png"
        />
      </div>
    </div>
    <div
      class="elementor-container"
      v-motion
      :initial="{ opacity: 0, y: 300 }"
      :enter="{
        opacity: 1,
        y: 0,
      }"
      :visible-once="{ opacity: 1, y: 0 }"
      :delay="350"
    >
      <h1>{{ $t('aboutPage.title1') }}</h1>

      <p>
        {{ $t('aboutPage.title1Details') }}
      </p>
      <h1>{{ $t('aboutPage.title2') }}</h1>
      <AboutCard
        imageIcon="book"
        :title="this.$t('aboutPage.title2_1Details')"
        :body="this.$t('aboutPage.title2_2Details')"
        backgroundColor="background-color: #ffa41b1a"
      />
      <AboutCard
        imageIcon="student"
        :title="this.$t('aboutPage.title2_3Details')"
        :body="this.$t('aboutPage.title2_4Details')"
        backgroundColor="background-color: #525FE11A;"
      />
      <AboutCard
        imageIcon="reward"
        :title="this.$t('aboutPage.title2_5Details')"
        :body="this.$t('aboutPage.title2_6Details')"
        backgroundColor="background-color: #FB7C561A;"
      />
      <AboutCard
        imageIcon="teacher"
        :title="this.$t('aboutPage.title2_7Details')"
        :body="this.$t('aboutPage.title2_8Details')"
        backgroundColor="background-color: #FB7C561A;"
      />
    </div>
  </div>
  <div
    :class="
      getLanguage == 'EN'
        ? 'terms-and-conditions align-text-left'
        : 'terms-and-conditions align-text-right'
    "
  >
    <el-divider content-position="center"
      ><p class="title_1">{{ $t('aboutPage.title3') }}</p></el-divider
    >
    <div class="terms-and-conditions-items">
      <div class="terms-and-conditions-items-info">
        <h2
          v-motion
          :initial="{ opacity: 0, y: -100 }"
          :enter="{
            opacity: 1,
            y: 0,
            transition: {
              mass: 1.5,
            },
          }"
          :visible="{
            opacity: 1,
            y: 0,
            transition: {
              mass: 1.5,
            },
          }"
          :delay="200"
        >
          {{ $t('aboutPage.title3_1Details') }}
        </h2>
        <p
          v-motion
          :initial="{ opacity: 0, x: -100 }"
          :enter="{
            opacity: 1,
            x: 0,
            transition: {
              mass: 1,
            },
          }"
          :visible="{
            opacity: 1,
            x: 0,
            transition: {
              mass: 1,
            },
          }"
        >
          <span> {{ $t('aboutPage.title3_2Details') }} </span>
          {{ $t('aboutPage.title3_3Details') }}
        </p>
        <p
          v-motion
          :initial="{ opacity: 0, x: -100 }"
          :enter="{
            opacity: 1,
            x: 0,
            transition: {
              mass: 1.2,
            },
          }"
          :visible="{
            opacity: 1,
            x: 0,
            transition: {
              mass: 1.2,
            },
          }"
          :delay="200"
        >
          <span> {{ $t('aboutPage.title3_4Details') }} </span>
          {{ $t('aboutPage.title3_5Details') }}
        </p>
        <p
          v-motion
          :initial="{ opacity: 0, x: -100 }"
          :enter="{
            opacity: 1,
            x: 0,
            transition: {
              mass: 1.3,
            },
          }"
          :visible="{
            opacity: 1,
            x: 0,
            transition: {
              mass: 1.3,
            },
          }"
          :delay="300"
        >
          <span> {{ $t('aboutPage.title3_6Details') }} </span>
          {{ $t('aboutPage.title3_7Details') }}
        </p>
        <h3
          v-motion
          :initial="{ opacity: 0, x: -100 }"
          :enter="{
            opacity: 1,
            x: 0,
            transition: {
              mass: 1.4,
            },
          }"
          :visible="{
            opacity: 1,
            x: 0,
            transition: {
              mass: 1.4,
            },
          }"
          :delay="400"
        >
          {{ $t('aboutPage.title3_8Details') }}
        </h3>
      </div>
      <div class="terms-and-conditions-items-images">
        <img
          src="@/assets/about-page/image_12.png"
          v-motion
          :initial="{ opacity: 0, x: 200 }"
          :enter="{
            opacity: 1,
            x: 0,
            transition: {
              mass: 1,
            },
          }"
          :visible="{
            opacity: 1,
            x: 0,
            transition: {
              mass: 1,
            },
          }"
          :delay="300"
        />
      </div>
    </div>
  </div>
  <div
    :class="
      getLanguage == 'EN'
        ? 'terms-and-conditions align-text-left'
        : 'terms-and-conditions align-text-right'
    "
  >
    <el-divider content-position="center"
      ><p class="title_1">{{ $t('aboutPage.title4') }}</p></el-divider
    >
    <div class="terms-and-conditions-items">
      <div class="terms-and-conditions-items-images">
        <img
          src="@/assets/about-page/image_13.png"
          v-motion
          :initial="{ opacity: 0, x: -200 }"
          :enter="{
            opacity: 1,
            x: 0,
            transition: {
              mass: 1,
            },
          }"
          :visible="{
            opacity: 1,
            x: 0,
            transition: {
              mass: 1,
            },
          }"
        />
      </div>
      <div class="terms-and-conditions-items-info">
        <h2
          v-motion
          :initial="{ opacity: 0, y: -100 }"
          :enter="{
            opacity: 1,
            y: 0,
            transition: {
              mass: 1.5,
            },
          }"
          :visible="{
            opacity: 1,
            y: 0,
            transition: {
              mass: 1.5,
            },
          }"
        >
          {{ $t('aboutPage.title4_1Details') }}
        </h2>
        <p
          v-motion
          :initial="{ opacity: 0, x: 100 }"
          :enter="{
            opacity: 1,
            x: 0,
            transition: {
              mass: 1,
            },
          }"
          :visible="{
            opacity: 1,
            x: 0,
            transition: {
              mass: 1,
            },
          }"
        >
          <span> {{ $t('aboutPage.title4_2Details') }}</span>
          {{ $t('aboutPage.title4_3Details') }}
        </p>
        <p
          v-motion
          :initial="{ opacity: 0, x: 100 }"
          :enter="{
            opacity: 1,
            x: 0,
            transition: {
              mass: 1.2,
            },
          }"
          :visible="{
            opacity: 1,
            x: 0,
            transition: {
              mass: 1.2,
            },
          }"
          :delay="100"
        >
          <span>{{ $t('aboutPage.title4_4Details') }}</span>
          {{ $t('aboutPage.title4_5Details') }}
        </p>
        <p
          v-motion
          :initial="{ opacity: 0, x: 100 }"
          :enter="{
            opacity: 1,
            x: 0,
            transition: {
              mass: 1.3,
            },
          }"
          :visible="{
            opacity: 1,
            x: 0,
            transition: {
              mass: 1.3,
            },
          }"
          :delay="200"
        >
          <span>{{ $t('aboutPage.title4_6Details') }}</span>
          {{ $t('aboutPage.title4_7Details') }}
        </p>
        <h3
          v-motion
          :initial="{ opacity: 0, x: 100 }"
          :enter="{
            opacity: 1,
            x: 0,
            transition: {
              mass: 1.4,
            },
          }"
          :visible="{
            opacity: 1,
            x: 0,
            transition: {
              mass: 1.4,
            },
          }"
          :delay="300"
        >
          {{ $t('aboutPage.title4_8Details') }}
        </h3>
      </div>
    </div>
  </div>
  <div class="what-we-offer">
    <div class="what-we-offer-content">
      <h4
        class="elementor-container-item"
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :enter="{
          opacity: 1,
          y: 0,
        }"
        :visible="{
          opacity: 1,
          y: 0,
        }"
        :delay="200"
      >
        {{ $t('aboutPage.title7') }}
      </h4>
      <h1
        class="elementor-container-item"
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :enter="{
          opacity: 1,
          y: 0,
        }"
        :visible="{
          opacity: 1,
          y: 0,
        }"
        :delay="200"
      >
        {{ $t('aboutPage.title8') }}
      </h1>
      <div class="what-we-offer-content-items">
        <AboutItemCard
          :imageIcon="['fa', 'book']"
          :title="$t('aboutPage.title9')"
          :body="$t('aboutPage.title9Details')"
          backgroundColor="background-color: #F86F03;"
          :mass="0.5"
        />
        <div class="arrow-image-down">
          <img src="@/assets/about-page/arrow_down_2.png" />
        </div>

        <AboutItemCard
          :imageIcon="['fas', 'basket-shopping']"
          :title="$t('aboutPage.title10')"
          :body="$t('aboutPage.title10Details')"
          backgroundColor="background-color: #525FE1;"
          :mass="1"
        />
        <div class="arrow-image-top">
          <img src="@/assets/about-page/arrow_top_2.png" />
        </div>

        <AboutItemCard
          :imageIcon="['fas', 'trophy']"
          :title="$t('aboutPage.title11')"
          :body="$t('aboutPage.title11Details')"
          backgroundColor="background-color: #FFA41B"
          :mass="1.5"
        />
      </div>
    </div>
  </div>
  <div class="scroll-images">
    <div class="circale-shap"></div>
    <div class="rectangle-shape"></div>
    <div class="vector-image">
      <img src="@/assets/about-page/shape_04_012.png" />
    </div>
    <div class="all-images">
      <div class="item">
        <img
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
          src="@/assets/about-page/image_6.png"
        />
      </div>
      <div class="item">
        <img
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
          src="@/assets/about-page/image_11.png"
        />
      </div>
      <div class="item">
        <img
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
          src="@/assets/about-page/image_8.png"
        />
      </div>
      <div class="item">
        <img
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
          src="@/assets/about-page/image_9.png"
        />
      </div>
    </div>
  </div>
  <div
    :class="
      getLanguage == 'EN'
        ? 'our-info-content align-text-left'
        : 'our-info-content align-text-right'
    "
  >
    <div
      class="our-info-content-mission"
      v-motion
      :initial="{ opacity: 0, y: 150 }"
      :enter="{
        opacity: 1,
        y: 0,
      }"
      :visible="{
        opacity: 1,
        y: 0,
        transition: {
          mass: 1,
        },
      }"
    >
      <h4>{{ $t('aboutPage.mission') }}</h4>
      <h1>{{ $t('aboutPage.missionTitle') }}</h1>
      <p>
        {{ $t('aboutPage.missionDetails') }}
      </p>
    </div>
    <div
      class="our-info-content-vision"
      v-motion
      :initial="{ opacity: 0, y: 150 }"
      :enter="{
        opacity: 1,
        y: 0,
      }"
      :visible="{
        opacity: 1,
        y: 0,
        transition: {
          mass: 1.3,
        },
      }"
    >
      <h4>{{ $t('aboutPage.vision') }}</h4>
      <h1>{{ $t('aboutPage.visionTitle') }}</h1>
      <p>
        {{ $t('aboutPage.visionDetails') }}
      </p>
    </div>
  </div>
</template>

<script>
import AppPageTitleArea from '@/components/app_page_title_area.vue'
import AboutCard from './components/about-card.vue'
import AboutItemCard from './components/about-item-card.vue'
import store from '@/store'
export default {
  name: 'course-page',
  components: {
    AppPageTitleArea,
    AboutCard,
    AboutItemCard,
  },
  data() {
    return {
      scrollValue: 20,
      imageSize: 0,
    }
  },
  computed: {
    getLanguage: () => store.state.user.language,
  },
}
</script>

<style scoped lang="less">
.who-we-are,
.terms-and-conditions,
.what-we-offer,
.scroll-images,
.our-info-content {
  z-index: -1;
}
.align-text-left {
  text-align: left;
}
.align-text-right {
  text-align: right;
}
.who-we-are {
  background-color: #ffff;
  max-width: 1300px;
  display: flex;
  flex-direction: row;
  margin: 0px auto;
  .elementor-container {
    width: 40%;
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    padding: 20px;

    h4 {
      font-size: 16px;
      margin: 0px;
    }
    h1 {
      font-size: 40px;
      color: @color-secondary;
      margin: 0px 0px 20px 0px;
    }
    p {
      margin: 0px 0px 20px 0px;
      color: #6b6b80;
      font-size: 14px;
      text-align: justify;
      text-justify: inter-word;
    }
  }
  .margin-left {
    margin-left: 130px;
  }
  .margin-right {
    margin-right: 130px;
  }
  .elementor-images {
    width: 40%;
    padding-top: 20px;
    position: relative;
    z-index: 0;
    &-large {
      background-image: url('@/assets/about-page/image_3.png');
      background-size: 100% 100%;
      height: 100%;
      max-width: 100%;
      position: relative;
      border-radius: 5px;
      .animate {
        position: absolute;
        right: -15%;
        z-index: 15;
        width: 200px;
        height: 250px;
        border: 3px solid white;
      }
      .small {
        position: absolute;
        width: 250px;
        height: 250px;
        top: 20%;
        left: -15%;
        z-index: -1;
      }
    }
    img {
      border-radius: 5px;
    }
  }
}
.terms-and-conditions {
  max-width: 1300px;
  margin: 150px auto 0px auto;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-sizing: border-box;
  overflow: hidden;
  .title_1 {
    font-size: 20px;
    font-weight: 800;
    letter-spacing: 0.1em;
    color: @color-secondary;
  }
  &-items {
    display: flex;
    flex-direction: row;
    margin-top: 70px;

    &-info {
      width: 50%;
      h2 {
        font-size: 30px;
        font-weight: 700;
        color: @color-secondary;
      }
      p {
        margin: 0px 0px 20px 0px;
        color: #6b6b80;
        font-size: 17px;
        text-align: justify;
        text-justify: inter-word;
        span {
          font-size: 20px;
          font-weight: 700;
          color: @color-primary;
        }
      }
      h3 {
        color: @color-light;
      }
    }
    &-images {
      width: 50%;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
.what-we-offer {
  background-size: 100% 100%;
  background-image: url('../../assets/bg.jpg');
  height: 600px;
  width: 100%;
  margin: 150px 0px;

  &-content {
    max-width: 1080px;
    height: 100%;
    margin: 0px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h4 {
      font-size: 16px;
      color: @color-secondary;
      margin: 0px;
    }
    h1 {
      font-size: 40px;
      color: #231f40;
      margin: 10px 0px 0px 0px;
    }
    &-items {
      margin-top: 40px;
      display: flex;
      flex: row;
      .arrow-image-down {
        margin-top: 50px;
        width: 50px;
        height: 50px;
        position: relative;
        img {
          position: absolute;
          right: -200%;
        }
      }
      .arrow-image-top {
        width: 50px;
        height: 50px;
        position: relative;
        img {
          position: absolute;
          right: -100%;
        }
      }
    }
  }
}
.scroll-images {
  max-width: 1200px;
  margin: 0px auto;
  padding: 0px 20px 100px 20px;
  position: relative;
  z-index: 0;
  overflow: hidden;
  // style='height: 180px; width: 270px'
  //   style='height: 370px; width: 270px'
  //   style='height: 200px; width: 270px'
  //   style='height: 300px; width: 270px'
  .circale-shap {
    width: 100px;
    height: 100px;
    border-radius: 100px;
    background-color: #fb7c5699;
    position: absolute;
    top: 0px;
    right: -30px;
    z-index: -1;
  }
  .rectangle-shape {
    width: 150px;
    height: 150px;
    border-radius: 5px;
    background-color: #fac988;
    position: absolute;
    top: 100px;
    left: 200px;
    z-index: -1;
  }
  .vector-image {
    position: absolute;
    top: 50px;
    left: -50px;
    z-index: -1;
  }
  .all-images {
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-gap: 1em;
    width: 100%;
    box-sizing: border-box;
    .item {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      img {
        width: 100%;
        border-radius: 5px;
      }
    }
  }
}
.our-info-content {
  max-width: 1100px;
  margin: 0px auto;
  display: flex;
  flex-direction: row;
  &-mission,
  &-vision {
    padding: 15px;
    h4 {
      font-size: 16px;
      color: @color-secondary;
      margin: 0px;
    }
    h1 {
      font-size: 30px;
      color: #231f40;
      margin: 15px 0px 40px 0px;
      width: 100%;
    }
    p {
      color: #6b6b80;
      font-size: 16px;
      text-align: justify;
      text-justify: inter-word;
    }
  }
}
@media @tablet {
  .who-we-are {
    background-color: #ffff;
    max-width: 1300px;
    display: flex;
    flex-direction: row;
    margin: 10px;
    .elementor-container {
      width: 60%;
      display: flex;
      flex-direction: column;
      align-content: flex-start;
      padding: 10px;

      h4 {
        font-size: 16px;
        margin: 0px;
      }
      h1 {
        font-size: 30px;
      }
      p {
        font-size: 14px;
      }
    }
    .margin-left {
      margin-left: 20px;
    }
    .margin-right {
      margin-right: 20px;
    }
    .elementor-images {
      width: 40%;
      height: auto;
      padding-top: 0px;
      position: relative;
      z-index: 0;
      &-large {
        background-image: none;
        height: 100%;
        position: none;
        display: flex;
        flex-direction: column;
        .animate {
          width: 100%;
          height: 50%;
          position: relative;
          z-index: 15;
          left: 0;
          bottom: 0;
          border: 3px solid white;
        }
        .small {
          width: 100%;
          height: 50%;
          position: relative;
          left: 0;
          top: 0;
          z-index: -1;
        }
      }
      img {
        border-radius: 5px;
      }
    }
  }
  .terms-and-conditions {
    flex-direction: column;
    .title_1 {
      font-size: 20px;
      font-weight: 800;
      text-align: center;
    }
    &-items {
      display: flex;
      flex-direction: column;
      margin-top: 70px;

      &-info {
        width: 100%;
        h2 {
          font-size: 30px;
          font-weight: 700;
        }
        p {
          font-size: 17px;
          span {
            font-size: 20px;
            font-weight: 700;
          }
        }
      }
      &-images {
        width: 100%;
      }
    }
  }
  .what-we-offer {
    background-size: 100% 100%;
    height: 500px;
    margin: 80px 0px;

    &-content {
      h4 {
        font-size: 14px;
      }
      h1 {
        font-size: 30px;
        margin: 10px 0px 0px 0px;
      }
      &-items {
        .arrow-image-down {
          display: none;
        }
        .arrow-image-top {
          display: none;
        }
      }
    }
  }
  .scroll-images {
    padding: 0px 20px 70px 20px;
    .rectangle-shape {
      display: none;
    }
    .all-images {
      .item {
        justify-content: center;
      }
    }
  }
  .our-info-content {
    &-mission,
    &-vision {
      padding: 20px;
      h4 {
        font-size: 14px;
      }
      h1 {
        font-size: 20px;
        color: #231f40;
        margin: 15px 0px 25px 0px;
        width: 100%;
      }
      p {
        color: #6b6b80;
        font-size: 14px;
        text-align: justify;
        text-justify: inter-word;
      }
    }
  }
}

@media @mobile {
  .who-we-are {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
    box-sizing: border-box;
    .elementor-container {
      width: 100%;
      box-sizing: border-box;
      padding: 0px;

      h4 {
        font-size: 16px;
        margin: 0px;
      }
      h1 {
        font-size: 30px;
        color: @color-secondary;
        margin: 0px 0px 20px 0px;
      }
      p {
        margin: 0px 0px 20px 0px;
        color: #6b6b80;
        font-size: 14px;
        text-align: justify;
        text-justify: inter-word;
      }
    }
    .margin-left {
      margin-left: 0px;
    }
    .margin-right {
      margin-right: 0px;
    }
    .elementor-images {
      width: 100%;
      height: 300px;
      box-sizing: border-box;
      margin-bottom: 30px;
      &-large {
        background-image: url('@/assets/about-page/image_3.png');
        background-size: 100% 100%;
        height: 100%;
        max-width: 100%;
        position: relative;
        border-radius: 5px;
        .animate {
          display: none;
        }
        .small {
          display: none;
        }
      }
      img {
        border-radius: 5px;
      }
    }
  }
  .terms-and-conditions {
    margin: 50px auto 0px auto;
    .title_1 {
      font-size: 14px;
      font-weight: 700;
      margin-bottom: 10px;
      text-align: center;
    }
    &-items {
      display: flex;
      flex-direction: column;
      margin-top: 0px;
      &-info {
        width: 100%;
        h2 {
          font-size: 20px;
        }
        p {
          font-size: 14px;
          span {
            font-size: 16px;
            font-weight: 600;
          }
        }
      }
      &-images {
        width: 100%;
      }
    }
  }
  .what-we-offer {
    background-size: 100% 100%;
    height: auto;
    margin: 50px 0px;
    padding: 30px 20px;
    box-sizing: border-box;
    &-content {
      h4 {
        font-size: 13px;
      }
      h1 {
        font-size: 25px;
        margin: 10px 0px 0px 0px;
      }
      &-items {
        flex-direction: column;
        .arrow-image-down {
          display: none;
        }
        .arrow-image-top {
          display: none;
        }
      }
    }
  }
  .scroll-images {
    padding: 0px 20px 100px 20px;
    .circale-shap {
      display: none;
    }
    .rectangle-shape {
      display: none;
    }
    .vector-image {
      display: none;
    }
    .all-images {
      display: grid;
      grid-template-columns: 100%;
      grid-gap: 1em;
    }
  }
  .our-info-content {
    display: flex;
    flex-direction: column;
    &-mission,
    &-vision {
      padding: 20px;
      h4 {
        font-size: 14px;
        color: @color-secondary;
        margin: 0px;
      }
      h1 {
        font-size: 20px;
        color: #231f40;
        margin: 15px 0px 20px 0px;
        width: 100%;
      }
      p {
        color: #6b6b80;
        font-size: 14px;
        text-align: justify;
        text-justify: inter-word;
      }
    }
  }
}
</style>
