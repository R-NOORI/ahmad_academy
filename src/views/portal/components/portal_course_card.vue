<template>
  <div class="portal-course-card">
    <img class="card-image" :src="courseImageLink" />
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
            <font-awesome-icon class="card-icon" :icon="['fas', 'language']" />
            {{ language }}
          </p>
          <p>
            <font-awesome-icon
              class="card-icon"
              :icon="['fas', 'clipboard-list']"
            />
            {{ lessons }}
          </p>
          <p>
            <font-awesome-icon class="card-icon" :icon="['fa', 'clock']" />
            {{ startTime }}
          </p>
          <p>
            <font-awesome-icon
              class="card-icon"
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
      <button @click="openInNewTab(zoomLink)">
        {{ $t('portalPage.btn2') }}
      </button>
      <div
        class="portal-course-card-content-link"
        @click="
          this.$router.push(
            `/course/course-details/${courseId}/${instructorId}`
          )
        "
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
    'instructorId',
    'courseId',
    'courseImageLink',
    'courseTitle',
    'language',
    'lessons',
    'feeAmount',
    'startTime',
    'zoomLink',
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
          .card-icon {
            margin: 0px 10px;
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
      &:hover {
        cursor: pointer;
        transition: 0.8s;
        background-color: @color-primary;
        color: #ffffff;
      }
    }
    &-link {
      margin-top: 15px;
      text-align: center;
      color: @color-primary;
      font-size: 13px;
      width: 100%;
      &:hover {
        color: red;
        cursor: pointer;
        font-weight: 600;
        text-decoration: underline;
      }
    }
  }
}
</style>
