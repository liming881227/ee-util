//修改underscope的findWhere方法兼容 int string查找
function findWhere(arr,property) {
	var findObj = null;
	if(!arr || arr.length == 0 || !property) {
		return findObj;
	}
	for(j in arr) {
		if(findObj) {
			break;
		}
		if(!arr[j])
			continue;
		var find = true;
		for(var i in property) {
			if(property.hasOwnProperty(i)) {
				if(arr[j][i] != property[i]) {
					find = false;
					break;
				}
			}
		}
		if(find) {
			findObj = arr[j];
		}
	}
	return findObj;
}

function extend(dest, from) {
	var props = Object.getOwnPropertyNames(from), destination;
	props.forEach(function (name) {
		if (typeof from[name] === 'object') {
			if (typeof dest[name] !== 'object') {
				dest[name] = {}
			}
			extend(dest[name],from[name]);
		} else {
			destination = Object.getOwnPropertyDescriptor(from, name);
			Object.defineProperty(dest, name, destination);
		}
	});
}

/**
 * 获取dom元素的绝对位置
 * @param e
 * @returns {{left: *, top: *}}
 */
function getElementAbsPos(e) {
	var t = e.offsetTop;
	var l = e.offsetLeft;
	while(e = e.offsetParent){
		t += e.offsetTop;
		l += e.offsetLeft;
	}
	return {left:l,top:t};
}

/**
 * 获取元素在window窗口中的绝对位置
 * @param e
 * @returns {{top: *, left: *}}
 */
function getWindowAbsPos(e) {
	var l = e.getBoundingClientRect().left;
	var t = e.getBoundingClientRect().top;
	return {
		top: t,
		left: l
	}
}

function cloneJSON (obj) {
	var o,i,j,k;
	if(typeof(obj)!="object" || obj===null)return obj;
	if(obj instanceof(Array)) {
		o=[];
		i=0;j=obj.length;
		for(;i<j;i++) {
			if(typeof(obj[i])=="object" && obj[i]!=null) {
				o[i]=arguments.callee(obj[i]);
			}
			else {
				o[i]=obj[i];
			}
		}
	} else {
		o={};
		for(i in obj) {
			if ((obj[i] instanceof Date) || (obj[i] instanceof RegExp)) {
				o[i] = new obj[i].constructor(obj[i]);
			} else if(typeof(obj[i])=="object" && obj[i]!=null) {
				o[i]=arguments.callee(obj[i]);
			} else {
				o[i]=obj[i];
			}
		}
	}

	return o;
}

exports.findWhere = findWhere;
exports.extend = extend;
exports.getElementAbsPos = getElementAbsPos;
exports.getWindowAbsPos = getWindowAbsPos;
exports.cloneJSON = cloneJSON;