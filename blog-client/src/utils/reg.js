/*
 * @Author: 童成宇
 * @Description: file content
 * @Date: 2022-07-22 09:37:24
 * @LastEditors: 涂正弘
 * @LastEditTime: 2022-07-22 15:03:48
 * @FilePath: \base-vue\src\utils\reg\index.js
 */
// 常见的正则验证
export default {
  /**
   * 校验当前字符串是不是邮箱
   * @param {String} str 待校验字符串
   * @returns {Boolean} true: 当前字符串是邮箱，false: 当前字符串不是邮箱
   */
  verifyemail: function (str) {
    let regexp = /^([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/gi
    console.log(regexp.test(str))
    return regexp.test(str)
  },
  /**
   * 校验当前字符串是不是手机
   * @param {String} str 待校验字符串
   * @returns {Boolean} true: 当前字符串是手机，false: 当前字符串不是手机
   */
  verifyPhone: function (str) {
    // let regexp = /^((0\d{2,3}-?\d{7,8})|(1[3465789]\d{9}))$/gi
    var regexp = /^(13[0-9]{1}|14[5|7|9]{1}|15[0-3|5-9]{1}|166|17[0-3|5-8]{1}|18[0-9]{1}|19[8-9]{1}){1}\d{8}$/
    return regexp.test(str)
  },
  /**
   * 校验当前是不是身份证
   * @param {String} str 待校验字符串
   * @returns {Boolean} true: 当前字符串是身份证，false: 当前字符串不是身份证
   */
  verifyidNo: function (str) {
    let regexp =
      /(^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$)|(^\d{6}(18|19|20)\d{2}(0[1-9]|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$)/
    return regexp.test(str)
  },
  /**
   * 是否是正整数
   * @param {*} str 待验证的数值
   * @returns {Boolean}验证结果
   */
  verifyPosInt(str) {
    const regexp = /^\d+$/
    return regexp.test(str)
  },
  /**
   * 是否是正数，可以是整数，也可以是浮点数
   * @param {*} str 待验证的数值
   * @returns {Boolean}验证结果
   */
  verifyPosNum(str) {
    const regexp = /^\d*\.?\d+$/
    return regexp.test(str)
  },
  /**
   * 严格校验当前字符串是不是 url
   * @param {String} str 待校验字符串
   * @returns {Boolean} true: 当前字符串是url，false: 当前字符串不是url
   */
  verifyUrl(str) {
    let regexp = /(ht|f)tp(s?):\/\/[0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*(:(0-9)*)*(\/?)([a-zA-Z0-9\-.?,'/\\+&amp;%$#_]*)?/gi
    return regexp.test(str)
  },
  /**
   * 粗略检测当前字符串是不是 url
   * @param {String} str 待校验字符串
   * @returns {Boolean} true: 当前字符串是url，false: 当前字符串不是url
   */
  verifyUrlRough(str) {
    let regexp = /[-a-zA-Z0-9@:%_+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_+.~#?&//=]*)?/gi
    return regexp.test(str)
  },
  /**
   * 检测当前字符串是不是一个中文字符
   * @param {String} str 待校验字符
   * @returns {Boolean} true: 当前字符串是中文字符，false: 当前字符串不是中文字符
   */
  verifyCnChar(str) {
    let regexp = /^[\u4e00-\u9fa5]$/gi
    return regexp.test(str)
  },
  /**
   * 检测当前字符是不是一句中文
   * @param {String} str 待校验字符
   * @returns {Boolean} true: 当前字符串是中文字段，false: 当前字符串不是中文字段
   */
  verifyCnText(str) {
    let regexp = /^[\u4e00-\u9fa5]*$/gi
    return regexp.test(str)
  }
}
