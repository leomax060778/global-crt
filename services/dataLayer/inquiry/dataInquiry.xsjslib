$.import("mktgcartrequesttool.services.commonLib", "mapper");
var mapper = $.mktgcartrequesttool.services.commonLib.mapper;
var db = mapper.getdbHelper();
var ErrorLib = mapper.getErrors();
/** ***********END INCLUDE LIBRARIES*************** */

//STORE PROCEDURE LIST NAME
var INS_INQUIRY = "INS_INQUIRY";
var GET_ALL_INQUIRY = "GET_ALL_INQUIRY";
var GET_INQUIRY_LAST_ID = "GET_INQUIRY_LAST_ID";
var GET_INQUIRY_BY_ID = "GET_INQUIRY_BY_ID";
var GET_INQUIRY_STATUS_BY_INQUIRY_ID = "GET_INQUIRY_STATUS_BY_INQUIRY_ID";
var UPD_INQUIRY = "UPD_INQUIRY";
var DEL_INQUIRY = "DEL_INQUIRY";

//Insert new inquiry
function insertInquiry(objInquiry, userId) {
    var parameters = {};
    parameters.in_user_id = userId;
    parameters.in_topic_id = objInquiry.TOPIC_ID;
    parameters.in_inquiry_text = objInquiry.INQUIRY_TEXT;
    parameters.in_crt_type_id = 1;
    parameters.in_created_user_id = userId;
    parameters.out_result = '?';
    return db.executeScalar(INS_INQUIRY, parameters, 'out_result');
}

//Insert new inquiry
function insertInquiryManual(objInquiry, userId) {
    var parameters = {};
    parameters.in_user_id = userId;
    parameters.in_topic_id = objInquiry.TOPIC_ID;
    parameters.in_inquiry_text = objInquiry.INQUIRY_TEXT;
    parameters.in_crt_type_id = 1;
    parameters.in_created_user_id = userId;
    parameters.out_result = '?';
    return db.executeScalarManual(INS_INQUIRY, parameters, 'out_result');
}

//Get all inquiries
function getAllInquiry(permissionData, userId) {
    var parameters = {'in_user_id': userId};
    parameters.in_permission_id = permissionData.PERMISSION_ID;
    parameters.in_resource_id = permissionData.RESOURCE_ID;
    var result = db.executeProcedure(GET_ALL_INQUIRY, parameters);
    return db.extractArray(result.out_result);
}

//Get all inquiries
function getInquiryLastId() {
    var result = db.executeProcedure(GET_INQUIRY_LAST_ID, {});
    return db.extractArray(result.out_result)[0];
}

//Get inquiry by id
function getInquiryById(inquiryId, permissionData, userId){
    var parameters = {'in_inquiry_id': inquiryId};
    parameters.in_user_id = userId;
    parameters.in_permission_id = permissionData.PERMISSION_ID;
    parameters.in_resource_id = permissionData.RESOURCE_ID;
    var result = db.executeProcedure(GET_INQUIRY_BY_ID, parameters);
    var list = db.extractArray(result.out_result);
    if(list.length){
 	   return list[0];
    } else {
 	   	return {};
    }
}

//Get inquiry by id manually
function getInquiryByIdManual(inquiryId, permissionData, userId){
  var parameters = {'in_inquiry_id': inquiryId};
  parameters.in_user_id = userId;
  parameters.in_permission_id = permissionData.PERMISSION_ID;
  parameters.in_resource_id = permissionData.RESOURCE_ID;
  var result = db.executeProcedureManual(GET_INQUIRY_BY_ID, parameters);
  var list = db.extractArray(result.out_result);
  if(list.length){
	   return list[0];
  } else {
	   	return {};
  }
}

function getInquiryStatusByInquiryId(inquiryId){
	  var parameters = {'in_inquiry_id': inquiryId};
	  var result = db.executeProcedure(GET_INQUIRY_STATUS_BY_INQUIRY_ID, parameters);
	  var list = db.extractArray(result.out_result);
	  if(list.length){
		   return list[0];
	  } else {
		   	return {};
	  }
	}

//Update inquiry
function updateInquiry(objInquiry, userId) {
    var parameters = {};
    parameters.in_inquiry_id = objInquiry.INQUIRY_ID;
    parameters.in_topic_id = objInquiry.TOPIC_ID;
    parameters.in_modified_user_id = userId;
    parameters.out_result = '?';
    return db.executeScalar(UPD_INQUIRY, parameters, 'out_result');
}

//Update inquiry
function updateInquiryManual(objInquiry, userId) {
    var parameters = {};
    parameters.in_inquiry_id = objInquiry.INQUIRY_ID;
    parameters.in_topic_id = objInquiry.TOPIC_ID;
    parameters.in_modified_user_id = userId;
    parameters.out_result = '?';
    return db.executeScalarManual(UPD_INQUIRY, parameters, 'out_result');
}

//Delete inquiry
function deleteInquiry(objInquiry, userId) {
	var parameters = {};
	parameters.in_inquiry_id = objInquiry.INQUIRY_ID;
	parameters.in_modified_user_id = userId;
	parameters.out_result = '?';
	return db.executeScalar(DEL_INQUIRY, parameters, 'out_result');
}