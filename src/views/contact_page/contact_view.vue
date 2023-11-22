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
      <h4>{{ $t('contact.contact1Details') }}</h4>
      <h1>{{ $t('contact.contact2Details') }}</h1>
      <div class="contact-container">
        <div class="contact-container-cards">
          <div class="contact-cards-row" style="margin-bottom: 30px">
            <contact_card
              :icons="['fas', 'phone-volume']"
              :title="$t('contact.socialMediaTitle1')"
              text1="+93 (0) 700073297"
              text2="+93 (0) 700063298"
            />
            <contact_card
              :icons="['fas', 'envelope-open']"
              :title="$t('contact.socialMediaTitle2')"
              text1="eduvibe@example.com"
              text2="contact@eduvibe.com"
            />
          </div>
          <div class="contact-cards-row">
            <contact_card
              :icons="['fab', 'instagram']"
              :title="$t('contact.socialMediaTitle3')"
              text1="alnoorsafa.onlineacademy"
              @click="
                () =>
                  openInNewTab(
                    'https://instagram.com/alnoorsafa.onlineacademy?igshid=OGQ5ZDc2ODk2ZA=='
                  )
              "
            />

            <contact_card
              :icons="['fab', 'facebook-f']"
              :title="$t('contact.socialMediaTitle4')"
              text1="AlnoorSafaAcademye"
              @click="
                () =>
                  openInNewTab(
                    'https://www.facebook.com/AlnoorSafaAcademy?mibextid=ZbWKwL'
                  )
              "
            />
          </div>
        </div>
        <div class="contact-form-save">
          <Form @submit="onSubmit" class="contact-form-save">
            <Field
              name="name"
              type="text"
              :placeholder="$t('contact.name')"
              :rules="validateName"
            />
            <ErrorMessage
              v-motion
              :initial="{ opacity: 0, y: -30 }"
              :enter="{ opacity: 1, y: 0 }"
              :delay="200"
              name="name"
              style="color: red; text-align: left; margin-top: 5px"
            />
            <Field
              name="email"
              :placeholder="$t('contact.email')"
              :rules="validateEmail"
            />
            <ErrorMessage
              v-motion
              :initial="{ opacity: 0, y: -30 }"
              :enter="{ opacity: 1, y: 0 }"
              :delay="200"
              name="email"
              style="color: red; text-align: left; margin-top: 5px"
            />
            <Field :placeholder="$t('contact.phoneNumber')" name="phone" />
            <Field
              :placeholder="$t('contact.subject')"
              name="subject"
              :rules="validateSubject"
            />
            <ErrorMessage
              v-motion
              :initial="{ opacity: 0, y: -30 }"
              :enter="{ opacity: 1, y: 0 }"
              :delay="200"
              name="subject"
              style="color: red; text-align: left; margin-top: 5px"
            />
            <Field v-slot="{ field }" name="message" :rules="validateMessage">
              <textarea
                v-bind="field"
                :placeholder="$t('contact.yourMessage')"
              />
            </Field>
            <ErrorMessage
              v-motion
              :initial="{ opacity: 0, y: -30 }"
              :enter="{ opacity: 1, y: 0 }"
              :delay="200"
              name="message"
              style="color: red; text-align: left; margin-top: 5px"
            />
            <AppButton
              v-loading="is_loading"
              :element-loading-svg="svg"
              element-loading-svg-view-box="-10, -10, 50, 50"
              :btnText="$t('contact.bnt')"
              class="appbutton"
              :rightIcon="['fas', 'arrow-right-long']"
            />
          </Form>
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
import { Form, Field, ErrorMessage } from 'vee-validate'
import { LMap, LTileLayer, LMarker } from '@vue-leaflet/vue-leaflet'
import { db } from '@/firebase/config'
import { ElMessage } from 'element-plus'
export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    contact_card,
    AppButton,
    AppPageTitleArea,
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    return {
      svg: `
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
      `,
      zoom: 15,
      is_loading: false,
    }
  },
  methods: {
    openInNewTab(url) {
      window.open(url, '_blank', 'noreferrer')
    },
    async onSubmit(values, { resetForm }) {
      this.is_loading = true
      try {
        console.log(values)
        const collectionRef = db.collection('emails')
        await collectionRef.add(values)
        ElMessage({
          message: 'Email send successful with for the response.',
          type: 'success',
        })
        resetForm()
        this.is_loading = false
      } catch (error) {
        this.is_loading = false
        ElMessage({
          message: 'Internet connection error.',
          type: 'error',
        })
      }
      this.is_loading = false
    },
    validateName(value) {
      if (!value) {
        return this.$t('contact.inputTitle1')
      }
      return true
    },
    validateEmail(value) {
      if (!value) {
        return this.$t('contact.inputTitle1')
      }
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
      if (!regex.test(value)) {
        return this.$t('contact.inputTitle2')
      }
      return true
    },
    validateSubject(value) {
      if (!value) {
        return this.$t('contact.inputTitle1')
      }
      return true
    },
    validateMessage(value) {
      if (!value) {
        return this.$t('contact.inputTitle1')
      }
      return true
    },
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
        display: flex;
        flex-direction: column;
        margin: 0px 15px;
        .contact-cards-row {
          display: flex;
          flex-direction: row;
        }
      }
      .contact-form-save {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin: 0px 15px;
        input,
        textarea {
          background-color: #f5f5f5;
          outline: 0px solid #ffffff;
          border: 0px solid #ffffff;
          padding: 0px 30px;
          font-size: 14px;
          height: 60px;
          border-radius: 5px;
          font-family: inherit;
          transition: 0.8s;
          margin-bottom: 10px;
        }
        textarea {
          height: 180px;
          padding: 20px 30px;
        }
        input {
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
