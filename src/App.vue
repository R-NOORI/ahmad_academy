<template>
  <div :class="{ main: routeName == '/' }">
    <AppHeader />
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
  computed: {
    routeName() {
      return this.$router.currentRoute.value.path
    },
  },
  mounted() {
    console.log('current route name ', this.routeName)
  },
}
</script>

<style lang="less">
body,
html {
  padding: 0;
  margin: 0;
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
