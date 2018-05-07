$.import("mktgcartrequesttool.services.commonLib", "mapper");
var mapper = $.mktgcartrequesttool.services.commonLib.mapper;
var inquiryStatus = mapper.getDataInquiryStatus();
var inquiry = mapper.getInquiry();
var dataInquiry = mapper.getDataInquiry();
var businessAttachmentInquiry = mapper.getAttachmentInquiry();
var mail = mapper.getMail();
var businessUser = mapper.getUser();
var ErrorLib = mapper.getErrors();
var config = mapper.getDataConfig();
var userRole = mapper.getUserRole();

//CRT Inquiry email sending
var inquiryMailSend = mapper.getCrtInquiryMailSend();

/** ***********END INCLUDE LIBRARIES*************** */

var pathName = "CRT_INQUIRY";

//Access validation by Status
function validateAccess(inquiry_id){
	//In this case we validate against the Request Status only
	var crt_inquiry_status = dataInquiry.getInquiryStatusByInquiryId(inquiry_id);
	if(!crt_inquiry_status){
		return false;
	}
	
	return !(crt_inquiry_status.STATUS_NAME === 'Completed' || crt_inquiry_status.STATUS_NAME === 'Cancelled');
}

//Get inquiry by status
function getInquiryByStatus(statusId) {
	if (!statusId) {
        throw ErrorLib.getErrors().BadRequest("The Parameter statusId is not found", "", statusId);
    }
	return inquiryStatus.getInquiryByStatus(statusId);
}

//Get inquiry by status administrable
function getInquiryByStatusAdministrable(isAdministrable, userId) {
	if (!userId) {
        throw ErrorLib.getErrors().BadRequest("The Parameter userId is not found", "", userId);
    }
	if (!isAdministrable) {
      throw ErrorLib.getErrors().BadRequest("The Parameter isAdministrable is not found", "", isAdministrable);
  }
	var inquiry;
	inquiry = inquiryStatus.getInquiryByStatusAdministrable(isAdministrable, userId);
	inquiry = JSON.parse(JSON.stringify(inquiry));
	inquiry.forEach(function(elem){
    	if(elem.MESSAGE_READ > 0){
    		elem.SHOW_MESSAGE_READ = 1;
    	} else {
    		elem.SHOW_MESSAGE_READ = 0;
    	}
    });
	return inquiry;
}

function validatePermissionByUserRole(roleData, inquiry){
	return (roleData.ROLE_ID !== "2")? true : (roleData.USER_ID === inquiry.CREATED_USER_ID);
}

//Get inquiry by id
function getInquiryById(inquiryId, userId) {
	if (!inquiryId) {
        throw ErrorLib.getErrors().BadRequest("The Parameter inquiryId is not found", "", inquiryId);
    }
	
	if(!validateAccess(inquiryId)){
		throw ErrorLib.getErrors().BadRequest(
				"",
				"", '{"NOT_AVAILABLE_IN_PROCESSING": "CRT Inquiry"}');
	}
	
	var inquiry = inquiryStatus.getInquiryById(inquiryId);
    inquiry = JSON.parse(JSON.stringify(inquiry));
    
    var roleData = userRole.getUserRoleByUserId(userId);
	if(validatePermissionByUserRole(roleData[0], inquiry)){
        inquiry.ATTACHMENTS = businessAttachmentInquiry.getAttachmentInquiryById(inquiryId);
        return inquiry;
    }else{
		throw ErrorLib.getErrors().Forbidden("", "", "The user does not have permission for this CRT Inquiry.");
	}
    
}

//Update inquiry status
function updateInquiryStatus(objInquiry, userId) {
    if (validateUpdateInquiryStatus(objInquiry, userId)) {
    	if(!inquiry.existInquiry(objInquiry.INQUIRY_ID, userId)){
    		throw ErrorLib.getErrors().CustomError("", "", "The object INQUIRY_ID " + objInquiry.INQUIRY_ID + " does not exist");
    	} else {
    		return inquiryStatus.updateInquiryStatus(objInquiry, userId);
    	}
    }
}

//Update inquiry status manual
function updateInquiryStatusManual(objInquiry, userId) {
    if (validateUpdateInquiryStatus(objInquiry, userId)) {
    	if(!inquiry.existInquiry(objInquiry.INQUIRY_ID, userId)){
    		throw ErrorLib.getErrors().CustomError("", "", "The object INQUIRY_ID " + objInquiry.INQUIRY_ID + " does not exist");
    	} else {
    		return inquiryStatus.updateInquiryStatusManual(objInquiry, userId);
    	}
    }
}

//Validate update inquiry status
function validateUpdateInquiryStatus(objInquiry, userId) {
    if (!userId) {
        throw ErrorLib.getErrors().BadRequest("The Parameter userId is not found", "", userId);
    }
    var isValid = false;
    var errors = {};
    var BreakException = {};
    var keys = [
        'INQUIRY_ID',
        'STATUS_ID',
        'PREVIOUS_STATUS_ID'];

    if (!objInquiry) {
        throw ErrorLib.getErrors().CustomError("", "", "The object Vendor Inquiry is not found");
    }

    try {
        keys.forEach(function (key) {
            if (objInquiry[key] === null || objInquiry[key] === undefined) {
                errors[key] = null;
                throw BreakException;
            } else {
                // validate attribute type
                isValid = validateType(key, objInquiry[key]);
                if (!isValid) {
                    errors[key] = objInquiry[key];
                    throw BreakException;
                }
            }
        });
        isValid = true;
    } catch (e) {
        if (e !== BreakException) {
            throw ErrorLib.getErrors().CustomError("", "", e.toString());
        }
        else {
            throw ErrorLib.getErrors().CustomError("", "", JSON.stringify(errors));
        }
    }
    return isValid;
}

//Check data types
function validateType(key, value) {
    var valid = true;
    switch (key) {
        case 'INQUIRY_ID':
            valid = !isNaN(value) && value > 0;
            break;
        case 'STATUS_ID':
            valid = !isNaN(value) && value > 0;
            break;
        case 'PREVIOUS_STATUS_ID':
            valid = !isNaN(value) && value > 0;
            break;
    }
    return valid;
}

function sendMailByStatus(inquiryId, statusId, userId){
	var inquiryMailObj = {};
	inquiryMailObj.INQUIRY_ID = inquiryId;

	switch (Number(statusId)) {
	case 2:
		inquiryMailSend.sendReturnToRequestMail(inquiryMailObj.INQUIRY_ID, userId);
		break;
	case 3:
		inquiryMailSend.sendCompletedMail(inquiryMailObj, userId);
		break;
	case 4:
		inquiryMailSend.sendCancelledMail(inquiryMailObj, userId);
		break;
	}
}

function getUrlBase(){
	return config.getUrlBase();
}

function getEmailList(){
	return config.getEmailList();
}

function getPath(stringName){
	return config.getPath(stringName);
}

function getBasicData(stringPathName, additionalParam){
	return config.getBasicData(stringPathName, additionalParam);
}