<template>
  <div class="main">
    <div @click="openInNewTab" class="root">
      <img src="@/assets/whatsapp.png" />
    </div>
  </div>
</template>
<script>
import store from '@/store'
export default {
  computed: {
    language: () => store.state.user.language,
  },
  methods: {
    openInNewTab() {
      window.open('https://wa.me/93700063297', '_blank', 'noreferrer')
    },
  },
}
</script>
<style lang="less" scoped>
.main {
  position: fixed;
  bottom: 30px;
  left: 15px;
  right: 15px;
  .root {
    width: 40px;
    height: 40px;
    position: relative;
    img {
      width: 40px;
      height: 40px;
      position: absolute;
      &:hover {
        cursor: pointer;
      }
    }
  }
  .root::before,
  .root::after {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: #25d366;
    border-radius: 50%;
    z-index: -1;
    opacity: 0.7;
  }

  .root::before {
    animation: pluse 2s ease-out infinite;
  }

  .root::after {
    animation: pluse 2s 1s ease-out infinite;
  }

  @keyframes pluse {
    100% {
      transform: scale(2.5);
      opacity: 0;
    }
  }
}

@media @mobile {
  .main {
    position: fixed;
    bottom: 20px;
    left: 5px;
    right: 5px;
    .root {
      width: 30px;
      height: 30px;
      position: relative;
      img {
        width: 30px;
        height: 30px;
        position: absolute;
        &:hover {
          cursor: pointer;
        }
      }
    }
    .root::before,
    .root::after {
      content: '';
      position: absolute;
      height: 100%;
      width: 100%;
      background-color: #25d366;
      border-radius: 50%;
      z-index: -1;
      opacity: 0.7;
    }

    .root::before {
      animation: pluse 2s ease-out infinite;
    }

    .root::after {
      animation: pluse 2s 1s ease-out infinite;
    }

    @keyframes pluse {
      100% {
        transform: scale(2.5);
        opacity: 0;
      }
    }
  }
}
</style>
