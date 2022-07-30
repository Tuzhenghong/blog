<!--
 * @Descripttion: 公共表格组件
 * @version: V1.0
 * @Author: 涂正弘
 * @Date: 2022-07-14 17:03:36
 * @LastEditors: 涂正弘
 * @LastEditTime: 2022-07-22 11:18:02
-->
<template>
  <div class="table-container">
    <el-table
      ref="multipleTable"
      stripe
      style="width: 100%"
      :header-cell-style="headerCellStyle"
      :data="tableOptions.dataSource"
      @selection-change="handleSelectionChange"
    >
      <el-table-column v-if="tableOptions.isCheckbox" width="60" align="center" type="selection"></el-table-column>
      <template v-for="(item, index) in tableOptions.columns">
        <slot v-if="item.slot" :name="item.slot"></slot>
        <el-table-column
          v-else
          :key="index"
          :prop="item.prop"
          :label="item.label"
          :width="item.width || 'auto'"
          :align="item.align || 'left'"
          show-overflow-tooltip
        >
          <template slot-scope="scope">
            <span>{{ scope.row[item.prop] || '-' }}</span>
          </template>
        </el-table-column>
      </template>
      <el-table-column
        v-if="tableOptions.isOperation"
        :label="tableOptions.operation.label"
        align="center"
        :width="tableOptions.operation.width"
      >
        <template slot-scope="scope">
          <template v-for="(item, index) in tableOptions.operation.data">
            <el-button :type="item.btn_type" :key="index" @click="handleClick(scope.row, item.type)">{{
              item.name
            }}</el-button>
          </template>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  props: {
    // 表格配置
    tableOptions: {
      type: Object,
      required: true,
      default: () => {}
    }
  },
  name: 'com-table',
  data() {
    return {
      headerCellStyle: {
        backgroundColor: '#fafafa',
        borderTop: '1px solid #EBEEF5'
      },
      multipleTable: []
    }
  },
  methods: {
    // 向父组件抛出操作按钮点击事件
    handleClick(row, type) {
      this.$emit(`handle${type}`, row)
    },
    // 向上传递勾选数据
    handleSelectionChange(val) {
      if (this.tableOptions.isCheckbox) {
        this.$emit('handleSelection', val)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import './index.scss';
</style>
