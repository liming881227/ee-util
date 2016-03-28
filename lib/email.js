

function getEmailLoginUrl(email) {
    var ret;
    var $t = email.split('@')[1].toLowerCase();
    if ($t == '163.com') {
        ret = 'mail.163.com';
    } else if ($t == 'vip.163.com') {
        ret = 'vip.163.com';
    } else if ($t == '126.com') {
        ret = 'mail.126.com';
    } else if ($t == 'qq.com' || $t == 'vip.qq.com' || $t == 'foxmail.com') {
        ret = 'mail.qq.com';
    } else if ($t == 'gmail.com') {
        ret = 'mail.google.com';
    } else if ($t == 'sohu.com') {
        ret = 'mail.sohu.com';
    } else if ($t == 'tom.com') {
        ret = 'mail.tom.com';
    } else if ($t == 'vip.sina.com') {
        ret = 'vip.sina.com';
    } else if ($t == 'sina.com.cn' || $t == 'sina.com') {
        ret = 'mail.sina.com.cn';
    } else if ($t == 'tom.com') {
        ret = 'mail.tom.com';
    } else if ($t == 'yahoo.com.cn' || $t == 'yahoo.cn') {
        ret = 'mail.cn.yahoo.com';
    } else if ($t == 'tom.com') {
        ret = 'mail.tom.com';
    } else if ($t == 'yeah.net') {
        ret = 'www.yeah.net';
    } else if ($t == '21cn.com') {
        ret = 'mail.21cn.com';
    } else if ($t == 'hotmail.com') {
        ret = 'www.hotmail.com';
    } else if ($t == 'sogou.com') {
        ret = 'mail.sogou.com';
    } else if ($t == '188.com') {
        ret = 'www.188.com';
    } else if ($t == '139.com') {
        ret = 'mail.10086.cn';
    } else if ($t == '189.cn') {
        ret = 'webmail15.189.cn/webmail';
    } else if ($t == 'wo.com.cn') {
        ret = 'mail.wo.com.cn/smsmail';
    } else if ($t == '139.com') {
        ret = 'mail.10086.cn';
    } else {
        return null;
    }
    return 'http://' + ret;
}

exports.getEmailLoginUrl = getEmailLoginUrl;