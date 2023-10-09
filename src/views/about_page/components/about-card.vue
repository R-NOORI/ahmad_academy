<template>
  <div class="elementor-container-item">
    <div class="elementor-container-item-image" :style="backgroundColor">
      <img :src="require(`../../../assets/about-page/${imageIcon}.png`)" />
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
  props: ['title', 'body', 'imageIcon', 'backgroundColor'],
}
</script>

<style lang="less" scoped>
.elementor-container-item {
  display: flex;
  flex-direction: row;
  align-content: flex-start;
  align-items: flex-start;
  margin-bottom: 40px;
  h3,
  p {
    text-align: left;
    margin: 0px;
  }
  &-image {
    border-radius: 100%;
    padding: 15px 17px;
  }
  &-content {
    padding-top: 10px;

    h3 {
      font-size: 20px;
      margin: 0px 0px 8px 25px;
      color: #231f40;
    }
    p {
      color: #6f6b80;
      font-size: 16px;
      line-height: 32px;
      margin-left: 25px;
    }
  }
}
</style>
