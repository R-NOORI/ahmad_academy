import Cookies from 'js-cookie'
import { globalCommon } from './constant'
const { TOKEN_KEY, EXPIRES_KEY, TOKEN_VALIDE_LIMIT } = globalCommon

export const setToken = (token, expires) => {
  let expiresTime = Date.now() + expires * 1000
  Cookies.set(TOKEN_KEY, token, { expires: expiresTime })
  Cookies.set(EXPIRES_KEY, expiresTime, { expires: expiresTime })
}

export const setLocaleLanuage = (value) => {
  Cookies.set('locale', value)
}
export const getLocaleLanuage = () => {
  const lan = Cookies.get('locale')
  if (lan) return lan
  else return 'EN'
}

export const getToken = () => {
  const token = Cookies.get(TOKEN_KEY)
  if (token) return token
  else return false
}

export const removeToken = () => {
  Cookies.remove(TOKEN_KEY)
  Cookies.remove(EXPIRES_KEY)
}

export const localSave = (key, value) => {
  localStorage.setItem(key, value)
}

export const localRead = (key) => {
  return localStorage.getItem(key) || ''
}

export const localRemove = (key) => {
  localStorage.removeItem(key)
}

export const getTokenExpires = () => {
  let expires = Cookies.get(EXPIRES_KEY)
  if (expires) return expires
  else return false
}

export const checkTokenValidity = () => {
  let now = Date.now()
  let expires = getTokenExpires()
  return expires - now < TOKEN_VALIDE_LIMIT
}
