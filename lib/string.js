function codeHtml(content) { //# 转义 HTML 字符
    return this.replace(content, {
        '&': "&amp;", '"': "&quot;", "'": '&#39;', '<': "&lt;", '>': "&gt;", ' ': "&nbsp;", '\t': "&#09;", '(': "&#40;", ')': "&#41;", '*': "&#42;", '+': "&#43;", ',': "&#44;", '-': "&#45;", '.': "&#46;", '/': "&#47;", '?': "&#63;", '\\': "&#92;", '\n': "<br>"
    });
}

function decodeHtml (str){
    if (!str || str.indexOf("&") == -1){
        return str.trim();
    }

    str = str.replace(/&lt;/g, "<");
    str = str.replace(/&gt;/g, ">");
    str = str.replace(/&nbsp;/g, " ");
    str = str.replace(/&amp;/g, "&");
    str = str.replace(/&#40;/g, "(");
    str = str.replace(/&#41;/g, ")");
    return str.trim();
}

//替换全部
function replaceAll(str, replaced, replacement) {
    if(str == null)
        return "";
    var ret = "";

    var index = 0;
    while(str.indexOf(replaced, index) >= index)
    {
        ret += str.substring(index, str.indexOf(replaced, index)) + replacement;

        index = str.indexOf(replaced, index) + replaced.length;
    }

    ret += str.substring(index);

    return ret;
}

//去除html标签
function removeHTMLTag(str) {
    str = str.replace(/<br>/ig, '\r\n');//替换<br> \r\n
    str = str.replace(/<\/?[^>]*>/g, ''); //去除HTML tag
    str = str.replace(/[ | ]* /g, ' '); //去除行尾空白
    str = str.replace(/ /ig, '');//去掉
    str = str.replace(/&nbsp;/ig, '');//去掉
    // return this.codeHtml(str);
    return str;
}

//去除两边空格
function trim(text) { //# 去除两边空格
    return ( text || '' ).replace(/^\s+|\s$/, '');
}

//字符串替换
function replace(str, re) { //# 字符串替换
    str = str || '';
    for (var key in re) {
        replace(key, re[key]);
    }
    ;
    function replace(a, b) {
        var arr = str.split(a);
        str = arr.join(b);
    };
    return str;
}

//增加前缀
function addPre(pre, word, size) { //# 补齐。如给数字前 加 0
    pre = pre || '0';
    size = parseInt(size) || 0;
    word = String(word || '');
    var length = Math.max(0, size - word.length);
    return this.repeat(pre, length, word);
}

//删除字符串中的img标签
function removeImg(src) {
    src = src.replace(/<\s?img[^>]*>/gi, '');
    return src;
}

//重复字符串
function repeat(word, length, end) {
    end = end || ''; //加在末位
    length = ~~length;
    return new Array(length * 1 + 1).join(word) + '' + end;
}

//格式化
function format(src) {
    if (arguments.length == 0) return null;
    var args = Array.prototype.slice.call(arguments, 1);
    return src.replace(/\{(\d+)\}/g, function (m, i) {
        return args[i];
    });
}

//判断是否中文
function isChinese (str){
    var reg = /^[\u0391-\uFFE5]+$/;
    return reg.test(str);
}


exports.codeHtml = codeHtml;
exports.decodeHtml = decodeHtml;
exports.replaceAll = replaceAll;
exports.removeHTMLTag = removeHTMLTag;
exports.trim = trim;
exports.replace = replace;
exports.addPre = addPre;
exports.removeImg = removeImg;
exports.repeat = repeat;
exports.format = format;
exports.isChinese = isChinese;