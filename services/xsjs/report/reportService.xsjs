$.import("mktgcartrequesttool.services.commonLib", "mapper");
var mapper = $.mktgcartrequesttool.services.commonLib.mapper;
var httpUtil = mapper.getHttp();
var ErrorLib = mapper.getErrors();
var report = mapper.getReport();
/** ***********END INCLUDE LIBRARIES*************** */

var GET_REPORT = "GET_REPORT";
var GET_REPORT_REQUESTER = "GET_REPORT_REQUESTER";
var GET_REPORT_TYPE = "GET_REPORT_TYPE";
var GET_USER_REPORT = "GET_USER_REPORT";
var GET_VENDOR_REPORT = "GET_VENDOR_REPORT";
var GET_CATALOG_REPORT = "GET_CATALOG_REPORT";
var GET_COMMODITY_REPORT = "GET_COMMODITY_REPORT";

var service_name = "reportService";

function processRequest() {
    httpUtil.processRequest(handleGet, handlePost, handlePut, handleDelete, false, service_name);
}

function handleGet(parameters, userId) {
    var res = {};
    if (parameters.length > 0) {
        if (parameters[0].name === GET_REPORT) {
        	if (parameters.length > 1) {
        		res = report.getReport(parameters[1].value, userId);
        	}
        } else if (parameters[0].name === GET_USER_REPORT) {
            res = report.getUserReport(userId);
        } else if (parameters[0].name === GET_VENDOR_REPORT) {
            res = report.getVendorReport(userId);
        } else if (parameters[0].name === GET_CATALOG_REPORT) {
            res = report.getCatalogReport(userId);
        } else if (parameters[0].name === GET_COMMODITY_REPORT) {
            res = report.getCommodityReport(userId);
        } else if (parameters[0].name === GET_REPORT_TYPE) {
            res = report.getReportType(userId);
        } else {
        	throw ErrorLib.getErrors().BadRequest(
        		"",
        		"reportService/handleGet",
        		"invalid parameter name " + parameters[0].name + " (can be: GET_REPORT, GET_REPORT_REQUESTER, GET_USER_REPORT, GET_VENDOR_REPORT, GET_CATALOG_REPORT, GET_COMMODITY_REPORT or GET_REPORT_TYPE)"
            );
        }
    } else {
            throw ErrorLib.getErrors().BadRequest(
                "",
                "reportService/handleGet",
                "invalid parameter name (can be: GET_REPORT, GET_USER_REPORT, GET_VENDOR_REPORT, GET_CATALOG_REPORT, GET_COMMODITY_REPORT or GET_REPORT_TYPE)"
                );
        }
    return httpUtil.handleResponse(res, httpUtil.OK, httpUtil.AppJson);
}

//Not Implemented Method
function handlePut() {
	return httpUtil.notImplementedMethod();
}

//Not Implemented Method
function handleDelete() {
    return httpUtil.notImplementedMethod();
}

//Not Implemented Method
function handlePost() {
    return httpUtil.notImplementedMethod();
}

processRequest();