/**
 * 添加事件监听
 * @param e dom对象
 * @param type 事件类型
 * @param fn 回调函数
 * @param capture 是否捕获
 */
function addEventListener(e,type,fn,capture) {
	capture = capture || false; //false 为冒泡，true为捕获，这里默认为false
	if(e.addEventListener) {
		//w3c
		e.addEventListener(type,fn,capture);
	} else if(e.attachEvent) {
		//IE （IE不支持捕获）
		e.attachEvent('on' + type, fn);
	} else {
		//
		e['on' + type] = fn;
	}
}

/**
 * 移除事件监听
 * @param e dom对象
 * @param type 事件类型
 * @param fn 回调函数
 * @param capture 是否捕获
 */
function removeEventListener(e,type,fn,captrue) {
	capture = capture || false;
	if(e.removeEventListener) {
		//w3c
		e.removeEventListener(type,fn,captrue);
	} else if(e.detachEvent) {
		//IE
		e.detachEvent('on' + type, fn);
	} else {
		e['on' + type] = fn;
	}
}

/*
 * 获取事件作用的元素
 * IE:有srcElement属性，没有target属性。
 * firefox:有target属性，没有srcElement属性。
 */
function getTarget(e) {
	return e.target || e.srcElement;
}

/**
 * 阻止事件上的默认行为
 * @param e
 */
function preventDefault(e) {
	if(e.preventDefault) {
		e.preventDefault();
	} else {
		//IE
		e.returnValue = false;
	}
}

/**
 * 阻止事件冒泡
 * @param e
 */
function stopPropagation(e) {
	if(e.stopPropagation) {
		//w3c
		e.stopPropagation();
	} else {
		//IE
		e.cancelBubbel = true;
	}
}

exports.addEventListener = addEventListener;
exports.removeEventListener = removeEventListener;
exports.getTarget = getTarget;
exports.preventDefault = preventDefault;
exports.stopPropagation = stopPropagation;