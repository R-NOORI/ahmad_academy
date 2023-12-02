<template>
  <div class="footer-container">
    <div
      :class="
        language == 'EN' ? 'content-info text-left' : 'content-info text-right'
      "
    >
      <div class="socail-madia">
        <h2>{{ $t('footer.title1') }}</h2>
        <p>
          {{ $t('footer.titleDetails') }}
        </p>
        <div class="socail-madia-info">
          <div
            class="socail-madia-info-card"
            @click="
              () =>
                openInNewTab(
                  'https://www.facebook.com/AlnoorSafaAcademy?mibextid=ZbWKwL '
                )
            "
          >
            <font-awesome-icon
              style="font-size: 25px"
              :icon="['fab', 'facebook-f']"
            />
          </div>
          &nbsp; &nbsp;
          <div
            class="socail-madia-info-card"
            @click="
              () =>
                openInNewTab(
                  'https://instagram.com/alnoorsafa.onlineacademy?igshid=OGQ5ZDc2ODk2ZA=='
                )
            "
          >
            <font-awesome-icon
              style="font-size: 25px"
              :icon="['fab', 'instagram']"
            />
          </div>
        </div>
      </div>
      <div class="content-info-list">
        <h2>{{ $t('footer.title2') }}</h2>
        <div
          class="content-info-list-nav"
          @click="() => this.$router.push('/contact')"
        >
          <font-awesome-icon
            style="font-size: 13px"
            :icon="['fas', angleIcon]"
          />
          <span>{{ $t('footer.contactUs') }}</span>
        </div>
        <div
          class="content-info-list-nav"
          @click="() => this.$router.push('/about')"
        >
          <font-awesome-icon
            style="font-size: 13px"
            :icon="['fas', angleIcon]"
          />
          <span>{{ $t('footer.aboutUs') }}</span>
        </div>
        <div
          class="content-info-list-nav"
          @click="() => this.$router.push('/course')"
        >
          <font-awesome-icon
            style="font-size: 13px"
            :icon="['fas', angleIcon]"
          />
          <span>{{ $t('footer.ourCourse') }}</span>
        </div>

        <div
          class="content-info-list-nav"
          @click="() => this.$router.push('/login')"
        >
          <font-awesome-icon
            style="font-size: 13px"
            :icon="['fas', angleIcon]"
          />
          <span>{{ $t('footer.newAccount') }}</span>
        </div>
      </div>
      <div class="content-info-list">
        <h2>{{ $t('footer.title3') }}</h2>
        <div class="content-info-list-nav">
          <font-awesome-icon
            style="font-size: 15px"
            :icon="['fas', 'location-dot']"
          />
          <span>{{ $t('footer.address') }}</span>
        </div>
        <div class="content-info-list-nav">
          <font-awesome-icon style="font-size: 15px" :icon="['fas', 'phone']" />
          <span>+93(0)70 0073297</span>
        </div>
        <div class="content-info-list-nav">
          <font-awesome-icon style="font-size: 15px" :icon="['fas', 'phone']" />
          <span>+93(0)70 0063298</span>
        </div>
        <div class="content-info-list-nav">
          <font-awesome-icon
            style="font-size: 15px"
            :icon="['fas', 'envelope']"
          />
          <span>yourmailaddress@example.com</span>
        </div>
      </div>
    </div>
    <p>Copyright 2023 EduVibe | Developed By DevsVibe. All Rights Reserved</p>
  </div>
</template>
<script>
import store from '@/store'
export default {
  computed: {
    language: () => store.state.user.language,
    angleIcon: () =>
      store.state.user.language == 'EN' ? 'angles-right' : 'angles-left',
  },
  methods: {
    openInNewTab(url) {
      window.open(url, '_blank', 'noreferrer')
    },
  },
}
</script>

<style lang="less" scoped>
.footer-container {
  background-color: @color-secondary;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 130px;
  padding-top: 30px;
  .text-right {
    text-align: right;
  }
  .text-left {
    text-align: left;
  }
  .content-info {
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 30px;
    min-width: 71%;
    flex-wrap: wrap;
    .socail-madia {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      color: #fff;
      h2 {
        font-size: 25px;
      }
      p {
        font-size: 16px;
        max-width: 250px;
        margin: 0px 0px 20px 0px;
      }
      &-info {
        display: flex;
        flex-direction: row;
        &-card {
          width: 50px;
          height: 50px;
          background-color: @color-light;
          margin: 0px;
          border-radius: 5px;
          transition: 0.5s;
          display: flex;
          justify-content: center;
          align-items: center;
          &:hover {
            color: @color-light;
            background-color: white;
            transition: 0.5s;
          }
        }
      }
    }
    &-list {
      display: flex;
      flex-direction: column;
      color: #fff;
      margin: 0px 10px 0px 20px;

      h2 {
        font-size: 25px;
      }
      &-nav {
        transition: 0.5s;
        margin-bottom: 20px;
        &:hover {
          color: @color-light;
          cursor: pointer;
          transition: 0.5s;
        }
        span {
          margin: 0px 10px;
          font-size: 15px;
        }
      }
    }
  }
  p {
    color: #ffffff;
    font-size: 16px;
    min-width: 90%;
    max-width: 80%;
    margin: 70px 0px 40px 0px;
  }
}
</style>
