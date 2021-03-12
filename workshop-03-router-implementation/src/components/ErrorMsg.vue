<template>
  <p v-if="visible" class="error">
    <slot />
  </p>
</template>

<script>
export default {
  props: {
    visible: Boolean,
  },
};
</script>

<style></style>
