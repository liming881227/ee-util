var browsers = { //# 浏览器内核类别
	weixin: /micromessenger(\/[\d\.]+)*/   //微信内置浏览器
		, mqq: /mqqbrowser(\/[\d\.]+)*/       //手机QQ浏览器
		, uc: /ucbrowser(\/[\d\.]+)*/            //UC浏览器
		, chrome: /(?:chrome|crios)(\/[\d\.]+)*/  //chrome浏览器
		, firefox: /firefox(\/[\d\.]+)*/          //火狐浏览器
		, opera: /opera(\/|\s)([\d\.]+)*/     //欧朋浏览器
		, sougou: /sogoumobilebrowser(\/[\d\.]+)*/   //搜狗手机浏览器
		, baidu: /baidubrowser(\/[\d\.]+)*/          //百度手机浏览器
		, 360: /360browser([\d\.]*)/                         //360浏览器
		, safari: /safari(\/[\d\.]+)*/		//苹果浏览器
		, ie: /msie\s([\d\.]+)*/    // ie 浏览器
};

var isWebkit = function(){
	return navigator && /webkit/i.test(navigator.userAgent);
};

//@errCall : 错误回调
function addFav(url, title, errCall) { //#加入收藏夹
	try {
		window.external.addFavorite(url, title);
	} catch (e) {
		try {
			window.sidebar.addPanel(title, url, '');
		} catch (e) {
			errCall();
		}
	}
}

//浏览器版本
function coreInit() { //#noadd
	var i = null
		, browsers = this.browsers
		, ua = window.navigator.userAgent.toLowerCase()
		, brower = ''
		, pos = 1;
	for (i in browsers) {
		if (brower = ua.match(browsers[i])) {
			if (i == 'opera') {
				pos = 2;
			} else {
				pos = 1;
			}
			this.version = (brower[ pos ] || '').replace(/[\/\s]+/, '');
			this.core = i;
			return i;
		}
	}
}

//检测是否有IE浏览器
function isIE() {
	var b = document.createElement('b');
	b.innerHTML = '<!--[if IE]><i></i><![endif]-->';
	return b.getElementsByTagName('i').length === 1;
}

// 检测IE版本 ！仅支持IE:  5,6,7,8,9 版本
function ieVersion() {
	var v = 3, div = document.createElement('div'), all = div.getElementsByTagName('i');
	while (
		div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->',
			all[0]
		);
	return v > 4 ? v : false;
}


exports.browsers = browsers;
exports.addFav = addFav;
exports.coreInit = coreInit;
exports.isIE = isIE;
exports.ieVersion = ieVersion;
exports.isWebkit = isWebkit;

