<template>
<div>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <NewsList msg="aaaaaaaaa"/>
</div>
</template>

<script>
import NewsList from './components/NewsList/NewsList.vue'
export default {
  name: 'App',
  components: {
    NewsList
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
