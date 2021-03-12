<template>
  <div id="app">
    <AppHeader />
    <main>
      <AppNavigation
        :navigationItems="technologyNames"
        @nav-click="onMenuClick"
        @on-create-subject="onCreateSubject"
      />
      <div class="main-content">
        <AppSubjects
          :technologies="tutorials.technologies"
          :selectedMenuId="selectedMenuId"
          :selectedSubject="selectedSubject"
          @subject-click="onSubjectClick"
        />

        <AppContent>
          <NewSubject
            v-if="isCreateView"
            :technologies="technologyNames"
            @on-save="onSubjectSave"
          />
          <div v-else v-html="selectedContent"></div>
        </AppContent>
      </div>
    </main>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "@/components/core/Header.vue";
import AppNavigation from "@/components/core/Navigation.vue";
import AppSubjects from "@/components/core/Subjects.vue";
import AppContent from "@/components/core/Content.vue";
import AppFooter from "@/components/core/Footer.vue";
import NewSubject from "@/components/NewSubject.vue";

import jsonData from "./assets/tutorials.json";
const defaultMenuId = jsonData.technologies[0].id;

export default {
  name: "App",
  components: {
    AppHeader,
    AppNavigation,
    AppSubjects,
    AppContent,
    AppFooter,
    NewSubject,
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
    onMenuClick(id) {
      this.selectedMenuId = id;
      this.selectedSubject = "";
      this.isCreateView = false;
    },
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
