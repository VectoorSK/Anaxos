import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'mdi'
  },
  breakpoint: {
    thresholds: {
      xs: 630,
      sm: 760,
      md: 980,
      lg: 1280
    },
    scrollBarWidth: 24
  }
})
