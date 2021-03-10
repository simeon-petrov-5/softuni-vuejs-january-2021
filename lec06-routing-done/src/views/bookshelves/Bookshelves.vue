<template>
  <div>
    <el-tabs @tab-click="onTabClick">
      <el-tab-pane label="Favourites" name="favourites">Favourites</el-tab-pane>
      <el-tab-pane label="Reading" name="reading">Reading</el-tab-pane>

      <router-view />
    </el-tabs>
  </div>
</template>

<script>
export default {
  methods: {
    onTabClick({ name }) {
      this.$router.push({ name: `bookshelves.${name}` });
    },
  },
};
</script>

<style></style>
