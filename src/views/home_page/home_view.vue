<template>
  <div class="container">
    <div class="hero_text">
      <h4>LEARN NEW THINGS DAILY</h4>
      <h1>Education Is A Path To Success In Life</h1>
      <h5>
        Empower yourself with the knowledge and skills gained through online
        education and best instructors.
      </h5>
      <el-button color="#525fe1" size="large">Get Started Today</el-button>
    </div>
    <div class="hero_image">
      <img src="@/assets/hero_image_1.png" />
    </div>
  </div>
</template>

<style lang="less" scoped>
.container {
  margin: 30px auto;
  height: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
  // width: 1450px;
  .hero_text {
    width: 600px;
    h4 {
      font-weight: 800;
      font-size: 16px;
      color: #525fe1;
      text-align: left;
    }
    h1 {
      font-size: 72px;
      text-align: left;
    }
    h5 {
      font-size: 16px;
      color: #54595f;
      text-align: left;
    }
  }

  .hero_image {
    width: 700px;
    img {
      width: 100%;
      // height: 800px;
    }
  }
}
</style>
