<template>
  <div class="course-card">
    <div class="course-card-image">
      <img
        src="https://img.freepik.com/free-photo/university-colleagues-talking-library_23-2148844675.jpg?w=996&t=st=1696327612~exp=1696328212~hmac=14ebea81b49bae981d60d7ca30f99fa6f641bc20d7b3cf2fb6c37e1c31849b8b"
      />
    </div>
    <div class="course-card-content">
      <div class="course-card-content-info">
        <span>
          <font-awesome-icon
            class="card-icon"
            :icon="['fas', 'clipboard-list']"
          />16 Lessons
        </span>
        <span style="margin-left: 50px">
          <font-awesome-icon class="card-icon" :icon="['fa', 'clock']" />15 week
        </span>
      </div>
      <h2>The Complete HTML & CSS Bootcamp 2023 Edition</h2>
      <el-divider />
      <div class="course-card-content-price">
        <div class="price-content">
          <div class="new-price">$45.00</div>
          <div class="old-price">$450.00</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'course-card',
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
