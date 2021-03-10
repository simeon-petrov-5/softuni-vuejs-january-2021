<template>
  <el-menu class="el-menu-demo" mode="horizontal">
    <el-menu-item index="1">
      <router-link :to="{ name: 'home' }">Home </router-link>
    </el-menu-item>

    <el-menu-item index="2">
      <router-link :to="{ name: 'magicBooks' }">Magic Books</router-link>
    </el-menu-item>

    <el-menu-item index="3">
      <router-link :to="{ name: 'form' }">Form</router-link>
    </el-menu-item>

    <el-menu-item index="4">
      <router-link :to="{ name: 'bookshelves' }">Bookshelves</router-link>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {};
</script>

<style></style>
