<template>
  <aside class="content-navigation">
    <ul>
      <li
        v-for="subject in technologies"
        :key="subject.id"
        :class="{ active: isActive(subject.name) }"
      >
        <router-link tag="a" :to="getSubjectLink(subject.name)">
          {{ subject.name }}
        </router-link>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  props: {
    technologies: {
      type: Array,
      required: true,
    }
  },
  methods: {
    isActive(subjectName) {
      const selectedSubjName = this.$route.params.name;
      if (!selectedSubjName) return false;

      const transformedName = this.formatSubjectName(subjectName);
      return selectedSubjName === transformedName;
    },
    formatSubjectName(subjName) {
      return subjName.replace(/\s+/g, "-").toLowerCase();
    },
    getSubjectLink(subjName) {
      const transformedName = this.formatSubjectName(subjName);
      return `/${this.$route.name}/${transformedName}`;
    },
  },
};
</script>

<style></style>
