<template>
  <div class="container">
    <AppPageTitleArea
      :currentPath="this.$route.fullPath.split('/')"
      :title="this.$route.name"
    />
    <div class="account-container">
      <div
        :class="
          language == 'EN' ? 'login_form text_left' : 'login_form text_right'
        "
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
        <h3>{{ $t('loginPage.login') }}</h3>
        <div>
          <Form @submit="onLoginSubmit" class="form_content">
            <P>{{ $t('loginPage.email') }}</P>
            <Field
              :placeholder="$t('loginPage.inputTitle1')"
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
              :style="
                language == 'EN'
                  ? 'color: red; text-align: left; margin-top: 5px'
                  : 'color: red; text-align: rgiht; margin-top: 5px'
              "
            />
            <p>{{ $t('loginPage.password') }}</p>
            <Field
              :placeholder="$t('loginPage.inputTitle2')"
              type="password"
              name="password"
              :rules="validatePassword"
            />
            <ErrorMessage
              v-motion
              :initial="{ opacity: 0, y: -30 }"
              :enter="{ opacity: 1, y: 0 }"
              :delay="200"
              name="password"
              :style="
                language == 'EN'
                  ? 'color: red; text-align: left; margin-top: 5px'
                  : 'color: red; text-align: rgiht; margin-top: 5px'
              "
            />
            <AppButton
              :btnText="$t('loginPage.login')"
              class="appbutton"
              v-loading="login_loading"
              :element-loading-svg="svg"
              element-loading-svg-view-box="-10, -10, 50, 50"
              :leftIcon="['fas', 'right-to-bracket']"
            />
            <a
              class="forget-password"
              @click="this.$router.push('/login/forget-password')"
              >{{ $t('loginPage.title1') }}</a
            >
          </Form>
        </div>
      </div>
      <div
        :class="
          language == 'EN'
            ? 'register_form text_left'
            : 'register_form text_right'
        "
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
        :delay="500"
      >
        <h3>{{ $t('loginPage.register') }}</h3>
        <div>
          <Form @submit="onSubmit" class="form_content">
            <p>{{ $t('loginPage.email') }}</p>
            <Field
              name="email"
              type="email"
              :placeholder="$t('loginPage.inputTitle1')"
              :rules="validateEmail"
            />
            <ErrorMessage
              v-motion
              :initial="{ opacity: 0, y: -30 }"
              :enter="{ opacity: 1, y: 0 }"
              :delay="200"
              name="email"
              :style="
                language == 'EN'
                  ? 'color: red; text-align: left; margin-top: 5px'
                  : 'color: red; text-align: right; margin-top: 5px'
              "
            />
            <!-- Email is already exists-->
            <p
              v-show="email_is_exist == true ? true : false"
              :style="
                language == 'EN'
                  ? 'color: red; text-align: left; margin-top: 5px'
                  : 'color: red; text-align: right; margin-top: 5px'
              "
            >
              {{ $t('loginPage.inputTitle5') }}
            </p>

            <p>{{ $t('loginPage.userName') }}</p>
            <Field
              type="text"
              name="username"
              :placeholder="$t('loginPage.inputTitle4')"
              :rules="validateName"
            />
            <ErrorMessage
              v-motion
              :initial="{ opacity: 0, y: -30 }"
              :enter="{ opacity: 1, y: 0 }"
              :delay="200"
              name="username"
              :style="
                language == 'EN'
                  ? 'color: red; text-align: left; margin-top: 5px'
                  : 'color: red; text-align: rgiht; margin-top: 5px'
              "
            />
            <!-- User name is already exists-->
            <p
              v-show="user_name_is_exist == true ? true : false"
              :style="
                language == 'EN'
                  ? 'color: red; text-align: left; margin-top: 5px'
                  : 'color: red; text-align: rgiht; margin-top: 5px'
              "
            >
              {{ $t('loginPage.inputTitle6') }}
            </p>
            <p>{{ $t('loginPage.phoneNumber') }}</p>
            <Field
              :placeholder="$t('loginPage.inputTitle3')"
              name="phone"
              max="10"
              :rules="validatePhone"
            />
            <ErrorMessage
              v-motion
              :initial="{ opacity: 0, y: -30 }"
              :enter="{ opacity: 1, y: 0 }"
              :delay="200"
              name="phone"
              :style="
                language == 'EN'
                  ? 'color: red; text-align: left; margin-top: 5px'
                  : 'color: red; text-align: rgiht; margin-top: 5px'
              "
            />
            <AppButton
              v-loading="is_loading"
              :element-loading-svg="svg"
              element-loading-svg-view-box="-10, -10, 50, 50"
              :btnText="$t('loginPage.register')"
              class="appbutton"
              :leftIcon="['fas', 'user-plus']"
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
import { db, timestamp } from '@/firebase/config'
import { ElMessage } from 'element-plus'
import { Form, Field, ErrorMessage } from 'vee-validate'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
// import { auth } from '@/firebase/config'
import { mapActions } from 'vuex'
import store from '@/store'
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
      login_loading: false,
      email_is_exist: false,
      user_name_is_exist: false,
    }
  },
  computed: {
    language: () => store.state.user.language,
  },
  methods: {
    ...mapActions(['setUserInfo']),
    async checkEmail(email) {
      try {
        this.email_is_exist = false
        const collectionRef = db
          .collection('students')
          .where('email_address', '==', email)
        var res = await collectionRef.get()
        if (res.docs.length > 0) {
          return (this.email_is_exist = true)
        }
      } catch (error) {
        console.log(error)
      }
    },
    async checkUserName(userName) {
      try {
        this.user_name_is_exist = false
        const collectionRef = db
          .collection('students')
          .where('user_name', '==', userName)
        var res = await collectionRef.get()
        if (res.docs.length > 0) {
          return (this.user_name_is_exist = true)
        }
      } catch (error) {
        console.log(error)
      }
    },
    async onSubmit(values, { resetForm }) {
      this.is_loading = true
      await this.checkEmail(values.email)
      this.validateEmail(this.email_is_exist)
      await this.checkUserName(values.username)
      if (this.email_is_exist === false && this.user_name_is_exist === false) {
        console.log('submitted', values)
        try {
          const collectionRef = db.collection('students')
          await collectionRef.add({
            register_type: 'un_register',
            account_status: 'active',
            email_address: values.email,
            password: '',
            profile_image: '',
            phone_number: values.phone,
            register_date: timestamp(),
            user_name: values.username.toLowerCase(),
          })
          resetForm()
          ElMessage({
            message: this.$t('loginPage.message3Details'),
            type: 'success',
          })
          this.is_loading = false
        } catch (error) {
          this.is_loading = false
          ElMessage({
            message: this.$t('loginPage.message2Details'),
            type: 'error',
          })
        }
      }
      this.is_loading = false
    },
    async getUserInfo(email) {
      try {
        const userRef = db
          .collection('students')
          .where('email_address', '==', email)
        const res = await userRef.get()
        console.log(res.docs[0].data())
        this.setUserInfo({
          loggedIn: true,
          userId: res.docs[0].id,
          userName: res.docs[0].data().user_name,
          userImage: res.docs[0].data().profile_image,
        })
        console.log(res.docs[0].data().profile_image)
        console.log(res.docs[0].data().user_name)
      } catch (error) {
        console.log(error.message)
      }
    },
    async onLoginSubmit(value) {
      this.login_loading = true
      const auth = getAuth()
      signInWithEmailAndPassword(auth, value.email_address, value.password)
        .then(async (userCredential) => {
          const user = userCredential.user
          console.log(user)
          await this.getUserInfo(value.email_address)
          this.login_loading = false
          this.$router.push('/portal')
        })
        .catch((error) => {
          this.login_loading = false
          switch (error.code) {
            case 'auth/invalid-login-credentials':
              ElMessage({
                message: this.$t('loginPage.message1Details'),
                type: 'warning',
              })
              break
            default:
              ElMessage({
                message: this.$t('loginPage.message2Details'),
                type: 'error',
              })
              break
          }
        })
    },
    validateEmail(value) {
      // if the field is empty
      if (!value) {
        return this.$t('loginPage.inputTitle7')
      }
      // if the field is not a valid email
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
      if (!regex.test(value)) {
        return this.$t('loginPage.inputTitle8')
      }
      // All is good
      return true
    },
    validateName(value) {
      // if the field is empty
      if (!value) {
        return this.$t('loginPage.inputTitle7')
      }
      // All is good
      return true
    },
    validatePhone(value) {
      // if the field is empty
      if (!value) {
        return this.$t('loginPage.inputTitle7')
      }
      if (value.toString().length > 10 || value.toString().length < 10) {
        return this.$t('loginPage.inputTitle9')
      }
      console.log(value)
      // All is good
      return true
    },
    validateUser(value) {
      // if the field is empty
      if (!value) {
        return this.$t('loginPage.inputTitle7')
      }
      // All is good
      return true
    },
    validatePassword(value) {
      // if the field is empty
      if (!value) {
        return this.$t('loginPage.inputTitle7')
      } else if (value.length < 6) {
        return this.$t('loginPage.inputTitle10')
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
    .text_left {
      text-align: left;
    }
    .text_right {
      text-align: right;
    }

    .login_form {
      width: 50%;
      h3 {
        font-size: 30px;
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
        .appbutton {
          margin-top: 40px;
        }
        .forget-password {
          font-size: 14px;
          margin: 20px;
          text-decoration: underline;
          &:hover {
            color: @color-secondary;
            cursor: pointer;
          }
        }
      }
    }
    .register_form {
      width: 50%;
      h3 {
        font-size: 30px;
      }
      .form_content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border: 1px solid rgb(232, 232, 232);
        padding: 20px;
        border-radius: 12px;
        input {
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
        .appbutton {
          margin-top: 40px;
        }
      }
    }
  }
}
</style>
