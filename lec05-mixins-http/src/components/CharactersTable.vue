<template>
  <div>
    <h1>Characters table</h1>
    <el-table :data="tableData" v-loading="isLoading">
      <el-table-column prop="name" label="Name"> </el-table-column>
      <el-table-column prop="status" label="Status"> </el-table-column>
      <el-table-column prop="gender" label="Gender"> </el-table-column>
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
};
</script>

<style></style>
