<template>
  <div class="footer-container">
    <div class="footer-container-content">
      <div class="content-info">
        <div class="socail-madia">
          <h2>EduVibe</h2>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum.
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
          <h2>Explore</h2>
          <div class="content-info-list-nav">
            <font-awesome-icon
              style="font-size: 13px"
              :icon="['fas', 'angles-right']"
            />
            <span>About Us</span>
          </div>
          <div class="content-info-list-nav">
            <font-awesome-icon
              style="font-size: 13px"
              :icon="['fas', 'angles-right']"
            />
            <span>Upcoming Events</span>
          </div>
          <div class="content-info-list-nav">
            <font-awesome-icon
              style="font-size: 13px"
              :icon="['fas', 'angles-right']"
            />
            <span>Blog & News</span>
          </div>
          <div class="content-info-list-nav">
            <font-awesome-icon
              style="font-size: 13px"
              :icon="['fas', 'angles-right']"
            />
            <span>FAQ Question</span>
          </div>
          <div class="content-info-list-nav">
            <font-awesome-icon
              style="font-size: 13px"
              :icon="['fas', 'angles-right']"
            />
            <span>Testimonial</span>
          </div>
          <div class="content-info-list-nav">
            <font-awesome-icon
              style="font-size: 13px"
              :icon="['fas', 'angles-right']"
            />
            <span>Privacy Policy</span>
          </div>
        </div>
      </div>
      <div class="content-info">
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
            <font-awesome-icon
              style="font-size: 15px"
              :icon="['fas', 'phone']"
            />
            <span>+ 1 (237) 382-2839</span>
          </div>
          <div class="content-info-list-nav">
            <font-awesome-icon
              style="font-size: 15px"
              :icon="['fas', 'phone']"
            />
            <span>+ 1 (237) 382-2839</span>
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
    </div>
    <p>Copyright 2023 EduVibe | Developed By DevsVibe. All Rights Reserved</p>
  </div>
</template>

<style scoped lang="less">
.footer-container {
  background-color: @color-primary;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 500px;
  margin-top: 130px;
  &-content {
    display: flex;
    flex-direction: row;
    min-width: 90%;
    max-width: 80%;
    margin-top: 60px;
    .content-info {
      width: 50%;
      display: flex;
      flex-direction: row;
      .socail-madia {
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        color: #fff;
        h2 {
          font-size: 25px;
          margin: 40px 0px;
        }
        p {
          text-align: left;
          font-size: 16px;
          color: #fff;
          margin: 0px 0px 40px 0px;
          max-width: 250px;
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
        width: 50%;
        display: flex;
        flex-direction: column;
        align-content: flex-start;
        text-align: left;
        margin-left: 60px;
        color: #fff;
        h2 {
          font-size: 25px;
          margin: 40px 0px;
        }
        &-nav {
          transition: 0.5s;

          margin-bottom: 30px;
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
  }
  p {
    color: #ffffff;
    font-size: 16px;
    min-width: 90%;
    max-width: 80%;
    margin: 60px 0px;
  }
}
</style>
