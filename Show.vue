<template>
  <div>
  <p>{{name}}</p>
   <Counter></Counter>
  </div>
</template>

<script>
  import Counter from "./Counter.vue";
export default {
  components: {
    Counter,
  },
  data(){
    return{
      props: {
        name: String,
        id: Number,
        episodes_seen: Number
      }
    }
  }
};
</script>

<style>
</style>
