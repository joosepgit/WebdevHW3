import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        posts: [],
        user: [],
        profiles: [],
    },

    getters: {
        allPosts: (state) => state.posts,
        thisUser: (state) => state.user,
        allProfiles: (state) => state.profiles,
    },

    actions: {
        getPosts({ commit }) {
            axios.get('https://private-517bb-wad20postit.apiary-mock.com/posts')
                .then(response => {
                    commit('SET_POSTS', response.data)
                })
        },
        getUser({ commit }) {
            axios.get('https://private-517bb-wad20postit.apiary-mock.com/users/1')
                .then(response => {
                    commit('SET_USER', response.data)
                })
        },
        getProfiles({ commit }) {
            axios.get('https://private-517bb-wad20postit.apiary-mock.com/profiles')
                .then(response => {
                    commit('SET_PROFILES', response.data)
                })
        },
    },

    mutations: {
        SET_POSTS(state, posts) {
            state.posts = posts
        },
        SET_USER(state, user) {
            state.user = user
        },
        SET_PROFILES(state, profiles) {
            state.profiles = profiles
        },
    }
})