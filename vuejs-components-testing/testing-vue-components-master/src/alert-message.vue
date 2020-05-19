<template>
  <div class="alert">
    <p>I'm a alert message!</p>
    <p>Time left {{ timeLeft }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      interval: undefined,
      counter: 0,
      timer: 5 //disappear after 5 second
    };
  },

  computed: {
    timeLeft() {
      return this.timer - this.counter;
    }
  },

  mounted() { //run when mounted
    this.interval = setInterval(() => {
      this.counter++; //add counter every second
      if (this.counter == this.timer) this.$destroy(); //destroy lifecycle called
    }, 1000);
  },

  beforeDestroy() {
    clearInterval(this.interval);
    console.log("Alert removed!");
  },

  destroyed() {
    this.$el.remove();
  }
};
</script>

