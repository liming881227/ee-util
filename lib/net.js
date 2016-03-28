function getClientIp(req) {
    var ips = req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress;
    return ips && ips.split(',', 1)[0];
}

exports.getClientIp = getClientIp;