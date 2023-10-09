import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { MotionPlugin } from '@vueuse/motion'

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
  faBriefcase,
  faGear,
  faChartSimple,
  faLanguage,
  faBook,
  faBasketShopping,
  faTrophy,
} from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import {
  faFacebookF,
  faLinkedinIn,
  faTwitter,
  faTelegram,
  faInstagram,
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
  faUser,
  faBriefcase,
  faGear,
  faInstagram,
  faChartSimple,
  faLanguage,
  faBook,
  faBasketShopping,
  faTrophy
)

/* add font awesome icon component */
createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(store)
  .use(router)
  .use(ElementPlus)
  .use(MotionPlugin)
  .mount('#app')
