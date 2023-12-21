<template>
  <div class="nav">
    <font-awesome-icon
      class="bars_icon"
      :icon="['fas', 'bars']"
      @click="showBars"
    />
    <div class="app_icon">
      <img src="@/assets/logo_2.png" />
      <h2>{{ $t('header.title') }}</h2>
    </div>
    <div class="nav_item">
      <router-link to="/">{{ $t('header.home') }}</router-link>
      <router-link
        to="/course"
        :class="{ activeNav: this.$route.name == 'courseDetails' }"
        >{{ $t('header.course') }}</router-link
      >
      <router-link to="/contact">{{ $t('header.contact') }}</router-link>
      <router-link to="/about">{{ $t('header.about') }}</router-link>
      <router-link
        to="/portal"
        :class="{ activeNav: this.$route.fullPath == '/portal/setting' }"
        v-show="isLoggendIn"
        >{{ $t('header.portal') }}</router-link
      >
      <div class="header_btn">
        <el-button
          color="#0677ca"
          size="large"
          @click="handleSignOut()"
          v-if="isLoggendIn"
        >
          <font-awesome-icon
            :icon="['fas', 'right-from-bracket']"
            style="margin: 0px 8px"
          />
          <span>{{ $t('header.signout') }}</span>
        </el-button>
        <el-button
          color="#0677ca"
          size="large"
          @click="() => this.$router.push('/login')"
          v-else
        >
          <font-awesome-icon :icon="['far', 'user']" style="margin: 0px 8px" />

          <span>{{ $t('header.loginRegister') }}</span>
        </el-button>
      </div>
      <el-dropdown class="lan-btn" @command="handleCommand">
        <el-button circle color="#0677ca" size="large">
          <font-awesome-icon :icon="['fas', 'globe']" size="xl" />
        </el-button>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="EN">English</el-dropdown-item>
            <el-dropdown-item command="PA">پښتو</el-dropdown-item>
            <el-dropdown-item command="FA">فارسی</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
    <div
      :class="
        selectLanguage == 'EN'
          ? 'nav_phone left_nav_item'
          : 'nav_phone right_nav_item'
      "
    >
      <div class="nav_item_header">
        <font-awesome-icon
          class="icon"
          :icon="['fas', 'xmark']"
          @click="closeBars"
        />
        <div class="image_text">
          <img src="@/assets/logo_2.png" />
          <h2>{{ $t('header.title') }}</h2>
        </div>
      </div>
      <router-link to="/">{{ $t('header.home') }}</router-link>
      <router-link
        to="/course"
        :class="{ activeNav: this.$route.name == 'courseDetails' }"
        >{{ $t('header.course') }}</router-link
      >
      <router-link to="/contact">{{ $t('header.contact') }}</router-link>
      <router-link to="/about">{{ $t('header.about') }}</router-link>
      <router-link
        to="/portal"
        :class="{ activeNav: this.$route.fullPath == '/portal/setting' }"
        v-show="isLoggendIn"
        >{{ $t('header.portal') }}</router-link
      >
      <div class="header_btn">
        <el-button
          color="#0677ca"
          size="large"
          @click="handleSignOut()"
          v-if="isLoggendIn"
        >
          <font-awesome-icon
            :icon="['fas', 'right-from-bracket']"
            style="margin: 0px 8px"
          />
          <span>{{ $t('header.signout') }}</span>
        </el-button>
        <el-button
          color="#0677ca"
          size="large"
          @click="() => this.$router.push('/login')"
          v-else
        >
          <font-awesome-icon :icon="['far', 'user']" style="margin: 0px 8px" />

          <span>{{ $t('header.loginRegister') }}</span>
        </el-button>
      </div>
      <el-dropdown
        class="lan-btn"
        @command="handleCommand"
        style="margin-top: 10px"
      >
        <el-button circle color="#0677ca" size="large">
          <font-awesome-icon :icon="['fas', 'globe']" size="xl" />
        </el-button>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="EN">English</el-dropdown-item>
            <el-dropdown-item command="PA">پښتو</el-dropdown-item>
            <el-dropdown-item command="FA">فارسی</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { auth } from '@/firebase/config'
import router from '@/router'
import store from '@/store'
import { mapActions } from 'vuex'
import { getLocaleLanguage } from '@/lib/utils'
export default {
  props: ['isScrolling'],
  data() {
    return {}
  },
  computed: {
    isLoggendIn: () => store.state.user.loggedIn,
    selectLanguage: () => store.state.user.language,
  },
  mounted() {
    this.handleCommand(getLocaleLanguage())
  },
  updated() {
    this.closeBars()
  },
  methods: {
    ...mapActions(['removeUserInfo', 'setLocaleLanguage']),
    getCurrentUser() {
      return new Promise((resolove, reject) => {
        const removeListener = auth.onAuthStateChanged((user) => {
          removeListener()
          resolove(user)
        }, reject)
      })
    },
    handleCommand(command) {
      this.$i18n.locale = command
      this.setLocaleLanguage({ lan: command })
      const elems = document.getElementsByTagName('*')
      for (let elem of elems) {
        if (command == 'EN') {
          elem.style.direction = 'ltr'
        } else {
          elem.style.direction = 'rtl'
        }
      }
    },
    showBars() {
      const elems = document.getElementsByClassName('nav_phone')
      for (let elem of elems) {
        elem.style.display = 'flex'
      }
    },
    closeBars() {
      const elems = document.getElementsByClassName('nav_phone')
      for (let elem of elems) {
        elem.style.display = 'none'
      }
    },
    handleSignOut() {
      auth.signOut().then(() => {
        this.removeUserInfo()
        router.push('/')
      })
    },
  },
}
</script>

<style lang="less">
.nav {
  background-color: white;
  display: flex;
  justify-content: space-around;
  box-sizing: border-box;
  align-items: center;
  height: 80px;
  width: 100%;
  z-index: 10;
  position: sticky;
  top: 0;
  padding: 0px 20px;
  .app_icon {
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    box-sizing: border-box;

    img {
      width: 50px;
      height: 50px;
    }
    h2 {
      margin: 0px 10px;
      font-weight: bold;
      text-decoration: none;
      vertical-align: middle;
      font-size: medium;
      color: @color-secondary;
    }
  }
  .bars_icon {
    display: none;
  }

  .nav_item {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    .nav_item_header {
      display: none;
    }
    .activeNav {
      color: @color-light;
      border-bottom: 2px solid @color-light;
    }
  }
  .header_btn {
    color: white;
    margin-left: 50px;
    span {
      color: white;
      font-weight: bold;
      font-size: medium;
    }
  }
  .lan-btn {
    margin: 0px 10px;
  }
}
.nav_phone {
  display: none;
}
// .scrolledNav {
//   // background-color: white;
//   // box-shadow: 1px 10px 20px -5px rgba(112, 112, 112, 0.57);
//   // -webkit-box-shadow: 1px 10px 20px -5px rgba(112, 112, 112, 0.57);
//   // -moz-box-shadow: 1px 10px 20px -5px rgba(112, 112, 112, 0.57);
//   // width: 100%;
// }

a {
  font-weight: bold;
  color: #000000;
  text-decoration: none;
  margin: 0 20px;
  vertical-align: middle;
  font-size: medium;
  transition: 0.5s;

  &:hover {
    color: @color-light;
    transition: 0.5s;
  }

  &.router-link-exact-active {
    transition: 0.5s;
    color: @color-secondary;
    border-bottom: 2px solid @color-secondary;
  }
}
// .example-showcase .el-dropdown-link {
//   transition: 0.5s;
//   cursor: pointer;
//   color: var(--el-color-primary);
//   display: flex;
//   align-items: center;
// }
@media @tablet {
  .nav {
    justify-content: space-between;
    height: 70px;
    .app_icon {
      img {
        width: 50px;
        height: 50px;
      }
      h2 {
        display: none;
      }
    }
    .bars_icon {
      display: none;
    }
    .nav_item {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      .nav_item_header {
        display: none;
      }
      .activeNav {
        color: @color-light;
        border-bottom: 2px solid @color-light;
      }
    }
    .header_btn {
      color: white;
      margin-left: 10px;
      span {
        color: white;
        font-weight: bold;
        font-size: medium;
      }
    }
    .lan-btn {
      margin: 0px 5px;
    }
  }

  a {
    font-weight: bold;
    color: #000000;
    text-decoration: none;
    padding: 10px;
    margin: 10px 0px;
    vertical-align: middle;
    font-size: medium;
    transition: 0.5s;

    &:hover {
      color: @color-light;
      transition: 0.5s;
    }

    &.router-link-exact-active {
      transition: 0.5s;
      color: @color-secondary;
      border-bottom: 2px solid @color-secondary;
    }
  }
}
@media @mobile {
  .nav {
    height: 50px;
    justify-content: space-between;
    .app_icon {
      img {
        width: 40px;
        height: 40px;
      }
    }
    .nav_item {
      display: none;
    }
    .bars_icon {
      display: flex;
    }
    .nav_phone {
      height: 100vh;
      display: none;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      background-color: rgba(0, 0, 0, 0.788);
      z-index: 9999;
      padding: 5px 20px;
      .nav_item_header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
        width: 100%;
        margin: 10px 0px;
        .icon {
          color: white;
          font-size: 20px;
          background-color: @color-light;
          border-radius: 10px;
          padding: 5px;
        }
        .image_text {
          width: 100%;
          text-align: center;
          margin: 15px 0px;
          img {
            width: 70px;
            height: 70px;
          }
          h2 {
            font-weight: bold;
            text-decoration: none;
            vertical-align: middle;
            font-size: medium;
            color: @color-secondary;
          }
        }
      }
      .activeNav {
        color: @color-light;
        border-bottom: 2px solid @color-light;
      }
    }
  }
  .left_nav_item {
    position: absolute;
    top: 0px;
    left: 0;
    right: 50px;
    bottom: 0;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    text-align: left;
    animation-name: leftBars;
    animation-duration: 0.5s;
  }
  .right_nav_item {
    animation-name: rightBars;
    animation-duration: 0.5s;
    position: absolute;
    top: 0px;
    left: 50px;
    right: 0px;
    bottom: 0;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    text-align: right;
  }
  .header_btn {
    color: white;
    span {
      color: white;
      font-weight: bold;
      font-size: medium;
    }
  }
  .lan-btn {
    margin: 20px 0px;
    z-index: 99999;
  }
  a {
    color: white;
    padding: 10px;
    margin: 10px 0px;
    width: 100%;
    &:hover {
      color: @color-light;
      transition: 0.5s;
    }
    &.router-link-exact-active {
      transition: 0.5s;
      color: @color-secondary;
      border-bottom: 2px solid @color-secondary;
    }
  }
}

@keyframes leftBars {
  to {
    left: 0px;
  }
  from {
    right: 100%;
  }
}
@keyframes rightBars {
  from {
    left: 100%;
  }
  to {
    right: 0px;
  }
}
</style>
