//是否为 数字！整数，浮点数
function isNum(num) { //# 是否为数组
	return !isNaN(num);
}

//正整数
function isInt(num) { //# 是否为 正整数
    return /^[1-9]\d*$/.test(num);
}

//浮点数
function isFloat(num) { //# 是否为 浮点数
    return /^(([1-9]\d*)|(\d+\.\d+)|0)$/.test(num);
}

//# 是否为 邮箱
function isEmail(mail) {
	return /^[\w\d\-\.]+@[\w\d\-]+(?:\.[\w\d\-]+)+$/.test(mail);
}

//# 是否为 身份证
function isIdCard(card) {
	return /^(\d{14}|\d{17})(\d|[xX])$/.test(card);
}

//# 是否为 手机
function isMobile(mobile) {
    return /^(\+\d\d?)?0*1\d{10}$/.test(mobile);
}

//# 是否为 QQ
function isQQ(qq) {
	return /^[1-9]\d{4,10}$/.test(qq);
}

//# 是否为 电话
function isTel(tel) {
	return /^\d{3,4}-\d{7,8}(-\d{1,6})?$/.text(tel);
}

//# 是否为 URL
function isUrl(url) {
	return /https?:\/\/[a-z0-9\.\-]{1,255}\.[0-9a-z\-]{1,255}/i.test(url);
}

//# 是否为 16进制颜色
function isColor(color) {
	return /#([\da-f]{3}){1,2}$/i.test(color);
}

//是否全为汉字
function isChinese(str) { //# 是否全为 汉字
	return /^([\u4E00-\u9FA5]|[\uFE30-\uFFA0])+$/gi.test(str);
}

exports.isNum = isNum;
exports.isInt = isInt;
exports.isFloat = isFloat;
exports.isEmail = isEmail;
exports.isIdCard = isIdCard;
exports.isMobile = isMobile;
exports.isQQ = isQQ;
exports.isTel = isTel;
exports.isUrl = isUrl;
exports.isColor = isColor;
exports.isChinese = isChinese;