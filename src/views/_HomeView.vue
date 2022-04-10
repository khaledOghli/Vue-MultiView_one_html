<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/images/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
        <MultiSelect/>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import HelloWorld from '@components/HelloWorld.vue'; // @ is an alias to /src
import MultiSelect from '@components/MultiSelect.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'HomeView',
  components: {
    HelloWorld,
    MultiSelect,
  },
});
</script>
