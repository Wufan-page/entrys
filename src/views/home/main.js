import Vue from 'vue'
import router from './router'
import Home from './Home'
import store from '@/store'

Vue.config.productionTip = false


new Vue({
    router,
    store,
    render: h => h(Home),
}).$mount('#app')
