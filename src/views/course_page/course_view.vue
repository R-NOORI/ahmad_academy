<template>
  <div class="course-page">
    <div class="course-page-content">
      <div class="search-content">
        <p>Showing 1-6 Of 15 Results</p>
        <div class="search-content-field">
          <input placeholder="Name*" />
          <font-awesome-icon
            class="search-content-field-icon"
            :icon="['fas', 'magnifying-glass']"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      zoom: 15,
    }
  },
}
</script>

<style scoped lang="less">
.course-page {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  &-content {
    background-color: #ffff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 80%;
    max-width: 70%;
    margin: 100px 0px;
    .search-content {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      .search-content-field {
        background-color: #f5f5f5;
        padding: 0px 30px;
        font-size: 14px;
        height: 60px;
        width: 200px;
        border-radius: 10px;
        font-family: inherit;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        &-icon {
          font-size: medium;
        }
        input {
          background-color: transparent;
          outline: none;
          border: none;
          font-size: 14px;
          width: 100%;
        }
      }
    }
  }
}
</style>
