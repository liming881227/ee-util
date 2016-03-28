function readCookie(name) {
	var cookieValue;
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1, c.length);
		}

		if (c.indexOf(nameEQ) == 0) {

			cookieValue = c.substring(nameEQ.length, c.length);
			//解决在tomcat下cookie前面带引号的问题
			if (cookieValue.indexOf("\"") == 0)
				cookieValue = cookieValue.substring(1, cookieValue.length - 1);
			return decodeURIComponent(cookieValue);
		}
	}
	return null;
}

function createCookie(value) {
	var expires = "";
	var date = new Date();
	date.setTime(date.getTime() + ( 3600 * 24 * 1000 * 365 ));
	expires = "; expires=" + date.toGMTString();
	document.cookie = value + expires + "; path=/";
}

function deleteCookie(name) {
	var expdate = new Date();
	expdate.setTime(expdate.getTime() - (86400 * 1000 * 1));

	document.cookie = name + "=" + escape("") + "; expires=" + expdate.toGMTString() + "; path=/";
}

exports.readCookie = readCookie;
exports.createCookie = createCookie;
exports.deleteCookie = deleteCookie;
