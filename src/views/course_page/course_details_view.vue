<template>
  <div class="course-details-page">
    <AppPageTitleArea
      :currentPath="this.$route.fullPath.split('/')"
      :title="this.$route.name"
    />
    <div class="course-img">
      <img
        src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2023/03/course-32.webp"
      />
    </div>
    <div class="course-info">
      <div class="course-info-summary">
        <div class="instructor-info">
          <img
            src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/11/instructor-03-01-2-100x100.webp"
          />
          <span>ByJames Carlson</span>
        </div>
        <h1>Grow Personal Financial Security Thinking & Principles</h1>
        <div class="course-description">
          <h3>Course Description</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
            gravida. Risus commodo viverra maecenas accumsan lacus vel
            facilisis.
          </p>
          <h3>What You’ll Learn From This Course</h3>
          <ol>
            <li>
              Neque sodales ut etiam sit amet nisl purus non tellus orci ac
              auctor
            </li>
            <li>
              Tristique nulla aliquet enim tortor at auctor urna. Sit amet
              aliquam id diam maer
            </li>
            <li>
              Nam libero justo laoreet sit amet. Lacus sed viverra tellus in hac
            </li>
            <li>
              Tempus imperdiet nulla malesuada pellentesque elit eget gravida
              cum sociis
            </li>
          </ol>
        </div>
      </div>
      <div class="course-info-sidebar">
        <div class="course-info-sidebar-details">
          <div class="sidebar-img">
            <img
              src="https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_1280.jpg"
            />
            <div class="sidebar-brn"></div>
          </div>
          <div class="course-details">
            <div class="course-details-items">
              <span>
                <font-awesome-icon
                  style="margin-right: 10px"
                  :icon="['fa', 'clock']"
                />
                Duration</span
              >
              <span>17 Weeks</span>
            </div>
            <el-divider style="margin: 0px" />
            <div class="course-details-items">
              <span>
                <font-awesome-icon
                  style="margin-right: 10px"
                  :icon="['fas', 'clipboard-list']"
                />
                Lessons</span
              >
              <span>18</span>
            </div>
            <el-divider style="margin: 0px" />
            <div class="course-details-items">
              <span>
                <font-awesome-icon
                  style="margin-right: 10px"
                  :icon="['fas', 'chart-simple']"
                />

                Skill level</span
              >
              <span>Expert</span>
            </div>
            <el-divider style="margin: 0px" />
            <div class="course-details-items">
              <span>
                <font-awesome-icon
                  style="margin-right: 10px"
                  :icon="['fas', 'language']"
                />
                Language</span
              >
              <span>English</span>
            </div>
            <el-divider style="margin: 0px" />
            <div class="course-details-items">
              <span>
                <font-awesome-icon
                  style="margin-right: 10px"
                  :icon="['far', 'user']"
                />
                Instructor</span
              >
              <span>James Carlson</span>
            </div>
            <el-divider style="margin: 0px" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppPageTitleArea from '@/components/app_page_title_area.vue'
export default {
  name: 'course-details-page',
  components: { AppPageTitleArea },
  data() {
    return {
      zoom: 15,
    }
  },
}
</script>

<style scoped lang="less">
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
    }
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
      margin: 0px 10px;
      .instructor-info {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 60px 0px 30px 0px;
        img {
          width: 40px;
          height: 40px;
          border-radius: 100%;
          margin-right: 10px;
        }
        span {
          font-size: 16px;
          color: #231f40;
          font-weight: 600;
        }
      }
      h1 {
        color: #231f40;
        text-align: left;
        font-size: 40px;
        margin: 0px 0px 50px 0px;
      }
      .course-description {
        width: 100%;
        box-sizing: border-box;
        border-radius: 8px;
        border: 1px solid #eeeeee;
        padding: 30px;
        h3 {
          text-align: left;
          margin: 0px;
          color: #231f40;
          font-size: 24px;
          margin: 0px 0px 20px 0px;
        }
        p {
          text-align: left;
          font-size: 16px;
          color: #6f6b80;
          line-height: 1.7em;
          margin: 0px 0px 30px 0px;
        }
        ol {
          padding: 0px 0px 0px 20px;
          margin: 0px 0px 30px 0px;
        }
        ol li {
          font-size: 16px;
          color: #6f6b80;
          margin: 10px 0px;
          text-align: left;
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
        .sidebar-img {
          width: 100%;
          height: 240px;
          overflow: hidden;
          border-radius: 5px;
          img {
            width: 100%;
            height: 100%;
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
</style>
