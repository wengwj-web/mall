<template>
  <div class="hello">
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <p>{{num}}</p>
  </div>
</template>

<script>
export default {
  props: ["num"],
  data () {
    return {
      // num: 0
    }
  },
  methods: {
    increment(){
      this.$emit('incre')
      console.log(import('./../util'))
    },
    decrement(){
      this.$emit('decre')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
