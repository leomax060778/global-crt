$.import("mktgcartrequesttool.services.commonLib", "mapper");
var mapper = $.mktgcartrequesttool.services.commonLib.mapper;
var httpUtil = mapper.getHttp();
var ErrorLib = mapper.getErrors();
var request = mapper.getVendorRequestInquiryStatus();
var selection = mapper.getChangeVendorSelection();
/** ***********END INCLUDE LIBRARIES*************** */

var GET_VENDOR_REQUEST_INQUIRY_BY_STATUS = "GET_VENDOR_REQUEST_INQUIRY_BY_STATUS";
var GET_VENDOR_REQUEST_INQUIRY_BY_STATUS_ADMINISTRABLE = "GET_VENDOR_REQUEST_INQUIRY_BY_STATUS_ADMINISTRABLE";
var GET_CHANGE_VENDOR_REQUEST_BY_STATUS = "GET_CHANGE_VENDOR_REQUEST_BY_STATUS";
var GET_CHANGE_VENDOR_REQUEST_BY_ID = "GET_CHANGE_VENDOR_REQUEST_BY_ID";
var GET_EXTEND_VENDOR_REQUEST_BY_STATUS = "GET_EXTEND_VENDOR_REQUEST_BY_STATUS";
var GET_EXTEND_VENDOR_REQUEST_BY_ID = "GET_EXTEND_VENDOR_REQUEST_BY_ID";
var GET_VENDOR_REQUEST_BY_STATUS = "GET_VENDOR_REQUEST_BY_STATUS";
var GET_VENDOR_REQUEST_BY_ID = "GET_VENDOR_REQUEST_BY_ID";
var GET_VENDOR_INQUIRY_BY_STATUS = "GET_VENDOR_INQUIRY_BY_STATUS";
var GET_VENDOR_INQUIRY_BY_ID = "GET_VENDOR_INQUIRY_BY_ID";

var service_name = "vendorRequestInquiryStatusService";

function processRequest() {
    httpUtil.processRequest(handleGet, handlePost, handlePut, handleDelete, false, service_name);
}

function handleGet(parameters, userId) {
    var res = {};
    if (parameters.length > 0) {
        //Get all vendor by status
        switch (parameters[0].name) {
            case GET_VENDOR_REQUEST_INQUIRY_BY_STATUS:
                if (parameters[0].value <= 0 || isNaN(parameters[0].value)) {
                    throw ErrorLib.getErrors().BadRequest("", "",
                        "invalid value \'" + parameters[0].value + "\' for parameter " + parameters[0].name + " (should be a valid id)"
                    );
                } else {
                    res = request.getVendorRequestInquiryByStatus(parameters[0].value, userId);
                }
                break;

            case GET_VENDOR_REQUEST_INQUIRY_BY_STATUS_ADMINISTRABLE:
                if (parameters[0].value > 1 || parameters[0].value < 0 || isNaN(parameters[0].value) || !parameters[0].value) {
                    throw ErrorLib.getErrors().BadRequest("", "",
                        "invalid value \'" + parameters[0].value + "\' for parameter " + parameters[0].name + " (should be 1 or 0)"
                    );
                } else {
                    res = request.getVendorRequestInquiryByStatusAdministrable(parameters[0].value, userId);
                }
                break;

            case GET_CHANGE_VENDOR_REQUEST_BY_STATUS:
                if (parameters[0].value <= 0 || isNaN(parameters[0].value)) {
                    throw ErrorLib.getErrors().BadRequest("", "",
                        "invalid value \'" + parameters[0].value + "\' for parameter " + parameters[0].name + " (should be a valid id)"
                    );
                } else {
                    res = request.getChangeVendorRequestByStatus(parameters[0].value);
                }
                break;

            case GET_CHANGE_VENDOR_REQUEST_BY_ID:
                if (parameters[0].value <= 0 || isNaN(parameters[0].value)) {
                    throw ErrorLib.getErrors().BadRequest("", "",
                        "invalid value \'" + parameters[0].value + "\' for parameter " + parameters[0].name + " (should be a valid id)"
                    );
                } else {
                    var resSelection = selection.getChangeSelectionByIdManual(parameters[0].value);
                    var resChange = request.getChangeVendorRequestByIdManual(parameters[0].value, userId);

                    res = {'changeVendor': resChange, 'selection': resSelection};
                }
                break;

            case GET_EXTEND_VENDOR_REQUEST_BY_STATUS:
                if (parameters[0].value <= 0 || isNaN(parameters[0].value)) {
                    throw ErrorLib.getErrors().BadRequest("", "",
                        "invalid value \'" + parameters[0].value + "\' for parameter " + parameters[0].name + " (should be a valid id)"
                    );
                } else {
                    res = request.getExtendVendorRequestByStatus(parameters[0].value);
                }
                break;
            case GET_EXTEND_VENDOR_REQUEST_BY_ID:
                if (parameters[0].value <= 0 || isNaN(parameters[0].value)) {
                    throw ErrorLib.getErrors().BadRequest("", "",
                        "invalid value \'" + parameters[0].value + "\' for parameter " + parameters[0].name + " (should be a valid id)"
                    );
                } else {
                    res = request.getExtendVendorRequestById(parameters[0].value, userId);
                }
                break;

            case GET_VENDOR_REQUEST_BY_STATUS:
                if (parameters[0].value <= 0 || isNaN(parameters[0].value)) {
                    throw ErrorLib.getErrors().BadRequest("", "",
                        "invalid value \'" + parameters[0].value + "\' for parameter " + parameters[0].name + " (should be a valid id)"
                    );
                } else {
                    res = request.getVendorRequestByStatus(parameters[0].value);
                }
                break;

            case GET_VENDOR_REQUEST_BY_ID:
                if (parameters[0].value <= 0 || isNaN(parameters[0].value)) {
                    throw ErrorLib.getErrors().BadRequest("", "",
                        "invalid value \'" + parameters[0].value + "\' for parameter " + parameters[0].name + " (should be a valid id)"
                    );
                } else {
                    res = request.getVendorRequestById(parameters[0].value, userId);
                }
                break;

            case GET_VENDOR_INQUIRY_BY_STATUS:
                if (parameters[0].value <= 0 || isNaN(parameters[0].value)) {
                    throw ErrorLib.getErrors().BadRequest("", "",
                        "invalid value \'" + parameters[0].value + "\' for parameter " + parameters[0].name + " (should be a valid id)"
                    );
                } else {
                    res = request.getVendorInquiryByStatus(parameters[0].value);
                }
                break;

            case GET_VENDOR_INQUIRY_BY_ID:
                if (parameters[0].value <= 0 || isNaN(parameters[0].value)) {
                    throw ErrorLib.getErrors().BadRequest("", "",
                        "invalid value \'" + parameters[0].value + "\' for parameter " + parameters[0].name + " (should be a valid id)"
                    );
                } else {
                    res = request.getVendorInquiryById(parameters[0].value, userId);
                }
                break;

            default:
                throw ErrorLib.getErrors().BadRequest("", "",
                    "invalid parameter name " + parameters[0].name + " (can be: GET_VENDOR_REQUEST_INQUIRY_BY_STATUS, GET_VENDOR_REQUEST_INQUIRY_BY_STATUS_ADMINISTRABLE, GET_CHANGE_VENDOR_REQUEST_BY_STATUS, GET_CHANGE_VENDOR_REQUEST_BY_ID, GET_EXTEND_VENDOR_REQUEST_BY_STATUS, GET_EXTEND_VENDOR_REQUEST_BY_ID, GET_VENDOR_REQUEST_BY_STATUS, GET_VENDOR_REQUEST_BY_ID, GET_INQUIRY_BY_STATUS, GET_INQUIRY_BY_ID, GET_VENDOR_INQUIRY_BY_STATUS or GET_VENDOR_INQUIRY_BY_ID)"
                );
        }
    }

    //Invalid parameter
    else {
        throw ErrorLib.getErrors().BadRequest("", "",
            "invalid parameter name (can be: GET_VENDOR_REQUEST_INQUIRY_BY_STATUS, GET_VENDOR_REQUEST_INQUIRY_BY_STATUS_ADMINISTRABLE, GET_CHANGE_VENDOR_REQUEST_BY_STATUS, GET_CHANGE_VENDOR_REQUEST_BY_ID, GET_EXTEND_VENDOR_REQUEST_BY_STATUS, GET_EXTEND_VENDOR_REQUEST_BY_ID, GET_VENDOR_REQUEST_BY_STATUS, GET_VENDOR_REQUEST_BY_ID, GET_INQUIRY_BY_STATUS, GET_INQUIRY_BY_ID, GET_VENDOR_INQUIRY_BY_STATUS or GET_VENDOR_INQUIRY_BY_ID)"
        );
    }
    return httpUtil.handleResponse(res, httpUtil.OK, httpUtil.AppJson);
}

function handlePut(reqBody, userId) {
    var res;
    if (reqBody.VENDOR_INQUIRY_ID) {
        res = request.updateVendorInquiryStatus(reqBody, userId);
        request.sendVendorInquiryMailByStatus(reqBody, userId);
    } else if (reqBody.CHANGE_VENDOR_REQUEST_ID) {
        res = request.updateChangeVendorRequestStatus(reqBody, userId);
        request.sendChangeVendorMailByStatus(reqBody, userId);
    } else if (reqBody.EXTEND_VENDOR_REQUEST_ID) {
        var extendsVendorData = request.getManualExtendVendorRequestById(reqBody.EXTEND_VENDOR_REQUEST_ID, userId);
        res = request.updateExtendVendorRequestStatus(reqBody, userId);
        request.sendExtendVendorMailByStatus(reqBody, extendsVendorData, userId);
    } else if (reqBody.VENDOR_REQUEST_ID) {
        res = request.updateVendorRequestStatus(reqBody, userId);
        request.sendVendorRequestMailByStatus(reqBody, userId);
    } else {
        throw ErrorLib.getErrors().BadRequest("", "",
            "The object reqBody is invalid. Must be included one of the following id: VENDOR_INQUIRY_ID, VENDOR_REQUEST_ID, EXTEND_VENDOR_REQUEST_ID or CHANGE_VENDOR_REQUEST_ID"
        );
    }
    return httpUtil.handleResponse(res, httpUtil.OK, httpUtil.AppJson);
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