import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import {
  faGlobe,
  faPhoneVolume,
  faEnvelopeOpen,
  faLocationDot,
  faAnglesRight,
  faPhone,
  faEnvelope,
  faMagnifyingGlass,
  faArrowRight,
  faClipboardList,
  faClock,
  faCircleUser,
} from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import {
  faFacebookF,
  faLinkedinIn,
  faTwitter,
  faTelegram,
} from '@fortawesome/free-brands-svg-icons'

/* add icons to the library  magnifying-glass */
library.add(
  faGlobe,
  faPhoneVolume,
  faEnvelopeOpen,
  faLocationDot,
  faAnglesRight,
  faFacebookF,
  faLinkedinIn,
  faTwitter,
  faTelegram,
  faPhone,
  faEnvelope,
  faMagnifyingGlass,
  faArrowRight,
  faClipboardList,
  faClock,
  faCircleUser,
  faUser
)

/* add font awesome icon component */
createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(store)
  .use(router)
  .use(ElementPlus)
  .mount('#app')
