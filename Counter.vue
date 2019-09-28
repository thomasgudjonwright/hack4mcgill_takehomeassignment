<template>
<div>
  <p>{{count}}</p>
  <button v-on:click="inc">Add 1</button>
  <button v-on:click="dec">Subtract 1</button>
  </div>
</template>

<script>

export default {
  data() {
    return {
      count: episodes_seen
    }
  },
  methods: {
    inc: function() {
      this.count++;
    },
    dec: function() {
      this.count--;
    }
  }
};
</script>

<style>
</style>

