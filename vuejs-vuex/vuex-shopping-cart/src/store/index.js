import vuex from 'vuex'
import vue from 'vue'
import shop from '@/api/shop.js'

//use middleware
vue.use(vuex)

export default new vuex.Store({
    state: { //equivalent with data
        products : [],
        cart : []
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
        },

        addProductToCart(context, product){
            if(product.inventory > 0){
                const cartItem = context.state.cart.find(item => item.id === product.id) //check if the item is in cart

                if(!cartItem){ //if item not in cart
                    context.commit('pushToCart', product.id)
                }else{ //if item is in cart
                    context.commit('incrementItemQuantity', cartItem)
                }

                context.commit('decrementProductInventory', product) //also reducing the product inventory
            }
        }
    },

    mutations: { //setting and update the state
        setProducts(state, products){
            state.products = products
        },
        
        pushToCart(state, productId){
            const itemToCart = {
                id : productId,
                quantity : 1
            }

            state.cart.push(itemToCart)
        },

        incrementItemQuantity(state, cartItem){
            cartItem.quantity++
        },

        decrementProductInventory(state, product){
            product.inventory--
        }
    }

})