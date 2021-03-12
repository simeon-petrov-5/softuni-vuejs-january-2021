<template>
  <div id="app">
    <AppHeader />
    <main>
      <AppNavigation
        :navigationItems="technologyNames"
        @on-create-subject="onCreateSubject"
      />
      <router-view />
    </main>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "@/components/core/Header.vue";
import AppNavigation from "@/components/core/Navigation.vue";
import AppFooter from "@/components/core/Footer.vue";

import jsonData from "./assets/tutorials.json";
const defaultMenuId = jsonData.technologies[0].id;

export default {
  name: "App",
  components: {
    AppHeader,
    AppNavigation,
    AppFooter,
  },
  data() {
    return {
      isCreateView: false,
      tutorials: { ...jsonData },
      selectedMenuId: defaultMenuId,
      selectedSubject: "",
    };
  },
  computed: {
    technologyNames() {
      return this.tutorials.technologies.map((tech) => ({
        id: tech.id,
        name: tech.name,
      }));
    },
    selectedContent() {
      const { subjects } = this.tutorials.technologies.find(
        (tech) => tech.id === this.selectedMenuId
      );
      const subject = subjects.find((sub) => sub.name === this.selectedSubject);
      return subject ? subject.content : "";
    },
  },
  methods: {
    // onMenuClick(id) {
    //   this.selectedMenuId = id;
    //   this.selectedSubject = "";
    //   this.isCreateView = false;
    // },
    onSubjectClick(name) {
      this.selectedSubject = name;
      this.isCreateView = false;
    },
    onCreateSubject() {
      this.isCreateView = true;
      this.selectedSubject = "";
    },
    onSubjectSave(technologyId, newData) {
      const { technologies } = this.tutorials;
      const selectedTech = technologies.find(
        (tech) => tech.id === technologyId
      );
      selectedTech.subjects.push(newData);
      this.isCreateView = false;
    },
  },
};
</script>
