<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <h2>Our counter is: {{ counter }} {{ double }}</h2>
    <button @click="incrementCount">Add 1</button>
    <button @click="getData">Fetch data</button>
    <button @click="reset">Reset</button>

    <p v-if="isLoading">Please wait, currently loading ...</p>

    <div>
      <label for="typeme">Type something</label>
      <input name="typeme" type="text" v-model="message" />
      <p>Current message: {{ message }}</p>
    </div>

    <div>
      <h1>Character Info</h1>
      <p>Name {{ userData.name }}</p>
      <button @click="loadUser">Load user</button>
    </div>

    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  computed: {
    // counter() {
    //   return this.$store.getters.getCounter;
    // },
    // double() {
    //   return this.$store.getters.getDouble;
    // },
    // areCharactersLoading() {
    //   return this.$store.getters.getLoadingState;
    // },
    message: {
      get() {
        return this.$store.getters.message;
      },
      set(value) {
        this.$store.commit("message", value);
      },
    },
    ...mapGetters(["counter", "double", "isLoading"]),
    ...mapGetters({ userData: "usersModule/userData" }),
    // userData(){
    //   return this.$store.getters['usersModule/userData']
    // }
  },
  methods: {
    incrementCount() {
      this.$store.commit("increment", { name: "test name" });
    },
    async getData() {
      await this.$store.dispatch("getAllCharacters");
    },
    reset() {
      this.$store.commit("resetUserState");
    },
    async loadUser() {
      await this.$store.dispatch("usersModule/getUser", this.counter);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
