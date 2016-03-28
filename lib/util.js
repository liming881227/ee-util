var util = require('./util');
var object = require('./object');

//阻止浏览器默认行为
function stopDefault(e) {
	if (e && e.preventDefault) {
		e.preventDefault();
	} else {
		//IE中阻止函数器默认动作的方式
		window.event.returnValue = false;
	}
	return false;
}


/**
 * 原生触发事件
 * @param element 元素dom
 * @param type 触发事件类型
 * @returns {*}
 */
function triggerEvent(element,type){
	var event;
	if(document.createEventObject){
		event = document.createEventObject();
		return element.fireEvent('on'+type,event);
	}else{
		event = document.createEvent('HTMLEvents');
		event.eventName = type;
		event.initEvent(type,true,true);
		return !element.dispatchEvent(event);
	}
}

/**
 * 计算弹出框口位置
 * @param popHeight 弹出框高度
 * @param position: {left:left,top:top} //弹出窗位置
 * @param marginDown 留出空间 默认为10
 */
function getPopUpDirection(popUpWidth,popHeight,position,marginDown) {
	var document = window.document,
		docElem = document.documentElement,
		clientHeight = docElem['clientHeight'],
		innerHeight = window['innerHeight'];
	marginDown = marginDown || 10;
	var maxHeight = Math.max(clientHeight,innerHeight);
	var spaceDown = maxHeight - position.top - popHeight - marginDown;
	return {
		up: spaceDown < 0,
		down: spaceDown > 0,
		left: true, //todo left right 后面再加
		right: true
	}
}

/**
 * 自动计算弹出pop窗口 位置与方向
 * @param el 触发弹出窗的dom对象
 * @param popUpWidth 弹出窗口宽度
 * @param popUpHeight 弹出窗口高度
 * @param margin margin用于设置箭头指向的margin距离
 * @returns {{direction: *}}
 */
function calcPopUpProperty(el,popUpWidth,popUpHeight,margin) {
	var targetWidth = $(el).width(),
		targetHeight = $(el).height();
	var targetPosition = object.getWindowAbsPos(el);
	margin = margin || 0;
	var popUpPostion = {
		top: targetPosition.top + targetHeight + margin,
		left: targetPosition.left + targetWidth / 2 - popUpWidth / 2
	};
	var popUpDirection = util.getPopUpDirection(popUpHeight,popUpWidth,popUpPostion,margin);
	if(popUpDirection.up) {
		popUpPostion.top = popUpPostion.top - margin *2 - targetHeight - popUpHeight;
	}
	return {
		position: popUpPostion,
		direction: popUpDirection
	};
}

exports.stopDefault = stopDefault;
exports.triggerEvent = triggerEvent;
exports.getPopUpDirection = getPopUpDirection;
exports.calcPopUpProperty = calcPopUpProperty;