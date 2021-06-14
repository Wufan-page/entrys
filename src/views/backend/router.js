import vue from 'vue'
import VueRouter from 'vue-router'

vue.use(VueRouter)

const routes = [
    {
        path: '/backend',
        component: () => import('./Back.vue'),
        children: [
            {
                path: '/backend/another',
                name: 'another',
                component: { template: '<p>another test page</p>' }
            }
        ]
    },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router