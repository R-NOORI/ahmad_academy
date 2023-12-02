<template>
  <button>
    <font-awesome-icon class="btn-left-icon" :icon="leftIcon" />
    {{ btnText }}
    <font-awesome-icon class="btn-right-icon" :icon="rightIcon" />
  </button>
</template>
<script>
export default {
  name: 'app_button',
  props: ['btnText', 'leftIcon', 'rightIcon'],
  data() {
    return {}
  },
}
</script>
<style lang="less" scoped>
button {
  background-color: #f5f5f5;
  outline: 0px solid #ffffff;
  border: 0px solid #ffffff;
  padding: 0px 30px;
  font-size: 14px;
  height: 60px;
  border-radius: 5px;
  font-family: inherit;
  transition: 0.8s;
  background: @color-secondary;
  color: #ffffff;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  .btn-left-icon,
  .btn-right-icon {
    font-size: 15px;
    margin: 0px 5px;
  }
  &:hover {
    transition: 0.8s;
    background-color: @color-light;
    color: #ffffff;
  }
}
</style>
