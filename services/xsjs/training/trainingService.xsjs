$.import("mktgcartrequesttool.services.commonLib", "mapper");
var mapper = $.mktgcartrequesttool.services.commonLib.mapper;
var httpUtil = mapper.getHttp();
var ErrorLib = mapper.getErrors();
var training = mapper.getTraining();
/** ***********END INCLUDE LIBRARIES*************** */

var GET_ALL_TRAINING = "GET_ALL_TRAINING";
var GET_ALL_TRAINING_BY_PARENT = "GET_ALL_TRAINING_BY_PARENT";
var GET_TRAINING_BY_ID = "GET_TRAINING_BY_ID";

var service_name = "trainingService";

function processRequest() {
    httpUtil.processRequest(handleGet, handlePost, handlePut, handleDelete, false, service_name);
}

function handleGet(parameters) {
    var res = {};
    if (parameters.length > 0) {
        switch (parameters[0].name) {
            case GET_ALL_TRAINING_BY_PARENT:
                res = training.getAllTrainingByParent(parameters[0].value);
                break;
            case GET_ALL_TRAINING:
                res = training.getAllTraining();
                break;
            case GET_TRAINING_BY_ID:
                res = training.getTrainingById(parameters[0].value);
                break;
            default:
                throw ErrorLib.getErrors().BadRequest("", "", "invalid parameter name (it should be: GET_ALL_TRAINING_BY_PARENT, GET_ALL_TRAINING or GET_BY_TRAINING_BY_ID)" + parameters[0].name);
        }
    } else {
        throw ErrorLib.getErrors().BadRequest("", "", "invalid parameter (it should be: GET_ALL_TRAINING_BY_PARENT, GET_ALL_TRAINING or GET_BY_TRAINING_BY_ID)");
    }

    return httpUtil.handleResponse(res, httpUtil.OK, httpUtil.AppJson);
}

function handlePut(reqBody, userId) {
    var req;
    switch (reqBody.METHOD) {
        case 'FULL_EDIT':
            req = training.updateTraining(reqBody, userId);
            break;
        case 'ORDER':
            req = training.updateTrainingOrder(reqBody, userId);
            break;
        case 'UPDATE_FOLDER_ID':
            req = training.updateTrainingFolderId(reqBody, userId);
            break;
    }

    return httpUtil.handleResponse(req, httpUtil.OK, httpUtil.AppJson);
}

function handleDelete(reqBody, userId) {
    var req = {};
    if (reqBody.DELETE && reqBody.DELETE === 'SELECTED_TRAINING') {
        req = training.deleteSelectedTraining(reqBody, userId);
    } else {
        req = training.deleteTraining(reqBody, userId);
    }
    return httpUtil.handleResponse(req, httpUtil.OK, httpUtil.AppJson);
}

function handlePost(reqBody, userId) {
    var req = training.insertTraining(reqBody, userId);
    return httpUtil.handleResponse(req, httpUtil.OK, httpUtil.AppJson);
}

processRequest();