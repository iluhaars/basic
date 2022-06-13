import { createStore } from 'vuex'

export default createStore({
    state: {
        isLoggined: false,
        user: {}
    },
    getters: {
        isLoggedIn: state => state.isLoggedIn,
        user: state => state.user,
        group: state => state.group
    },
    mutations: {
        setUser(state, user) {
            state.isLoggedIn = true;
            state.user = user;
            state.group = user.group;
        },
        logoutUserState(state) {
            state.isLoggedIn = false;
            state.user = {};
            state.group = {};
        }
    },
    actions: {

    },
    modules: {}
})
