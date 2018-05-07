$.import("mktgcartrequesttool.services.commonLib", "mapper");
var mapper = $.mktgcartrequesttool.services.commonLib.mapper;
var dataAttachmentInquiry = mapper.getDataAttachmentInquiry();
var dataAttachment = mapper.getDataAttachment();
var ErrorLib = mapper.getErrors();
/** ***********END INCLUDE LIBRARIES*************** */

//Insert attachment inquiry
function insertAttachmentInquiry(objAttachmentInquiry, userId) {
    if (validateInsertAttachmentInquiry(objAttachmentInquiry, userId)) {
        return dataAttachmentInquiry.insertAttachmentInquiry(objAttachmentInquiry, userId);
    }
}

//Insert attachment inquiry Manually
function insertAttachmentInquiryManual(objAttachmentInquiry, userId) {
    if (validateInsertAttachmentInquiry(objAttachmentInquiry, userId)) {
        return dataAttachmentInquiry.insertAttachmentInquiryManual(objAttachmentInquiry, userId);
    }
}

//Get attachment inquiry by id
function getAttachmentInquiryById(inquiryId) {
    var result = dataAttachmentInquiry.getAttachmentInquiryById(inquiryId);
    result = JSON.parse(JSON.stringify(result));
    result.forEach(function (elem){
    	elem.ATTACHMENT_SIZE = (Number(elem.ATTACHMENT_SIZE) / 1048576).toFixed(2) + " MB";
    });
	return result;
}

//Get attachment inquiry by id manually
function getAttachmentInquiryByIdManual(inquiryId) {
  var result = dataAttachmentInquiry.getAttachmentInquiryByIdManual(inquiryId);
  result = JSON.parse(JSON.stringify(result));
  result.forEach(function (elem){
  	elem.ATTACHMENT_SIZE = (Number(elem.ATTACHMENT_SIZE) / 1048576).toFixed(2) + " MB";
  });
  return result;
}

//Delete attachment inquiry
function deleteAttachmentInquiry(objAttachmentInquiry, userId) {
    if (!objAttachmentInquiry.ATTACHMENT_ID) {
        throw ErrorLib.getErrors().CustomError("", "attachmentInquiryService/handleDelete/deleteAttachmentInquiry", "The ATTACHMENT_ID is not found");
    }
    if (!existAttachmentInquiry(objAttachmentInquiry.ATTACHMENT_ID)) {
        throw ErrorLib.getErrors().CustomError("", "attachmentInquiryService/handleDelete/deleteAttachmentInquiry", "The object ATTACHMENT_ID " + objAttachmentInquiry.ATTACHMENT_ID + " does not exist");
    } else {
        return dataAttachmentInquiry.deleteAttachmentInquiry(objAttachmentInquiry, userId);
    }
}

//Delete attachment inquiry
function deleteAttachmentInquiryManual(objAttachmentInquiry, userId) {
    if (!objAttachmentInquiry.ATTACHMENT_ID) {
        throw ErrorLib.getErrors().CustomError("", "attachmentInquiryService/handleDelete/deleteAttachmentInquiry", "The ATTACHMENT_ID is not found");
    }
    if (!existAttachmentInquiry(objAttachmentInquiry.ATTACHMENT_ID)) {
        throw ErrorLib.getErrors().CustomError("", "attachmentInquiryService/handleDelete/deleteAttachmentInquiry", "The object ATTACHMENT_ID " + objAttachmentInquiry.ATTACHMENT_ID + " does not exist");
    } else {
        return dataAttachmentInquiry.deleteAttachmentInquiryManual(objAttachmentInquiry, userId);
    }
}

//Delete Master attachment-Inquiry
function deleteAttachmentInquiryConectionManual(attachment_id, inquiry_id, userId) {
	if (!attachment_id) {
		throw ErrorLib.getErrors().CustomError("",
				"attachmentService/handleDelete/deleteAttachment",
				"The ATTACHMENT_ID is not found");
	}
	if (!inquiry_id) {
		throw ErrorLib.getErrors().CustomError("",
				"attachmentService/handleDelete/deleteAttachment",
				"The INQUIRY_ID is not found");
	}
	var result = dataAttachmentInquiry.deleteAttachmentInquiryConectionManual(attachment_id, inquiry_id, userId);
	return result;
	
}

//Check if the attachment exists
function existAttachmentInquiry(attachmentId) {
    return Object.keys(dataAttachment.getManualAttachment(attachmentId)).length > 0;
}

//Check if the inquiry exists
function existInquiry(inquiryId) {
    return getInquiryByAttachmentIdManual(inquiryId).length > 0;
}

//Validate insert inquiry
function validateInsertAttachmentInquiry(objAttachmentInquiry, userId) {
    if (!userId) {
        throw ErrorLib.getErrors().BadRequest("The Parameter userId is not found", "inquiryService/handlePut/insertAttachmentInquiry", userId);
    }
    var isValid = false;
    var errors = {};
    var BreakException = {};
    var keys = [ 'INQUIRY_ID',
        'ATTACHMENT_ID'];

    if (!objAttachmentInquiry) {
        throw ErrorLib.getErrors().CustomError("", "inquiryService/handlePost/insertAttachmentInquiry", "The object  AttachmentInquiry is not found");
    }

    try {
        keys.forEach(function (key) {
            if (objAttachmentInquiry[key] === null || objAttachmentInquiry[key] === undefined) {
                errors[key] = null;
                throw BreakException;
            } else {
                // validate attribute type
                isValid = validateType(key, objAttachmentInquiry[key]);
                if (!isValid) {
                    errors[key] = objAttachmentInquiry[key];
                    throw BreakException;
                }
            }
        });
        isValid = true;
    } catch (e) {
        if (e !== BreakException) {
            throw ErrorLib.getErrors().CustomError("", "inquiryService/handlePost/insertAttachmentInquiry", e.toString());
        }
        else {
            throw ErrorLib.getErrors().CustomError("", "inquiryService/handlePost/insertAttachmentInquiry", JSON.stringify(errors));
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
        case 'ATTACHMENT_ID':
            valid = !isNaN(value) && value > 0;
            break;
    }
    return valid;
}