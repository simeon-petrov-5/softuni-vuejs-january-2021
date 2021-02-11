<template>
  <div class="controls">
    <button class="btn" @click="onGameStart" :disabled="isGameStarted">
      Start new game
    </button>
    <button class="btn" @click="handleGameReset" :disabled="!isGameStarted">
      Reset game
    </button>

    <slot />
  </div>
</template>

<script>
export default {
  props: {
    isGameStarted: {
      type: Boolean,
      required: true,
    },
    counter: {
      type: Number,
      required: true,
    },
  },
  methods: {
    onGameStart() {
      this.$emit("onGameStart");
    },
    handleGameReset() {
      this.$emit("handleGameReset");
    },
  },
  created() {
    console.log("created for Controls.vue");
  },
  mounted() {
    console.log("mounted for Controls.vue");
  },
};
</script>

<style scoped>
.controls {
  width: 640px;
  margin: 0 auto 30px auto;
  display: flex;
  align-items: center;
}
.controls .btn {
  border: 1px solid #34495e;
  font-size: 16px;
  padding: 8px 12px;
  border-radius: 5px;
  background-color: #41b883;
  color: #34495e;
  font-weight: bold;
  cursor: pointer;
}
.controls .btn:first-child {
  margin-right: 16px;
}

.controls .counter {
  font-size: 21px;
  margin-left: auto;
  font-weight: bold;
  color: #34495e;
}
</style>
