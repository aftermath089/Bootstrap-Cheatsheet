<template>
  <div>
    <component 
      v-bind:is="currentStep" 
      v-on:update="processEmitted" 
      v-bind:wizardData="form"
    ></component>

    <div class="progress-bar">
      <div v-bind:style="`width: ${progress}%;`"></div>
    </div>

    <!-- Actions -->
    <div class="buttons">
      <button v-on:click="goBack" v-if="currentStepNumber > 0" class="btn-outlined">Back</button>
      <button v-on:click="goNext" class="btn" v-bind:disabled="!allowedGoNext">Next</button>
    </div>

    <pre><code>{{form}}</code></pre>
  </div>
</template>

<script>
import FormPlanPicker from "./FormPlanPicker";
import FormUserDetails from "./FormUserDetails";
import FormAddress from "./FormAddress";
import FormReviewOrder from "./FormReviewOrder";
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
      currentStepNumber: 0,
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
      return this.steps[this.currentStepNumber]
    }
  },
  methods: {
    goBack() {
      this.currentStepNumber--;
    },
    goNext() {
      this.currentStepNumber++;
      this.allowedGoNext= false
    },

    processEmitted(emittedData){
      Object.assign(this.form, emittedData)
      this.allowedGoNext=  true
    }
  }
};
</script>
