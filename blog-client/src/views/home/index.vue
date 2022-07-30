<!--
 * @Descripttion: 首页
 * @version: V1.0
 * @Author: 涂正弘
 * @Date: 2022-07-07 15:30:41
 * @LastEditors: 涂正弘
 * @LastEditTime: 2022-07-22 11:19:30
-->
<template>
  <div>
    <com-table
      :tableOptions="tableOptions"
      @handleView="handleView"
      @handleEdit="handleEdit"
      @handleRemove="handleRemove"
      @handleSelection="handleSelection"
    >
      <el-table-column slot="img" label="图片" align="center">
        <template>
          <img :src="imgUrl" width="100" height="100" alt="" />
        </template>
      </el-table-column>
      <el-table-column slot="input" label="输入框" align="center">
        <template slot-scope="scope">
          <el-input v-model="scope.row.value" placeholder="请输入"></el-input>
        </template>
      </el-table-column>
    </com-table>
    <com-page :total="total" @changePageSize="changePageSize" @changeCurrent="changeCurrent" />
  </div>
</template>
<script>
export default {
  name: 'homeView',
  data() {
    return {
      imgUrl: 'https://upfile2.asqql.com/upfile/hdimg/wmtp/wmtp/2015-12/30/9835VicmIhquvD.jpg',
      total: 200, //传入的总数据条数
      tableOptions: {
        isCheckbox: true,
        isOperation: true,
        columns: [
          {
            label: '日期',
            prop: 'date',
            align: 'center'
          },
          {
            label: '名称',
            prop: 'name',
            align: 'center'
          },
          {
            slot: 'img',
            prop: 'url',
            align: 'center'
          },
          {
            slot: 'input',
            prop: 'value',
            align: 'center'
          }
        ],
        dataSource: [
          {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
            value: ''
          },
          {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄',
            value: ''
          },
          {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },
          {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          },
          {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }
        ],
        operation: {
          label: '操作',
          width: '280',
          data: [
            {
              type: 'View',
              name: '查看',
              btn_type: 'primary'
            },
            {
              type: 'Edit',
              name: '编辑',
              btn_type: 'primary'
            },
            {
              type: 'Remove',
              name: '删除',
              btn_type: 'danger'
            }
          ]
        }
      },
      selectRow: []
    }
  },
  components: {
    ComTable: () => import('@/components/com-table'),
    ComPage: () => import('@/components/com-page')
  },
  methods: {
    inputChange(val) {
      console.log(val)
    },
    // 查看详情
    handleView(row) {
      console.log(row, 'view')
    },
    // 编辑
    handleEdit(row) {
      console.log(row, 'edit')
    },
    // 删除
    handleRemove(row) {
      console.log(row, 'remove')
    },
    // 列表勾选
    handleSelection(val) {
      this.selectRow = val
    },
    changePageSize(val) {
      console.log('-----' + val)
    },
    changeCurrent(val) {
      console.log('=====' + val)
    }
  }
}
</script>
<style lang="scss" scoped></style>
