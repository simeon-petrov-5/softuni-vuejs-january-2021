<template>
  <div>
    <h1>Books I'm reading now</h1>
    <BooksGrid :isLoading="isLoading" :books="books" />
  </div>
</template>

<script>
import BooksGrid from "@/components/BooksGrid.vue";
import { fetchReadingBooks } from "@/dataProviders/books";
export default {
  components: {
    BooksGrid,
  },
  data() {
    return {
      isLoading: true,
      books: [],
    };
  },
  async created() {
    const { items } = await fetchReadingBooks();
    this.books = items;
    this.isLoading = false;
  },
};
</script>

<style scoped>
h2 {
  font-size: 18px;
}
</style>
