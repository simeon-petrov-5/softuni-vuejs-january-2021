import axios from "axios";

axios.interceptors.request.use(
  function(config) {
    config.params = { ...config.params, key: process.env.VUE_APP_BOOKS_KEY };
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

const baseURL = `https://www.googleapis.com/books/v1/volumes`;

export async function fetchAllBooks(category = "magic") {
  try {
    const res = await axios.get(baseURL, {
      params: {
        q: category,
        maxResults: 40,
        startIndex: 1,
      },
    });
    return res.data.items;
  } catch (e) {
    console.error("Unexpected error while loading books", e);
    return [];
  }
}

export async function fetchSingleBook(bookId) {
  try {
    const res = await axios.get(`${baseURL}/${bookId}`);
    return res.data;
  } catch (e) {
    console.error("Unexpected error while loading book", e);
    return [];
  }
}
