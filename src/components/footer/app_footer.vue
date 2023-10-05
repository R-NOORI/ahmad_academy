<template>
  <div class="footer-container">
    <div class="content-info">
      <div class="socail-madia">
        <h2>EduVibe</h2>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum.
        </p>
        <div class="socail-madia-info">
          <div class="socail-madia-info-card">
            <font-awesome-icon
              style="font-size: 25px"
              :icon="['fab', 'facebook-f']"
            />
          </div>
          <div class="socail-madia-info-card">
            <font-awesome-icon
              style="font-size: 25px"
              :icon="['fab', 'linkedin-in']"
            />
          </div>
          <div class="socail-madia-info-card">
            <font-awesome-icon
              style="font-size: 25px"
              :icon="['fab', 'telegram']"
            />
          </div>
          <div class="socail-madia-info-card">
            <font-awesome-icon
              style="font-size: 25px"
              :icon="['fab', 'twitter']"
            />
          </div>
        </div>
      </div>
      <div class="content-info-list">
        <h2>Useful Links</h2>
        <div class="content-info-list-nav">
          <font-awesome-icon
            style="font-size: 13px"
            :icon="['fas', 'angles-right']"
          />
          <span>Contact Us</span>
        </div>
        <div class="content-info-list-nav">
          <font-awesome-icon
            style="font-size: 13px"
            :icon="['fas', 'angles-right']"
          />
          <span>Pricing Plan</span>
        </div>
        <div class="content-info-list-nav">
          <font-awesome-icon
            style="font-size: 13px"
            :icon="['fas', 'angles-right']"
          />
          <span>Gallery</span>
        </div>
        <div class="content-info-list-nav">
          <font-awesome-icon
            style="font-size: 13px"
            :icon="['fas', 'angles-right']"
          />
          <span>Instructor</span>
        </div>
        <div class="content-info-list-nav">
          <font-awesome-icon
            style="font-size: 13px"
            :icon="['fas', 'angles-right']"
          />
          <span>Purchase Guide</span>
        </div>
      </div>
      <div class="content-info-list">
        <h2>Contact Info</h2>
        <div class="content-info-list-nav">
          <font-awesome-icon
            style="font-size: 15px"
            :icon="['fas', 'location-dot']"
          />
          <span>275 Quadra Street Victoria Road, New York</span>
        </div>
        <div class="content-info-list-nav">
          <font-awesome-icon style="font-size: 15px" :icon="['fas', 'phone']" />
          <span>+93(0)70 0073297 </span>
        </div>
        <div class="content-info-list-nav">
          <font-awesome-icon style="font-size: 15px" :icon="['fas', 'phone']" />
          <span>+93(0)70 0063298</span>
        </div>
        <div class="content-info-list-nav">
          <font-awesome-icon
            style="font-size: 15px"
            :icon="['fas', 'envelope']"
          />
          <span>yourmailaddress@example.com</span>
        </div>
      </div>
    </div>
    <p>Copyright 2023 EduVibe | Developed By DevsVibe. All Rights Reserved</p>
  </div>
</template>

<style lang="less" scoped>
.footer-container {
  background-color: @color-primary;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 130px;
  padding-top: 30px;
  .content-info {
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: space-between;
    margin-top: 30px;
    min-width: 71%;
    flex-wrap: wrap;
    .socail-madia {
      display: flex;
      flex-direction: column;
      align-items: start;
      color: #fff;
      h2 {
        font-size: 25px;
      }
      p {
        text-align: left;
        font-size: 16px;
        max-width: 250px;
        margin: 0px 0px 20px 0px;
      }
      &-info {
        display: flex;
        flex-direction: row;
        &-card {
          width: 50px;
          height: 50px;
          background-color: #393755;
          margin: 0px 15px 15px 0px;
          border-radius: 5px;
          transition: 0.5s;
          display: flex;
          justify-content: center;
          align-items: center;
          &:hover {
            background-color: @color-secondary;
            transition: 0.5s;
          }
        }
      }
    }
    &-list {
      display: flex;
      flex-direction: column;
      align-content: flex-start;
      text-align: left;
      color: #fff;
      margin: 0px 10px 0px 20px;

      h2 {
        font-size: 25px;
      }
      &-nav {
        transition: 0.5s;
        margin-bottom: 20px;
        &:hover {
          color: @color-secondary;
          cursor: pointer;
          transition: 0.5s;
        }
        span {
          margin-left: 10px;
          font-size: 15px;
        }
      }
    }
  }
  p {
    color: #ffffff;
    font-size: 16px;
    min-width: 90%;
    max-width: 80%;
    margin: 70px 0px 40px 0px;
  }
}
</style>
