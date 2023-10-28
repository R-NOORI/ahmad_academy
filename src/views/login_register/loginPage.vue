<template>
  <div class="container">
    <AppPageTitleArea :currentPath="this.$route.name" />
    <div class="account-container">
      <div class="login_form">
        <h3>Login</h3>
        <div>
          <Form @submit="onLoginSubmit" class="form_content">
            <P>Username or Email *</P>
            <Field
              placeholder="Username or Email "
              type="text"
              name="user"
              :rules="validateUser"
            />
            <ErrorMessage name="user" style="color: red" />
            <p>Password *</p>
            <Field
              placeholder="Password"
              type="password"
              name="password"
              :rules="validatePassword"
            />
            <ErrorMessage name="password" style="color: red" />
            <AppButton btnText="Login" class="appbutton" />
          </Form>
        </div>
      </div>
      <div class="register_form">
        <h3>Register</h3>
        <div>
          <Form @submit="onSubmit" class="form_content">
            <p>Email Address *</p>
            <Field
              name="email"
              type="email"
              placeholder="Enter email address"
              :rules="validateEmail"
            />
            <ErrorMessage name="email" style="color: red" />
            <p>Username *</p>
            <Field
              type="text"
              name="username"
              placeholder="Enter username"
              :rules="validateName"
            />
            <ErrorMessage name="username" style="color: red" />
            <p>Phone Number *</p>
            <Field
              placeholder="Enter phone number"
              type="number"
              name="phone"
              max="10"
              :rules="validatePhone"
            />
            <ErrorMessage name="phone" style="color: red" />
            <AppButton btnText="Register" class="appbutton" />
          </Form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from '@/components/app_button.vue'
import AppPageTitleArea from '@/components/app_page_title_area.vue'
import { Form, Field, ErrorMessage } from 'vee-validate'
export default {
  components: {
    AppButton,
    AppPageTitleArea,
    Form,
    Field,
    ErrorMessage,
  },
  methods: {
    onSubmit(values) {
      console.log('submitted', values)
    },
    onLoginSubmit() {},
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

  .account-container {
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 40px;
    .login_form {
      width: 40%;
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
      width: 40%;
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
