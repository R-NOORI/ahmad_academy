<template>
  <div class="portal-course-card">
    <el-popover
      placement="top-start"
      :title="$t('portalPage.title2')"
      :width="200"
      trigger="hover"
      :content="$t('portalPage.title3')"
    >
      <template #reference>
        <button
          class="image-btn"
          v-show="type == 'classes' ? true : false"
          @click="
            this.$router.push(
              `/portal/class-marks/${registerClassId}/${courseId}`
            )
          "
        >
          {{ $t('portalPage.btn3') }}
        </button>
      </template>
    </el-popover>
    <div></div>
    <img class="card-image" :src="imageLink" />
    <div
      :class="
        isLanguage == 'EN'
          ? 'portal-course-card-content text-left'
          : 'portal-course-card-content text-right'
      "
    >
      <h3>{{ courseTitle }}</h3>
      <div class="portal-course-card-content-items">
        <div class="portal-course-card-content-items-info">
          <p>
            <font-awesome-icon
              :class="
                isLanguage == 'EN'
                  ? 'card-icon text-left'
                  : 'card-icon text-right'
              "
              :icon="['fas', 'language']"
            />
            {{ language }}
          </p>
          <p>
            <font-awesome-icon
              :class="
                isLanguage == 'EN'
                  ? 'card-icon text-left'
                  : 'card-icon text-right'
              "
              :icon="['fas', 'calendar']"
            />
            {{ $t(`courseDetailsPage.${durationType}`) }}
            {{ duration }}
          </p>
          <p>
            <font-awesome-icon
              :class="
                isLanguage == 'EN'
                  ? 'card-icon text-left'
                  : 'card-icon text-right'
              "
              :icon="['fa', 'clock']"
            />
            {{ startTime }}
          </p>
          <p>
            <font-awesome-icon
              :class="
                isLanguage == 'EN'
                  ? 'card-icon text-left'
                  : 'card-icon text-right'
              "
              :icon="['fas', 'money-check']"
            />
            {{
              feeAmount == '' || feeAmount == null
                ? $t('portalPage.message6Details')
                : $t('portalPage.message7Details')
            }}
          </p>
        </div>
        <img
          v-if="feeAmount == '' || feeAmount == null"
          src="@/assets/portal-page/not_pay.png"
        />
        <img v-else src="@/assets/portal-page/pay.png" />
      </div>
      <button @click="openInNewTab(link)">
        <font-awesome-icon style="margin: 0px 10px" :icon="['fas', 'link']" />
        {{ $t('portalPage.btn2') }}
      </button>
      <div
        class="portal-course-card-content-link"
        @click="this.$router.push(`/course/course-details/${type}/${courseId}`)"
      >
        {{ $t('portalPage.message3Details') }}
      </div>
    </div>
  </div>
</template>

<script>
import { ElMessage } from 'element-plus'
import store from '@/store'
export default {
  name: 'course-card',
  props: [
    'courseId',
    'registerClassId',
    'examType',
    'imageLink',
    'courseTitle',
    'language',
    'feeAmount',
    'startTime',
    'duration',
    'durationType',
    'type',
    'link',
  ],
  computed: {
    isLanguage: () => store.state.user.language,
  },
  methods: {
    openInNewTab(url) {
      if (this.feeAmount == '' || this.feeAmount == null) {
        ElMessage({
          message: this.$t('portalPage.message8Details'),
          type: 'warning',
        })
      } else {
        window.open(url, '_blank', 'noreferrer')
      }
    },
  },
}
</script>

<style scoped lang="less">
.portal-course-card {
  margin-top: 50px;
  border-radius: 20px;
  background-color: #ffffff;
  -webkit-box-shadow: 0px 0px 43px 4px rgba(66, 68, 90, 0.12);
  -moz-box-shadow: 0px 0px 43px 4px rgba(66, 68, 90, 0.12);
  box-shadow: 0px 0px 43px 4px rgba(66, 68, 90, 0.12);
  // text-align: center;
  padding: 0px 15px 20px 15px;
  box-sizing: border-box;
  position: relative;
  .image-btn {
    position: absolute;
    top: -25px;
    left: 25px;
    color: @color-secondary;
    font-weight: 700;
    border: 0px;
    padding: 10px 10px;
    font-size: 13px;
    border-radius: 6px;
    transition: 0.8s;
    &:hover {
      cursor: pointer;
      transition: 0.8s;
      background-color: @color-light;
      color: #ffffff;
    }
  }
  .card-image {
    width: 100%;
    height: 180px;
    margin-top: -40px;
    border-radius: 20px;
  }
  .text-left {
    text-align: left;
  }
  .text-right {
    text-align: right;
  }
  &-content {
    &-items {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: stretch;
      padding-bottom: 10px;

      width: 100%;
      &-info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        p {
          font-size: 14px;
          font-weight: 600;
          margin: 0px;
          padding: 0px;
          .text-left {
            margin-right: 5px;
          }
          .text-right {
            margin-left: 5px;
          }
          .card-icon {
            width: 17px;
          }
        }
      }
      img {
        width: 130px;
        height: 110px;
        opacity: 0.7;
      }
    }
    h3 {
      font-size: 20px;
    }
    button {
      width: 100%;
      background-color: @color-secondary;
      color: whitesmoke;
      font-weight: 600;
      border: 0px;
      padding: 10px 15px;
      font-size: 14px;
      border-radius: 6px;
      transition: 0.8s;
      &:hover {
        cursor: pointer;
        transition: 0.8s;
        background-color: @color-light;
        color: #ffffff;
      }
    }
    &-link {
      margin-top: 15px;
      text-align: center;
      color: @color-primary;
      font-size: 13px;
      width: 100%;
      transition: 0.8s;
      &:hover {
        transition: 0.8s;
        color: red;
        cursor: pointer;
        font-weight: 600;
        text-decoration: underline;
      }
    }
  }
}
</style>
