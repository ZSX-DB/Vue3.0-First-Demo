import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/new',
        name: 'New',
        component: () => import('../views/New')
    },
    {
        path: '/computed',
        name: 'Computed',
        component: () => import('../views/Computed')
    },
    {
        path: '/watch',
        name: 'Watch',
        component: () => import('../views/Watch')
    },
    {
        path: '/router',
        name: 'Router',
        component: () => import('../views/Router')
    },
    {
        path: '/life-cycle',
        name: 'LifeCycle',
        component: () => import('../views/LifeCycle')
    },
    {
        path: '/directive',
        name: 'Directive',
        component: () => import('../views/Directive')
    },
    {
        path: '/mixin',
        name: 'Mixin',
        component: () => import('../views/Mixin')
    },
    {
        path: '/teleport',
        name: 'Teleport',
        component: () => import('../views/Telelport')
    },
    {
        path: '/dom',
        name: 'Dom',
        component: () => import('../views/Dom')
    },
    {
        path: '/env',
        name: 'Env',
        component: () => import('../views/Env')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
