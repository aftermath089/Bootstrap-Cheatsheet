Vue.use(vuelidate.default)

new Vue({
  el: '#app',

  data () {
    return {
      form: {
        name: null,
        age: null,
        food: null,
        newsletter: null
      }
    }
  },

  validations: {  //validation is a reactive properties accesible by using variable $v
        form: {
            name: {
                required: validators.required // form.name is required
            },

            age: {
                required: validators.required, //form.age is required
                integer: validators.integer, //shall be integer
                between: validators.between(12, 120) //between 12 and 120
            },

            food: {
                required: validators.required, //form.age is required
                //return true if its pizza, or burger, or its not even written yet
                pizzaOrBurger : value => value === 'pizza' || value === 'burger' || !validators.helpers.req(value)
            },

            email: {
                email: validators.email,
                required: validators.requiredIf(function(){ //make sure its requiredIf and not required
                    return !!this.form.newsletter //return true if checkbox i
                })
            }
        }
    },

  methods: {
    submitForm(){
        this.$v.form.$touch() //used to touch the field so its become active, and trigger reactive effect to invalid and error properties
        //this.$v.form.name.$touch()
        //this.$v.form.age.$touch()

        if (!this.$v.form.$invalid) { //emit an invalid if one of the validators isnt satisfied
            console.log('📝 Form Submitted', this.form)
          } else {
            console.log('❌ Invalid form')
          }
    }
  }
})