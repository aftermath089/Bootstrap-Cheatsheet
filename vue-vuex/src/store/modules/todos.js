//import axios from 'axios'

const  state = {
    todos : [
        {
            id : 1,
            title : 'mock 1'
        },
        {
            id : 2,
            title : 'mock 2'
        }
    ]
}

const getters = {
    allTodos: (state)=> state.todos
}

const actions = {}

const mutations = {}

export default {
    state: state,
    getters: getters,
    actions: actions,
    mutations: mutations
}