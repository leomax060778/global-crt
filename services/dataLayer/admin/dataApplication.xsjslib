/** *************Import Library****************** */
$.import("mktgcartrequesttool.services.commonLib", "mapper");
var mapper = $.mktgcartrequesttool.services.commonLib.mapper;
var db = mapper.getdbHelper();
/** ********************************************** */

var GET_APPLICATION_INFO = "GET_APPLICATION_INFO";

/** *************************************************** */

function getApplicationInfo() {
	var result = db.executeProcedure(GET_APPLICATION_INFO,{});
	return db.extractArray(result.out_result);
}