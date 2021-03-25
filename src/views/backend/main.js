import Vue from 'vue'
import Backend from './Backend'
import router from './router'
import store from '@/store'

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(Backend),
}).$mount('#app')
