/*
 * @Descripttion: 用户token处理
 * @version: V1.0
 * @Author: tuzh
 * @Date: 2022-07-30 17:18:17
 * @LastEditors: tuzh
 * @LastEditTime: 2022-07-30 17:48:06
 */

//用于生成和解析token
var jwt = require("jsonwebtoken");
var signkey = "mes_qdhd_mobile_xhykjyxgs";

exports.setToken = function (username, userid) {
  return new Promise((resolve, reject) => {
    const token = jwt.sign(
      {
        name: username,
        _id: userid,
      },
      signkey,
      { expiresIn: "24h" }
    );
    resolve(token);
  });
};

exports.verToken = function (token) {
  return new Promise((resolve, reject) => {
    var info = jwt.verify(token.split(" ")[1], signkey);
    resolve(info);
  });
};
