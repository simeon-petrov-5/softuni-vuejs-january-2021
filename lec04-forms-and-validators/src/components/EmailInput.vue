<template>
  <div class="form-group">
    <label for="email">Email</label>
    <input
      type="text"
      id="email"
      class="form-control"
      :value="email"
      @input="inputHandler"
    />
  </div>
</template>

<script>
export default {
  props: {
    email: String,
  },
  methods: {
    inputHandler(e) {
      this.$emit("onInput", e.target.value);
    },
  },
};
</script>

<style></style>
