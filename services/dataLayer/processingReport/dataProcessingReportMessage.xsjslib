$.import("mktgcartrequesttool.services.commonLib", "mapper");
var mapper = $.mktgcartrequesttool.services.commonLib.mapper;
var db = mapper.getdbHelper();
var ErrorLib = mapper.getErrors();
/** ***********END INCLUDE LIBRARIES*************** */

//STORE PROCEDURES LIST NAME
var INS_VENDOR_INQUIRY_MESSAGE = "INS_VENDOR_INQUIRY_MESSAGE";
var INS_VENDOR_REQUEST_MESSAGE = "INS_VENDOR_REQUEST_MESSAGE";
var INS_EXTEND_VENDOR_REQUEST_MESSAGE = "INS_EXTEND_VENDOR_REQUEST_MESSAGE";
var INS_CHANGE_VENDOR_REQUEST_MESSAGE = "INS_CHANGE_VENDOR_REQUEST_MESSAGE";
var INS_INQUIRY_MESSAGE = "INS_INQUIRY_MESSAGE";
var INS_REQUEST_MESSAGE = "INS_REQUEST_MESSAGE";
var GET_VENDOR_INQUIRY_MESSAGE = "GET_VENDOR_INQUIRY_MESSAGE_BY_VENDOR_INQUIRY_ID";
var GET_VENDOR_REQUEST_MESSAGE = "GET_VENDOR_REQUEST_MESSAGE_BY_VENDOR_REQUEST_ID";
var GET_EXTEND_VENDOR_REQUEST_MESSAGE = "GET_EXTEND_VENDOR_REQUEST_MESSAGE_BY_EXTEND_VENDOR_ID";
var GET_CHANGE_VENDOR_REQUEST_MESSAGE = "GET_CHANGE_VENDOR_REQUEST_MESSAGE_BY_CHANGE_VENDOR_ID";
var GET_INQUIRY_MESSAGE = "GET_INQUIRY_MESSAGE_BY_INQUIRY_ID";
var GET_REQUEST_MESSAGE_BY_REQUEST_ID = "GET_REQUEST_MESSAGE_BY_REQUEST_ID";

/** ***********INSERT*************** */
//Insert Vendor inquiry message
function insertVendorInquiryMessage(objVendorInquiry, userId) {
    var parameters = {};
    parameters.in_vendor_inquiry_id = objVendorInquiry.VENDOR_INQUIRY_ID;
    parameters.in_message_content = objVendorInquiry.MESSAGE_CONTENT;
    parameters.in_message_type_id = objVendorInquiry.MESSAGE_TYPE_ID || null;
    parameters.in_subject_id = objVendorInquiry.SUBJECT_ID || null;
    parameters.in_additional_message_type_information = objVendorInquiry.ADDITIONAL_MESSAGE_TYPE_INFORMATION || null;
    parameters.in_additional_subject_information = objVendorInquiry.ADDITIONAL_SUBJECT_INFORMATION || null;
    parameters.in_message_read = 0;
    parameters.in_user_id = userId;
    parameters.out_result = '?';
    return db.executeScalar(INS_VENDOR_INQUIRY_MESSAGE, parameters, 'out_result');
}

//Insert vendor Request message
function insertVendorRequestMessage(objVendorRequest, userId) {
    var parameters = {};
    parameters.in_vendor_request_id = objVendorRequest.VENDOR_REQUEST_ID;
    parameters.in_message_content = objVendorRequest.MESSAGE_CONTENT;
    parameters.in_message_type_id = objVendorRequest.MESSAGE_TYPE_ID || null;
    parameters.in_subject_id = objVendorRequest.SUBJECT_ID || null;
    parameters.in_additional_message_type_information = objVendorRequest.ADDITIONAL_MESSAGE_TYPE_INFORMATION || null;
    parameters.in_additional_subject_information = objVendorRequest.ADDITIONAL_SUBJECT_INFORMATION || null;
    parameters.in_message_read = 0;
    parameters.in_created_user_id = userId;
    parameters.out_result = '?';
    return db.executeScalar(INS_VENDOR_REQUEST_MESSAGE, parameters, 'out_result');
}

//Insert extend vendor request message
function insertExtendVendorRequestMessage(objExtendVendorRequest, userId) {
    var parameters = {};
    parameters.in_extend_vendor_request_id = objExtendVendorRequest.EXTEND_VENDOR_REQUEST_ID;
    parameters.in_message_content = objExtendVendorRequest.MESSAGE_CONTENT;
    parameters.in_message_type_id = objExtendVendorRequest.MESSAGE_TYPE_ID || null;
    parameters.in_subject_id = objExtendVendorRequest.SUBJECT_ID || null;
    parameters.in_additional_message_type_information = objExtendVendorRequest.ADDITIONAL_MESSAGE_TYPE_INFORMATION || null;
    parameters.in_additional_subject_information = objExtendVendorRequest.ADDITIONAL_SUBJECT_INFORMATION || null;
    parameters.in_message_read = 0;
    parameters.in_created_user_id = userId;
    parameters.out_result = '?';
    return db.executeScalar(INS_EXTEND_VENDOR_REQUEST_MESSAGE, parameters, 'out_result');
}

//Insert change vendor request message
function insertChangeVendorRequestMessage(objChangeVendorRequest, userId) {
    var parameters = {};
    parameters.in_change_vendor_request_id = objChangeVendorRequest.CHANGE_VENDOR_REQUEST_ID;
    parameters.in_message_content = objChangeVendorRequest.MESSAGE_CONTENT;
    parameters.in_message_type_id = objChangeVendorRequest.MESSAGE_TYPE_ID || null;
    parameters.in_subject_id = objChangeVendorRequest.SUBJECT_ID || null;
    parameters.in_additional_message_type_information = objChangeVendorRequest.ADDITIONAL_MESSAGE_TYPE_INFORMATION || null;
    parameters.in_additional_subject_information = objChangeVendorRequest.ADDITIONAL_SUBJECT_INFORMATION || null;
    parameters.in_message_read = 0;
    parameters.in_created_user_id = userId;
    parameters.out_result = '?';
    return db.executeScalar(INS_CHANGE_VENDOR_REQUEST_MESSAGE, parameters, 'out_result');
}

//Insert Inquiry message
function insertInquiryMessage(objInquiry, userId) {
    var parameters = {};
    parameters.in_user_id = userId;
    parameters.in_inquiry_id = objInquiry.INQUIRY_ID;
    parameters.in_message_content = objInquiry.MESSAGE_CONTENT;
    parameters.in_message_type_id = objInquiry.MESSAGE_TYPE_ID || null;
    parameters.in_subject_id = objInquiry.SUBJECT_ID || null;
    parameters.in_additional_message_type_information = objInquiry.ADDITIONAL_MESSAGE_TYPE_INFORMATION || null;
    parameters.in_additional_subject_information = objInquiry.ADDITIONAL_SUBJECT_INFORMATION || null;
    parameters.in_message_read = 0;
    parameters.in_created_user_id = userId;
    parameters.out_result = '?';
    return db.executeScalar(INS_INQUIRY_MESSAGE, parameters, 'out_result');
}

//Insert Request message
function insertRequestMessage(objRequest, userId) {
    var parameters = {};
    parameters.in_user_id = userId;
    parameters.in_request_id = objRequest.REQUEST_ID;
    parameters.in_message_content = objRequest.MESSAGE_CONTENT;
    parameters.in_message_type_id = objRequest.MESSAGE_TYPE_ID || null;
    parameters.in_subject_id = objRequest.SUBJECT_ID || null;
    parameters.in_additional_message_type_information = objRequest.ADDITIONAL_MESSAGE_TYPE_INFORMATION || null;
    parameters.in_additional_subject_information = objRequest.ADDITIONAL_SUBJECT_INFORMATION || null;
    parameters.in_message_read = 0;
    parameters.in_created_user_id = userId;
    parameters.out_result = '?';
    return db.executeScalar(INS_REQUEST_MESSAGE, parameters, 'out_result');
}
/** ***********END INSERT*************** */

/** ***********INSERT MANUAL*************** */
//Insert Vendor inquiry message manual
function insertVendorInquiryMessageManual(objVendorInquiry, userId) {
    var parameters = {};
    parameters.in_vendor_inquiry_id = objVendorInquiry.VENDOR_INQUIRY_ID;
    parameters.in_message_content = objVendorInquiry.MESSAGE_CONTENT;
    parameters.in_message_type_id = objVendorInquiry.MESSAGE_TYPE_ID || null;
    parameters.in_subject_id = objVendorInquiry.SUBJECT_ID || null;
    parameters.in_additional_message_type_information = objVendorInquiry.ADDITIONAL_MESSAGE_TYPE_INFORMATION || null;
    parameters.in_additional_subject_information = objVendorInquiry.ADDITIONAL_SUBJECT_INFORMATION || null;
    parameters.in_message_read = 0;
    parameters.in_user_id = userId;
    parameters.out_result = '?';
    return db.executeScalarManual(INS_VENDOR_INQUIRY_MESSAGE, parameters, 'out_result');
}

//Insert vendor Request message manual
function insertVendorRequestMessageManual(objVendorRequest, userId) {
    var parameters = {};
    parameters.in_vendor_request_id = objVendorRequest.VENDOR_REQUEST_ID;
    parameters.in_message_content = objVendorRequest.MESSAGE_CONTENT;
    parameters.in_message_type_id = objVendorRequest.MESSAGE_TYPE_ID || null;
    parameters.in_subject_id = objVendorRequest.SUBJECT_ID || null;
    parameters.in_additional_message_type_information = objVendorRequest.ADDITIONAL_MESSAGE_TYPE_INFORMATION || null;
    parameters.in_additional_subject_information = objVendorRequest.ADDITIONAL_SUBJECT_INFORMATION || null;
    parameters.in_message_read = 0;
    parameters.in_created_user_id = userId;
    parameters.out_result = '?';
    return db.executeScalarManual(INS_VENDOR_REQUEST_MESSAGE, parameters, 'out_result');
}

//Insert extend vendor request message manual
function insertExtendVendorRequestMessageManual(objExtendVendorRequest, userId) {
    var parameters = {};
    parameters.in_extend_vendor_request_id = objExtendVendorRequest.EXTEND_VENDOR_REQUEST_ID;
    parameters.in_message_content = objExtendVendorRequest.MESSAGE_CONTENT;
    parameters.in_message_type_id = objExtendVendorRequest.MESSAGE_TYPE_ID || null;
    parameters.in_subject_id = objExtendVendorRequest.SUBJECT_ID || null;
    parameters.in_additional_message_type_information = objExtendVendorRequest.ADDITIONAL_MESSAGE_TYPE_INFORMATION || null;
    parameters.in_additional_subject_information = objExtendVendorRequest.ADDITIONAL_SUBJECT_INFORMATION || null;
    parameters.in_message_read = 0;
    parameters.in_created_user_id = userId;
    parameters.out_result = '?';
    return db.executeScalarManual(INS_EXTEND_VENDOR_REQUEST_MESSAGE, parameters, 'out_result');
}

//Insert change vendor request message manual
function insertChangeVendorRequestMessageManual(objChangeVendorRequest, userId) {
    var parameters = {};
    parameters.in_change_vendor_request_id = objChangeVendorRequest.CHANGE_VENDOR_REQUEST_ID;
    parameters.in_message_content = objChangeVendorRequest.MESSAGE_CONTENT;
    parameters.in_message_type_id = objChangeVendorRequest.MESSAGE_TYPE_ID || null;
    parameters.in_subject_id = objChangeVendorRequest.SUBJECT_ID || null;
    parameters.in_additional_message_type_information = objChangeVendorRequest.ADDITIONAL_MESSAGE_TYPE_INFORMATION || null;
    parameters.in_additional_subject_information = objChangeVendorRequest.ADDITIONAL_SUBJECT_INFORMATION || null;
    parameters.in_message_read = 0;
    parameters.in_created_user_id = userId;
    parameters.out_result = '?';
    return db.executeScalarManual(INS_CHANGE_VENDOR_REQUEST_MESSAGE, parameters, 'out_result');
}

//Insert Inquiry message manual
function insertInquiryMessageManual(objInquiry, userId) {
    var parameters = {};
    parameters.in_user_id = userId;
    parameters.in_inquiry_id = objInquiry.INQUIRY_ID;
    parameters.in_message_content = objInquiry.MESSAGE_CONTENT;
    parameters.in_message_type_id = objInquiry.MESSAGE_TYPE_ID || null;
    parameters.in_subject_id = objRequest.SUBJECT_ID || null;
    parameters.in_additional_message_type_information = objInquiry.ADDITIONAL_MESSAGE_TYPE_INFORMATION || null;
    parameters.in_additional_subject_information = objInquiry.ADDITIONAL_SUBJECT_INFORMATION || null;
    parameters.in_message_read = 0;
    parameters.in_created_user_id = userId;
    parameters.out_result = '?';
    return db.executeScalarManual(INS_INQUIRY_MESSAGE, parameters, 'out_result');
}

//Insert Request message manual
function insertRequestMessageManual(objRequest, userId) {
    var parameters = {};
    parameters.in_user_id = userId;
    parameters.in_request_id = objRequest.REQUEST_ID;
    parameters.in_message_content = objRequest.MESSAGE_CONTENT;
    parameters.in_message_type_id = objRequest.MESSAGE_TYPE_ID || null;
    parameters.in_subject_id = objRequest.SUBJECT_ID || null;
    parameters.in_additional_message_type_information = objRequest.ADDITIONAL_MESSAGE_TYPE_INFORMATION || null;
    parameters.in_additional_subject_information = objRequest.ADDITIONAL_SUBJECT_INFORMATION || null;
    parameters.in_message_read = 0;
    parameters.in_created_user_id = userId;
    parameters.out_result = '?';
    return db.executeScalarManual(INS_REQUEST_MESSAGE, parameters, 'out_result');
}
/** ***********END INSERT MANUAL*************** */

/** ***********GET*************** */
//Get message of Vendor inquiry
function getVendorInquiryMessage(vendorInquiryId) {
    var parameters = {'in_vendor_inquiry_id': vendorInquiryId};
    var result = db.executeProcedure(GET_VENDOR_INQUIRY_MESSAGE, parameters);
    return db.extractArray(result.out_result);
}

//Get messages of vendor request
function getVendorRequestMessage(vendorRequestId) {
    var parameters = {'in_vendor_request_id': vendorRequestId};
    var result = db.executeProcedure(GET_VENDOR_REQUEST_MESSAGE, parameters);
    return db.extractArray(result.out_result);
}

//Get message of Extend Vendor Request
function getExtendVendorRequestMessage(extendVendorRequestId) {
    var parameters = {'in_extend_vendor_request_id': extendVendorRequestId};
    var result = db.executeProcedure(GET_EXTEND_VENDOR_REQUEST_MESSAGE, parameters);
    return db.extractArray(result.out_result);
}

//Get message of Change Vendor Request
function getChangeVendorRequestMessage(changeVendorRequestId) {
    var parameters = {'in_change_vendor_request_id': changeVendorRequestId};
    var result = db.executeProcedure(GET_CHANGE_VENDOR_REQUEST_MESSAGE, parameters);
    return db.extractArray(result.out_result);
}

//Get message of Inquiry
function getInquiryMessage(inquiryId) {
    var parameters = {'in_inquiry_id': inquiryId};
    var result = db.executeProcedure(GET_INQUIRY_MESSAGE, parameters);
    return db.extractArray(result.out_result);
}

//Get message of Request
function getRequestMessage(requestId) {
    var parameters = {'in_request_id': requestId};
    var result = db.executeProcedure(GET_REQUEST_MESSAGE_BY_REQUEST_ID, parameters);
    return db.extractArray(result.out_result);
}
/** ***********END GET*************** */

/** ***********GET MANUAL*************** */
//Get message of Vendor inquiry manual
function getVendorInquiryMessageManual(vendorInquiryId) {
  var parameters = {'in_vendor_inquiry_id': vendorInquiryId};
  var result = db.executeProcedureManual(GET_VENDOR_INQUIRY_MESSAGE, parameters);
  return db.extractArray(result.out_result);
}

//Get messages of vendor request manual
function getVendorRequestMessageManual(vendorRequestId) {
  var parameters = {'in_vendor_request_id': vendorRequestId};
  var result = db.executeProcedureManual(GET_VENDOR_REQUEST_MESSAGE, parameters);
  return db.extractArray(result.out_result);
}

//Get message of Extend Vendor Request manual
function getExtendVendorRequestMessageManual(extendVendorRequestId) {
  var parameters = {'in_extend_vendor_request_id': extendVendorRequestId};
  var result = db.executeProcedureManual(GET_EXTEND_VENDOR_REQUEST_MESSAGE, parameters);
  return db.extractArray(result.out_result);
}

//Get message of Change Vendor Request manual
function getChangeVendorRequestMessageManual(changeVendorRequestId) {
  var parameters = {'in_change_vendor_request_id': changeVendorRequestId};
  var result = db.executeProcedureManual(GET_CHANGE_VENDOR_REQUEST_MESSAGE, parameters);
  return db.extractArray(result.out_result);
}

//Get message of Inquiry manual
function getInquiryMessageManual(inquiryId) {
  var parameters = {'in_inquiry_id': inquiryId};
  var result = db.executeProcedureManual(GET_INQUIRY_MESSAGE, parameters);
  return db.extractArray(result.out_result);
}

//Get message of Request manual
function getRequestMessageManual(requestId) {
  var parameters = {'in_request_id': requestId};
  var result = db.executeProcedureManual(GET_REQUEST_MESSAGE_BY_REQUEST_ID, parameters);
  return db.extractArray(result.out_result);
}
/** ***********END GET MANUAL*************** */