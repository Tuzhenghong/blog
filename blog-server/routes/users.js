/*
 * @Descripttion: 码字！！！
 * @version: V1.0
 * @Author: 涂正弘
 * @Date: 2022-07-28 16:40:39
 * @LastEditors: 涂正弘
 * @LastEditTime: 2022-07-29 15:52:41
 */
var express = require('express');
var api = express.Router()

/* 登录接口 */
api.post('/dev-api/doLogin', (req, res, next) =>{
  const body = req.body
  console.log(req, 'req')
  res.send({
    code: 200,
    msg: '请求成功',
    data: body
  });
});

module.exports = api;
