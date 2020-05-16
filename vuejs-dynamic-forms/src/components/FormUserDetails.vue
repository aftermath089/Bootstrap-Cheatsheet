<template>
  <div>
    <h1 class="title">Create Account</h1>

    <h2 class="subtitle">Create an account or log in to order your liquid gold subscription</h2>

    <form class="form" v-on:input="submit" v-if="!loggedIn">
      <div class="form-group">
        <label class="form-label" for="email">Email</label>
        <input
          type="text"
          v-model="$v.form.email.$model"
          v-on:blur="checkIfUserExists"
          placeholder="your@email.com"
          class="form-control"
          id="email"
        />
        <div v-if="$v.form.email.$error && !$v.form.email.required" class="error">email is required</div>
        <div v-if="$v.form.email.$error && !$v.form.email.email" class="error">email is invalid</div>
      </div>

      <div class="form-group" v-if="emailCheckedInDB"> <!--show only when email entered is checked in DB-->
        <label class="form-label" for="password">Password</label>
        <input
          v-model="$v.form.password.$model"
          type="password"
          placeholder="Super Secret Password"
          class="form-control"
          id="password"
        />
        <div
          v-if="$v.form.password.$error && !$v.form.password.required"
          class="error"
        >password is required</div>
        <div v-if="$v.form.password.$error && !$v.form.password.correct" class="error">password is invalid - try again</div>
      </div>

      <!--if email is in DB let the user login-->
      <div v-if="emailExistInDB" class="form-group">
        <button class="btn" v-on:click.prevent="login">Login</button>
      </div>

      <!--if email isnt in DB let the user register-->
      <div class="form-group" v-if="emailCheckedInDB && !emailExistInDB">
        <label class="form-label" for="name">Name</label>
        <input
          v-model="$v.form.name.$model"
          type="text"
          placeholder="What should we call you?"
          class="form-control"
          id="name"
        />
        <div v-if="$v.form.name.$error" class="error">name is required</div>
      </div>
    </form>
    <div v-else class="text-center">
      Successfully logged in! <a href="#" @click="reset">Not {{form.name}}?</a>
    </div>
  </div>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";
import { authenticateUser, checkIfUserExistsInDB} from "@/api"

export default {
  data() {
    return {
      form: {
        email: null,
        password: null,
        name: null
      },
      emailCheckedInDB: false,
      emailExistInDB: false,
      wrongPassword: false
    };
  },
  validations: {
    form: {
      email: {
        required,
        email
      },
      password: {
        required,
        correct(){
          return !this.wrongPassword
        }
      },
      name: {
        required
      }
    }
  },

  computed:{
    loggedIn(){
      return this.emailExistInDB && this.form.name //user is logged in if we have the email in DB and managed to get their name
    }
  },

  methods:{
    submit(){
      this.$emit('update', {
        data: {
          email: this.form.email,
          password: this.form.password,
          name: this.form.name
        },
        valid: !this.$v.form.$invalid
      })
      if(!this.$v.form.$invalid){
        
      }
    },

   checkIfUserExists () {
        this.$emit('updateAsyncState', 'pending')
        if (!this.$v.form.email.$invalid) {
          return checkIfUserExistsInDB(this.form.email)
            .then(() => {
              // USER EXISTS
              this.emailExistInDB = true
              this.emailCheckedInDB = true
              this.$emit('updateAsyncState', 'success')
            })
            .catch(() => {
              // USER DOESN'T EXIST
              this.emailExistInDB = false
              this.emailCheckedInDB = true
              this.$emit('updateAsyncState', 'success')
            })
        }
      },
    
     login () {
        this.wrongPassword = false
        if (!this.$v.form.password.$invalid) {
          this.$emit('updateAsyncState', 'pending')
          return authenticateUser(this.form.email, this.form.password)
            .then(user => {
              // LOGGED IN
              this.form.name = user.name
              this.submit()
              this.$emit('updateAsyncState', 'success')
            })
            .catch(() => {
              // WRONG PASSWORD?
              this.wrongPassword = true
              this.$emit('updateAsyncState', 'success')
            })
        }
      },

       reset () {
        this.form.email = null
        this.form.password = null
        this.form.name = null
        this.emailCheckedInDB = false
        this.wrongPassword = false
        this.existingUser = false
        this.$v.$reset()
      },
  }
};
</script>

<style scoped>
</style>