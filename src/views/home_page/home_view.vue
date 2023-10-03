<template>
  <div class="container">
    <div class="main-content">
      <div
        v-motion
        :initial="{ opacity: 0, y: 100 }"
        :enter="{ opacity: 1, y: 0 }"
        :delay="200"
        class="hero_text"
      >
        <h4>LEARN NEW THINGS DAILY</h4>
        <h1>Education Is A Path To Success In Life</h1>
        <h5>
          Empower yourself with the knowledge and skills gained through online
          education and best instructors.
        </h5>
        <AppButon
          btn-text="Get Started Today"
          :right-icon="['fas', 'arrow-right']"
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
        ><p class="title_1">WHAT WE OFFER</p></el-divider
      >
      <p class="title_2">Learn New Skills When And Where You Like</p>
      <div class="offers">
        <div class="offers_card">
          <div class="offers_icon_container">
            <font-awesome-icon
              class="icon"
              :icon="['fas', 'briefcase']"
              size="lg"
            />
          </div>
          <h3>Expert Instructions</h3>
          <p>
            We have a highly expert and experience instructor that can you help
            you acheieve your goals
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
          <h3>Video Tutorials</h3>
          <p>
            We have a highly expert and experience instructor that can you help
            you acheieve your goals
          </p>
        </div>
        <!-- card 3 -->
        <div class="offers_card">
          <div class="offers_icon_container">
            <font-awesome-icon class="icon" :icon="['fas', 'gear']" size="lg" />
          </div>
          <h3>Learn From Anywhere</h3>
          <p>
            We have a highly expert and experience instructor that can you help
            you acheieve your goals
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
        ><p class="title_1">SKILLED INSTRUCTOR</p></el-divider
      >
      <p class="title_2">Introduce Our Life Coaches</p>
      <div class="instructor">
        <!-- image 1 -->
        <div class="image_container">
          <div class="image_box">
            <div class="image_content">
              <img src="@/assets/person.jpg" />
              <div class="content">
                <div class="btn">f</div>
                <div class="btn">in</div>
              </div>
            </div>
          </div>
          <div class="details">
            <p class="name">Khalid Noori</p>
            <p class="occupation">Frontend Developer</p>
          </div>
        </div>
        <!-- image 2  -->
        <div class="image_container">
          <div class="image_box">
            <div class="image_content">
              <img src="@/assets/person.jpg" />
              <div class="content">
                <div class="btn">f</div>
                <div class="btn">in</div>
              </div>
            </div>
          </div>
          <div class="details">
            <p class="name">Jamil Ahmad Qurishi</p>
            <p class="occupation">UX/UI Designer</p>
          </div>
        </div>
        <!-- image 3 -->
        <div class="image_container">
          <div class="image_box">
            <div class="image_content">
              <img src="@/assets/person.jpg" />
              <div class="content">
                <div class="btn">f</div>
                <div class="btn">in</div>
              </div>
            </div>
          </div>
          <div class="details">
            <p class="name">Navid Ahmad Mubariz</p>
            <p class="occupation">SEO & Managerr</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppButon from '@/components/app_button.vue'

export default {
  components: {
    AppButon,
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
    // width: 1450px;
    .hero_text {
      width: 600px;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-direction: column;
      margin-right: 40px;
      h4 {
        font-weight: 800;
        font-size: 16px;
        color: #525fe1;
        text-align: left;
      }
      h1 {
        font-size: 72px;
        text-align: left;
        margin: 0;
      }
      h5 {
        font-size: 16px;
        color: #54595f;
        text-align: left;
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
      display: flex;
      justify-content: space-evenly;
      align-items: center;
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
        h3 {
          text-align: left;
        }
        p {
          text-align: left;
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
