var eeUtilDate=require('./date')

function clone(obj, isAutoConvertDataTimeStr, filter) {
    if (obj === null || typeof (obj) !== 'object') {  //注意typeof(null)是"object"，typeof(undefined)是"undefined"
        if (isAutoConvertDataTimeStr && eeUtilDate.isDateStringify(obj)) {
            return new Date(obj);
        }
        else {
            return obj;
        }
    }

    if ((obj instanceof Date) || (obj instanceof RegExp)) {
        return new obj.constructor(obj);
    }
    else {
        var temp = new obj.constructor();
        for (var key in obj) {
            if (filter && !filter(obj[key], key)) {
                continue;
            }
            if (key.slice(0, 2) !== "__" && key.slice(0, 2) !== "$$") {
                if (filter && temp instanceof Array) {
                    temp.push(clone(obj[key], isAutoConvertDataTimeStr, filter));
                }
                else {
                    temp[key] = clone(obj[key], isAutoConvertDataTimeStr, filter);
                }
            }
        }
        return temp;
    }
}

exports.clone = clone;