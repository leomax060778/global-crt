$.import("mktgcartrequesttool.services.commonLib", "mapper");
var mapper = $.mktgcartrequesttool.services.commonLib.mapper;
var dbHelper = mapper.getdbHelper();
var businessSpecialRequest = mapper.getSpecialRequest();
var businessNonSap = mapper.getNonSapVendor();
var businessPOService = mapper.getPurchaseOrderService();
var businessChangedColumn = mapper.getRequestChangedColumn();
var dataRequest = mapper.getDataRequest();
var dataAttachmentR = mapper.getDataAttachmentRequest();
var bussinesAttachment = mapper.getAttachment();
var dataNoteReq = mapper.getDataNoteRequest();
var dataCatalog = mapper.getDataCatalog();
var dataCurrency = mapper.getDataCurrency();
var dataRService = mapper.getDataRequestService();
var dataRUpdateService = mapper.getDataNewCartRequestService();
var dataService = mapper.getDataService();
var dataUpdateService = mapper.getDataService();
var dataSpecialRequest = mapper.getDataSpecialRequest();
var dataRCostObject = mapper.getDataShoppingCartHistoryRequestCostObject();
var dataUpdateCostObject = mapper.getDataRequestCostObject();
var dataRRiskFunded = mapper.getDataRequestRiskFunded();
var dataNewCartRiskFunded = mapper.getDataNewCartRequestRiskFunded();
var dataNewCartRequest = mapper.getDataNewCartRequest();
var dataAttachment = mapper.getDataAttachment();
var dataNoteRequest = mapper.getDataShoppingNoteRequest();
var dataRequestDataProtection = mapper.getDataRequestDataProtection();
var dataRDataProtection = mapper.getDataRequestDataProtection();
var dataUserRole = mapper.getDataUserRole();
var dataRolePermission = mapper.getDataRolePermission();

var ErrorLib = mapper.getErrors();
var status = mapper.getCartRequest();
var utilLib = mapper.getUtil();

var requestMail = mapper.getCartRequestMail();
var mailSend = mapper.getCartRequestMailSend();

var config = mapper.getDataConfig();
var mail = mapper.getMail();
var userRole = mapper.getUserRole();

var statusMap = {
    'TO_BE_CHECKED': 1,
    'CHECKED': 2,
    'IN_PROCESS': 3,
    'RETURN_TO_REQUESTER': 4,
    'APPROVED': 5,
    'CANCELLED': 6
};
var resourceMap = {'SHOPPING_CART_HISTORY': 2};
var permissionMap = {'CREATE_EDIT': 10};

var pathName = "CART_REQUEST";

/* VALIDATION KEYS FOR INSERTS & UPDATES */

var RequestServiceKeys = ["REQUEST_SERVICE_ID", "REQUEST_ID", "CURRENCY_ID", "CART_AMOUNT", "TOTAL_BUDGET"];
var nonSapVendorKeys = ["ENTITY_ID", "CONTACT_NAME", "CONTACT_PHONE", "CONTACT_EMAIL"];
var RequestServiceOptKeys = ["PURCHASE_ORDER_AMOUNT", "PURCHASE_ORDER_TO_UPLIFT", "LINE_TO_UPLIFT", "SAP_BUYER_NAME"];
var CostObjectKeys = ["REQUEST_COST_OBJECT_ID", "REQUEST_ID", "ENTITY_ID", "COST_OBJECT_TYPE_ID", "COST_VALUE"];
var ServiceKeys = ["REQUEST_ID", "START_DATE", "END_DATE", "DESCRIPTION", "AMOUNT", "CURRENCY_ID", "BUDGET", "ITEM"];
var dpAnswersKeys = ["REQUEST_ID", "QUESTION_ID", "OPTION_ID"];
var noteKeys = ["NOTE_TYPE_ID"];
var attachmentKeys = ["REQUEST_ID", "ATTACHMENT_ID"];
var riskFundedKeys = ["REQUEST_ID", "AMOUNT", "CURRENCY_ID", "AMOUNT_KEUR"];

function validateAccess(request_id, user_id) {
    var user_role = dataUserRole.getUserRoleByUserId(user_id);
    var request_status = dataRequest.getRequestStatusByRequestId(request_id);
    var rolePermission = dataRolePermission.getPermissionByRoleAndResourceAndPermission(Number(user_role[0].ROLE_ID), resourceMap.SHOPPING_CART_HISTORY, permissionMap.CREATE_EDIT);

    if (Number(rolePermission[0].PERMISSION_LEVEL) !== 2) {
        return !(request_status.STATUS_NAME === 'Approved' || request_status.STATUS_NAME === 'Cancelled');
    } else {
        return true;
    }
}

//Check data types
function validateType(key, value) {
    var valid = true;
    switch (key) {
        case 'REQUEST_ID':
            valid = !isNaN(value) && value > 0;
            break;
        case 'SERVICE_ID':
            valid = !isNaN(value) && value > 0;
            break;
        case 'VENDOR_ADDITIONAL_INFORMATION_ID':
            valid = !isNaN(value) && value > 0;
            break;
        case 'NON_SAP_VENDOR_ID':
            valid = !isNaN(value) && value > 0;
            break;
        case 'NOTE_TYPE_ID':
            valid = !isNaN(value) && value > 0;
            break;
        case 'REQUEST_RISK_FUNDED_ID':
            valid = !isNaN(value) && value > 0;
            break;
        case 'ATTACHMENT_ID':
            valid = !isNaN(value) && value > 0;
            break;
        case 'ENTITY_ID':
            valid = !isNaN(value) && value > 0;
            break;
        case 'CURRENCY_ID':
            valid = !isNaN(value) && value > 0;
            break;
        case 'START_DATE':
            valid = value.length > 0;
            break;
        case 'END_DATE':
            valid = value.length > 0;
            break;
        case 'DESCRIPTION':
            valid = value.length > 0 && value.length <= 255;
            break;
        case 'AMOUNT':
            valid = !isNaN(value) && value >= 0;
            break;
        case 'BUDGET':
            valid = !isNaN(value) && value >= 0;
            break;
        case 'AMOUNT_KEUR':
            valid = !isNaN(value) && value >= 0;
            break;
        case 'ITEM':
            valid = !isNaN(value);
            break;
        case 'NAME':
            valid = value.length > 0 && value.length <= 255;
            break;
        case 'CONTACT_NAME':
            valid = value.length > 0 && value.length <= 255;
            break;
        case 'CONTACT_PHONE':
            valid = value.length > 0 && value.length <= 255;
            break;
        case 'CONTACT_EMAIL':
            valid = value.length > 0 && value.length <= 255;
            break;
    }
    return valid;
}


/* ! VALIDATION KEYS FOR UPDATES */

function validatePermissionByUserRole(roleData, resRequest) {
    return (roleData.ROLE_ID !== "2") ? true : (roleData.USER_ID === resRequest.REQUESTER_ID);
}

/*----- REQUEST SERVICE -----*/

function getRequestServiceByRequestId(request_id, user_id) {
    if (!request_id) {
        throw ErrorLib.getErrors().BadRequest(
            "The Parameter request_id is not found",
            "requestService/handleGet/getRequestServiceById", request_id);
    }
    return dataRService.getRequestServiceByRequestId(request_id);
}

function getAllRequestService(user_id) {
    if (!user_id) {
        throw ErrorLib.getErrors().BadRequest(
            "The Parameter user_id is not found",
            "requestService/handleGet/getAllRequestService", user_id);
    }
    return dataRService.getAllRequestService();
}


/*----- SERVICES -----*/

function getServicesByRequestId(request_id, user_id) {
    if (!request_id) {
        throw ErrorLib.getErrors().BadRequest(
            "The Parameter request_id is not found",
            "requestService/handleGet/getServicesByRequestId", request_id);
    }
    return dataService.getServiceByRequestId(request_id);
}

function getServiceById(serviceId, userId) {
    if (!serviceId) {
        throw ErrorLib.getErrors().BadRequest(
            "The Parameter serviceId is not found",
            "requestService/handleGet/getServiceById", serviceId);
    }
    return dataService.getServiceById(serviceId);
}

function getSpecialRequestByRequestId(request_id, user_id) {
    if (!request_id) {
        throw ErrorLib.getErrors().BadRequest(
            "The Parameter request_id is not found",
            "requestService/handleGet/getSpecialRequestByRequestId", request_id);
    }
    return dataSpecialRequest.getSpecialRequestByRequestId(request_id);
}


/*----- REQUEST COST OBJECT -----*/

function getCostObjectByRequestId(request_id, user_id) {
    if (!request_id) {
        throw ErrorLib.getErrors().BadRequest(
            "The Parameter request_id is not found",
            "requestService/handleGet/getCostObjectById", request_id);
    }
    return dataRCostObject.getCostObjectByRequestId(request_id);
}

function getAllCostObject(user_id) {
    return dataRCostObject.getAllCostObject();
}

function getAllCostObjectType(user_id) {
    return dataRCostObject.getAllCostObjectType();
}

/*----- REQUEST RISK FUNDED -----*/

function getRiskFundedByRequestId(request_id, user_id) {
    if (!request_id) {
        throw ErrorLib.getErrors().BadRequest(
            "The Parameter request_id is not found",
            "requestService/handleGet/getRiskFundedById", request_id);
    }
    return dataRRiskFunded.getRiskFundedByRequestId(request_id);
}

function getAllRiskFunded(user_id) {
    return dataRRiskFunded.getAllRiskFunded();
}

function getCatalogByParentId(catalog_id) {
    return dataCatalog.getCatalogByIdManual(catalog_id);
}

function getNoteRequestByRequestId(requestId) {
    if (!requestId) {
        throw ErrorLib.getErrors().BadRequest("The Parameter requestId is not found", "cartRequestService/handleGet/getNoteRequestByRequestId", requestId);
    }
    var result = [];
    var objRequest = {};
    var noteText;
    var startPosition;
    var requestNoteLength;
    var i;
    var splitNumber;
    try {
        result = dataNoteRequest.getNoteRequestByRequestId(requestId);
        result = JSON.parse(JSON.stringify(result));
        result.forEach(function (elem) {
            noteText = "";
            startPosition = 1;
            requestNoteLength = 5000;
            i = 0;
            splitNumber = 0;

            //Join message content
            splitNumber = elem.NOTE_TEXT_LENGTH / requestNoteLength;
            for (i = 0; i < splitNumber; i++) {
                noteText = noteText.concat(dataNoteRequest.getNoteRequestContentManual(elem.REQUEST_ID, elem.NOTE_REQUEST_ID, startPosition, requestNoteLength).NOTE_TEXT);
                startPosition = startPosition + requestNoteLength;
            }
            elem.NOTE_TEXT = noteText;
        });
    } catch (e) {
        dbHelper.rollback();
        throw ErrorLib.getErrors().CustomError("", "cartRequestService/handleGet/getNoteRequestByRequestId", e.toString());
    }
    finally {
        dbHelper.commit();
        dbHelper.closeConnection();
    }
    return result;
}

function completeRequest(item, user_id) {
    if (item.MATERIAL_PARENT_ID) {
        var catalog;
        var result = {};
        var catalogs = [];
        item.CATALOGS = dataCatalog.getManualCatalogById(item.MATERIAL_PARENT_ID);

        catalog = item.CATALOGS[0].CATALOG_PARENT_ID;
        if (catalog) {
            while (catalog != "0") {
                result = getCatalogByParentId(catalog);
                catalog = result[0].CATALOG_PARENT_ID;
                (item.CATALOGS).push(result[0]);
                if (!catalog) {
                    catalog = "0";
                }
            }
        }

    }

    item.SERVICES = getServicesByRequestId(item.REQUEST_ID, user_id);
    item.REQUEST_SERVICE = getRequestServiceByRequestId(item.REQUEST_ID, user_id);
    item.SPECIAL_REQUEST = getSpecialRequestByRequestId(item.REQUEST_ID, user_id);
    item.COST_OBJECT = getCostObjectByRequestId(item.REQUEST_ID, user_id);
    item.RISK_FUNDED = getRiskFundedByRequestId(item.REQUEST_ID, user_id);
    item.NOTES = getNoteRequestByRequestId(item.REQUEST_ID);
    item.DATA_PROTECTION = getRequestDataProtection(item.REQUEST_ID, user_id);
    item.ATTACHMENTS = getAttachmentRequest(item.REQUEST_ID, user_id);

}

/*----- REQUEST -----*/

function getAllRequest(userId) {
    if (!userId) {
        throw ErrorLib.getErrors().BadRequest("The Parameter userId is not found", "requestMessageService/handleGet/getRequestMessage", userId);
    }
    var request = [];
    try {
        request = dataRequest.getAllRequest(userId);
        request = JSON.parse(JSON.stringify(request));

        var complete_request = mergeData(request.requests, request.services, request.attachments, userId);

        dbHelper.commit();
    } catch (e) {
        dbHelper.rollback();
        throw ErrorLib.getErrors().CustomError("", e.toString(),
            "getAllRequest");
    } finally {
        dbHelper.closeConnection();
    }

    return complete_request;
}

function mergeData(requests, services, specialRequest, attachments, userId) {

    var attachment_request = {};
    var service_request = {};
    var special_request = {};

    var loop_length = (attachments.length > services.length) ? attachments.length : services.length;
    loop_length = (loop_length > specialRequest.length) ? loop_length : specialRequest.length;

    for (var i = 0; i < loop_length; i++) {
        if (services[i]) {
            if (!service_request[services[i].REQUEST_ID]) {
                service_request[services[i].REQUEST_ID] = [];
            }
            service_request[services[i].REQUEST_ID].push(services[i]);
        }
        if (attachments[i]) {
            if (!attachment_request[attachments[i].REQUEST_ID]) {
                attachment_request[attachments[i].REQUEST_ID] = [];
            }
            attachments[i].ATTACHMENT_SIZE = (parseFloat(Number(attachments[i].ATTACHMENT_SIZE) / 1048576).toFixed(2)) + " MB";
            attachment_request[attachments[i].REQUEST_ID].push(attachments[i]);
        }
        if (specialRequest[i]) {
            if (!special_request[specialRequest[i].REQUEST_ID]) {
                special_request[specialRequest[i].REQUEST_ID] = [];
            }
            special_request[specialRequest[i].REQUEST_ID].push(specialRequest[i]);
        }
    }

    requests.forEach(function (request) {
        request.SERVICES = service_request[request.REQUEST_ID] || [];
        request.ATTACHMENTS = attachment_request[request.REQUEST_ID] || [];
        request.SPECIAL_REQUEST = special_request[request.REQUEST_ID] || [];
        request.FORMATED_REQUEST_ID = request.ISO + '' + request.REQUEST_ID;
        request.SHOW_MESSAGE_READ = (request.MESSAGE_READ > 0) ? 1 : 0;
    });

    return requests;

}

function getRequestLastId() {
    var newId = dataRequest.getRequestLastId();
    var request;
    if (newId) {
        request = newId;
    } else {
        request = {"CR_ID": "CR1"};
    }
    return request;
}

function getRequestByFilters(objFilters, userId) {
    if (!objFilters) {
        throw ErrorLib.getErrors().BadRequest(
            "The Object Filters is not found",
            "requestService/handleGet/getRequestByFilters",
            getRequestByFilters);
    }
    try {
        var filtersArray = ["GOODS_RECIPIENT", "BUDGET_YEAR_ID", "TEAM_ID", "REQUEST_DATE_FROM",
            "REQUEST_DATE_TO", "USER_ID", "USER_ID", "VENDOR_ADDITIONAL_INFORMATION_ID",
            "STATUS_ID"];
        validateFilterParameters(objFilters, filtersArray);
        if (!validateDateStringFormat(objFilters["REQUEST_DATE_FROM"])
            || !validateDateStringFormat(objFilters["REQUEST_DATE_TO"])) {
            throw ErrorLib.getErrors().CustomError("",
                "Invalid date format (YYYY-MM-DD)", "getRequestByFilters");
        }

        var permissionData = {
            RESOURCE_ID: resourceMap.SHOPPING_CART_HISTORY,
            PERMISSION_ID: permissionMap.CREATE_EDIT
        };

        var request = dataRequest.getRequestByFilters(objFilters, permissionData, userId);
        request = JSON.parse(JSON.stringify(request));

        var complete_request = mergeData(request.requests, request.services, request.special_request, request.attachments, userId);
        dbHelper.commit();
    } catch (e) {
        dbHelper.rollback();
        throw ErrorLib.getErrors().CustomError("", e.toString(),
            "getRequestByFilters");
    } finally {
        dbHelper.closeConnection();
    }

    return complete_request;
}

function getRequestById(request_id, userId, edition_mode) {
    if (!request_id) {
        throw ErrorLib.getErrors().BadRequest(
            "The Parameter request_id is not found",
            "requestService/handleGet/getRequestById", request_id);
    }
    //Validates the status and the user role
    if (edition_mode && !validateAccess(request_id, userId)) {
        throw ErrorLib.getErrors().BadRequest(
            "Unauthorized request.",
            "requestService/handleGet/getRequestById", '{"EDIT_PERMISSION_ERROR": "cartRequest"}');
    }
    var lastId = getRequestLastId();
    var roleData = userRole.getUserRoleByUserId(userId);
    var request = dataRequest.getRequestByIdManual(request_id, userId);
    if (!Object.keys(request).length && Number(request_id) <= Number(lastId)) {
    	throw ErrorLib.getErrors().BadRequest(
                "Unauthorized request.",
                "requestService/handleGet/getRequestById", '{"VIEW_PERMISSION_ERROR": "cartRequest"}');
    }
    if (validatePermissionByUserRole(roleData[0], request)) {

        try {
            var req = {};
            if (request.length > 0) {
                req = JSON.parse(JSON.stringify(request));
                completeRequest(req, userId);
            }
            dbHelper.commit();
        } catch (e) {
            dbHelper.rollback();
            throw ErrorLib.getErrors().CustomError("", e.toString(),
                "getRequestById");
        } finally {
            dbHelper.closeConnection();
        }

        return req;
    } else {
        throw ErrorLib.getErrors().BadRequest("", "requestService/handleGet/getRequestById", '{"VIEW_PERMISSION_ERROR": "cartRequest"}');
    }
}

//----------------------- UPDATE NEW CART REQUEST -----------------------//

//DATA PROTECTION
function updateDataProtectionAnswer(item, user_id) {
    dataRDataProtection.updateManualDataProtectionAnswer(item, user_id);
}

//NOTE REQUEST
function insertManualNoteRequest(objNoteReq, request_id, user_id) {
    objNoteReq.REQUEST_ID = request_id;
    var noteId = 0;
    var serviceUrl = "requestService/handleUpdate/updateRequest/insertManualNoteRequest";
    if (utilLib.validateObjectAttributes(objNoteReq, user_id, noteKeys, serviceUrl, validateType)) {
        noteId = dataNoteReq.insertNoteRequest(objNoteReq, user_id);
    }
    return noteId;
}

//ATTACHMENT REQUEST
function insertAttachmentRequest(attachment, in_request_id, userId) {
    attachment.REQUEST_ID = in_request_id;
    var serviceUrl = "requestService/handleUpdate/updateRequest/insertAttachmentRequest";

    if (utilLib.validateObjectAttributes(attachment, userId, attachmentKeys, serviceUrl, validateType)) {
        return dataAttachmentR.insertAttachmentRequest(attachment, userId);
    }
}

function deleteAttachment(attachment, in_request_id, userId) {
    attachment.REQUEST_ID = in_request_id;
    if (bussinesAttachment.deleteManualAttachment(attachment, userId)) {
        bussinesAttachment.deleteManualAttachmentRequestConection(attachment.ATTACHMENT_ID, in_request_id, userId);
    }
}

//Delete Attachment from Shopping Cart History section
function deleteAttachmentOnly(reqBody, userId) {
    return bussinesAttachment.deleteAttachment(reqBody, userId);
}


function updateAttachments(original_attachments, newAttachments, request_id, user_id) {

    var original_attachments_local = original_attachments;
    var originalAttachmentsToUpdate = newAttachments;

    var insertOriginalAttachments = [];
    var deleteOriginalAttachments = [];

    //DELETE
    original_attachments_local.forEach(function (o_attachment) {
        var result = true;
        var o_attachment_id = o_attachment.ATTACHMENT_ID;
        if (typeof o_attachment_id === 'string') {
            o_attachment_id = Number(o_attachment_id);
        }
        originalAttachmentsToUpdate.forEach(function (updateAttach) {
            updateAttach.ATTACHMENT_ID = Number(updateAttach.ATTACHMENT_ID);
            if (o_attachment_id === updateAttach.ATTACHMENT_ID) {
                result = false;
            }
        });
        if (result) {
            deleteOriginalAttachments.push(o_attachment);
        }
    });

    //INSERT
    originalAttachmentsToUpdate.forEach(function (newAttach) {
        var result = true;
        newAttach.ATTACHMENT_ID = Number(newAttach.ATTACHMENT_ID);
        original_attachments_local.forEach(function (attachment) {
            var o_attachment_id = attachment.ATTACHMENT_ID;
            if (typeof o_attachment_id === 'string') {
                o_attachment_id = Number(o_attachment_id);
            }
            if (newAttach.ATTACHMENT_ID === o_attachment_id) {
                result = false;
            }
        });
        if (result) {
            insertOriginalAttachments.push(newAttach);
        }
    });

    //ACTIONS
    if (insertOriginalAttachments.length > 0) {
        insertOriginalAttachments.forEach(function (attachment) {
            insertAttachmentRequest(attachment, request_id, user_id);
            insertNewAttachmentChangedColumn(attachment, request_id, user_id);
        });
    }
    if (deleteOriginalAttachments.length > 0) {
        deleteOriginalAttachments.forEach(function (attachment) {
            deleteAttachment(attachment, request_id, user_id);
        });
    }
    return 1;
}

function deleteManualNoteRequest(note_request_id, user_id) {
    dataNoteReq.deleteManualNoteRequestById(note_request_id, user_id);
}


function updateManualNoteRequest(objNoteReq, user_id) {
    dataNoteReq.updateManualNoteRequest(objNoteReq, user_id);
}

function deleteNotes(notes, user_id) {
    notes.forEach(function (note) {
        deleteManualNoteRequest(note.NOTE_REQUEST_ID, user_id);
    });
}


//SPECIAL REQUEST
function updateSpecialRequest(special_request, user_id) {
    return businessSpecialRequest.updateSpecialRequest(special_request, user_id);
}

function insertSpecialRequest(specialRequest, requestId, userId) {
    specialRequest.REQUEST_ID = requestId;
    return businessSpecialRequest.insertSpecialRequest(specialRequest, userId);
}

function deleteSpecialRequest(special_request_id, user_id) {
    return businessSpecialRequest.deleteSpecialRequest(special_request_id, user_id);
}

//RISK FUNDED
function updateRiskFunded(risk_funded, user_id) {
    var serviceUrl = "requestService/handleUpdate/updateRequest/updateRiskFunded";
    var updateRiskFundedKeys = riskFundedKeys;
    updateRiskFundedKeys.push("REQUEST_RISK_FUNDED_ID");
    if (utilLib.validateObjectAttributes(risk_funded, user_id, updateRiskFundedKeys, serviceUrl, validateType)) {
        return dataRRiskFunded.updateManualRiskFunded(risk_funded, user_id);
    }

}

function deleteRiskFunded(risk_funded, user_id) {
    dataNewCartRiskFunded.deleteManualRiskFunded(risk_funded.REQUEST_RISK_FUNDED_ID, user_id);
}

function insertRiskFunded(reqBody, user_id) {
    var serviceUrl = "requestService/handleUpdate/updateRequest/insertRiskFunded";
    if (utilLib.validateObjectAttributes(reqBody, user_id, riskFundedKeys, serviceUrl, validateType)) {
    	var riskFunded = {COLUMN_NAME: "RISK_FUNDED_AMOUNT", DISPLAY_NAME: "Risk Funded Amount", COLUMN_CHANGED: 1, REQUEST_ID: reqBody.REQUEST_ID};
    	businessChangedColumn.insertRequestChangedColumn(riskFunded, user_id);
        return dataNewCartRiskFunded.insertRiskFunded(reqBody, user_id);
    }
}

//COST OBJECT
function updateCostObject(cost_object, user_id) {
    return dataUpdateCostObject.updateManualCostObject(cost_object, user_id);
}

//NON-SAP VENDOR
function insertManualNonSapVendor(non_sap_vendor, user_id) {
    var serviceUrl = "requestService/handleUpdate/updateRequest/insertManualNonSapVendor";
    if (utilLib.validateObjectAttributes(non_sap_vendor, user_id, nonSapVendorKeys, serviceUrl, validateType)) {
        return businessNonSap.insertManualNonSapVendor(non_sap_vendor, user_id);
    }
}

function updateManualNonSapVendor(non_sap_vendor, user_id) {
    var serviceUrl = "requestService/handleUpdate/updateRequest/updateManualNonSapVendor";
    var updateNonSapVendorKeys = nonSapVendorKeys;
    updateNonSapVendorKeys.push("NON_SAP_VENDOR_ID");
    if (utilLib.validateObjectAttributes(non_sap_vendor, user_id, updateNonSapVendorKeys, serviceUrl, validateType)) {
        return businessNonSap.updateManualNonSapVendor(non_sap_vendor, user_id);
    }
}

function deleteManualNonSapVendor(nonSapVendorId, userId) {
    nonSapVendorId = Number(nonSapVendorId);

    return businessNonSap.deleteManualNonSapVendor(nonSapVendorId, userId);
}

//NOTES
function updateNotes(original_notes, notes, request_id, userId) {
    var original_notes_local = original_notes;
    var updateOriginalNotes = notes;
    var insertOriginalNotes = [];
    var updateNotesArray = [];
    var deleteOriginalNotes = [];

    if (original_notes_local.length > 0) {
        //DELETE
        original_notes_local.forEach(function (o_note) {
            var result = true;
            var o_note_id = o_note.NOTE_REQUEST_ID;
            if (typeof o_note_id === 'string') {
                o_note_id = Number(o_note_id);
            }
            updateOriginalNotes.forEach(function (updateNote) {
                updateNote.NOTE_REQUEST_ID = Number(updateNote.NOTE_REQUEST_ID);
                if (updateNote.NOTE_TEXT !== null && (updateNote.NOTE_TEXT).length > 0 && o_note_id === updateNote.NOTE_REQUEST_ID) {

                    result = false;
                }
            });
            if (result) {
                deleteOriginalNotes.push(o_note_id);
            }
        });

        //UPDATE
        updateOriginalNotes.forEach(function (newNote) {
            var result = false;
            newNote.NOTE_REQUEST_ID = Number(newNote.NOTE_REQUEST_ID);
            original_notes_local.forEach(function (note) {
                var o_note_id = note.NOTE_REQUEST_ID;
                if (typeof o_note_id === 'string') {
                    o_note_id = Number(o_note_id);
                }
                if (newNote.NOTE_REQUEST_ID !== undefined && newNote.NOTE_TEXT !== null && (newNote.NOTE_TEXT).length > 0 && newNote.NOTE_REQUEST_ID === o_note_id) {
                    result = true;
                }
            });
            if (result) {
                updateNotesArray.push(newNote);
            }
        });

        //INSERT
        updateOriginalNotes.forEach(function (newNote) {
            var result = true;
            newNote.NOTE_REQUEST_ID = Number(newNote.NOTE_REQUEST_ID);
            original_notes_local.forEach(function (note) {
                var o_note_id = note.NOTE_REQUEST_ID;
                if (typeof o_note_id === 'string') {
                    o_note_id = Number(o_note_id);
                }
                if (newNote.NOTE_TEXT === null || (newNote.NOTE_TEXT).length === 0 || newNote.NOTE_REQUEST_ID === o_note_id) {
                    result = false;
                }
            });
            if (result) {
                insertOriginalNotes.push(newNote);
            }
        });
    }
    else {
        updateOriginalNotes.forEach(function (newNote) {
            if (newNote.NOTE_TEXT !== null) {
                insertOriginalNotes.push(newNote);
            }
        });
    }

    insertOriginalNotes.forEach(function (insertNote) {
        var noteId = insertManualNoteRequest(insertNote, request_id, userId);
        if (noteId > 0) {
            insertNote.NOTE_REQUEST_ID = noteId;
            insertNewNoteChangedColumn(insertNote, request_id, userId)
        }
    });
    updateNotesArray.forEach(function (note) {
        updateManualNoteRequest(note, userId);
    });
    deleteOriginalNotes.forEach(function (deleteNote) {
        deleteManualNoteRequest(deleteNote, userId);
    });

}

//SERVICES

function updateRequestService(reqBody, user_id) {
    dataRUpdateService.updateManualRequestService(reqBody, user_id);
}

function insertService(reqBody, user_id) {
    var serviceUrl = "requestService/handleUpdate/updateRequest/insertService";
    if (utilLib.validateObjectAttributes(reqBody, user_id, ServiceKeys, serviceUrl, validateType)) {
        return dataService.insertService(reqBody, user_id);
    }
}

//Return the total amount to be used in Request Service
function insertServices(services, requestId, conversion_rate, userId) {
    var amount = 0;
    (services).forEach(function (itemService) {
        itemService.REQUEST_ID = requestId;
        amount += Number(itemService.AMOUNT);
        itemService.BUDGET = (itemService.AMOUNT / conversion_rate) / 1000;
        itemService.BUDGET = itemService.BUDGET.toFixed(2);
        insertService(itemService, userId);
    });
    return amount;
}

//Return the total amount to be used in Request Service
function insertEditServices(services, requestId, userId) {
    var columnsChanged = [
        {COLUMN_NAME: "ITEM", DISPLAY_NAME: "Item #"},
        {COLUMN_NAME: "START_DATE", DISPLAY_NAME: "Start date"},
        {COLUMN_NAME: "END_DATE", DISPLAY_NAME: "End date"},
        {COLUMN_NAME: "DESCRIPTION", DISPLAY_NAME: "Description on PO"},
        {COLUMN_NAME: "AMOUNT", DISPLAY_NAME: "Amount"},
        {COLUMN_NAME: "BUDGET", DISPLAY_NAME: "Budget Amount (K EUR)"}
    ];
    var serviceId = 0;
    (services).forEach(function (itemService) {
        itemService.REQUEST_ID = requestId;
        serviceId = insertService(itemService, userId);
        columnsChanged.forEach(function (elem) {
            elem.SERVICE_ID = serviceId;
        });
        insertNewServiceChangedColumns(columnsChanged, itemService.REQUEST_ID, userId);
    });

}

function updateService(reqBody, user_id) {
    var updateServiceKeys = ServiceKeys;
    updateServiceKeys.push('SERVICE_ID');
    var serviceUrl = "requestService/handleUpdate/updateRequest/updateService";
    if (utilLib.validateObjectAttributes(reqBody, user_id, updateServiceKeys, serviceUrl, validateType)) {
        return dataUpdateService.updateService(reqBody, user_id);
    }
}

function deleteService(service_id, user_id) {
    return dataService.deleteManualServiceById(service_id, user_id);
}

function deleteServices(services, user_id) {
    services.forEach(function (service) {
        deleteService(service, user_id);
    });
}

function updateEachService(services, userId) {
    services.forEach(function (service) {
        updateService(service, userId);
    });
}

//Return the total amount of Services to be used in Request Service
function updateServices(original_services, services, request_id, conversion_rate, userId) {
    var amount = 0;

    var original_services_local = original_services;
    var originalServicesToUpdate = services;
    var updateOriginalServices = [];
    var insertOriginalServices = [];
    var deleteOriginalServices = [];

    //DELETE
    original_services_local.forEach(function (o_service) {
        var result = true;
        var o_service_id = o_service.SERVICE_ID;
        if (typeof o_service_id === 'string') {
            o_service_id = Number(o_service_id);
        }
        originalServicesToUpdate.forEach(function (updateService) {
            updateService.SERVICE_ID = Number(updateService.SERVICE_ID);
            if (o_service_id === updateService.SERVICE_ID) {
                result = false;
            }
        });
        if (result) {
            deleteOriginalServices.push(o_service_id);
        }
    });

    //INSERT
    originalServicesToUpdate.forEach(function (newService) {
        var result = true;
        newService.SERVICE_ID = Number(newService.SERVICE_ID);
        original_services_local.forEach(function (service) {
            var o_service_id = service.SERVICE_ID;
            if (typeof o_service_id === 'string') {
                o_service_id = Number(o_service_id);
            }
            if (newService.SERVICE_ID === o_service_id) {
                result = false;
            }
        });
        if (result) {
            insertOriginalServices.push(newService);
        }
    });

    //UPDATE
    originalServicesToUpdate.forEach(function (newService) {
        var result = false;
        newService.SERVICE_ID = Number(newService.SERVICE_ID);
        original_services_local.forEach(function (service) {
            var o_service_id = service.SERVICE_ID;
            if (typeof o_service_id === 'string') {
                o_service_id = Number(o_service_id);
            }
            if (newService.SERVICE_ID === o_service_id) {
                result = true;
            }
        });
        if (result) {
            updateOriginalServices.push(newService);
        }
    });

    //ACTIONS
    if (insertOriginalServices.length > 0) {
        insertEditServices(insertOriginalServices, request_id, userId);
    }
    if (updateOriginalServices.length > 0) {
        updateEachService(updateOriginalServices, userId);
    }
    if (deleteOriginalServices.length > 0) {
        deleteServices(deleteOriginalServices, userId);
    }

    //Obtain total amount to be used in REQUEST_SERVICE
    (services).forEach(function (itemService) {
        amount += Number(itemService.AMOUNT);
        itemService.BUDGET = (itemService.AMOUNT / conversion_rate) / 1000;
    });

    return amount;
}

//Return the total amount of Special Requests to be used in Request Service
function updateSpecialRequests(originalSpecialRequest, specialRequest, request_id, userId) {
    var amount = 0;

    var originalSpecialRequest_local = originalSpecialRequest;
    var originalSpecialRequestToUpdate = specialRequest;
    var updateOriginalSpecialRequest = [];
    var insertOriginalSpecialRequest = [];
    var deleteOriginalSpecialRequest = [];

    //DELETE
    originalSpecialRequest_local.forEach(function (o_service) {
        var result = true;
        var o_special_request_id = o_service.SPECIAL_REQUEST_ID;
        if (typeof o_special_request_id === 'string') {
            o_special_request_id = Number(o_special_request_id);
        }
        originalSpecialRequestToUpdate.forEach(function (updateService) {
            updateService.SPECIAL_REQUEST_ID = Number(updateService.SPECIAL_REQUEST_ID);
            if (o_special_request_id === updateService.SPECIAL_REQUEST_ID) {
                result = false;
            }
        });
        if (result) {
            deleteOriginalSpecialRequest.push(o_special_request_id);
        }
    });

    //INSERT
    originalSpecialRequestToUpdate.forEach(function (newService) {
        var result = true;
        newService.SPECIAL_REQUEST_ID = Number(newService.SPECIAL_REQUEST_ID);
        originalSpecialRequest_local.forEach(function (service) {
            var o_special_request_id = service.SPECIAL_REQUEST_ID;
            if (typeof o_special_request_id === 'string') {
                o_special_request_id = Number(o_special_request_id);
            }
            if (newService.SPECIAL_REQUEST_ID === o_special_request_id) {
                result = false;
            }
        });
        if (result) {
            insertOriginalSpecialRequest.push(newService);
        }
    });

    //UPDATE
    originalSpecialRequestToUpdate.forEach(function (newService) {
        var result = false;
        newService.SPECIAL_REQUEST_ID = Number(newService.SPECIAL_REQUEST_ID);
        originalSpecialRequest_local.forEach(function (service) {
            var o_special_request_id = service.SPECIAL_REQUEST_ID;
            if (typeof o_special_request_id === 'string') {
                o_special_request_id = Number(o_special_request_id);
            }
            if (newService.SPECIAL_REQUEST_ID === o_special_request_id) {
                result = true;
            }
        });
        if (result) {
            updateOriginalSpecialRequest.push(newService);
        }
    });

    //ACTIONS
    if (insertOriginalSpecialRequest.length > 0) {
        var columnsChanged = [
            {COLUMN_NAME: "ITEM", DISPLAY_NAME: "Item #"},
            {COLUMN_NAME: "START_DATE", DISPLAY_NAME: "Start date"},
            {COLUMN_NAME: "END_DATE", DISPLAY_NAME: "End date"},
            {COLUMN_NAME: "MATERIAL_DESCRIPTION", DISPLAY_NAME: "Description on PO"},
            {COLUMN_NAME: "AMOUNT", DISPLAY_NAME: "Amount"},
            {COLUMN_NAME: "MATERIAL_CODE", DISPLAY_NAME: "Material #"},
            {COLUMN_NAME: "BUDGET", DISPLAY_NAME: "Budget Amount (K EUR)"},
            {COLUMN_NAME: "QUANTITY", DISPLAY_NAME: "Qty"},
            {COLUMN_NAME: "UNIT_PRICE", DISPLAY_NAME: "Price per unit"},
            {COLUMN_NAME: "UNIT", DISPLAY_NAME: "Unit"},
            {COLUMN_NAME: "VENDOR_TEXT", DISPLAY_NAME: "Vendor text"}
        ];
        var specialId = 0;
        insertOriginalSpecialRequest.forEach(function (specialRequest) {
            specialId = insertSpecialRequest(specialRequest, request_id, userId);
            columnsChanged.forEach(function (elem) {
                elem.SPECIAL_REQUEST_ID = specialId;
                elem.COLUMN_CHANGED = 1;
                elem.REQUEST_ID = request_id;
                businessChangedColumn.insertSpecialRequestChangedColumn(elem, userId);
            });
        });
    }

    if (updateOriginalSpecialRequest.length > 0) {
        updateOriginalSpecialRequest.forEach(function (specialRequest) {
            updateSpecialRequest(specialRequest, userId);
        });
    }
    if (deleteOriginalSpecialRequest.length > 0) {
        deleteOriginalSpecialRequest.forEach(function (specialRequest) {
            deleteSpecialRequest(specialRequest, userId);
        });
    }

    //Obtain total amount to be used in REQUEST_SERVICE
    specialRequest.forEach(function (elem) {
        amount += (Number(elem.UNIT_PRICE) * elem.QUANTITY);
    });

    return amount;
}

function updateAttachmentRequest(objRequest, user_id) {
    var request;
    try {
        var attachmentList = dataRequest.getAttachmentByRequestId(objRequest.REQUEST_ID, user_id);

        //ATTACHMENTS UPDATE
        if (attachmentList) {
            request = updateAttachments(attachmentList, objRequest.ATTACHMENTS, objRequest.REQUEST_ID, user_id);
        }
        dbHelper.commit();
    }
    catch (e) {
        dbHelper.rollback();
        throw ErrorLib.getErrors().CustomError("", e.toString(), "updateAttachmentRequest");
    }
    finally {
        dbHelper.closeConnection();
    }
    return request;

}

//Insert changed columns data protection
function insertDataProtectionChangedColumn(arrChangedColumns, requestId, userId) {
    var objRequestChangedColumn = {};
    var dataProtectionKey = "";
    var objColumnsParsed = "";
    arrChangedColumns.forEach(function (dataProtectionElem) {
        objColumnsParsed = JSON.parse(dataProtectionElem);
        dataProtectionKey = Object.keys(objColumnsParsed);
        objRequestChangedColumn.COLUMN_NAME = dataProtectionKey[0];
        objRequestChangedColumn.DISPLAY_NAME = objColumnsParsed[dataProtectionKey[0]];
        objRequestChangedColumn.COLUMN_CHANGED = 1;
        objRequestChangedColumn.REQUEST_ID = requestId;
        businessChangedColumn.insertRequestChangedColumn(objRequestChangedColumn, userId);
    });
}

//Insert new service changed columns
function insertNewServiceChangedColumns(arrChangedColumns, requestId, userId) {
    var objServiceChangedColumn = {};
    arrChangedColumns.forEach(function (serviceElem) {
        objServiceChangedColumn.SERVICE_ID = serviceElem.SERVICE_ID;
        objServiceChangedColumn.COLUMN_NAME = serviceElem.COLUMN_NAME;
        objServiceChangedColumn.DISPLAY_NAME = serviceElem.DISPLAY_NAME;
        objServiceChangedColumn.COLUMN_CHANGED = 1;
        objServiceChangedColumn.REQUEST_ID = requestId;
        businessChangedColumn.insertServiceChangedColumn(objServiceChangedColumn, userId);
    });
}

//Insert service changed columns
function insertServiceChangedColumns(arrChangedColumns, requestId, userId) {
    var objServiceChangedColumn = {};
    var serviceKey = "";
    arrChangedColumns.forEach(function (serviceElem) {
        serviceKey = Object.keys(serviceElem);
        serviceKey.forEach(function (keyElem) {
            if (keyElem !== "SERVICE_ID") {
                objServiceChangedColumn.COLUMN_NAME = keyElem;
                objServiceChangedColumn.DISPLAY_NAME = serviceElem[keyElem];
                objServiceChangedColumn.COLUMN_CHANGED = 1;
                objServiceChangedColumn.SERVICE_ID = serviceElem.SERVICE_ID;
                objServiceChangedColumn.REQUEST_ID = requestId;
                businessChangedColumn.insertServiceChangedColumn(objServiceChangedColumn, userId);
            }
        });
    });
}

//Insert new special request changed columns
function insertNewSpecialRequestChangedColumns(objChangedColumns, requestId, userId) {
    var objSpecialRequestChangedColumn = {};
    objSpecialRequestChangedColumn.SPECIAL_REQUEST_ID = objChangedColumns.SPECIAL_REQUEST_ID;
    objSpecialRequestChangedColumn.COLUMN_NAME = objChangedColumns.COLUMN_NAME;
    objSpecialRequestChangedColumn.DISPLAY_NAME = objChangedColumns.DISPLAY_NAME;
    objSpecialRequestChangedColumn.COLUMN_CHANGED = 1;
    objSpecialRequestChangedColumn.REQUEST_ID = requestId;
    businessChangedColumn.insertSpecialRequestChangedColumn(objSpecialRequestChangedColumn, userId);
}

//Insert special request changed columns
function insertSpecialRequestChangedColumns(arrChangedColumns, requestId, userId) {
    var objSpecialRequestChangedColumn = {};
    var specialRequestKey = "";
    arrChangedColumns.forEach(function (specialRequestElem) {
        specialRequestKey = Object.keys(specialRequestElem);
        specialRequestKey.forEach(function (keyElem) {
            if (keyElem !== "SPECIAL_REQUEST_ID") {
                objSpecialRequestChangedColumn.COLUMN_NAME = keyElem;
                objSpecialRequestChangedColumn.DISPLAY_NAME = specialRequestElem[keyElem];
                objSpecialRequestChangedColumn.COLUMN_CHANGED = 1;
                objSpecialRequestChangedColumn.SPECIAL_REQUEST_ID = specialRequestElem.SPECIAL_REQUEST_ID;
                objSpecialRequestChangedColumn.REQUEST_ID = requestId;
                businessChangedColumn.insertSpecialRequestChangedColumn(objSpecialRequestChangedColumn, userId);
            }
        });
    });
}

function insertNoteChangedColumn(arrChangedColumns, requestId, userId) {
    var objNoteChangedColumn = {};
    var noteKey = "";
    arrChangedColumns.forEach(function (noteElem) {
        noteKey = Object.keys(noteElem);
        noteKey.forEach(function (keyElem) {
            if (keyElem !== "NOTE_REQUEST_ID") {
                objNoteChangedColumn.COLUMN_NAME = '{"NOTE_REQUEST_ID": "' + noteElem.NOTE_REQUEST_ID + '"}';
                objNoteChangedColumn.DISPLAY_NAME = noteElem[keyElem];
                objNoteChangedColumn.COLUMN_CHANGED = 1;
                objNoteChangedColumn.REQUEST_ID = requestId;
                businessChangedColumn.insertRequestChangedColumn(objNoteChangedColumn, userId);
            }
        });
    });
}

function insertNewNoteChangedColumn(objChangedColumns, requestId, userId) {
    var changedColumns = {
        REQUEST_ID: requestId,
        DISPLAY_NAME: objChangedColumns.NOTE_TYPE_NAME,
        COLUMN_NAME: '{"NOTE_REQUEST_ID": "' + objChangedColumns.NOTE_REQUEST_ID + '"}',
        COLUMN_CHANGED: 1
    };
    businessChangedColumn.insertRequestChangedColumn(changedColumns, userId);
}

function insertNewAttachmentChangedColumn(objAttachment, requestId, userId) {
    var changedColumns = {
        REQUEST_ID: requestId,
        DISPLAY_NAME: "Attachment",
        COLUMN_NAME: '{"ATTACHMENT_ID": "' + objAttachment.ATTACHMENT_ID + '"}',
        COLUMN_CHANGED: 1
    };
    businessChangedColumn.insertRequestChangedColumn(changedColumns, userId);
}

//Insert changed columns
function insertChangedColumn(changedColumns, requestId, userId) {
    var objRequestChangedColumn = {};
    Object.keys(changedColumns).forEach(function (elem) {
        switch (elem) {
            case "DATA_PROTECTION":
                insertDataProtectionChangedColumn(changedColumns[elem], requestId, userId);
                break;
            case "SERVICES":
                insertServiceChangedColumns(changedColumns[elem], requestId, userId);
                break;
            case "SPECIAL_REQUEST":
                insertSpecialRequestChangedColumns(changedColumns[elem], requestId, userId);
                break;
            case "NOTES":
                insertNoteChangedColumn(changedColumns[elem], requestId, userId);
                break;
            default:
                objRequestChangedColumn.COLUMN_NAME = elem;
                objRequestChangedColumn.DISPLAY_NAME = changedColumns[elem];
                objRequestChangedColumn.COLUMN_CHANGED = 1;
                objRequestChangedColumn.REQUEST_ID = requestId;
                businessChangedColumn.insertRequestChangedColumn(objRequestChangedColumn, userId);
        }
    });
}

//REQUEST
function updateRequest(reqBody, userId) {
    var originalRequest = getRequestById(reqBody.REQUEST_ID, userId);
    var attachmentList = dataRequest.getAttachmentByRequestId(reqBody.REQUEST_ID, userId);
    var request;
    var notes = [];
    var originalNotes = [];
    var changedColumns = reqBody.CHANGED_FIELDS;
    try {
        //Insert changed columns
        if (changedColumns && Object.keys(changedColumns).length > 0) {
            insertChangedColumn(changedColumns, reqBody.REQUEST_ID, userId);
        }
        //Infrastructure & location of work logic
        if (!Number(reqBody.INFRASTRUCTURE_OF_WORK_ID) || !Number(reqBody.LOCATION_OF_WORK_ID)) {
            reqBody.INFRASTRUCTURE_OF_WORK_ID = null;
            reqBody.LOCATION_OF_WORK_ID = null;
        }
        //STATUS UPDATE
        reqBody.PREVIOUS_STATUS_ID = reqBody.STATUS_ID;
        if (Number(reqBody.PREVIOUS_STATUS_ID) !== statusMap.TO_BE_CHECKED) {
            reqBody.STATUS_ID = statusMap.TO_BE_CHECKED;
            status.updateRequestStatusManual(reqBody, userId, true);
        }

        //NON-SAP VENDOR UPDATE
        var nonSapId;
        if (!originalRequest.NON_SAP_VENDOR_ID && reqBody.NON_SAP_VENDOR !== null) {
            reqBody.NON_SAP_VENDOR_ID = insertManualNonSapVendor(reqBody.NON_SAP_VENDOR, userId);

        } else if (originalRequest.NON_SAP_VENDOR_ID !== null && reqBody.NON_SAP_VENDOR !== null) {
            nonSapId = Number(originalRequest.NON_SAP_VENDOR_ID);
            updateManualNonSapVendor(reqBody.NON_SAP_VENDOR, userId);
            reqBody.NON_SAP_VENDOR_ID = reqBody.NON_SAP_VENDOR.NON_SAP_VENDOR_ID;

        } else if (!!originalRequest.NON_SAP_VENDOR_ID && !reqBody.NON_SAP_VENDOR) {
            nonSapId = Number(originalRequest.NON_SAP_VENDOR_ID);
            deleteManualNonSapVendor(nonSapId, userId);
            reqBody.NON_SAP_VENDOR_ID = null;
        } else {
            reqBody.NON_SAP_VENDOR_ID = null;
        }

        //MATERIAL_ID LOGIC

        //NOTES UPDATE
        if (reqBody.NOTES !== null && reqBody.NOTES !== undefined && Object.keys(reqBody.NOTES).length > 0) {
        	if(originalRequest.NOTES && originalRequest.NOTES.length > 0) {
	        	originalRequest.NOTES.forEach(function (elem) {
	        		if (Number(elem.NOTE_TYPE_ID) !== 5){
	        			originalNotes.push(elem);
	        		}
	        	});
        	}
        	reqBody.NOTES.forEach(function (elem) {
        		if (Number(elem.NOTE_TYPE_ID) !== 5){
        			notes.push(elem);
        		}
        	});
            updateNotes(originalNotes, notes, originalRequest.REQUEST_ID, userId);

        } else if (originalRequest.NOTES.length > 0) {
        	reqBody.NOTES.forEach(function (elem) {
        		if (Number(elem.NOTE_TYPE_ID) !== 5){
        			notes.push(elem);
        		}
        	});
            deleteNotes(notes, userId);
        }

        //COST OBJECT UPDATE
        if (reqBody.COST_OBJECT !== null) {
            updateCostObject(reqBody.COST_OBJECT, userId);
        }

        //RISK_FUNDED UPDATE
        var risk_conversion_rate_table;
        var risk_conversion_rate;
        if (Object.keys(originalRequest.RISK_FUNDED).length > 0 && Object.keys(reqBody.RISK_FUNDED).length > 0) {
            risk_conversion_rate_table = dataCurrency.getManualCurrencyConversionRate(reqBody.RISK_FUNDED.CURRENCY_ID);
            risk_conversion_rate = parseFloat(risk_conversion_rate_table[0].CONVERSION_RATE);
            reqBody.RISK_FUNDED.AMOUNT = Number(reqBody.RISK_FUNDED.AMOUNT);
            reqBody.RISK_FUNDED.AMOUNT_KEUR = (Number(reqBody.RISK_FUNDED.AMOUNT) / risk_conversion_rate) / 1000;
            updateRiskFunded(reqBody.RISK_FUNDED, userId);

        } else if (originalRequest.RISK_FUNDED.length === 0 && Object.keys(reqBody.RISK_FUNDED).length > 0) {
            risk_conversion_rate_table = dataCurrency.getManualCurrencyConversionRate(reqBody.RISK_FUNDED.CURRENCY_ID);
            risk_conversion_rate = parseFloat(risk_conversion_rate_table[0].CONVERSION_RATE);

            reqBody.RISK_FUNDED.REQUEST_ID = originalRequest.REQUEST_ID;
            reqBody.RISK_FUNDED.AMOUNT = Number(reqBody.RISK_FUNDED.AMOUNT);
            reqBody.RISK_FUNDED.AMOUNT_KEUR = (Number(reqBody.RISK_FUNDED.AMOUNT) / risk_conversion_rate) / 1000;

            insertRiskFunded(reqBody.RISK_FUNDED, userId);

        } else if ((originalRequest.RISK_FUNDED).length > 0 && Object.keys(reqBody.RISK_FUNDED).length === 0) {
            deleteRiskFunded(originalRequest.RISK_FUNDED[0], userId);

        }

        //REQUEST SERVICE & SERVICES UPDATES
        if (reqBody.REQUEST_SERVICE !== undefined) {
            if (!reqBody.REQUEST_SERVICE.PURCHASE_ORDER_AMOUNT) {
                reqBody.REQUEST_SERVICE.PURCHASE_ORDER_AMOUNT = null;
                reqBody.REQUEST_SERVICE.PURCHASE_ORDER_TO_UPLIFT = null;
                reqBody.REQUEST_SERVICE.LINE_TO_UPLIFT = null;
            }
            if (!reqBody.REQUEST_SERVICE.SAP_BUYER_NAME) {
                reqBody.REQUEST_SERVICE.SAP_BUYER_NAME = null;
            }
            var conversion_rate_table = dataCurrency.getManualCurrencyConversionRate(reqBody.REQUEST_SERVICE.CURRENCY_ID);
            var conversion_rate = parseFloat(conversion_rate_table[0].CONVERSION_RATE);
            var cart_amount;
            if (reqBody.SERVICES && reqBody.SERVICES.length > 0) {
                cart_amount = updateServices(originalRequest.SERVICES, reqBody.SERVICES, reqBody.REQUEST_ID, conversion_rate, userId);
                dataSpecialRequest.deleteSpecialRequestByRequestId(reqBody.REQUEST_ID, userId);
            } else if (reqBody.SPECIAL_REQUEST && reqBody.SPECIAL_REQUEST.length > 0) {
                cart_amount = updateSpecialRequests(originalRequest.SPECIAL_REQUEST, reqBody.SPECIAL_REQUEST, reqBody.REQUEST_ID, userId);
                dataService.deleteServiceByRequestId(reqBody.REQUEST_ID, userId);
                reqBody.MATERIAL_ID = 0;
            }
            reqBody.CART_AMOUNT = cart_amount;
            reqBody.TOTAL_BUDGET = (cart_amount / conversion_rate) / 1000;

            updateRequestService(reqBody.REQUEST_SERVICE, userId);
        }
        //REQUEST UPDATE
        request = dataRequest.updateRequestManual(reqBody, userId);
        
        //DATA PROTECTION ANSWERS UPDATE
        var dataProtectionAnswer = dataRDataProtection.getDataProtectionByRequestId(reqBody.REQUEST_ID);
        var newQuestion;
        var i;
        (reqBody.DATA_PROTECTION_ANSWERS).forEach(function (item) {
            newQuestion = true;
            i = 0;
            for (i = 0; i < dataProtectionAnswer.length; i++) {
                if (Number(item.QUESTION_ID) === Number(dataProtectionAnswer[i].QUESTION_ID)) {
                    newQuestion = false;
                    break;
                }
            }
            if (newQuestion) {
                dataRDataProtection.insertDataProtectionAnswer(item, userId);
            } else {
                updateDataProtectionAnswer(item, userId);
            }
        });

        //ATTACHMENTS UPDATE
        if (attachmentList) {
            updateAttachments(attachmentList, reqBody.ATTACHMENTS, reqBody.REQUEST_ID, userId);
        }

        dbHelper.commit();
    }
    catch (e) {
        dbHelper.rollback();
        throw ErrorLib.getErrors().CustomError("", e.toString(), "updateRequest");
    }
    finally {
        dbHelper.closeConnection();
    }
    
    if(request){
        //Send MAIL
    	mailSend.sendResubmitMail(reqBody.REQUEST_ID, userId);
    }

    return request;
}


function deleteRequest(request_id, user_id) {
    if (!request_id) {
        throw ErrorLib.getErrors().BadRequest(
            "The Parameter request_id is not found",
            "requestService/handleDelete/deleteRequest", request_id);
    }
    if (!user_id) {
        throw ErrorLib.getErrors().BadRequest(
            "The Parameter user_id is not found",
            "requestService/handleDelete/deleteRequest", user_id);
    }
    try {
        dataRCostObject.deleteCostObject(request_id, user_id);
        dataRRiskFunded.deleteRiskFundedByRequestId(request_id, user_id);
        dataService.deleteServiceByRequestId(request_id, user_id);
        dataSpecialRequest.deleteSpecialRequestByRequestId(request_id, user_id);
        dataRService.deleteRequestServiceByRequestId(request_id, user_id);
        dataRequest.deleteRequestDataProtectionAnswersByRequestId(request_id, user_id);
        var attachmentList = dataRequest.getAttachmentByRequestId(request_id, user_id);
        attachmentList.forEach(function (attachmentRequest) {
            dataAttachment.deleteAttachment(attachmentRequest, user_id);
        });
        dataRequest.deleteAttachmentRequest(request_id, user_id);
        var request = dataRequest.deleteRequest(request_id, user_id);

        dbHelper.commit();
        return request;
    } catch (e) {
        dbHelper.rollback();
        throw ErrorLib.getErrors().CustomError("", e.toString(),
            "deleteRequest");
    } finally {
        dbHelper.closeConnection();
    }
}

function validateDateStringFormat(dateString) {
    return ((new Date(dateString)).toString() !== "Invalid Date");
}

function validateFilterParameters(objFilter, filters) {
    (filters).forEach(function (filter) {
        if (!objFilter[filter]) {
            objFilter[filter] = null;
        }
    });
}

function getRequestDataProtection(requestId, user_id) {
    return dataRequestDataProtection.getDataProtectionByRequestId(requestId);
}

function getAttachmentRequest(requestId, user_id) {
    var result = dataRequest.getAttachmentByRequestId(requestId, user_id);
    result = JSON.parse(JSON.stringify(result));
    result.forEach(function (attach) {
        attach.ATTACHMENT_SIZE = (parseFloat(Number(attach.ATTACHMENT_SIZE) / 1048576).toFixed(2)) + " MB";
    });

    return result;
}

function getUrlBase() {
    return config.getUrlBase();
}

function getEmailList(requestMailObj) {
    return config.getEmailList();
}

function getPath(stringName) {
    return config.getPath(stringName);
}

function getBasicData(stringPathName) {
    return config.getBasicData(stringPathName);
}
