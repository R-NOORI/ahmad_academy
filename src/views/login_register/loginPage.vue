<template>
  <div class="container">
    <AppPageTitleArea
      :currentPath="this.$route.fullPath.split('/')"
      :title="this.$route.name"
    />
    <div class="account-container">
      <div
        class="login_form"
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
        <h3>Login</h3>
        <div>
          <Form @submit="onLoginSubmit" class="form_content">
            <P>Email *</P>
            <Field
              placeholder="Email "
              type="email"
              name="email_address"
              :rules="validateEmail"
            />
            <ErrorMessage
              name="email_address"
              style="color: red; text-align: left; margin-top: 5px"
            />
            <p>Password *</p>
            <Field
              placeholder="Password"
              type="password"
              name="password"
              :rules="validatePassword"
            />
            <ErrorMessage
              name="password"
              style="color: red; text-align: left; margin-top: 5px"
            />
            <AppButton btnText="Login" class="appbutton" />
          </Form>
        </div>
      </div>
      <div
        class="register_form"
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
        <h3>Register</h3>
        <div>
          <Form @submit="onSubmit" class="form_content">
            <p>Email *</p>
            <Field
              name="email"
              type="email"
              placeholder="Enter email address"
              :rules="validateEmail"
            />
            <ErrorMessage
              name="email"
              style="color: red; text-align: left; margin-top: 5px"
            />
            <p
              v-show="email_is_exist == true ? true : false"
              style="color: red; text-align: left; margin-top: 5px"
            >
              Email is already exists
            </p>

            <p>Username *</p>
            <Field
              type="text"
              name="username"
              placeholder="Enter username"
              :rules="validateName"
            />
            <ErrorMessage
              name="username"
              style="color: red; text-align: left; margin-top: 5px"
            />
            <p
              v-show="user_name_is_exist == true ? true : false"
              style="color: red; text-align: left; margin-top: 5px"
            >
              User name is already exists
            </p>
            <p>Phone Number *</p>
            <Field
              placeholder="Enter phone number"
              name="phone"
              max="10"
              :rules="validatePhone"
            />
            <ErrorMessage
              name="phone"
              style="color: red; text-align: left; margin-top: 5px"
            />
            <AppButton
              :btnText="is_loading ? 'loading...' : 'Register'"
              class="appbutton"
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
import { mapActions } from 'vuex'
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
      is_loading: false,
      email_is_exist: false,
      user_name_is_exist: false,
    }
  },
  methods: {
    ...mapActions(['setUserInfo']),
    async checkEmail(email) {
      try {
        this.email_is_exist = false
        const collectionRef = db
          .collection('users')
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
          .collection('users')
          .where('user_name', '==', userName)
        var res = await collectionRef.get()
        if (res.docs.length > 0) {
          return (this.user_name_is_exist = true)
        }
      } catch (error) {
        console.log(error)
      }
    },
    async onSubmit(values) {
      this.is_loading = true
      await this.checkEmail(values.email)
      this.validateEmail(this.email_is_exist)
      await this.checkUserName(values.username)
      if (this.email_is_exist === false && this.user_name_is_exist === false) {
        console.log('submitted', values)
        try {
          const collectionRef = db.collection('users')
          await collectionRef.add({
            register_type: 'un_register',
            account_status: 'deactive',
            email_address: values.email,
            password: '',
            phone_number: values.phone,
            register_date: timestamp(),
            user_name: values.username.toLowerCase(),
          })
          ElMessage({
            message: 'Data save successful.',
            type: 'success',
          })
          this.is_loading = false
        } catch (error) {
          this.is_loading = false
          ElMessage({
            message: 'Internet connection error.',
            type: 'error',
          })
        }
      }
      this.is_loading = false
    },
    async getUserInfo(email) {
      try {
        const userRef = db
          .collection('users')
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
      try {
        await this.getUserInfo(value.email_address)
        var res = await signInWithEmailAndPassword(
          getAuth(),
          value.email_address,
          value.password
        )
        this.$router.push('/portal')
        console.log('==============>', res)
      } catch (error) {
        console.log(error)
      }
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
    validateName(value) {
      // if the field is empty
      if (!value) {
        return 'This field is required'
      }
      // All is good
      return true
    },
    validatePhone(value) {
      // if the field is empty
      if (!value) {
        return 'This field is required'
      }
      if (value.toString().length > 10 || value.toString().length < 10) {
        return 'The phone number must be 10 digits'
      }
      console.log(value)
      // All is good
      return true
    },
    validateUser(value) {
      // if the field is empty
      if (!value) {
        return 'This field is required'
      }
      // All is good
      return true
    },
    validatePassword(value) {
      // if the field is empty
      if (!value) {
        return 'This field is required'
      } else if (value.length < 6) {
        return 'password moust be 6 character'
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
    .login_form {
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
    .register_form {
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
        p {
          text-align: left;
        }
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
