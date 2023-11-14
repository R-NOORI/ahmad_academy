<template>
  <div :class="isScrolling ? 'scrolledNav' : 'nav'">
    <div class="app_icon">
      <img src="@/assets/logo.png" />
    </div>
    <div class="nav_item">
      <router-link to="/">Home</router-link>
      <router-link
        to="/course"
        :class="{ activeNav: this.$route.fullPath == '/course/course-details' }"
        >Courses</router-link
      >
      <router-link to="/contact">Contact</router-link>
      <router-link to="/about">About</router-link>
      <router-link
        to="/portal"
        :class="{ activeNav: this.$route.fullPath == '/portal/setting' }"
        v-show="isLoggendIn"
        >Portal</router-link
      >
      <div class="header_btn">
        <el-button
          color="#525fe1"
          size="large"
          @click="handleSignOut()"
          v-if="isLoggendIn"
        >
          <font-awesome-icon
            :icon="['fas', 'right-from-bracket']"
            style="margin-right: 8px"
          />
          <span> Sign Out</span>
        </el-button>
        <el-button
          color="#525fe1"
          size="large"
          @click="() => this.$router.push('/login')"
          v-else
        >
          <font-awesome-icon
            :icon="['far', 'user']"
            style="margin-right: 8px"
          />

          <span> Login / Register</span>
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { auth } from '@/firebase/config'
import router from '@/router'
import store from '@/store'
import { mapActions } from 'vuex'
export default {
  props: ['isScrolling'],
  data() {
    return {}
  },
  computed: {
    isLoggendIn: () => store.state.user.loggedIn,
  },
  methods: {
    ...mapActions(['removeUserInfo']),
    getCurrentUser() {
      return new Promise((resolove, reject) => {
        const removeListener = auth.onAuthStateChanged((user) => {
          removeListener()
          resolove(user)
        }, reject)
      })
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

<style lang="less" scoped>
.nav,
.scrolledNav {
  display: flex;
  justify-content: space-around;
  box-sizing: border-box;
  align-items: center;
  height: 80px;
  z-index: 2;
  .app_icon {
    width: 40px;
    height: 40px;
    // margin-top: 25px;
    img {
      width: 40px;
      height: 40px;
    }
  }

  .nav_item {
    // flex-grow: 1;
    // margin-top: 30px;
    display: flex;
    // width: 500px;
    justify-content: space-evenly;
    align-items: center;
    .activeNav {
      color: @color-orange;
      border-bottom: 2px solid @color-orange;
    }
  }
  .header_btn {
    margin-left: 50px;
    color: white;
    span {
      color: white;
      font-weight: bold;
      font-size: medium;
    }
  }
}

.scrolledNav {
  background-color: white;
  box-shadow: 1px 10px 20px -5px rgba(112, 112, 112, 0.57);
  -webkit-box-shadow: 1px 10px 20px -5px rgba(112, 112, 112, 0.57);
  -moz-box-shadow: 1px 10px 20px -5px rgba(112, 112, 112, 0.57);
  width: 100%;
  position: sticky;
  top: 0;
}

a {
  font-weight: bold;
  color: #000000;
  text-decoration: none;
  margin: 0 20px;
  vertical-align: middle;
  font-size: medium;

  &:hover {
    color: #ff8d00;
  }

  &.router-link-exact-active {
    color: @color-secondary;
    border-bottom: 2px solid @color-secondary;
  }
}
</style>
