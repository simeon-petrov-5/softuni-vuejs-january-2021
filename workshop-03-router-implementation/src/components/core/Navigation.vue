<template>
  <div class="navigation">
    <ul>
      <li v-for="nav in navigationItems" :key="nav.id">
        <a href="#" @click.prevent="onMenuClick(nav.id)">{{ nav.name }}</a>
      </li>
    </ul>

    <ul>
      <li>
        <a href="#" @click="$emit('on-create-subject')">SUBJECT [+]</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    navigationItems: {
      type: Array,
      required: true,
    }
  },
  methods: {
    onMenuClick(id) {
      this.$emit("nav-click", id);
    }
  },
};
</script>

<style></style>
