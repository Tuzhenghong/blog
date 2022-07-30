/*
 * @Descripttion: 入口文件
 * @version: V1.0
 * @Author: 涂正弘
 * @Date: 2022-07-28 16:40:39
 * @LastEditors: tuzh
 * @LastEditTime: 2022-07-30 17:48:37
 */
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// 导入接口模块
var apiModule = require('./routes/index');
// 导入token解析
var vertoken = require('./public/token')
// 导入token验证
var expressJwt = require('express-jwt')

var app = express();

// 解析token获取用户信息
app.use(function(req, res, next) {
  var token = req.headers['authorization'];
  if(token == undefined){
    return next();
  }else{
    vertoken.verToken(token).then((data)=> {
      req.data = data;
      return next();
    }).catch((error)=>{
      return next();
    })
  }
});
//验证token是否过期并规定哪些路由不用验证
app.use(expressJwt({
  secret: 'mes_qdhd_mobile_xhykjyxgs',
  algorithms: ['HS256']
}).unless({
  path: ['/dev-api/doLogin']//除了这个地址，其他的URL都需要验证
}));
//当token失效返回提示信息
app.use(function(err, req, res, next) {
  if (err.status == 401) {
    return res.status(401).send({
      code: 401,
      message: '登录失效，请重新登录'
    });
  }
});

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
