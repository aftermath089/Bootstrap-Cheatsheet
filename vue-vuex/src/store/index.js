import Vuex from 'vuex'
import vue from 'vue'
import todos from './modules/todos'

// use Vuex as middleware
vue.use(Vuex)

// create store
export default new Vuex.Store({
    modules:{
        todos
    }
})