function getQuery(name, url) {
	var u = arguments[1] || window.location.href
		, reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)")
		, r = u.substr(u.indexOf("?") + 1).match(reg)

	return r != null ? r[2] : "";
}

//计算hash值
function getHash(name, url) { //# 获取 hash值
	var u = arguments[1] || location.hash;
	var r = u.substr(u.indexOf("#") + 1);
	return r;
}

//# 解析URL
function parse(url) {
	var a = document.createElement('a');
	url = url || document.location.href;
	a.href = url;
	return {
		source: url, protocol: a.protocol.replace(':', ''), host: a.hostname, port: a.port, query: a.search, file: (a.pathname.match(/([^\/?#]+)$/i) || [, ''])[1], hash: a.hash.replace('#', ''), path: a.pathname.replace(/^([^\/])/, '/$1'), relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [, ''])[1], segments: a.pathname.replace(/^\//, '').split('/')
	};
}

//拼装get参数
function parseGetParams(query) {
	var paramsArr = [];
	for (var key in query) {
		if (query.hasOwnProperty(key)) {
			paramsArr.push(key + '=' + ( query[key] || '' ));
		}
	}
	return paramsArr.join('&');
}

//检测是否能支持pushState方法
function checkCanPushState() {
	if(window.history.pushState)
		return true;
	return false;
}

function pushState(data,url) {
	if (checkCanPushState()) {
		//注意data虽然可以保存数据，但是不能保存仍然引用着当前页面元素的对象，例如$("DOM")这样一个对象，就会出现ObjectCloneError
		window.history.pushState(data, document.title, url);
		return true;
	}
	return false;
}

exports.getQuery = getQuery;
exports.getHash = getHash;
exports.parse = parse;
exports.parseGetParams = parseGetParams;
exports.checkCanPushState = checkCanPushState;
exports.pushState = pushState;