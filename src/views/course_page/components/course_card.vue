<template>
  <div class="course-card">
    <div class="course-card-image">
      <img :src="courseImageLink" />
    </div>
    <div class="course-card-content">
      <div class="course-card-content-info">
        <span>
          <font-awesome-icon
            class="card-icon"
            :icon="['fas', 'clipboard-list']"
          />{{ lessons }}
        </span>
        <span style="margin-left: 50px">
          <font-awesome-icon class="card-icon" :icon="['fa', 'clock']" />{{
            duration
          }}
        </span>
      </div>
      <h2>{{ courseTitle }}</h2>
      <el-divider />
      <div class="course-card-content-price">
        <div class="price-content">
          <div class="new-price">${{ courseNewPrice }}</div>
          <div class="old-price" v-show="courseOldPrice == null ? false : true">
            ${{ courseOldPrice }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'course-card',
  props: [
    'courseImageLink',
    'courseTitle',
    'lessons',
    'duration',
    'courseNewPrice',
    'courseOldPrice',
  ],
}
</script>

<style scoped lang="less">
.course-card {
  // height: 517px;
  // width: 330px;
  // margin: 0px 20px 20px 0px;
  border-radius: 5px;
  overflow: hidden;
  background-color: #f5f5f5;
  transition: 0.5s;
  &:hover {
    background-color: white;
    -webkit-box-shadow: 0px 5px 73px -45px rgba(0, 0, 0, 0.28);
    -moz-box-shadow: 0px 5px 73px -45px rgba(0, 0, 0, 0.28);
    box-shadow: 0px 5px 73px -45px rgba(0, 0, 0, 0.28);
    transition: 0.5s;
    cursor: pointer;
    h2 {
      color: @color-secondary;
    }
    img {
      width: 100%;
      height: 250px;
      transition: 0.5s;
      transform: scale(1.1);
    }
  }
  &-image {
    width: 100%;
    height: 250px;
    transition: 1s;
    overflow: hidden;
    position: relative;
    z-index: 1;
    img {
      width: 100%;
      height: 250px;
      transition: 0.5s;
    }
  }

  &-content {
    margin: 30px 20px;

    &-info,
    &-price {
      display: flex;
      flex-direction: row;
    }
    &-info {
      span {
        color: #6f6b80;
        font-size: 16px;
        .card-icon {
          margin-right: 10px;
        }
      }
    }
    &-price {
      justify-content: space-between;
      .price-content {
        display: flex;
        align-items: center;
        .new-price {
          font-size: 20px;
          font-weight: 700;
          color: @color-secondary;
        }
        .old-price {
          margin-left: 20px;
          font-size: 16px;
          color: #6f6b80;
          text-decoration-line: line-through;
        }
      }
    }
    h2 {
      text-align: left;
      color: #231f40;
      font-size: 20px;
      font-weight: 600;
      transition: 0.5s;
    }
  }
}
</style>
