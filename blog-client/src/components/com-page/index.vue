<!--
 * @Author: 童成宇
 * @Description: file content
 * @Date: 2022-07-19 08:57:39
 * @LastEditors: 涂正弘
 * @LastEditTime: 2022-07-22 09:22:30
 * @FilePath: \base-vue\src\components\com-page\myPagination.vue
-->
<template>
  <div class="myPage">
    <el-pagination
      @size-change="changePageSize"
      @current-change="changeCurrent"
      :current-page="currentPage"
      :page-size="sizePage"
      :page-sizes="[10, 20, 30, 40]"
      layout="total,sizes,prev,pager,next,jumper"
      :total="total"
    ></el-pagination>
  </div>
</template>
<script>
export default {
  name: 'com-page',
  data() {
    return {
      currentPage: 1, //当前页
      sizePage: 10 //当前页的条数
    }
  },
  props: {
    total: {
      //由父组件传入的总条数
      type: Number,
      default: 0
    }
  },
  methods: {
    changePageSize(val) {
      //每页条数发生变化，将变化的条数传出
      this.$emit('changePageSize', val)
    },
    changeCurrent(val) {
      //当前页码发生变化，将变化后的页码传出
      this.$emit('changeCurrent', val)
    }
  }
}
</script>
<style lang="scss" scoped>
$pageFontSize: 16px;
:deep(.el-pagination) {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  position: relative;

  .el-pagination__total {
    position: absolute;
    left: 10px;
    font-size: $pageFontSize;
  }
  .el-select {
    .el-input {
      width: 100px;
      font-size: $pageFontSize;
    }
  }
  .el-pagination__sizes .el-input .el-input__inner {
    font-size: $pageFontSize;
  }
  .el-pager li {
    font-size: $pageFontSize;
  }
  .el-pagination__jump {
    font-size: $pageFontSize;
  }
  .el-input__inner {
    font-size: $pageFontSize;
  }
}
.myPage {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100px;
}
</style>
