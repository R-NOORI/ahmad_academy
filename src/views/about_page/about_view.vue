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
      class=""
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
          :style="'top: ' + scrollValue + '%'"
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
      src="@/assets/about-page/image_6.png"
      style="height: 180px; width: 270px"
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
      style="height: 370px; width: 270px"
      src="@/assets/about-page/image_11.png"
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
      style="height: 200px; width: 270px"
      src="@/assets/about-page/image_8.png"
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
      style="height: 300px; width: 270px"
      src="@/assets/about-page/image_9.png"
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
import AboutItemCard from './components/about-item-card.vue'
import store from '@/store'
export default {
  name: 'course-page',
  components: { AppPageTitleArea, AboutItemCard },
  data() {
    return {
      scrollValue: 20,
      imageSize: 0,
    }
  },
  // "title1Details": "Welcome to Alnoor Safa Academy, it is an online education institution that specializes in providing various subjects according to the needs of students from 1st to 6th grade. Our curriculum includes learning Islam, (Noorani Qaida, Quran, Tajwid, Hadith, Fiqh, Aqidah) as well as more languages. Like Pashto, Dari, English, Arabic. We also cover topics such as Islamic and national history, geography and culture. And more our short-specialized courses expand your knowledge in a particular subject. We offer easy Islamic and modern education through our unique platform.",
  // "title1Details": "النور صفا اکاډمي ته ښه راغلاست، دا آنلاین زده کړو یوه غوره اداره ده چي د لومړي څخه تر شپږم ټولګي پوري د زده کونکو د اړتیاو سره سم د مختلفو مضامینو په وړاندي کولو کي تخصص لري. زموږ په نصاب کي اسلامي زده کړي، ( نوراني قاعده، قرآن کریم، تجوید، عقیده، فقه) او همدارنګه نوري ژبي شاملي دي. لکه پښتو، دري، انګلیسي، عربي. موږ د اسلامي او ملي تاریخ، جغرافیې او کلتور په څیر موضوعاتو ته هم پام کوو. او همدا ډول زموږ لنډ تخصصي کورسونه ستاسو پوهي ته په یوه ځانکړي مضمون کي پراختیا ورکوي.  زموږ د یوه ځانګړي فلټ فارم له مخي اسانه اسلامي او عصري زده‌کړي وړاندي کوو.",
  // "title1Details": "به آکادمی النور صفا خوش آمدید، این یک موسسه آموزش آنلاین است که در ارائه موضوعات مختلف با توجه به نیاز دانش آموزان صنف اول تا ششم تخصص دارد. برنامه درسی ما شامل یادگیری اسلام، (قاعده نورانی، قرآن، تجوید، فقه، حدیث، عقیده) و همچنین زبان های مختلف است. مانند پشتو، دری، انگلیسی، عربی. ما همچنین موضوعاتی مانند تاریخ اسلامی و ملی، جغرافیا و فرهنگ را پوشش می دهیم. و همچنین دوره های تخصصی کوتاه ما دانش شما را در یک موضوع خاص گسترش می دهد. ما آموزش آسان اسلامی و مدرن را از طریق ویبساست خوب به دانش اموز  ارائه می دهیم.",

  computed: {
    getLanguage: () => store.state.user.language,
  },
}
</script>

<style scoped lang="less">
.align-text-left {
  text-align: left;
}
.align-text-right {
  text-align: right;
}
.who-we-are {
  background-color: #ffff;
  max-width: 1090px;
  border: 1px solid blacks;
  display: flex;
  flex-direction: row;
  align-content: space-between;
  justify-content: space-between;
  margin: 0px auto;

  .elementor-container {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-content: flex-start;

    h4 {
      font-size: 16px;
      margin: 0px;
    }
    p {
      line-height: 1.5;
      color: #6b6b80;
      font-size: 20px;
      text-align: justify;
      text-justify: inter-word;
    }
    h1 {
      font-size: 40px;
      // color: @color-secondary;
      margin: 0px;
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
        left: -25%;
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
      text-align: justify;
      text-justify: inter-word;
    }
  }
}
</style>
