<template>
  <div :class="{ main: routeName == '/' }">
    <appHeader />
    <router-view />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '@/components/header/app_header.vue'
import AppFooter from './components/footer/app_footer.vue'
import store from './store'
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
      // const elems = document.getElementsByClassName('nav_phone')
      // for (let elem of elems) {
      //   elem.style.display = 'none'
      // }
      // console.log('is scrolling ', this.isScrolled)
    },
  },
  computed: {
    routeName() {
      return this.$router.currentRoute.value.path
    },
    language: () => store.state.user.language,
  },
}
</script>

<style lang="less">
body,
html {
  padding: 0;
  margin: 0;
  user-select: none;
}
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

// /* Scroll bar stylings */
// ::-webkit-scrollbar {
//   width: 10px;
//   height: 7px;
// }

// /* Track */
// ::-webkit-scrollbar-track {
//   // background: var(--lightestgrey);
//   background-color: transparent;
// }

// /* Handle */
// ::-webkit-scrollbar-thumb {
//   /* background: #888; */
//   background: @color-secondary;
//   border-radius: 3px;
// }

// /* Handle on hover */
// ::-webkit-scrollbar-thumb:hover {
//   /* background: #555; */
//   background: @color-light;
// }
</style>
