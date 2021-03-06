<template>
  <div>
    <h1>Magic Books</h1>

    <div class="grid" v-loading="isLoading">
      <el-card
        :body-style="{ padding: '0px' }"
        v-for="book in books"
        :key="book.id"
      >
        <img :src="book.volumeInfo.imageLinks.smallThumbnail" class="image" />
        <div style="padding: 14px;">
          <h2>{{ getTitle(book.volumeInfo.title) }}</h2>
          <div class="bottom clearfix">
            <el-tag
              type="success"
              class="tag"
              v-for="(cat, i) in book.volumeInfo.categories"
              :key="book.id + i"
              >{{ cat }}</el-tag
            >
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import { fetchAllBooks } from "../dataProviders/books";
export default {
  data() {
    return {
      isLoading: true,
      books: [],
    };
  },
  methods: {
    getTitle(title) {
      return title.length > 60 ? title.substring(0, 60) + " ..." : title;
    },
  },
  async created() {
    this.books = await fetchAllBooks('magic');
    this.isLoading = false;
  },
};
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 12px;
  grid-row-gap: 12px;
}

h2 {
  font-size: 18px;
}
</style>
