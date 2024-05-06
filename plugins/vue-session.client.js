//плагин для того чтобы видеть window в модуле store в Themes
import Vue from 'vue'
import VueSession from 'vue-session'
Vue.use(VueSession)
Vue.component('vue-session', VueSession)
