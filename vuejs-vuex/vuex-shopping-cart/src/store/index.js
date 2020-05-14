import vuex from 'vuex'
import vue from 'vue'

//use middleware
vue.use(vuex)

export default new vuex.Store({
    state: { //equivalent with data
        products : []
    },

    getters: { //equivalent to computed properties

    },

    actions: { //equivalent to methods properties

    },

    mutations: { //setting and update the state
        setProducts(state, products){
            state.products = products
        }
    }

})