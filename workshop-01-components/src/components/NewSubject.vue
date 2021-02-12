<template>
  <div>
    <div class="form-group">
      <input
        v-model="title"
        placeholder="Technology subject..."
        type="text"
        id="subject"
      />
    </div>

    <vue-editor v-model="content" />

    <select v-model="technologyId" name="technologies" id="technologies">
      <option value="default" selected>Select a technology...</option>

      <option v-for="tech in technologies" :key="tech.id" :value="tech.id">
        {{ tech.name }}
      </option>
    </select>

    <button class="btn" @click="onSave">Create</button>
    <h3>Content preview</h3>
    <!-- https://vuejs.org/v2/guide/syntax.html#Raw-HTML -->
    <div class="content-preview" v-html="content" />
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";

export default {
  components: {
    VueEditor,
  },
  props: {
    technologies: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      content: "",
      title: "",
      technologyId: "default",
    };
  },
  methods: {
    onSave() {
      if (!this.technologyId || this.technologyId === "default") return;

      const newData = {
        name: this.title,
        content: this.content,
      };
      this.$emit("on-save", this.technologyId, newData);
    },
  },
};
</script>

<style></style>
