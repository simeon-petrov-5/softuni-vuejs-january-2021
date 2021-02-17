<template>
  <div class="form-group">
    <label for="email">Email</label>
    <input
      type="text"
      id="secondEmail"
      class="form-control"
      :value="value"
      @input="inputHandler"
    />
  </div>
</template>

<script>
export default {
  props: {
    value: String,
  },
  methods: {
    inputHandler(e) {
      this.$emit("input", e.target.value);
    },
  },
};
</script>

<style></style>
