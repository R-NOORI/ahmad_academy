<template>
  <div
    :class="
      getLanguage == 'EN'
        ? 'elementor-container-item align-text-left'
        : 'elementor-container-item align-text-right'
    "
  >
    <div class="elementor-container-item-image" :style="backgroundColor">
      <img :src="require(`../../../assets/about-page/${imageIcon}.png`)" />
    </div>
    <div
      :class="
        getLanguage == 'EN'
          ? 'elementor-container-item-content margin-left'
          : 'elementor-container-item-content margin-right'
      "
    >
      <h3>{{ title }}</h3>
      <p>
        {{ body }}
      </p>
    </div>
  </div>
</template>
<script>
import store from '@/store'
export default {
  props: ['title', 'body', 'imageIcon', 'backgroundColor', 'mass'],
  computed: {
    getLanguage: () => store.state.user.language,
  },
}
</script>

<style lang="less" scoped>
.align-text-left {
  text-align: left;
}
.align-text-right {
  text-align: right;
}
.elementor-container-item {
  display: flex;
  flex-direction: row;
  align-content: flex-start;
  align-items: flex-start;
  margin-bottom: 40px;
  h3,
  p {
    margin: 0px;
  }
  &-image {
    border-radius: 100%;
    padding: 15px 17px;
  }
  .margin-left {
    p,
    h3 {
      margin-left: 25px;
    }
  }
  .margin-right {
    p,
    h3 {
      margin-right: 25px;
    }
  }
  &-content {
    padding-top: 10px;
    h3 {
      font-size: 20px;
      color: #231f40;
      margin-bottom: 8px;
    }
    p {
      color: #6f6b80;
      font-size: 16px;
      line-height: 32px;
    }
  }
}
</style>
