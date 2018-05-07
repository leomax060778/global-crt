$.import("mktgcartrequesttool.services.commonLib", "mapper");
var mapper = $.mktgcartrequesttool.services.commonLib.mapper;
var dataSubRegion = mapper.getDataSubRegion();
/** ***********END INCLUDE LIBRARIES*************** */

function getSubRegionsByRegionId(regionId){
	return dataSubRegion.getSubRegionsByRegionId(regionId);
}
