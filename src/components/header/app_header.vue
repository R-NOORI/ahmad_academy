<template>
  <div class="nav">
    <router-link to="/">home Page</router-link>
    <router-link to="/course">Course Page</router-link>
    <router-link to="/contact">Contact Page</router-link>
    <router-link to="/about">about Page</router-link>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.nav {
  display: flex;
  justify-content: space-around;
}
</style>
