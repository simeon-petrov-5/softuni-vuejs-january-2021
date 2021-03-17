import axios from 'axios';

const initialUserState = {
    "id": null,
    "name": "no name",
    "status": "",
    "species": "",
    "type": "",
    "gender": "",
    "origin": null,
    "location": null,
    "image": "",
    "episode": [],
    "url": "",
    "created": ""
}

export default {
    namespaced: true,
    state: {
        userData: { ...initialUserState },
        isLoading: false
    },
    getters: {
        isLoading(state) {
            return state.isLoading
        },
        userData(state) {
            return state.userData
        }
    },
    mutations: {
        resetUserState(state) {
            state.userData = { ...initialUserState };
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
        setUser(state, newUser) {
            state.userData = newUser
        }
    },
    actions: {
        async getUser(context, userId) {
            context.commit('setLoadingState', true);
            const res = await axios.get(`https://rickandmortyapi.com/api/character/${userId}`);
            context.commit('setUser', res.data);
            context.commit('setLoadingState', false);
        }
    }
}