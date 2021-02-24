import axios from "axios";

axios.interceptors.request.use(
  function(config) {
    console.log("Info from request interceptor", config);
    return config;
  },
  function(error) {
    console.warn("Error from request interceptor", error);
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function(config) {
    console.log("Info from response interceptor", config);
    return config;
  },
  function(error) {
    console.warn("Error from response interceptor", error);
    return Promise.reject(error);
  }
);

const tableMixin = {
  data() {
    return {
      tableData: [],
      pagination: null,
      page: 1,
      endpoint: "character",
    };
  },
  methods: {
    async fetchData() {
      const url = `https://rickandmortyapi.com/api/${this.endpoint}/?page=${this.page}`;
      try {
        const res = await axios.get(url);
        this.tableData = res.data.results;
        this.pagination = res.data.info;
      } catch (error) {
        console.error(
          `Unexpected error while loading ${this.endpoint}!`,
          error
        );
      } finally {
        // Logic to be executed always after the block; does not care if it passses or not
      }
    },
  },
  async created() {
    console.warn("Console inside mixin's created");
    await this.fetchData();
    this.isLoading = false;
  },
};

export default tableMixin;
