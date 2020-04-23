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
        const response = await Axios.get("https://jsonplaceholder.typicode.com/todos")
        console.log(response.data)

        commit('setTodos', response.data)
    },

    async addTodo({commit}, title){
        const response = await Axios.post("https://jsonplaceholder.typicode.com/todos/",
        {title, completed : false})

        commit('newTodo', response.data)
    },
    
    async deleteTodo({commit}, id){
        await Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)

        commit('removeTodo', id)
    }
}

const mutations = {// mutate on commits
    setTodos : (state, response) => (state.todos = response), //response is response.data in actions commit
    newTodo: (state, todo) => state.todos.unshift(todo),
    removeTodo : (state, id) => state.todos = state.todos.filter(todo => todo.id !== id)
}

export default {
    state: state,
    getters: getters,
    actions: actions,
    mutations: mutations
}