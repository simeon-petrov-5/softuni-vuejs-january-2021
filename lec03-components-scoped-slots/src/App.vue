<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <div class="columns">
      <Characters msg="Welcome to Your Vue.js App">
        <!-- childScope is a name for the slot props we’ve been provided -->
        <template slot-scope="childScope">
          <h1>{{ formatName(childScope.character.name) }}</h1>
        </template>
      </Characters>

      <Characters msg="Welcome to Your Vue.js App">
        <!-- scope is a name for the slot props we’ve been provided -->
        <template slot-scope="scope">
          <p>{{ scope.character.name }}</p>
        </template>
      </Characters>
    </div>
  </div>
</template>

<script>
import Characters from "./components/Characters.vue";

export default {
  name: "App",
  components: {
    Characters,
  },
  methods:{
    formatName(name){
      // Some formating method just to show using the slot-prop in this scope
      const firstName = name.split(' ')[0];
      return firstName.charAt(0).toLowerCase() + firstName.slice(1).toUpperCase();
    }
  }
};
</script>

<style>
#app{
  text-align: center;
}
  .columns{
    display: flex;
    justify-content: space-around;
  }
</style>