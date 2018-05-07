$.import("mktgcartrequesttool.services.commonLib", "mapper");
var mapper = $.mktgcartrequesttool.services.commonLib.mapper;
var data = mapper.getDataPlan();
/** ***********END INCLUDE LIBRARIES*************** */

function getAllPlan(){	
	return data.getAllPlan();	
}
