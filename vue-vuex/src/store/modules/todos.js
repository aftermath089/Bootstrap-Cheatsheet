//import axios from 'axios'

import Axios from "axios"

const  state = {
    todos : []
}

const getters = {
    allTodos: (state)=> state.todos
}

const actions = {
    async fetchTodos({commit}){
        const response = await Axios.get("https://jsonplaceholder.typicode.com/posts")
        console.log(response.data)

        commit('setTodos', response.data)
    }
}

const mutations = {
    setTodos : (state, response) => (state.todos = response) //response is response.data in actions commit
}

export default {
    state: state,
    getters: getters,
    actions: actions,
    mutations: mutations
}