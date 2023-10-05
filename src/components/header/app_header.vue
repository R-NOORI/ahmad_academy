<template>
  <div :class="isScrolling ? 'scrolledNav' : 'nav'">
    <div class="app_icon">
      <img src="@/assets/logo.png" />
    </div>
    <div class="nav_item">
      <router-link to="/">Home</router-link>
      <router-link to="/course">Courses</router-link>
      <router-link to="/contact">Contact</router-link>
      <router-link to="/about">About</router-link>
      <div class="header_btn">
        <el-button color="#525fe1" size="large">
          <font-awesome-icon
            :icon="['far', 'user']"
            style="margin-right: 8px"
          />
          <span> Login / Register</span></el-button
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['isScrolling'],
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
