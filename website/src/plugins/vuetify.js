import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import '@fortawesome/fontawesome-free/css/all.css'

import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'fa'
  },
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: colors.grey.darken4
      }
    }
  }
})
