<template>
  <div>
    <FormPlanPicker v-if="currentStepNumber === 1" v-on:update="processEmitted"/>
    <FormUserDetails v-if="currentStepNumber === 2" v-on:update="processEmitted"/>
    <FormAddress v-if="currentStepNumber === 3"  v-on:update="processEmitted"/>
    <FormReviewOrder v-if="currentStepNumber === 4"  v-on:update="processEmitted"/>

    <div class="progress-bar">
      <div v-bind:style="`width: ${progress}%;`"></div>
    </div>

    <!-- Actions -->
    <div class="buttons">
      <button v-on:click="goBack" v-if="currentStepNumber > 1" class="btn-outlined">Back</button>
      <button v-on:click="goNext" class="btn">Next</button>
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
      currentStepNumber: 1,
      length: 4,
      form: {
        plan: null,
        email: null,
        name: null,
        password: null,
        address: null,
        recipient: null,
        chocolate: false,
        otherTreat: false
      }
    };
  },
  computed: {
    progress() {
      return (this.currentStepNumber / this.length) * 100;
    }
  },
  methods: {
    goBack() {
      this.currentStepNumber--;
    },
    goNext() {
      this.currentStepNumber++;
    },

    processEmitted(emittedData){
      Object.assign(this.form, emittedData)
    }
  }
};
</script>
