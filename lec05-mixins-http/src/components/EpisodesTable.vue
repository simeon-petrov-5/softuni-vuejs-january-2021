<template>
  <div>
    <h1>Episodes table</h1>
    <el-table :data="tableData" v-loading="isLoading">
      <el-table-column prop="name" label="Name"> </el-table-column>
      <el-table-column prop="air_date" label="Air Date"> </el-table-column>
      <el-table-column prop="episode" label="Episode"> </el-table-column>
      <el-table-column prop="created" label="Created"> </el-table-column>
    </el-table>

    <el-pagination
      v-if="pagination"
      background
      layout="prev, pager, next"
      :current-page="page"
      :page-count="pagination.pages"
      @current-change="onCurrentChange"
    />
  </div>
</template>

<script>
import tableMixin from "../mixins/tableMixin";

export default {
  mixins: [tableMixin],
  data() {
    return {
      isLoading: true,
      endpoint: "episode",
    };
  },
  methods: {
    onCurrentChange(page) {
      this.page = page;
      this.isLoading = true;
      this.fetchData(page);
      this.isLoading = false;
    },
  },
  async created() {
    console.log("Created inside table component");
    this.isLoading = false;
  },
};
</script>

<style></style>
