import {
  getToken,
  localSave,
  localRead,
  localRemove,
  getLocaleLanguage,
  setLocaleLanguage,
} from '@/lib/utils'
export default {
  state: {
    token: getToken(),
    loggedIn: localRead('loggedIn'),
    userId: localRead('userId'),
    userName: localRead('userName'),
    userImage: localRead('userImage'),
    phoneNumber: localRead('phoneNumber'),
    email: localRead('email'),
    language: getLocaleLanguage(),
  },
  mutations: {
    updateLoginStatus(state, payload) {
      state.loggedIn = payload
    },
    updateUserId(state, payload) {
      state.userId = payload
    },
    updateUserName(state, payload) {
      state.userName = payload
    },
    updateUserImage(state, payload) {
      state.userImage = payload
    },
    updateUserPhoneNumber(state, payload) {
      state.phoneNumber = payload
    },
    updateUserEmail(state, payload) {
      state.email = payload
    },
    updateLocaleLanguage(state, payload) {
      state.language = payload
    },
  },
  getters: {
    getLoginStatus(state) {
      return state.loggedIn
    },
  },
  actions: {
    setUserInfo(ctx, param) {
      let { commit } = ctx
      let { loggedIn, userId, userName, userImage, phoneNumber, email } = param
      commit('updateLoginStatus', loggedIn)
      commit('updateUserId', userId)
      commit('updateUserName', userName)
      commit('updateUserImage', userImage)
      commit('updateUserPhoneNumber', phoneNumber)
      commit('updateUserEmail', email)
      localSave('loggedIn', loggedIn)
      localSave('userId', userId)
      localSave('userName', userName)
      localSave('userImage', userImage)
      localSave('phoneNumber', phoneNumber)
      localSave('email', email)
    },
    setUserImage(ctx, param) {
      let { commit } = ctx
      let { userImage } = param
      commit('updateUserImage', userImage)
      localSave('userImage', userImage)
    },
    setPhoneNumber(ctx, param) {
      let { commit } = ctx
      let { phoneNumber } = param
      commit('updateUserPhoneNumber', phoneNumber)
      localSave('phoneNumber', phoneNumber)
    },
    setLocaleLanguage(ctx, param) {
      let { commit } = ctx
      let { lan } = param
      commit('updateLocaleLanguage', lan)
      setLocaleLanguage(lan)
    },
    removeUserInfo(ctx) {
      let { commit } = ctx
      commit('updateUserId', null)
      commit('updateUserName', null)
      commit('updateUserImage', null)
      commit('updateLoginStatus', false)
      commit('updateUserPhoneNumber', null)
      commit('updateUserEmail', null)
      localRemove('loggedIn')
      localRemove('userId')
      localRemove('userName')
      localRemove('userImage')
      localRemove('phoneNumber')
      localRemove('email')
    },
  },
}
