<template>
  <div
    class="elementor-container-item"
    v-motion
    :initial="{ opacity: 0, y: 100 }"
    :enter="{
      opacity: 1,
      y: 0,
      transition: {
        mass: mass,
      },
    }"
    :visible="{
      opacity: 1,
      y: 0,
      transition: {
        mass: mass,
      },
    }"
    :delay="200"
  >
    <div class="elementor-container-item-icon" :style="backgroundColor">
      <font-awesome-icon class="search-content-field-icon" :icon="imageIcon" />
    </div>
    <div class="elementor-container-item-content">
      <h3>{{ title }}</h3>
      <p>
        {{ body }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: ['title', 'body', 'imageIcon', 'backgroundColor', 'mass'],
}
</script>

<style lang="less" scoped>
.elementor-container-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  &-icon {
    border-radius: 100px;
    height: 80px;
    width: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 30px;
  }
  &-content {
    padding-top: 10px;
    h3 {
      font-size: 24px;
      margin: 30px 0px 0px 0px;
      color: #231f40;
      text-align: center;
    }
    p {
      color: #6f6b80;
      font-size: 15px;
      line-height: 32px;
      text-align: center;
    }
  }
}
</style>
