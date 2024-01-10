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
              :icon="['fab', 'youtube']"
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
          <div>{{ $t('footer.address') }}</div>
        </div>
        <div class="content-info-list-nav">
          <font-awesome-icon style="font-size: 15px" :icon="['fas', 'phone']" />
          <span v-if="language === 'EN'">+93(0)70 0073297</span>
          <span v-else>۰۰۹۳۷۰۰۰۷۳۲۹۷</span>
        </div>
        <div class="content-info-list-nav">
          <font-awesome-icon style="font-size: 15px" :icon="['fas', 'phone']" />
          <span v-if="language === 'EN'">+93(0)70 0063298</span>
          <span v-else>۰۰۹۳۷۰۰۰۶۳۲۹۸</span>
        </div>
        <div class="content-info-list-nav">
          <font-awesome-icon
            style="font-size: 15px"
            :icon="['fas', 'envelope']"
          />
          <span>info@alnoorsafaonlineacademy.com</span>
        </div>
      </div>
    </div>
    <p>
      Copyright 2023 Alnoor Safa Academy |
      <span
        @click="
          () =>
            openInNewTab(
              'https://www.facebook.com/aftech.software.co?mibextid=ZbWKwL'
            )
        "
      >
        Developed By AFTECH</span
      >. All Rights Reserved
    </p>
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
  z-index: -10;
  margin-top: 130px;
  padding-top: 30px;
  padding-left: 10px;
  padding-right: 10px;
  box-sizing: border-box;
  .text-right {
    text-align: right;
  }
  .text-left {
    text-align: left;
  }
  .content-info {
    // display: flex;
    // flex-direction: row;
    // align-content: center;
    // justify-content: space-between;
    // align-items: flex-start;
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 8em;
    margin: 30px;
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

      h2 {
        font-size: 25px;
      }
      &-nav {
        transition: 0.5s;
        margin-bottom: 20px;
        display: flex;
        &:hover {
          color: @color-light;
          cursor: pointer;
          transition: 0.5s;
        }
        span {
          margin: 0px 10px;
          font-size: 15px;
        }
        div {
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
    transition: 0.7s;
    span {
      text-decoration: underline;
      transition: 0.7s;

      &:hover {
        color: @color-primary;
        cursor: pointer;
        transition: 0.7s;
      }
    }
  }
}

@media @tablet {
  .footer-container {
    .content-info {
      display: grid;
      grid-template-columns: auto auto auto;
      grid-gap: 1em;
      margin: 10px;
      .socail-madia {
        h2 {
          font-size: 20px;
        }
        p {
          font-size: 14px;
        }
        &-info {
          &-card {
            width: 40px;
            height: 40px;
          }
        }
      }
      &-list {
        h2 {
          font-size: 20px;
        }
        &-nav {
          transition: 0.5s;
          margin-bottom: 20px;
          display: flex;
          &:hover {
            color: @color-light;
            cursor: pointer;
            transition: 0.5s;
          }
          span {
            margin: 0px 10px;
            font-size: 14px;
          }
          div {
            margin: 0px 10px;
            font-size: 15px;
          }
        }
      }
    }
  }
}

@media @mobile {
  .footer-container {
    margin-top: 80px;
    padding-top: 30px;
    .content-info {
      // display: flex;
      // flex-direction: row;
      // align-content: center;
      // justify-content: space-between;
      // align-items: flex-start;
      display: grid;
      grid-template-columns: auto;
      grid-gap: 2em;
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
          max-width: 100%;
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

        h2 {
          font-size: 25px;
        }
        &-nav {
          transition: 0.5s;
          margin-bottom: 20px;
          display: flex;
          &:hover {
            color: @color-light;
            cursor: pointer;
            transition: 0.5s;
          }
          span {
            margin: 0px 10px;
            font-size: 15px;
          }
          div {
            margin: 0px 10px;
            font-size: 15px;
            width: 100%;
          }
        }
      }
    }
    p {
      color: #ffffff;
      font-size: 14px;
      min-width: 90%;
      max-width: 80%;
      margin: 20px 0px 40px 0px;
      transition: 0.7s;
      span {
        text-decoration: underline;
        transition: 0.7s;
        &:hover {
          color: @color-primary;
          cursor: pointer;
          transition: 0.7s;
        }
      }
    }
  }
}
</style>
