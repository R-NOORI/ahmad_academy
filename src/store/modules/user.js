import { getToken, localSave, localRead, localRemove } from '@/lib/utils'
export default {
  state: {
    token: getToken(),
    loggedIn: localRead('loggedIn'),
    userId: localRead('userId'),
    userName: localRead('userName'),
    userImage: localRead('userImage'),
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
