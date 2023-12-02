<template>
  <div :class="{ main: routeName == '/' }">
    <appHeader
      v-motion
      :initial="{ opacity: 0, y: -100 }"
      :enter="{
        opacity: 1,
        y: 0,
      }"
      :delay="500"
      v-motion-slide-top
      v-if="isScrolled"
      :isScrolling="isScrolled"
    />
    <appHeader v-else :isScrolling="isScrolled" />
    <router-view />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '@/components/header/app_header.vue'
import AppFooter from './components/footer/app_footer.vue'
export default {
  components: {
    AppHeader,
    AppFooter,
  },
  data() {
    return {
      isScrolled: false,
    }
  },

  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      // Any code to be executed when the window is scrolled
      // console.log('scrolling', window.scrollY)
      if (window.scrollY > 100) {
        this.isScrolled = true
      }
      if (window.scrollY < 100) {
        this.isScrolled = false
      }
      // console.log('is scrolling ', this.isScrolled)
    },
  },
  computed: {
    routeName() {
      return this.$router.currentRoute.value.path
    },
  },
}
</script>

<style lang="less">
body,
html {
  padding: 0;
  margin: 0;
  // user-select: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.main {
  background: url('./assets/bg.jpg');
  height: 900px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 100% 100%;
}

// nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
