//判断变量是否为数组
function isArray (array) {
	return '[object Array]' == Object.prototype.toString.call(array);
}

	// inArray, 返回位置！ 不存在则返回 -1；
function index (t, arr) { //# 返回当前值所在数组的位置
	if (arr.indexOf) {
		return arr.indexOf(t);
	}
	for (var i = arr.length; i--;) {
		if (arr[i] === t) {
			return i * 1;
		}
	}
	return -1;
}

//返回对象 的 键值！  返回值 类型为数组。
function getKey(data) { //# 返回对象所有的键值
	var arr = [], k;
	for (k in data) {
		arr.push(k);
	}
	return arr;
}

// max , 数组中最大的项
function max(array) {//#求数组中最大的项
	return Math.max.apply(null, array);
}

// min , 数组中最小的项
function min(array) { //#求数组中最小的项
	return Math.min.apply(null, array);
}

// remove ， 移除
function remove(array, value) { //#移除数组中某值
	var length = array.length;
	while (length--) {
		if (value === array[ length ]) {
			array.splice(length, 1);
		}
	}
	return array;
}

//  removeAt ，删除指定位置的 值
//@index , 索引. 不传递 index ，会删除第一个
function removeAt(array, index) { //#删除数组中 指定位置的值
	array.splice(index, 1);
	return array;
}

//检查数组是否有重复数据
function checkHasRepeat(arr) {
	var hash={};
	for(var i in arr){
		if(hash[arr[i]] && arr[i]){
			return true;
		}
		hash[arr[i]]=true;
	}
	return false;
}

exports.isArray = isArray;
exports.index = index;
exports.getKey = getKey;
exports.max = max;
exports.min = min;
exports.remove = remove;
exports.removeAt = removeAt;
exports.checkHasRepeat = checkHasRepeat;