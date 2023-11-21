<template>
  <div class="container">
    <AppPageTitleArea
      :currentPath="this.$route.fullPath.split('/')"
      :title="this.$route.name"
    />
    <div class="account-container">
      <div
        class="reset_form"
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
        <h3>Reset password</h3>
        <div>
          <Form @submit="onSubmit" class="form_content">
            <P>Email *</P>
            <Field
              placeholder="Email "
              type="email"
              name="email_address"
              :rules="validateEmail"
            />
            <ErrorMessage
              v-motion
              :initial="{ opacity: 0, y: -30 }"
              :enter="{ opacity: 1, y: 0 }"
              :delay="200"
              name="email_address"
              style="color: red; text-align: left; margin-top: 5px"
            />
            <AppButton
              v-loading="is_loading"
              :element-loading-svg="svg"
              element-loading-svg-view-box="-10, -10, 50, 50"
              btnText="Send"
              class="appbutton"
              :rightIcon="['fas', 'arrow-right-long']"
            />
          </Form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from '@/components/app_button.vue'
import AppPageTitleArea from '@/components/app_page_title_area.vue'
import { ElMessage } from 'element-plus'
import { Form, Field, ErrorMessage } from 'vee-validate'
import { auth } from '@/firebase/config'
export default {
  components: {
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
      is_loading: false,
    }
  },
  methods: {
    async onSubmit(values) {
      this.is_loading = true
      console.log(values.email_address)
      auth
        .sendPasswordResetEmail(values.email_address)
        .then(() => {
          console.log('===================> ok: ')
          ElMessage({
            message: 'Email send.',
            type: 'success',
          })
          this.is_loading = false
        })
        .catch((error) => {
          console.log(error.code)
          console.log(error.message)
          this.is_loading = false
        })
      this.is_loading = false
    },
    validateEmail(value) {
      // if the field is empty
      if (!value) {
        return 'This field is required'
      }
      // if the field is not a valid email
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
      if (!regex.test(value)) {
        return 'This field must be a valid email'
      }
      // All is good
      return true
    },
  },
}
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .account-container {
    display: flex;
    width: 100%;
    justify-content: center;
    max-width: 1080px;
    gap: 40px;

    .reset_form {
      width: 50%;

      h3 {
        font-size: 30px;
        text-align: left;
      }

      .form_content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border: 1px solid rgb(232, 232, 232);
        padding: 20px;
        border-radius: 12px;

        .errorMessage {
          color: red;
        }

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

        p {
          text-align: left;
        }

        .appbutton {
          margin-top: 40px;
        }
      }
    }
  }
}
</style>
