<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- Filters -->
    <!-- <p>{{ msg }}</p>
    <p>{{ msg | reverse }}</p>-->

    <!-- Directives -->
    <!--<p v-highlight="red">
      Color this text red.
    </p>
    <input v-event:input="inputHandler" type="text" /> -->

    <CharactersTable />
    <EpisodesTable />
  </div>
</template>

<script>
import CharactersTable from "@/components/CharactersTable.vue";
import EpisodesTable from "@/components/EpisodesTable.vue";
export default {
  name: "App",
  components: {
    CharactersTable,
    EpisodesTable,
  },
  data() {
    return {
      msg: "Hi VueJs SoftUni!",
      red: "red",
    };
  },
  filters: {
    reverse(value) {
      return value
        .split("")
        .reverse()
        .join("");
    },
  },
  methods: {
    inputHandler(e) {
      console.log(e);
    },
  },
};
</script>

<style></style>
