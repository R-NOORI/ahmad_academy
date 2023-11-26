<template>
  <div class="setting">
    <AppPageTitleArea
      :currentPath="this.$route.fullPath.split('/')"
      :title="this.$route.name"
    />
    <div
      :class="
        language == 'EN' ? 'setting_form text-left' : 'setting_form text-right'
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
      <h3 @click="() => $router.go(-1)">
        <font-awesome-icon
          class="icon-btn"
          :icon="['fas', language == 'EN' ? 'angle-left' : 'angle-right']"
        />
        {{ $t('settingPage.updateProfile') }}
      </h3>
      <div>
        <Form @submit="onSubmit" class="form_content">
          <label for="select-file"
            >{{ $t('settingPage.title1') }}
            <div class="file-upload">
              <div
                class="file_upload-details"
                v-if="userForm.profile_image == ''"
              >
                <div class="file_upload-details-items" v-if="progress == null">
                  <div class="icon-dev">
                    <font-awesome-icon :icon="['fas', 'cloud-arrow-up']" />
                  </div>
                  <div class="file-info">
                    <h1>{{ $t('settingPage.message1Details') }}</h1>
                    <h2>{{ $t('settingPage.message2Details') }}</h2>
                    <p>{{ $t('settingPage.message3Details') }}</p>
                    <el-button disabled>{{ $t('settingPage.btn1') }}</el-button>
                  </div>
                  <input
                    type="file"
                    style="display: none"
                    id="select-file"
                    @change="uploadImage"
                  />
                </div>
                <div class="progress-bar" v-else>
                  <el-progress
                    type="circle"
                    :percentage="progress"
                    :status="progress == 100 ? 'success' : ''"
                  />
                </div>
              </div>
              <div v-else class="file-upload-show">
                <el-button
                  class="btn-icon"
                  type="danger"
                  circle
                  size="large"
                  :loading="is_delete"
                  @click="deleteImage"
                >
                  <font-awesome-icon
                    v-if="!is_delete"
                    :icon="['fas', 'trash']"
                  />
                </el-button>
                <img :src="userForm.profile_image" />
              </div>
            </div>
          </label>
          <p>{{ $t('settingPage.title2') }}</p>
          <Field
            v-model="userForm.phone_number"
            :placeholder="$t('settingPage.message10Details')"
            name="phone_number"
            max="10"
            :rules="validatePhone"
          />
          <ErrorMessage
            name="phone_number"
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
            :btnText="$t('settingPage.btn2')"
            class="appbutton"
          />
        </Form>
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from '@/components/app_button.vue'
import AppPageTitleArea from '@/components/app_page_title_area.vue'
import { db, dbStorage } from '@/firebase/config'
import { ElMessage } from 'element-plus'
import { Form, Field, ErrorMessage } from 'vee-validate'
import store from '@/store'
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
      file_data: null,
      progress: null,
      is_delete: false,
      allow_files: ['image/png', 'image/jpg', 'image/jpeg'],
      is_loading: false,
      show_password: false,
      userForm: {
        id: '',
        profile_image: '',
        phone_number: '',
        password: '',
      },
    }
  },
  computed: {
    language: () => store.state.user.language,
  },
  async mounted() {
    await this.getUserInfo(store.state.user.userId)
    console.log(this.userForm)
  },
  methods: {
    ...mapActions(['setUserImage', 'removeUserInfo']),
    async getUserInfo(id) {
      try {
        const userRef = db.collection('users').doc(id)
        const res = await userRef.get()
        this.userForm = res.data()
        console.log(res.data())
      } catch (error) {
        ElMessage({
          message: this.$t('settingPage.message11Details'),
          type: 'warning',
        })
        console.log(error.message)
      }
    },
    async deleteImage() {
      this.is_delete = true
      try {
        let pictureRef = dbStorage.refFromURL(this.userForm.profile_image)
        await pictureRef.delete()
        ElMessage({
          message: this.$t('settingPage.message4Details'),
          type: 'success',
        })
        this.setUserImage({
          userImage: 'null',
        })
        this.userForm.profile_image = ''
        this.progress = null
        this.file_data = null

        this.is_delete = false
      } catch (error) {
        this.is_delete = false
        console.log(error)
        ElMessage({
          message: this.$t('settingPage.message11Details'),
          type: 'warning',
        })
      }
    },
    uploadImage(e) {
      const time = new Date().toLocaleTimeString()
      var file = e.target.files[0]
      if (file && this.allow_files.includes(file.type)) {
        this.file_data = file
        const storageRef = dbStorage.ref(
          `user_images/${time + '_' + file.name}`
        )
        storageRef.put(file).on(
          'changed_state',
          (snapShot) => {
            const progress = Math.round(
              (snapShot.bytesTransferred / snapShot.totalBytes) * 100
            )
            this.progress = progress
          },
          (err) => {
            console.log(err)
            ElMessage({
              message: this.$t('settingPage.message11Details'),
              type: 'warning',
            })
            this.progress = null
          },
          async () => {
            const url = await storageRef.getDownloadURL()
            this.userForm.profile_image = url
          }
        )
      } else {
        ElMessage({
          message: this.$t('settingPage.message7Details'),
          type: 'warning',
        })
      }
    },

    async onSubmit(values) {
      console.log(values)
      console.log(this.userForm)
      this.is_loading = true
      try {
        if (this.userForm.profile_image != '') {
          const productRef = db.collection('users').doc(store.state.user.userId)
          await productRef.update(this.userForm)
          ElMessage({
            message: this.$t('settingPage.message5Details'),
            type: 'success',
          })
          this.setUserImage({
            userImage: this.userForm.profile_image,
          })
          this.is_loading = false
          this.$router.go(-1)
        } else {
          this.is_loading = false
          ElMessage({
            message: this.$t('settingPage.message6Details'),
            type: 'warning',
          })
        }
      } catch (error) {
        this.is_loading = false
        console.log(error)
        ElMessage({
          message: this.$t('settingPage.message11Details'),
          type: 'warning',
        })
      }
    },
    validatePassword(value) {
      // if the field is empty
      if (!value) {
        return this.$t('settingPage.message8Details')
      }
      // All is good
      return true
    },
    validatePhone(value) {
      // if the field is empty
      if (!value) {
        return this.$t('settingPage.message8Details')
      }
      if (value.toString().length > 10 || value.toString().length < 10) {
        return this.$t('settingPage.message9Details')
      }
      // All is good
      return true
    },
  },
}
</script>

<style lang="less" scoped>
.setting {
  text-align: right;
  .text-left {
    text-align: left;
  }
  .text-right {
    text-align: right;
  }
  .setting_form {
    max-width: 1120px;
    margin: 0px auto;
    .file-upload {
      &:hover {
        border: 1px dashed @color-orange;
        cursor: pointer;
      }
      overflow: hidden;
      position: relative;
      border: 1px dashed @color-secondary;
      background-color: #f5f5f5;
      width: 300px;
      height: 200px;
      border-radius: 10px;
      margin-top: 10px;
      margin-bottom: 20px;
      .file_upload-details {
        height: 100%;
        &-items {
          padding: 20px;
          display: flex;
          flex-direction: row;
          .icon-dev {
            width: 40px;
            height: 40px;
            border-radius: 100%;
            background-color: @color-secondary;
            display: flex;
            justify-content: center;
            align-items: center;
            color: aliceblue;
            font-size: 17px;
            margin-right: 10px;
          }
          .file-info {
            h1 {
              font-size: 14px;
              font-weight: 500;
              margin: 0px 0px 5px 0px;
            }

            h2 {
              font-size: 15px;
              font-weight: 500;
              margin: 0px 0px 5px 0px;
            }
            p {
              margin: 0px 0px 20px 0px;
              font-size: 14px;
            }
          }
        }
        .progress-bar {
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
      .file-upload-show {
        padding: 5px;
        width: 100%;
        height: 100%;
        position: relative;
        box-sizing: border-box;
        img {
          height: 100%;
          width: 100%;
          border-radius: 10px;
        }
        .btn-icon {
          position: absolute;
          right: 20px;
          top: 20px;
        }
      }
    }
    h3 {
      font-size: 30px;
      &:hover {
        cursor: pointer;
        .icon-btn {
          color: @color-secondary;
        }
      }
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
</style>
