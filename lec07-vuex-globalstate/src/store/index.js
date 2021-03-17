import axios from 'axios';
import Vue from 'vue'
import Vuex from 'vuex'

import usersModule from './users'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        count: 1,
        testString: '',
        characters: [],
        isLoading: false,
        message: ''
    },
    getters: {
        counter(state) {
            return state.count;
        },
        double(state) {
            return state.count * 2;
        },
        isLoading(state) {
            return state.isLoading
        },
        message(state) {
            return state.message
        }
    },
    mutations: {
        increment(state, payload = { name: '' }) {
            state.count++;
            if (payload.name && typeof payload.name === 'string') {
                state.testString = payload.name
            }
        },
        setCharacters(state, payload) {
            state.characters = payload
        },
        setLoadingState(state, isLoading) {
            if (isLoading) {
                state.isLoading = isLoading
            } else {
                setTimeout(() => {
                    state.isLoading = isLoading
                }, 3000)
            }
        },

        message(state, newMessage) {
            state.message = newMessage
        }
    },
    actions: {
        async getAllCharacters(context) {
            // To access another store https://vuex.vuejs.org/guide/modules.html#module-local-state
            // console.log('data fro manother module', context.rootState.instance.usersModule)
            context.commit('setLoadingState', true);
            const res = await axios.get('https://rickandmortyapi.com/api/character');
            context.commit('setCharacters', res.data.results);
            context.commit('setLoadingState', false);
        }
    },
    modules: {
        usersModule
    }
})