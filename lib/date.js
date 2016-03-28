var string = require('./string');

function format(formatType, time, weeks) { //格式化输出时间
	var pre = '0';
	var formatType = formatType || 'YYYY-MM-DD';
	//格式化时间
	var weeks = weeks || '日一二三四五六';
	var time = time || new Date();
	return (formatType || '')
		.replace(/yyyy|YYYY/g, time.getFullYear())
		.replace(/yy|YY/g, string.addPre(pre, time.getFullYear() % 100), 2)
		.replace(/mm|MM/g, string.addPre(pre, time.getMonth() + 1, 2))
		.replace(/m|M/g, time.getMonth() + 1)
		.replace(/dd|DD/g, string.addPre(pre, time.getDate(), 2))
		.replace(/d|D/g, time.getDate())
		.replace(/hh|HH/g, string.addPre(pre, time.getHours(), 2))
		.replace(/h|H/g, time.getHours())
		.replace(/ii|II/g, string.addPre(pre, time.getMinutes(), 2))
		.replace(/i|I/g, time.getMinutes())
		.replace(/ss|SS/g, string.addPre(pre, time.getSeconds(), 2))
		.replace(/s|S/g, time.getSeconds())
		.replace(/w/g, time.getDay())
		.replace(/W/g, weeks[time.getDay()])
		;
}

function convertTZtime(time) {
	time = time || "";
	time = time.replace("T", " ");
	time = time.replace("Z", "");
	return time;
}

function getLastDayDate(day,formatType,date){
	var startTime;
	if(date){
		startTime = new Date(date).getTime();
	}else{
		startTime = new Date().getTime();
	}
	startTime = startTime - 1000 * 60 * 60 * 24 * parseInt(day);
	formatType = formatType || 'YYYY-mm-dd HH:ii:ss';
	return format(formatType, new Date(startTime));
}

function isDate(d){
	if(!d) {
		return false;
	}
	return new Date(d) != 'Invalid Date';
}

function isDateStringify(str) {
    if (typeof str !== "string") {
        return false;
    }
    if (str.length !== 24 && str.length !== 20) {
        return false;
    }
    if (str.slice(-1) !== "Z" || str.slice(10, 11) !== "T") {
        return false;
    }
    return true;
}

exports.format = format;
exports.convertTZtime = convertTZtime;
exports.getLastDayDate = getLastDayDate;
exports.isDate = isDate;
exports.isDateStringify = isDateStringify;
