import vue from 'vue'
import VueRouter from 'vue-router'

vue.use(VueRouter)

const routes = [
    {
        path: '/home/',
        redirect: {
            name: 'index'
        }
    },
    {
        path: '/home/index',
        name: 'index',
        component: () => import('./index.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router