<template>
  <div class="contact-card">
    <div class="contact-card-content">
      <font-awesome-icon class="contact-card-content-icon" :icon="icons" />
    </div>
    <h3>{{ title }}</h3>
    <p>{{ text1 }}</p>
    <p>{{ text2 }}</p>
  </div>
</template>
<script>
export default {
  name: 'contact-card',
  props: ['icons', 'title', 'text1', 'text2'],
  data() {
    return {}
  },
}
</script>

<style lang="less" scoped>
.contact-card {
  width: 252px;
  height: 274px;
  background-color: #ffffff;
  margin-right: 30px;
  border-radius: 10px;
  box-shadow: -1px 1px 10px #aaaaaa35;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
  h3 {
    font-size: 20px;
    transition: 0.5s;
  }
  p {
    margin: 0px;
    font-size: 16px;
    margin-bottom: 5px;
    transition: 0.5s;
  }
  &-content {
    width: 45px;
    height: 45px;
    transition: 0.5s;
    border-radius: 100%;
    margin-bottom: 20px;
    background-color: rgba(83, 97, 223, 0.174);
    display: flex;
    justify-content: center;
    align-items: center;
    &-icon {
      color: #5362df;
      transition: 0.5s;
    }
  }
  &:hover {
    background-color: #f16d11;
    transition: 0.5s;
    h3,
    p {
      color: #ffffff;
      transition: 0.5s;
    }
    .contact-card-content {
      background-color: #ffffff;
      transition: 0.5s;
      .contact-card-content-icon {
        color: #f16d11;
        transition: 0.5s;
      }
    }
  }
}
</style>
