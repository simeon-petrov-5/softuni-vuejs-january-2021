<template>
  <h1>profile</h1>
</template>

<script>
export default {
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      const token = vm.$cookies.get("x-auth-token");
      if (!token) {
        vm.$router.push("/user/login");
      }
    });
  },
};
</script>

<style></style>
