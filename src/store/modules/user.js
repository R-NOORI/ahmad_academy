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
      let { loggedIn, userId, userName, userImage } = param
      commit('updateLoginStatus', loggedIn)
      commit('updateUserId', userId)
      commit('updateUserName', userName)
      commit('updateUserImage', userImage)
      localSave('loggedIn', loggedIn)
      localSave('userId', userId)
      localSave('userName', userName)
      localSave('userImage', userImage)
    },
    setUserImage(ctx, param) {
      let { commit } = ctx
      let { userImage } = param
      commit('updateUserImage', userImage)
      localSave('userImage', userImage)
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
      localRemove('loggedIn')
      localRemove('userId')
      localRemove('userName')
      localRemove('userImage')
    },
  },
}
