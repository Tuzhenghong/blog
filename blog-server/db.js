let mysql = require('mysql')
let dbConfig = require('./db.config')

module.exports = {
  query: (sql, params, callback) => {
    // 每次使用的时候需要创建连接，数据操作完成之后要关闭连接
    let connection = mysql.createConnection(dbConfig)
    connection.connect(err => {
      if (err) {
        console.log('数据库连接失败1')
        throw err
      }

      // 开始数据操作
      connection.query(sql, params, (err, results, fields) => {
        if (err) {
          console.log('数据库连接失败2')
          throw err
        }
        // 将查询出来的数据返回给回调函数
        callback && callback(JSON.parse(JSON.stringify(results))), JSON.parse(JSON.stringify(fields))
        // results: 数据操作后的结果
        // fields: 数据库连接的一些字段

        // 停止数据库连接，必须在查询语句之后
        connection.end(err => {
          if (err) {
            console.log('关闭数据库连接失败')
            throw err
          }
        })
      })
    })
  }
}