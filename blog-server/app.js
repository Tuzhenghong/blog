/*
 * @Descripttion: 入口文件
 * @version: V1.0
 * @Author: 涂正弘
 * @Date: 2022-07-28 16:40:39
 * @LastEditors: 涂正弘
 * @LastEditTime: 2022-07-29 11:42:03
 */
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// 导入接口模块
var apiModule = require('./routes/index');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(apiModule);

let corsRequest=require('./common/corsRequest.js');
//跨域配置
corsRequest(app);

module.exports = app;
