<template>
  <div class="course-card">
    <div class="course-card-image">
      <img :src="imageLink" />
    </div>
    <div class="course-card-content">
      <div class="course-card-content-info">
        <span>
          <font-awesome-icon :icon="['fa', 'clock']" />
          &nbsp;
          {{ durationNumber }}
          {{ $t(`courseDetailsPage.${durationType}`) }}
        </span>
        <span>
          <font-awesome-icon :icon="['fas', 'language']" />
          &nbsp;{{ language }}
        </span>
      </div>
      <h2>{{ courseTitle }}</h2>
      <el-divider />
      <div class="course-card-content-price">
        <div class="price-content">
          <div class="new-price">
            {{
              type == 'course'
                ? $t('coursesPage.title2')
                : $t('coursesPage.title1')
            }}
            {{ fee }}$
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
    'imageLink',
    'courseTitle',
    'language',
    'durationType',
    'durationNumber',
    'fee',
    'type',
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
    margin: 25px 20px;

    &-info,
    &-price {
      display: flex;
      flex-direction: row;
    }
    &-info {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: stretch;
      text-align: left;
      span {
        color: #6f6b80;
        font-size: 16px;
        margin-bottom: 10px;
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
          margin: 0px 20px;
          font-size: 16px;
          color: #6f6b80;
          text-decoration-line: line-through;
        }
      }
    }
    h2 {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      color: #231f40;
      font-size: 20px;
      font-weight: 600;
      transition: 0.5s;
    }
  }
}

@media @tablet {
  .course-card {
    &:hover {
      img {
        height: 200px;
      }
    }
    &-image {
      width: 100%;
      height: 150px;
      img {
        height: 200px;
        transition: 0.5s;
      }
    }

    &-content {
      margin: 15px 10px;
      &-info {
        span {
          font-size: 14px;
          margin-bottom: 5%;
        }
      }
      &-price {
        .price-content {
          .new-price {
            font-size: 15px;
          }
        }
      }
      h2 {
        margin: 0px;
        font-size: 15px;
      }
    }
  }
}
</style>
