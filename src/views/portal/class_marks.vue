<template>
  <div
    v-loading="is_loading"
    element-loading-text="Loading..."
    :element-loading-svg="svg"
    element-loading-svg-view-box="-10, -10, 50, 50"
    class="loading-div"
    v-if="is_loading"
  ></div>
  <div class="classs-marks-details-page" v-else>
    <AppPageTitleArea
      :currentPath="path_value.split('/')"
      :title="classTitle"
      translate="true"
    />
    <div class="classs-marks-img">
      <img src="@/assets/portal-page/image_1.png" />
    </div>
    <div
      :class="
        selectLanguage == 'EN'
          ? 'classs-marks-info text-left'
          : 'classs-marks-info text-right'
      "
    >
      <div class="classs-marks-info-summary">
        <h1>{{ classes.title }}</h1>
        <div
          class="classs-marks-description"
          v-show="$route.params.type == 'classes' ? true : false"
        >
          <div class="classs-marks-description-item_2">
            <h3>{{ $t('portalPage.title2') }}</h3>
            <el-table :data="register_class.subjects" style="width: 100%">
              <el-table-column
                :label="$t('portalPage.subject')"
                prop="sub_name"
                :align="selectLanguage == 'EN' ? 'left' : 'right'"
              />
              <el-table-column
                :label="$t('portalPage.fristExam')"
                prop="frist_exam_marks"
                :align="selectLanguage == 'EN' ? 'left' : 'right'"
              />
              <el-table-column
                :label="$t('portalPage.secondExam')"
                prop="second_exam_marks"
                :align="selectLanguage == 'EN' ? 'left' : 'right'"
              />
            </el-table>
            <div class="table-bottom">
              <div class="table-bottom-details">
                <h4>{{ $t('portalPage.average') }}</h4>
                <span>{{ this.average.toFixed(2) }} %</span>
              </div>
              <div class="table-bottom-details" v-show="secondExamType">
                <h4>{{ $t('portalPage.grade') }}</h4>
                <el-tag
                  class="grad"
                  :type="
                    average < 60 ? 'danger' : average >= 90 ? 'success' : ''
                  "
                  >{{ $t(`portalPage.${grad}`) }}</el-tag
                >
              </div>
            </div>
          </div>
        </div>
        <div class="classs-marks-description">
          <div class="classs-marks-description-item_2">
            <h3>{{ $t('courseDetailsPage.feeTitle') }}</h3>
            <el-table :data="register_class.monthly_fee" style="width: 100%">
              <el-table-column
                :label="$t('courseDetailsPage.feeDate')"
                prop="fee_date"
                :align="selectLanguage == 'EN' ? 'left' : 'right'"
              />
              <el-table-column
                :label="$t('courseDetailsPage.feeAmount')"
                :align="selectLanguage == 'EN' ? 'left' : 'right'"
              >
                <template #default="scope">
                  <el-tag
                    :type="
                      scope.row.fee_amount == null ||
                      scope.row.fee_amount == 0 ||
                      scope.row.fee_amount == ''
                        ? 'warning'
                        : 'success'
                    "
                    disable-transitions
                    >{{
                      scope.row.fee_amount == null ||
                      scope.row.fee_amount == 0 ||
                      scope.row.fee_amount == ''
                        ? $t('courseDetailsPage.feeTitle2')
                        : scope.row.fee_amount + '  ' + '$'
                    }}</el-tag
                  >
                </template>
              </el-table-column>
            </el-table>
          </div>
        </div>
      </div>
      <div class="classs-marks-info-sidebar">
        <div class="classs-marks-info-sidebar-details">
          <div class="sidebar-img">
            <h2>{{ $t('courseDetailsPage.online') }}</h2>
            <h2>
              {{
                $route.params.type == 'courses'
                  ? $t('courseDetailsPage.courses')
                  : $t('courseDetailsPage.classes')
              }}
            </h2>
            <!-- <img src="@/assets/course-details-page/image_1.png" /> -->
          </div>
          <div class="classs-marks-details">
            <div class="classs-marks-details-items">
              <span>
                <font-awesome-icon
                  style="margin-right: 10px"
                  :icon="['fa', 'clock']"
                />
                &nbsp; {{ $t('portalPage.duration') }}</span
              >
              <span
                >{{ classes.duration }}
                {{ $t(`courseDetailsPage.${classes.duration_type}`) }}
              </span>
            </div>
            <el-divider style="margin: 0px" />
            <div class="classs-marks-details-items">
              <span>
                <font-awesome-icon
                  style="margin-right: 10px"
                  :icon="['fas', 'chart-simple']"
                />
                &nbsp; {{ $t('portalPage.skillLevel') }}</span
              >
              <span>
                {{ $t(`courseDetailsPage.${classes.skill_level}`) }}
              </span>
            </div>
            <el-divider style="margin: 0px" />
            <div class="classs-marks-details-items">
              <span>
                <font-awesome-icon
                  style="margin-right: 10px"
                  :icon="['fas', 'language']"
                />
                &nbsp; {{ $t('portalPage.language') }}</span
              >
              <span>{{ classes.language }}</span>
            </div>
            <el-divider style="margin: 0px" />
            <div class="classs-marks-details-items">
              <span>
                <font-awesome-icon
                  style="margin-right: 10px"
                  :icon="['fas', 'money-check']"
                />
                &nbsp;
                {{
                  $route.params.type == 'course'
                    ? $t('coursesPage.title2')
                    : $t('coursesPage.title1')
                }}</span
              >
              <span>{{ classes.fee }} $</span>
            </div>
            <el-divider style="margin: 0px" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppPageTitleArea from '@/components/app_page_title_area.vue'
import store from '@/store'
import { db } from '@/firebase/config'
import dayjs from 'dayjs'

export default {
  name: 'classs-marks-details-page',
  components: { AppPageTitleArea },
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
      secondExamType: false,
      average: 0,
      grad: '',
      classTitle: '',
      register_class: {},
      classes: {},
      path_value: '/portal/classMarks',
    }
  },
  computed: {
    selectLanguage: () => store.state.user.language,
  },
  async mounted() {
    await this.getRegisterClass(
      this.$route.params.registerClassId,
      this.$route.params.type
    )
    await this.getClass(this.$route.params.courseId, this.$route.params.type)
  },
  methods: {
    averageMarks(arr) {
      const { total, count, second_exam_marks } = arr.reduce(
        (a, b) => {
          a.total +=
            parseInt(b.frist_exam_marks) + parseInt(b.second_exam_marks)
          a.count++
          a.second_exam_marks += parseInt(b.second_exam_marks) + 0
          return a
        },
        { total: 0, count: 0, second_exam_marks: 0 }
      )

      console.log('======================> ', second_exam_marks)
      if (second_exam_marks == 0) {
        this.secondExamType = false
      } else {
        this.secondExamType = true
      }
      return total / count
    },
    gradMarks(value) {
      if (value >= 90) {
        this.grad = 'a'
      } else if (value >= 80) {
        this.grad = 'b'
      } else if (value >= 70) {
        this.grad = 'c'
      } else if (value >= 60) {
        this.grad = 'd'
      } else {
        this.grad = 'failed'
      }
    },
    async getRegisterClass(id, type) {
      this.is_loading = true
      try {
        const userRef = db.collection('register_classes').doc(id)
        const res = await userRef.get()
        this.register_class = res.data()
        const monthlyData = JSON.parse(res.data().monthly_fee)
        var items = []
        monthlyData.map((item) => {
          items.push({
            fee_date: dayjs(item.fee_date).format('YYYY/M/d'),
            fee_amount: item.fee_amount,
          })
        })
        this.register_class.monthly_fee = items
        if (type == 'classes') {
          this.average = this.averageMarks(res.data().subjects)
          this.gradMarks(this.average)
        }
      } catch (error) {
        this.is_loading = false
        console.log(error.message)
      }
    },
    async getClass(id, type) {
      this.is_loading = true
      try {
        const userRef = db.collection(type).doc(id)
        const res = await userRef.get()
        this.classes = res.data()
        this.classTitle = res.data().title
        this.is_loading = false
      } catch (error) {
        this.is_loading = false
        console.log(error.message)
      }
    },
  },
}
</script>

<style scoped lang="less">
.loading-div {
  max-width: 1290px;
  height: 400px;
  margin: 0px auto;
}
.classs-marks-details-page {
  .classs-marks-img {
    margin: 0px auto;
    max-width: 1290px;
    height: 570px;
    overflow: hidden;
    border-radius: 5px;
    img {
      width: 100%;
      height: 100%;
      background-size: 100% 100%;
    }
  }
  .text-left {
    text-align: left;
  }

  .text-right {
    text-align: right;
  }
  .classs-marks-info {
    max-width: 1090px;
    padding: 0px 20px;
    margin: 0px auto;
    background-color: #ffff;
    display: flex;
    flex-direction: row;
    &-summary {
      width: 100%;
      margin: 0px 20px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      h1 {
        color: #231f40;
        font-size: 40px;
      }
      .classs-marks-description {
        width: 100%;
        box-sizing: border-box;
        border-radius: 8px;
        border: 1px solid #eeeeee;
        padding: 30px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-bottom: 10px;
        &-item_2 {
          width: 100%;
          h3 {
            margin: 0px;
            color: #231f40;
            font-size: 24px;
            margin: 0px 0px 20px 0px;
          }
          .table-bottom {
            width: 100%;
            height: 50px;
            display: flex;
            flex-direction: row;
            align-content: center;
            border: 1px solid rgba(128, 128, 128, 0.214);
            border-radius: 10px;
            margin-top: 10px;
            padding: 0px 20px;
            box-sizing: border-box;
            &-details {
              display: flex;
              flex-direction: row;
              align-items: center;
              width: 100%;
              height: 50px;
              h4 {
                margin: 0px 20px;
              }
            }
          }
        }
      }
    }
    &-sidebar {
      max-width: 100%;
      min-width: 360px;
      padding-left: 20px;
      &-details {
        width: 100%;
        padding: 20px;
        top: -50px;
        position: relative;
        border-radius: 15px;
        box-sizing: border-box;
        background-color: white;
        -webkit-box-shadow: 0px 0px 43px 4px rgba(66, 68, 90, 0.12);
        -moz-box-shadow: 0px 0px 43px 4px rgba(66, 68, 90, 0.12);
        box-shadow: 0px 0px 43px 4px rgba(66, 68, 90, 0.12);
        .sidebar-img {
          background-image: url('@/assets/course-details-page/image_1.png');
          background-size: 100% 100%;
          width: 100%;
          height: 290px;
          overflow: hidden;
          border-radius: 5px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding-top: 20px;
          h2 {
            margin: 0px 0px;
            font-size: 25px;
            font-weight: 900;
          }
        }
        .classs-marks-details {
          margin-top: 35px;
          padding: 0px 20px 20px 20px;
          width: 100%;
          height: 100%;
          box-sizing: border-box;
          .classs-marks-details-items {
            margin: 20px 0px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            font-size: 16px;
            color: #6f6b80;
            span {
              display: flex;
              justify-content: center;
              align-items: center;
            }
          }
        }
      }
    }
  }
}

@media @tablet {
  .classs-marks-details-page {
    .classs-marks-img {
      height: 400px;
    }
    .classs-marks-info {
      width: 100%;
      padding: 0px 10px;
      &-summary {
        width: 50%;
        margin: 0px 10px;
        h1 {
          font-size: 30px;
        }
        .classs-marks-description {
          width: 100%;
          padding: 15px;
          &-item_1 {
            h3 {
              font-size: 18px;
            }
            p {
              font-size: 14px;
              margin: 0px 0px 20px 0px;
            }
          }
          &-item_2 {
            h3 {
              font-size: 18px;
            }
            .table-bottom {
              width: 100%;
              height: 50px;
              border-radius: 10px;
              margin-top: 10px;
              padding: 0px;
              &-details {
                display: flex;
                flex-direction: row;
                align-items: center;
                width: 100%;
                height: 50px;
                h4 {
                  margin: 0px 10px;
                  font-size: 15px;
                }
                span {
                  font-size: 14px;
                }
              }
            }
          }
        }
      }
      &-sidebar {
        min-width: 50%;
        padding: 0px;
        &-details {
          width: 90%;
          margin-right: 20px;
          .sidebar-img {
            height: 200px;
            padding-top: 20px;
            h2 {
              margin: 0px 0px;
              font-size: 20px;
              font-weight: 800;
            }
          }
        }
      }
    }
  }
}

@media @mobile {
  .classs-marks-details-page {
    .classs-marks-img {
      height: 300px;
      border-radius: 5px;
      margin: 0px 20px;
      box-sizing: border-box;
      img {
        width: 100%;
        height: 100%;
        background-size: 100% 100%;
      }
    }
    .classs-marks-info {
      padding: 0px 20px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      &-summary {
        width: 100%;
        margin: 0px;
        h1 {
          font-size: 30px;
        }
        .classs-marks-description {
          padding: 20px;
          display: flex;
          &-item_2 {
            width: 100%;
            h3 {
              font-size: 18px;
            }
            .table-bottom {
              padding: 0px;
              &-details {
                height: 50px;
                h4 {
                  margin: 0px 10px;
                  font-size: 15px;
                }
                span {
                  font-size: 14px;
                }
              }
            }
          }
        }
      }
      &-sidebar {
        min-width: 100%;
        padding-left: 0px;
        margin-top: 20px;
        &-details {
          width: 100%;
          padding: 0px;
          top: 0px;
          margin: 0px;
          .sidebar-img {
            align-items: center;
            justify-content: center;
            padding-top: 20px;
            h2 {
              margin: 0px 0px;
              font-size: 25px;
              font-weight: 900;
            }
          }
        }
      }
    }
  }
}
</style>
