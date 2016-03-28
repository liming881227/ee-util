function set(key, data) {
	return window.localStorage.setItem(key, window.JSON.stringify(data));
}

function get(key) {
	return window.JSON.parse(window.localStorage.getItem(key));
}

function remove(key) {
	return window.localStorage.removeItem(key);
}

exports.set = set;
exports.get = get;
exports.remove = remove;