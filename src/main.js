import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import BaiduMap from 'vue-baidu-map'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import 'swiper/swiper-bundle.css'
import Swiper, { Pagination, Navigation, Autoplay } from 'swiper';
Swiper.use([Pagination, Navigation, Autoplay]);


import './assets/css/reset.css'
import './assets/css/main.css'
import 'swiper/swiper.min.css'

Vue.config.productionTip = false
Vue.use(BaiduMap,{
  ak:'daxDx6un7AdfUX4dMzD9d68EeZTrCV8j'
})

Vue.use(VueAwesomeSwiper)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
