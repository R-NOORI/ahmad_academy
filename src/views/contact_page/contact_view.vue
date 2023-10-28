<template>
  <div class="contact-root">
    <AppPageTitleArea
      :currentPath="this.$route.fullPath.split('/')"
      :title="this.$route.name"
    />
    <div
      class="contact-page"
      v-motion
      :initial="{ opacity: 0, y: 300 }"
      :enter="{
        opacity: 1,
        y: 0,
        transition: {
          mass: 1,
        },
      }"
      :visible-once="{ opacity: 1, y: 0 }"
      :delay="350"
    >
      <h4>NEED HELP?</h4>
      <h1>Get In Touch With us</h1>
      <div class="contact-container">
        <div class="contact-container-cards">
          <div class="contact-cards-row" style="margin-bottom: 30px">
            <contact_card
              :icons="['fas', 'phone-volume']"
              title="Call Us On"
              text1="+93 (0) 700073297"
              text2="+93 (0) 700063298"
            />
            <contact_card
              :icons="['fas', 'envelope-open']"
              title="Email Us"
              text1="eduvibe@example.com"
              text2="contact@eduvibe.com"
            />
          </div>
          <div class="contact-cards-row">
            <contact_card
              :icons="['fab', 'instagram']"
              title="Instagram Link"
              text1="alnoorsafa.onlineacademy"
            />

            <contact_card
              :icons="['fab', 'facebook-f']"
              title="Facebook Link"
              text1="AlnoorSafaAcademye"
            />
          </div>
        </div>
        <div class="contact-form-save">
          <input placeholder="Name*" />
          <input placeholder="Email*" />
          <input placeholder="Phone" />
          <input placeholder="Subject" />
          <textarea class="text-area" placeholder="Your Massage" />
          <AppButton btnText="submit now" :rightIcon="['fas', 'arrow-right']" />
        </div>
      </div>
    </div>
    <div class="contact-root-map">
      <l-map
        style="width: 100%; height: 100%; z-index: 1"
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
  </div>
</template>

<script>
import 'leaflet/dist/leaflet.css'
import contact_card from '@/views/contact_page/components/content_card.vue'
import AppButton from '@/components/app_button.vue'
import AppPageTitleArea from '@/components/app_page_title_area.vue'

import { LMap, LTileLayer, LMarker } from '@vue-leaflet/vue-leaflet'
export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    contact_card,
    AppButton,
    AppPageTitleArea,
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
  .contact-page {
    background-color: #ffff;
    max-width: 1080px;
    margin: 0px auto;
    padding: 0px 20px;
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
    max-width: 1080px;
    padding: 100px 20px;
    margin: 0px auto;
    height: 500px;
  }
}
</style>
