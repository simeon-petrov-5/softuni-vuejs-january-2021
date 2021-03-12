<template>
  <div class="main-content">
    <AppSubjects :technologies="tutorials" />

    <AppContent>
      <NewSubject v-if="isCreateView" :technologies="technologyNames" />
      <div v-else v-html="selectedContent"></div>
    </AppContent>
  </div>
</template>

<script>
import AppSubjects from "@/components/core/Subjects.vue";
import AppContent from "@/components/core/Content.vue";
import NewSubject from "@/components/NewSubject.vue";
import { fetchAllTutorialsByTechnology } from "../../dataProviders/tutorials";
export default {
  components: {
    AppSubjects,
    AppContent,
    NewSubject,
  },
  data() {
    return {
      isCreateView: false,
      tutorials: [],
    };
  },
  computed: {
    selectedTechnology() {
      return this.$route.name;
    },
    selectedSubjectName() {
      return this.$route.params.name;
    },
    selectedContent() {
      const foundSubject = this.tutorials.find((tut) => {
        return (
          tut.name.replace(/\s+/g, "-").toLowerCase() ===
          this.selectedSubjectName
        );
      });
      return foundSubject ? foundSubject.content : "";
    },
  },
  watch: {
    async selectedTechnology(newVal, prevVal) {
      if (newVal !== prevVal) {
        await this.fetchTutorials();
      }
    },
  },
  methods: {
    async fetchTutorials() {
      this.tutorials = await fetchAllTutorialsByTechnology(
        this.selectedTechnology
      );
    },
  },
  async created() {
    await this.fetchTutorials();
  },
};
</script>

<style></style>
