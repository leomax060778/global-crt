$.import("mktgcartrequesttool.services.commonLib", "mapper");
var mapper = $.mktgcartrequesttool.services.commonLib.mapper;
var statusLib = mapper.getStatus();
var httpUtil = mapper.getHttp();
var ErrorLib = mapper.getErrors();

/** ***********GET ALL*************** */
var GET_ALL_INQUIRY_STATUS = "GET_ALL_INQUIRY_STATUS";
var GET_ALL_VENDOR_INQUIRY_STATUS = "GET_ALL_VENDOR_INQUIRY_STATUS";
var GET_ALL_REQUEST_STATUS = "GET_ALL_REQUEST_STATUS";
var GET_ALL_VENDOR_REQUEST_STATUS = "GET_ALL_VENDOR_REQUEST_STATUS";
var GET_ALL_CHANGE_VENDOR_REQUEST_STATUS = "GET_ALL_CHANGE_VENDOR_REQUEST_STATUS";
var GET_ALL_EXTEND_VENDOR_REQUEST_STATUS = "GET_ALL_EXTEND_VENDOR_REQUEST_STATUS";
var GET_ALL_REQUEST_STATUS_FOR_FILTERS = "GET_ALL_REQUEST_STATUS_FOR_FILTERS";
/** ***********GET ALL PROCESSING REPORT*************** */
var GET_ALL_INQUIRY_STATUS_PROCESSING_REPORT = "GET_ALL_INQUIRY_STATUS_PROCESSING_REPORT";
var GET_ALL_VENDOR_INQUIRY_STATUS_PROCESSING_REPORT = "GET_ALL_VENDOR_INQUIRY_STATUS_PROCESSING_REPORT";
var GET_ALL_REQUEST_STATUS_PROCESSING_REPORT = "GET_ALL_REQUEST_STATUS_PROCESSING_REPORT";
var GET_ALL_VENDOR_REQUEST_STATUS_PROCESSING_REPORT = "GET_ALL_VENDOR_REQUEST_STATUS_PROCESSING_REPORT";
var GET_ALL_CHANGE_VENDOR_REQUEST_STATUS_PROCESSING_REPORT = "GET_ALL_CHANGE_VENDOR_REQUEST_STATUS_PROCESSING_REPORT";
var GET_ALL_EXTEND_VENDOR_REQUEST_STATUS_PROCESSING_REPORT = "GET_ALL_EXTEND_VENDOR_REQUEST_STATUS_PROCESSING_REPORT";
/** ***********GET BY ID*************** */
var GET_INQUIRY_STATUS_BY_ID = "GET_INQUIRY_STATUS_BY_ID";
var GET_VENDOR_INQUIRY_STATUS_BY_ID = "GET_VENDOR_INQUIRY_STATUS_BY_ID";
var GET_REQUEST_STATUS_BY_ID = "GET_REQUEST_STATUS_BY_ID";
var GET_VENDOR_REQUEST_STATUS_BY_ID = "GET_VENDOR_REQUEST_STATUS_BY_ID";
var GET_CHANGE_VENDOR_REQUEST_STATUS_BY_ID = "GET_CHANGE_VENDOR_REQUEST_STATUS_BY_ID";
var GET_EXTEND_VENDOR_REQUEST_STATUS_BY_ID = "GET_EXTEND_VENDOR_REQUEST_STATUS_BY_ID";

var service_name = "statusService";

function processRequest() {
    httpUtil.processRequest(handleGet, handlePost, handlePut, handleDelete, false, service_name);
}

function handleGet(parameters, userId) {
    var res = {};
    if (parameters.length > 0) {
    	/** ***********GET ALL*************** */
        if (parameters[0].name === GET_ALL_INQUIRY_STATUS) {
            res = statusLib.getAllInquiryStatus();
        } else if (parameters[0].name === GET_ALL_VENDOR_INQUIRY_STATUS) {
            res = statusLib.getAllVendorInquiryStatus();
        } else if (parameters[0].name === GET_ALL_REQUEST_STATUS) {
            res = statusLib.getAllRequestStatus();
        } else if (parameters[0].name === GET_ALL_VENDOR_REQUEST_STATUS) {
            res = statusLib.getAllVendorRequestStatus();
        } else if (parameters[0].name === GET_ALL_CHANGE_VENDOR_REQUEST_STATUS) {
            res = statusLib.getAllChangeVendorRequestStatus();
        } else if (parameters[0].name === GET_ALL_EXTEND_VENDOR_REQUEST_STATUS) {
            res = statusLib.getAllExtendVendorRequestStatus();
        } else if (parameters[0].name === GET_ALL_REQUEST_STATUS_FOR_FILTERS) {
            res = statusLib.getAllStatusForFilters();
        } 
        /** ***********GET ALL PROCESSING REPORT*************** */
        else if (parameters[0].name === GET_ALL_INQUIRY_STATUS_PROCESSING_REPORT) {
            res = statusLib.getAllInquiryStatusProcessingReport();
        } else if (parameters[0].name === GET_ALL_VENDOR_INQUIRY_STATUS_PROCESSING_REPORT) {
            res = statusLib.getAllVendorInquiryStatusProcessingReport();
        } else if (parameters[0].name === GET_ALL_REQUEST_STATUS_PROCESSING_REPORT) {
            res = statusLib.getAllRequestStatusProcessingReport();
        } else if (parameters[0].name === GET_ALL_VENDOR_REQUEST_STATUS_PROCESSING_REPORT) {
            res = statusLib.getAllVendorRequestStatusProcessingReport();
        } else if (parameters[0].name === GET_ALL_CHANGE_VENDOR_REQUEST_STATUS_PROCESSING_REPORT) {
            res = statusLib.getAllChangeVendorRequestStatusProcessingReport();
        } else if (parameters[0].name === GET_ALL_EXTEND_VENDOR_REQUEST_STATUS_PROCESSING_REPORT) {
            res = statusLib.getAllExtendVendorRequestStatusProcessingReport();
        }
        /** ***********GET BY ID*************** */
        else if (parameters[0].name === GET_INQUIRY_STATUS_BY_ID) {
            if (parameters[0].value <= 0 || isNaN(parameters[0].value)){
                throw ErrorLib.getErrors().BadRequest(
                    "",
                    "modalService/handleGet",
                    "invalid value \'" + parameters[0].value + "\' for parameter " + parameters[0].name + " (must be a valid id)"
                );
            } else {
                res = statusLib.getInquiryStatusById(parameters[0].value, userId);
            }
        } else if (parameters[0].name === GET_VENDOR_INQUIRY_STATUS_BY_ID) {
            if (parameters[0].value <= 0 || isNaN(parameters[0].value)){
                throw ErrorLib.getErrors().BadRequest(
                    "",
                    "modalService/handleGet",
                    "invalid value \'" + parameters[0].value + "\' for parameter " + parameters[0].name + " (must be a valid id)"
                );
            } else {
                res = statusLib.getVendorInquiryStatusById(parameters[0].value, userId);
            }
        } else if (parameters[0].name === GET_REQUEST_STATUS_BY_ID) {
            if (parameters[0].value <= 0 || isNaN(parameters[0].value)){
                throw ErrorLib.getErrors().BadRequest(
                    "",
                    "modalService/handleGet",
                    "invalid value \'" + parameters[0].value + "\' for parameter " + parameters[0].name + " (must be a valid id)"
                );
            } else {
                res = statusLib.getRequestStatusById(parameters[0].value, userId);
            }
        } else if (parameters[0].name === GET_VENDOR_REQUEST_STATUS_BY_ID) {
            if (parameters[0].value <= 0 || isNaN(parameters[0].value)){
                throw ErrorLib.getErrors().BadRequest(
                    "",
                    "modalService/handleGet",
                    "invalid value \'" + parameters[0].value + "\' for parameter " + parameters[0].name + " (must be a valid id)"
                );
            } else {
                res = statusLib.getVendorRequestStatusById(parameters[0].value, userId);
            }
        } else if (parameters[0].name === GET_CHANGE_VENDOR_REQUEST_STATUS_BY_ID) {
            if (parameters[0].value <= 0 || isNaN(parameters[0].value)){
                throw ErrorLib.getErrors().BadRequest(
                    "",
                    "modalService/handleGet",
                    "invalid value \'" + parameters[0].value + "\' for parameter " + parameters[0].name + " (must be a valid id)"
                );
            } else {
                res = statusLib.getChangeVendorRequestStatusById(parameters[0].value, userId);
            }
        } else if (parameters[0].name === GET_EXTEND_VENDOR_REQUEST_STATUS_BY_ID) {
            if (parameters[0].value <= 0 || isNaN(parameters[0].value)){
                throw ErrorLib.getErrors().BadRequest(
                    "",
                    "modalService/handleGet",
                    "invalid value \'" + parameters[0].value + "\' for parameter " + parameters[0].name + " (must be a valid id)"
                );
            } else {
                res = statusLib.getExtendVendorRequestStatusById(parameters[0].value, userId);
            }
        } else {
            throw ErrorLib.getErrors().BadRequest(
                "",
                "statusServices/handleGet",
                "invalid parameter name " + parameters[0].name
                );
        }
    } else {
        throw ErrorLib.getErrors().BadRequest(
            "",
            "statusServices/handleGet",
            "invalid parameter (can be: GET_ALL_INQUIRY_STATUS, GET_ALL_VENDOR_INQUIRY_STATUS, GET_ALL_REQUEST_STATUS, GET_ALL_VENDOR_REQUEST_STATUS, GET_ALL_CHANGE_VENDOR_REQUEST_STATUS, GET_ALL_EXTEND_VENDOR_REQUEST_STATUS, GET_ALL_STATUS_FOR_FILTERS, GET_INQUIRY_STATUS_BY_ID, GET_VENDOR_INQUIRY_STATUS_BY_ID, GET_REQUEST_STATUS_BY_ID, GET_VENDOR_REQUEST_STATUS_BY_ID, GET_EXTEND_VENDOR_REQUEST_STATUS_BY_ID or GET_CHANGE_VENDOR_REQUEST_STATUS_BY_ID)"
        );
    }
    return httpUtil.handleResponse(res, httpUtil.OK, httpUtil.AppJson);
}

function handlePost(reqBody, userId) {
    var res;
    if (reqBody.INQUIRY_ID) {
        res = statusLib.insertInquiryStatus(reqBody, userId);
    } else if (reqBody.VENDOR_INQUIRY_ID) {
        res = statusLib.insertVendorInquiryStatus(reqBody, userId);
    } else if (reqBody.REQUEST_ID) {
        res = statusLib.insertRequestStatus(reqBody, userId);
    } else if (reqBody.VENDOR_REQUEST_ID) {
        res = statusLib.insertVendorRequestStatus(reqBody, userId);
    } else if (reqBody.EXTEND_VENDOR_REQUEST_ID) {
        res = statusLib.insertExtendVendorRequestStatus(reqBody, userId);
    } else if (reqBody.CHANGE_VENDOR_REQUEST_ID) {
        res = statusLib.insertChangeVendorRequestStatus(reqBody, userId);
    } else {
        throw ErrorLib.getErrors().CustomError("", "statusService",
            "The object reqBody is invalid. Must be included one of the following id: INQUIRY_ID, VENDOR_INQUIRY_ID, REQUEST_ID, VENDOR_REQUEST_ID, EXTEND_VENDOR_REQUEST_ID or CHANGE_VENDOR_REQUEST_ID");
    }
    return httpUtil.handleResponse(res, httpUtil.OK, httpUtil.AppJson);
}

function handlePut(reqBody, userId) {
    var res;
    if (reqBody.INQUIRY_ID) {
        res = statusLib.updateInquiryStatus(reqBody, userId);
    } else if (reqBody.VENDOR_INQUIRY_ID) {
        res = statusLib.updateVendorInquiryStatus(reqBody, userId);
    } else if (reqBody.REQUEST_ID) {
        res = statusLib.updateRequestStatus(reqBody, userId);
    } else if (reqBody.VENDOR_REQUEST_ID) {
        res = statusLib.updateVendorRequestStatus(reqBody, userId);
    } else if (reqBody.EXTEND_VENDOR_REQUEST_ID) {
        res = statusLib.updateExtendVendorRequestStatus(reqBody, userId);
    } else if (reqBody.CHANGE_VENDOR_REQUEST_ID) {
        res = statusLib.updateChangeVendorRequestStatus(reqBody, userId);
    } else {
        throw ErrorLib.getErrors().CustomError("", "statusService",
            "The object reqBody is invalid. Must be included one of the following id: INQUIRY_ID, VENDOR_INQUIRY_ID, REQUEST_ID, VENDOR_REQUEST_ID, EXTEND_VENDOR_REQUEST_ID or CHANGE_VENDOR_REQUEST_ID");
    }
    return httpUtil.handleResponse(res, httpUtil.OK, httpUtil.AppJson);
}

function handleDelete(reqBody, userId) {
    var res;
    if (reqBody.INQUIRY_ID) {
        res = statusLib.deleteInquiryStatus(reqBody, userId);
    } else if (reqBody.VENDOR_INQUIRY_ID) {
        res = statusLib.deleteVendorInquiryStatus(reqBody, userId);
    } else if (reqBody.REQUEST_ID) {
        res = statusLib.deleteRequestStatus(reqBody, userId);
    } else if (reqBody.VENDOR_REQUEST_ID) {
        res = statusLib.deleteVendorRequestStatus(reqBody, userId);
    } else if (reqBody.EXTEND_VENDOR_REQUEST_ID) {
        res = statusLib.deleteExtendVendorRequestStatus(reqBody, userId);
    } else if (reqBody.CHANGE_VENDOR_REQUEST_ID) {
        res = statusLib.deleteChangeVendorRequestStatus(reqBody, userId);
    } else {
        throw ErrorLib.getErrors().CustomError("", "statusService",
            "The object reqBody is invalid. Must be included one of the following id: INQUIRY_ID, VENDOR_INQUIRY_ID, REQUEST_ID, VENDOR_REQUEST_ID, EXTEND_VENDOR_REQUEST_ID or CHANGE_VENDOR_REQUEST_ID");
    }
    return httpUtil.handleResponse(res, httpUtil.OK, httpUtil.AppJson);
}

processRequest();