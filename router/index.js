import { createRouter, createWebHistory } from 'vue-router'
import axios from 'axios'
import store from '../store/index'

import Home from '../views/Home.vue'
import Chat from '../views/Chat.vue'
import Login from '../views/Login.vue'
import Admin from '../views/Admin.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/chat',
        name: 'Chat',
        component: Chat,
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/Admin',
        name: 'Admin',
        component: Admin,
        beforeEnter: () => {
            if (store.getters.group != 1)
                return { name: 'Home' }
        },
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach(async(to) => {

    const context = await axios.get("http://localhost:8081/api/users/cheak/", { withCredentials: true });
    if (context.status === 200) store.commit('setUser', context.data);

    if (!store.getters.isLoggedIn && to.name !== 'Login') {
        return { name: 'Login' }
    }

})

export default router