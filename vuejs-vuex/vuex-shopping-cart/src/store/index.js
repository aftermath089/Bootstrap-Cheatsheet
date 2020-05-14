import vuex from 'vuex'
import vue from 'vue'
import shop from '@/api/shop.js'

//use middleware
vue.use(vuex)

export default new vuex.Store({
    state: { //equivalent with data
        products : []
    },

    getters: { //equivalent to computed properties
        availableProducts(state){
            return state.products.filter(product => product.inventory > 0 )
        }
    },

    actions: { //equivalent to methods properties
        fetchProducts(context){
            return new Promise((resolve, reject) => {
                shop.getProducts(products => { //get the products from shop and  update with store.commit (note:shop is api and store is vuex storage)
                    context.commit('setProducts', products)
                    resolve()      
                })        
            })
        }
    },

    mutations: { //setting and update the state
        setProducts(state, products){
            state.products = products
        }
    }

})