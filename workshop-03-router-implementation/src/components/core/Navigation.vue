<template>
  <div class="navigation">
    <ul>
      <li v-for="nav in navigationItems" :key="nav">
        <router-link tag="a" :to="`/${nav}`">
          {{ nav }}
        </router-link>
      </li>
    </ul>

    <ul>
      <li>
        <router-link tag="a" :to="`/user`">
          USERS
        </router-link>
        <a href="#" @click="$emit('on-create-subject')">SUBJECT [+]</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navigationItems: ["javascript", "java", "csharp", "python"],
    };
  },
  methods: {
    onMenuClick(id) {
      this.$emit("nav-click", id);
    },
  },
};
</script>

<style></style>
