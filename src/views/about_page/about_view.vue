<template>
  <AppPageTitleArea
    :currentPath="this.$route.fullPath.split('/')"
    :title="this.$route.name"
  />
  <div class="who-we-are">
    <div class="elementor-images">
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
          src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/about-group-02-2.jpg"
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
          :style="'top: ' + scrollValue + '%'"
          src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/about-group-03-2.jpg"
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
      <h4>WHO WE ARE</h4>
      <h1>We Offer The Best Carrier</h1>
      <AboutCard
        imageIcon="student"
        title="Industry Expert
      Instructor"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      eiusmoded tempor incididunt dolore magna aliqua."
        backgroundColor="background-color: #ffa41b1a"
      />
      <AboutCard
        imageIcon="book"
        title="Up-to-Date Course Content"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmoded tempor incididunt dolore magna aliqua."
        backgroundColor="background-color: #525FE11A;"
      />
      <AboutCard
        imageIcon="reward"
        title="Biggest Student Community"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmoded tempor incididunt dolore magna aliqua."
        backgroundColor="background-color: #FB7C561A;"
      />
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
        WHAT WE OFFER
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
        How Does EduVibe Work?
      </h1>
      <div class="what-we-offer-content-items">
        <AboutItemCard
          :imageIcon="['fa', 'book']"
          title="Choose Any Courses"
          body="Lorem ipsum dolor amet, consectetur adipiscing elited uspendisse varius enim"
          backgroundColor="background-color: #F86F03;"
          :mass="0.5"
        />
        <div class="arrow-image-down">
          <img src="@/assets/about-page/arrow_down_2.png" />
        </div>

        <AboutItemCard
          :imageIcon="['fas', 'basket-shopping']"
          title="Purchase Your Course"
          body="Lorem ipsum dolor amet, consectetur adipiscing elited uspendisse varius enim"
          backgroundColor="background-color: #525FE1;"
          :mass="1"
        />
        <div class="arrow-image-top">
          <img src="@/assets/about-page/arrow_top_2.png" />
        </div>

        <AboutItemCard
          :imageIcon="['fas', 'trophy']"
          title="Great! Start Learn"
          body="Lorem ipsum dolor amet, consectetur adipiscing elited uspendisse varius enim"
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

    <img
      v-motion
      :initial="{ opacity: 0, y: 100 }"
      :enter="{
        opacity: 1,
        y: 0,
      }"
      :visible="{
        opacity: 1,
        y: 0,
      }"
      src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2023/02/mission-gallery-01.jpg"
    />
    <img
      v-motion
      :initial="{ opacity: 0, y: 100 }"
      :enter="{
        opacity: 1,
        y: 0,
      }"
      :visible="{
        opacity: 1,
        y: 0,
      }"
      src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2023/02/mission-gallery-02.jpg"
    />
    <img
      v-motion
      :initial="{ opacity: 0, y: 100 }"
      :enter="{
        opacity: 1,
        y: 0,
      }"
      :visible="{
        opacity: 1,
        y: 0,
      }"
      src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2023/02/mission-gallery-03.jpg"
    />
    <img
      v-motion
      :initial="{ opacity: 0, y: 100 }"
      :enter="{
        opacity: 1,
        y: 0,
      }"
      :visible="{
        opacity: 1,
        y: 0,
      }"
      src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2023/02/mission-gallery-04.jpg"
    />
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
      :initial="{ opacity: 0, y: 100 }"
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
      :initial="{ opacity: 0, y: 100 }"
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
  components: { AppPageTitleArea, AboutCard, AboutItemCard },
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
.who-we-are {
  background-color: #ffff;
  max-width: 1300px;
  border: 1px solid blacks;
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
      color: @color-secondary;
      text-align: left;
      margin: 0px;
    }
    h1 {
      font-size: 40px;
      text-align: left;
      color: #231f40;
      margin: 15px 0px 40px 0px;
    }
  }
  .elementor-images {
    width: 50%;
    padding-top: 20px;
    position: relative;
    z-index: 0;
    margin-right: 130px;

    &-large {
      background-image: url('https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/about-group-01-2.jpg');
      background-size: 100% 100%;
      height: 100%;
      max-width: 100%;
      position: relative;
      border-radius: 5px;
      margin-left: 100px;
      .animate {
        position: absolute;
        right: -15%;
        z-index: 15;
      }
      .small {
        position: absolute;
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
          right: -200%;
        }
      }
    }
  }
}

.scroll-images {
  max-width: 1200px;
  margin: 0px auto;
  padding: 0px 0px 100px 0px;
  position: relative;
  z-index: 0;
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
  img {
    border-radius: 5px;
    margin: 0px 15px;
  }
}

.align-text-left {
  text-align: left;
}
.align-text-right {
  text-align: right;
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
      font-size: 35px;
      color: #231f40;
      margin: 15px 0px 40px 0px;
      width: 100%;
    }
    p {
      color: #6b6b80;
      font-size: 16px;
    }
  }
}
</style>
