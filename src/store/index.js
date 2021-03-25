import vue from 'vue'
import Vuex from 'vuex'

vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: parseInt(sessionStorage.getItem('count') || 0)
    },
    getters: {
        getCount(state) {
            return state.count
        }
    },
    mutations: {
        setCount(state, payload) {
            state.count += payload
        }
    },
    actions: {
        async setCount(context, payload) {
            await context.commit('setCount', payload)
            sessionStorage.setItem('count', context.state.count)
        }
    }
})

export default store;