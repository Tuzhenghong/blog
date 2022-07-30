/*
 * @Descripttion: 码字！！！
 * @version: V1.0
 * @Author: 涂正弘
 * @Date: 2022-07-28 16:40:39
 * @LastEditors: tuzh
 * @LastEditTime: 2022-07-30 18:04:06
 */
var express = require("express");
var api = express.Router();
var db = require("../db"); // 引入数据库封装模块
var settoken = require("../public/token"); // 引入生成token

/* 登录接口 */
api.post("/dev-api/doLogin", (req, res) => {
  const { query } = req;
  // 查询users表
  db.query("SELECT * FROM USERS", [], (results, finlds) => {
    let userInfo = results.filter((item) => item.account == query.account)[0];
    if (!userInfo || userInfo.password !== query.password) {
      res.send({
        code: 201,
        message: "账号或密码错误，请重新输入！",
        data: null,
      });
      return;
    }
    //生成token
    settoken.setToken(userInfo.username, userInfo.userId).then((data) => {
      res.send({
        code: 200,
        message: "登录成功",
        data: {
          token: data,
          userId: userInfo.userId,
          account: userInfo.account,
          username: userInfo.username,
          sex: userInfo.sex,
        },
      });
    });
  });
});

/* 获取用户详情 */
api.get("/dev-api/getUserInfo", (req, res) => {
  const { query } = req;
  db.query("SELECT * FROM USERS", [], (results, finlds) => {
    let userInfo = results.filter((item) => item.userId == query.userId)[0];
    res.send({
      code: 200,
      message: "操作成功",
      data: {
        userId: userInfo.userInfo,
        account: userInfo.account,
        username: userInfo.username,
        sex: userInfo.sex,
      },
    });
  });
});

module.exports = api;
