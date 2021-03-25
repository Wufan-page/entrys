import vue from 'vue'
import VueRouter from 'vue-router'

vue.use(VueRouter)

const routes = [
    {
        path: '/backend/',
        redirect: {
            name: 'main'
        }
    },
    {
        path: '/backend/main',
        name: 'main',
        component: () => import('./Back.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router