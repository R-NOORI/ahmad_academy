<template>
  <appHeader />
  <router-view />
</template>

<script>
import appHeader from '@/components/header/app_header.vue'
export default {
  components: {
    appHeader,
  },
}
</script>

<style lang="less">
body {
  margin: 0px;
  padding: 0px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0px;
  padding: 0px;
}
</style>
