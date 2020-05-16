<template>
  <div>
    <div v-if="wizardInProgress" v-show="asyncState !== 'pending'"> <!--using v-show so we dont lost the cached progress in keep-alive component-->
      <keep-alive>
      <component 
        ref="currentStep"
        v-bind:is="currentStep" 
        v-on:update="processEmitted" 
        v-bind:wizardData="form"
      ></component>
    </keep-alive>

    <div class="progress-bar">
      <div v-bind:style="`width: ${progress}%;`"></div>
    </div>

    <!-- Actions -->
    <div class="buttons">
      <button v-on:click="goBack" v-if="currentStepNumber > 1" class="btn-outlined">Back</button>
      <button v-on:click="nextButtonAction" class="btn" 
        v-bind:disabled="!allowedGoNext"
      >{{isLastStep ? 'Complete Order' : 'Next' }}</button> 
    </div>

    <pre><code>{{form}}</code></pre>
    </div>

    <div class="loading-wrapper" v-if="asyncState === 'pending'">
      <div class="loader">
        <img src="/spinner.svg" alt="">
        <p>Please wait, we're hitting our servers!</p>
      </div>
    </div>

    <div v-else>
      <h1 class="title">Thank you!</h1>
      <h2 class="subtitle">
        We look forward to shipping you your first box!
      </h2>

      <p class="text-center">
        <a href="https://vueschool.io" target="_blank" class="btn">Go somewhere cool!</a>
      </p>
    </div>
  </div>
</template>

<script>
import FormPlanPicker from "./FormPlanPicker";
import FormUserDetails from "./FormUserDetails";
import FormAddress from "./FormAddress";
import FormReviewOrder from "./FormReviewOrder";

import {postFormToDB} from "@/api"

export default {
  name: "FormWizard",
  components: {
    FormPlanPicker,
    FormUserDetails,
    FormAddress,
    FormReviewOrder
  },
  data() {
    return {
      asyncState: null,
      currentStepNumber: 1,
      form: {
        plan: null,
        email: null,
        name: null,
        password: null,
        address: null,
        recipient: null,
        chocolate: false,
        otherTreat: false
      },
      allowedGoNext: false,
      steps: [
        "FormPlanPicker",
        "FormUserDetails",
        "FormAddress",
        "FormReviewOrder"
      ]
    };
  },
  computed: {
    progress() {
      return (this.currentStepNumber / this.length) * 100;
    },

    length(){
      return this.steps.length
    },

    currentStep(){
      return this.steps[this.currentStepNumber-1]
    },

    wizardInProgress(){
      return this.currentStepNumber <= this.steps.length
    },

    isLastStep(){
      return this.currentStepNumber === this.steps.length
    }


  },
  methods: {
    goBack() {
      this.currentStepNumber--;
      this.allowedGoNext = true
    },
    goNext() {
      this.currentStepNumber++;
      this.$nextTick(() => {
        //this.$refs.currentStep.submit() //make sure every child form have submit method
        this.allowedGoNext = !this.$refs.currentStep.$v.$invalid
      })
    },

    processEmitted(emittedData){
      Object.assign(this.form, emittedData.data)
      this.allowedGoNext=  emittedData.valid
    },

    nextButtonAction(){
      if(this.isLastStep){
        this.submitOrder()
      }else{
        this.goNext()
      }
    },

    submitOrder(){
      this.asyncState = 'pending'
      postFormToDB(this.form)
        .then(()=>{
          this.asyncState = 'success'
          console.log('form submitted!', this.form)
          this.currentStepNumber++
        })
    }
  }
};
</script>
