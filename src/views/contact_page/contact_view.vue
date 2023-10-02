<template>
  <div class="contact-root">
    <div class="contact-page">
      <h4>NEED HELP?</h4>
      <h1>Get In Touch With us</h1>
      <div class="contact-container">
        <div class="contact-container-cards">
          <div class="contact-cards-row" style="margin-bottom: 30px">
            <contact_card
              :icons="['fas', 'globe']"
              title="Our Website"
              text1="www.example.com"
              text2="www.theme.net"
            />
            <contact_card
              :icons="['fas', 'phone-volume']"
              title="Call Us On"
              text1="+2763 (388) 2930"
              text2="+4875 (356) 2568"
            />
          </div>
          <div class="contact-cards-row">
            <contact_card
              :icons="['fas', 'envelope-open']"
              title="Email Us"
              text1="eduvibe@example.com"
              text2="contact@eduvibe.com"
            />
            <contact_card
              :icons="['fas', 'location-dot']"
              title="Our Location"
              text1="486 Normana Avenue"
              text2="Morningtide, 4223"
            />
          </div>
        </div>
        <div class="contact-form-save">
          <input placeholder="Name*" />
          <input placeholder="Email*" />
          <input placeholder="Phone" />
          <input placeholder="Subject" />
          <textarea class="text-area" placeholder="Your Massage" />
          <app_button
            btnText="submit now"
            :rightIcon="['fas', 'arrow-right']"
          />
        </div>
      </div>
    </div>
    <div class="contact-root-map">
      <l-map
        style="width: 100%; height: 100%"
        ref="map"
        v-model:zoom="zoom"
        :center="[31.619061, 65.724823]"
      >
        <l-tile-layer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          layer-type="base"
          name="OpenStreetMap"
        ></l-tile-layer>
        <l-marker :lat-lng="[31.619061, 65.724823]"></l-marker>
      </l-map>
    </div>
    <app_footer />
  </div>
</template>

<script>
import 'leaflet/dist/leaflet.css'
import contact_card from '@/views/contact_page/components/content_card.vue'
import app_footer from '@/components/footer/app_footer.vue'
import app_button from '@/components/app_button.vue'
import { LMap, LTileLayer, LMarker } from '@vue-leaflet/vue-leaflet'
export default {
  components: {
    app_footer,
    LMap,
    LTileLayer,
    LMarker,
    contact_card,
    app_button,
  },
  data() {
    return {
      zoom: 15,
    }
  },
}
</script>

<style scoped lang="less">
.contact-root {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .contact-page {
    background-color: #ffff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 80%;
    max-width: 70%;
    margin: 100px 0px;
    h4 {
      color: @color-secondary;
    }
    h1 {
      margin: 0px 0px 100px 0px;
    }
    .contact-container {
      display: flex;
      width: 100%;
      .contact-container-cards {
        width: 50%;
        padding-right: 50px;

        display: flex;
        flex-direction: column;
        .contact-cards-row {
          display: flex;
          flex-direction: row;
        }
      }
      .contact-form-save {
        width: 60%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        input,
        .text-area {
          background-color: #f5f5f5;
          outline: 0px solid #ffffff;
          border: 0px solid #ffffff;
          padding: 0px 30px;
          font-size: 14px;
          height: 60px;
          border-radius: 5px;
          font-family: inherit;
          transition: 0.8s;
        }
        input {
          &:focus {
            border: 1px solid @color-secondary;
            transition: 0.8s;
          }
        }
        .text-area {
          min-height: 180px;
          padding-top: 30px;
          &:focus {
            border: 1px solid @color-secondary;
            transition: 0.8s;
          }
        }
      }
    }
  }
  &-map {
    min-width: 80%;
    max-width: 70%;
    height: 500px;
    margin-bottom: 100px;
  }
}
</style>
