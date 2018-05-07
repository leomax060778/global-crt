$.import("mktgcartrequesttool.services.commonLib", "mapper");
var mapper = $.mktgcartrequesttool.services.commonLib.mapper;
var httpUtil = mapper.getHttp();
var ErrorLib = mapper.getErrors();
var request = mapper.getProcessingReportMessage();
var status = mapper.getInquiryStatus();
/** ***********END INCLUDE LIBRARIES*************** */

var GET_INQUIRY_MESSAGE = "GET_INQUIRY_MESSAGE";

var service_name = "inquiryProcessingReportMessageService";

function processRequest() {
    httpUtil.processRequest(handleGet, handlePost, handlePut, handleDelete, false, service_name);
}

/**
 *
 * @param {object} parameters
 * @param {string} [parameters.GET_INQUIRY_MESSAGE] - get by inquiry id
 * @returns {InquiryMessage} InquiryMessage
 */
function handleGet(parameters, userId) {
    var rdo = {}; 
    if (parameters.length > 0) {
        if (parameters[0].name === GET_INQUIRY_MESSAGE) {
            if (parameters[0].value <= 0) {
                throw ErrorLib.getErrors().BadRequest(
                    "",
                    "vendorMessageService/handleGet",
                    "invalid value \'" + parameters[0].value + "\' for parameter " + parameters[0].name + " (should be a valid inquiry id)"
                );
            } else {
                rdo = request.getInquiryMessage(parameters[0].value, userId);
            }
        } else {
            throw ErrorLib.getErrors().BadRequest(
                "",
                "vendorMessageService/handleGet",
                "invalid parameter (should be: GET_INQUIRY_MESSAGE)"
            );
        }
    } else {
        throw ErrorLib.getErrors().BadRequest(
            "",
            "vendorMessageService/handleGet",
            "invalid parameter (should be: GET_INQUIRY_MESSAGE)"
        );
    }
    return httpUtil.handleResponse(rdo, httpUtil.OK, httpUtil.AppJson);
}

//Not Implemented Method
function handlePut() {
	return httpUtil.notImplementedMethod();
}

//Not Implemented Method
function handleDelete() {
    return httpUtil.notImplementedMethod();
}

/**
 *
 * @param {object} reqBody
 * @param {string} reqBody.INQUIRY_ID - id of the inquiry
 * @param {string} reqBody.MESSAGE_CONTENT - the content of the message
 * @param {string} reqBody.RETURN_TYPE_ID - id of the user type
 * @param {string} reqBody.PREVIOUS_STATUS_ID - id of the previous status
 * @param userId
 * @returns {string} id - Id of the new inquiry message
 */
function handlePost(reqBody, userId) {
    var req = request.insertInquiryMessage(reqBody, userId);
    return httpUtil.handleResponse(req, httpUtil.OK, httpUtil.AppJson);
}

processRequest();