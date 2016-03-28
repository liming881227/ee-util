function getXMLStr(str) {
	str = cynthia.string.replaceAll(str, "&", "&amp;");
	str = cynthia.string.replaceAll(str, "<", "&lt;");
	str = cynthia.string.replaceAll(str, ">", "&gt;");
	str = cynthia.string.replaceAll(str, "'", "&apos;");
	str = cynthia.string.replaceAll(str, "\"", "&quot;");
	return str;
}

function getNoXMLStr(str) {
	str = cynthia.string.replaceAll(str, "&lt;", "<");
	str = cynthia.string.replaceAll(str, "&gt;", ">");
	str = cynthia.string.replaceAll(str, "&apos;", "'");
	str = cynthia.string.replaceAll(str, "&quot;", "\"");
	str = cynthia.string.replaceAll(str, "&amp;", "&");
	return str;
}

function getXMLDoc() {
	if (document.implementation && document.implementation.createDocument) {
		return document.implementation.createDocument("", "", null);
	}

	if (window.ActiveXObject) {
		return new ActiveXObject("Msxml.DOMDocument");
	}
	return null;
}

function getDocXML(doc) {
	if (doc.xml) {
		return doc.xml;
	}
	return new XMLSerializer().serializeToString(doc);
}

exports.getXMLStr = getXMLStr;
exports.getNoXMLStr = getNoXMLStr;
exports.getXMLDoc = getXMLDoc;
exports.getDocXML = getDocXML;
