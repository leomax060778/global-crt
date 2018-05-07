/***************Import Library*******************/
$.import("mktgcartrequesttool.services.commonLib","mapper");
var mapper = $.mktgcartrequesttool.services.commonLib.mapper;
var dataApp = mapper.getDataApplication();

/*************************************************/

function getApplicationInfo() {
	return dataApp.getApplicationInfo();
}