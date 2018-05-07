/***************Import Library*******************/
$.import("mktgcartrequesttool.services.commonLib","mapper");
var mapper = $.mktgcartrequesttool.services.commonLib.mapper;
var dbRolePermission = mapper.getRolePermission();
var ErrorLib = mapper.getErrors();
/*************************************************/

function getAll(){
	return dbRolePermission.getAllPermissionByRole();
}

