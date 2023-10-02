<template>
  <div class="nav">
    <div class="app_icon">
      <img src="@/assets/logo.png" />
    </div>
    <div class="nav_item">
      <router-link to="/">Home</router-link>
      <router-link to="/course">Courses</router-link>
      <router-link to="/contact">Contact</router-link>
      <router-link to="/about">About</router-link>
      <div class="header_btn">
        <el-button color="#525fe1" size="large"
          ><span>Login / Register</span></el-button
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.nav {
  display: flex;
  justify-content: space-around;
  box-sizing: border-box;

  .app_icon {
    width: 40px;
    height: 40px;
    margin-top: 25px;
    img {
      width: 40px;
      height: 40px;
    }
  }

  .nav_item {
    // flex-grow: 1;
    margin-top: 30px;
    display: flex;
    // width: 500px;
    justify-content: space-evenly;
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
    color: #ffffff;
    border-bottom: 2px solid #ff8d00;
  }
}
</style>
