/** *************Import Library****************** */
$.import("mktgcartrequesttool.services.commonLib", "mapper");
var mapper = $.mktgcartrequesttool.services.commonLib.mapper;
var data = mapper.getDataPermission();
var ErrorLib = mapper.getErrors();
var util = mapper.getUtil();
/** ********************************************** */

function getAllPermission() {
	return data.getAllPermission();
}

function isAuthorized(UserId, PermissionId, ResourceId){
	return data.isAuthorized(UserId, PermissionId, ResourceId);
}
