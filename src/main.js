import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { MotionPlugin } from '@vueuse/motion'
import { createI18n } from 'vue-i18n'
import EN from '@/locale/EN.json'
import PA from '@/locale/PA.json'
import FA from '@/locale/FA.json'
import { getLocaleLanguage } from '@/lib/utils'

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
  faMoneyCheck,
  faCloudArrowUp,
  faTrash,
  faRightFromBracket,
  faArrowRightLong,
  faRightToBracket,
  faUserPlus,
  faArrowLeft,
  faArrowLeftLong,
  faAnglesLeft,
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
  faAnglesLeft,
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
  faTrophy,
  faMoneyCheck,
  faGear,
  faCloudArrowUp,
  faTrash,
  faRightFromBracket,
  faArrowRightLong,
  faArrowLeftLong,
  faRightToBracket,
  faUserPlus,
  faGlobe,
  faLanguage,
  faArrowLeft
)

const i18n = createI18n({
  locale: `${getLocaleLanguage()}`,
  messages: {
    EN: EN,
    PA: PA,
    FA: FA,
  },
})

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(i18n)
  .use(store)
  .use(router)
  .use(ElementPlus)
  .use(MotionPlugin)
  .mount('#app')
