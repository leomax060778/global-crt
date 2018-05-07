/************Business Layer Mapper*****************/

function getMail(){
    $.import("mktgcartrequesttool.services.businessLayer.util","mail");
    return $.mktgcartrequesttool.services.businessLayer.util.mail;
}

function getPopUpLib(){
    $.import("mktgcartrequesttool.services.businessLayer.util","popUpLib");
    return $.mktgcartrequesttool.services.businessLayer.util.popUpLib;
}

function getLogError(){
    $.import("mktgcartrequesttool.services.businessLayer.util","logError");
    return $.mktgcartrequesttool.services.businessLayer.util.logError;
}

function getErrors(){
    $.import("mktgcartrequesttool.services.commonLib","errorLib");
    return $.mktgcartrequesttool.services.commonLib.errorLib;
}

function getHttp(){
    $.import("mktgcartrequesttool.services.commonLib","httpLib");
    return $.mktgcartrequesttool.services.commonLib.httpLib;
}

function getLevel3(){
    $.import("mktgcartrequesttool.services.businessLayer.teamPlanHierarchy","level3Lib");
    return $.mktgcartrequesttool.services.businessLayer.teamPlanHierarchy.level3Lib;
}

function getLevel4(){
    $.import("mktgcartrequesttool.services.businessLayer.teamPlanHierarchy","level4Lib");
    return $.mktgcartrequesttool.services.businessLayer.teamPlanHierarchy.level4Lib;
}

function getUser(){
    $.import("mktgcartrequesttool.services.businessLayer.admin","userLib");
    return $.mktgcartrequesttool.services.businessLayer.admin.userLib;
}

function getPlan(){
    $.import("mktgcartrequesttool.services.businessLayer.teamPlanHierarchy","planLib");
    return $.mktgcartrequesttool.services.businessLayer.teamPlanHierarchy.planLib;
}

function getRegion(){
    $.import("mktgcartrequesttool.services.businessLayer.teamPlanHierarchy","regionLib");
    return $.mktgcartrequesttool.services.businessLayer.teamPlanHierarchy.regionLib;
}

function getSubRegion(){
    $.import("mktgcartrequesttool.services.businessLayer.teamPlanHierarchy","subRegionLib");
    return $.mktgcartrequesttool.services.businessLayer.teamPlanHierarchy.subRegionLib;
}

function getRequest(){
    $.import("mktgcartrequesttool.services.businessLayer.shoppingCartHistory","cartRequestLib");
    return $.mktgcartrequesttool.services.businessLayer.shoppingCartHistory.cartRequestLib;
}

function getVendorInquiry(){
    $.import("mktgcartrequesttool.services.businessLayer.vendorRequestInquiry","vendorInquiryLib");
    return $.mktgcartrequesttool.services.businessLayer.vendorRequestInquiry.vendorInquiryLib;
}

function getVendorRequest(){
    $.import("mktgcartrequesttool.services.businessLayer.vendorRequestInquiry","vendorRequestLib");
    return $.mktgcartrequesttool.services.businessLayer.vendorRequestInquiry.vendorRequestLib;
}

function getAttachmentVendor(){
    $.import("mktgcartrequesttool.services.businessLayer.vendorRequestInquiry","attachmentVendorLib");
    return $.mktgcartrequesttool.services.businessLayer.vendorRequestInquiry.attachmentVendorLib;
}
function getAttachment(){
    $.import("mktgcartrequesttool.services.businessLayer.attachment","attachmentLib");
    return $.mktgcartrequesttool.services.businessLayer.attachment.attachmentLib;
}

function getCurrency(){
    $.import("mktgcartrequesttool.services.businessLayer.currency","currencyLib");
    return $.mktgcartrequesttool.services.businessLayer.currency.currencyLib;
}

function getRequestDataProtection(){
    $.import("mktgcartrequesttool.services.businessLayer.newCartRequest","requestDataProtectionLib");
    return $.mktgcartrequesttool.services.businessLayer.newCartRequest.requestDataProtectionLib;
}
function getDataProtection(){
    $.import("mktgcartrequesttool.services.businessLayer.dataProtection","dataProtectionLib");
    return $.mktgcartrequesttool.services.businessLayer.dataProtection.dataProtectionLib;
}


function getEntity(){
    $.import("mktgcartrequesttool.services.businessLayer.entity","entityLib");
    return $.mktgcartrequesttool.services.businessLayer.entity.entityLib;
}

function getVendor(){
    $.import("mktgcartrequesttool.services.businessLayer.vendor","vendorLib");
    return $.mktgcartrequesttool.services.businessLayer.vendor.vendorLib;
}

function getVendorContactInformation(){
    $.import("mktgcartrequesttool.services.businessLayer.vendor","vendorContactInfoLib");
    return $.mktgcartrequesttool.services.businessLayer.vendor.vendorContactInfoLib;
}

function getNonSapVendor(){
    $.import("mktgcartrequesttool.services.businessLayer.nonSAPVendor","nonSapVendorLib");
    return $.mktgcartrequesttool.services.businessLayer.nonSAPVendor.nonSapVendorLib;
}


function getChangeVendorRequest(){
    $.import("mktgcartrequesttool.services.businessLayer.vendorRequestInquiry","changeVendorRequestLib");
    return $.mktgcartrequesttool.services.businessLayer.vendorRequestInquiry.changeVendorRequestLib;
}

function getExtendVendorRequest(){
    $.import("mktgcartrequesttool.services.businessLayer.vendorRequestInquiry","extendVendorRequestLib");
    return $.mktgcartrequesttool.services.businessLayer.vendorRequestInquiry.extendVendorRequestLib;
}

function getMaterial(){
    $.import("mktgcartrequesttool.services.businessLayer.newCartRequest","materialLib");
    return $.mktgcartrequesttool.services.businessLayer.newCartRequest.materialLib;
}

function getInquiry() {
    $.import("mktgcartrequesttool.services.businessLayer.inquiry","inquiryLib");
    return $.mktgcartrequesttool.services.businessLayer.inquiry.inquiryLib;
}

function getTrainingType() {
    $.import("mktgcartrequesttool.services.businessLayer.training","trainingTypeLib");
    return $.mktgcartrequesttool.services.businessLayer.training.trainingTypeLib;
}

function getTraining() {
    $.import("mktgcartrequesttool.services.businessLayer.training","trainingLib");
    return $.mktgcartrequesttool.services.businessLayer.training.trainingLib;
}

function getVendorRequestInquiryStatus() {
    $.import("mktgcartrequesttool.services.businessLayer.processingReport","vendorRequestInquiryStatusLib");
    return $.mktgcartrequesttool.services.businessLayer.processingReport.vendorRequestInquiryStatusLib;
}

function getPurchaseOrderService() {
    $.import("mktgcartrequesttool.services.businessLayer.processingReport","purchaseOrderServiceLib");
    return $.mktgcartrequesttool.services.businessLayer.processingReport.purchaseOrderServiceLib;
}

function getTemplateSection() {
    $.import("mktgcartrequesttool.services.businessLayer.template","templateSectionLib");
    return $.mktgcartrequesttool.services.businessLayer.template.templateSectionLib;
}

function getTemplate() {
    $.import("mktgcartrequesttool.services.businessLayer.template","templateLib");
    return $.mktgcartrequesttool.services.businessLayer.template.templateLib;
}

function getLayoutSection() {
    $.import("mktgcartrequesttool.services.businessLayer.layoutSection","layoutSectionLib");
    return $.mktgcartrequesttool.services.businessLayer.layoutSection.layoutSectionLib;
}

function getVendorRequestInquiry(){
    $.import("mktgcartrequesttool.services.businessLayer.vendorRequestInquiry","vendorRequestInquiryLib");
    return $.mktgcartrequesttool.services.businessLayer.vendorRequestInquiry.vendorRequestInquiryLib;
}

function getSubject(){
    $.import("mktgcartrequesttool.services.businessLayer.subject","subjectLib");
    return $.mktgcartrequesttool.services.businessLayer.subject.subjectLib;
}

function getMessageType(){
    $.import("mktgcartrequesttool.services.businessLayer.messageType","messageTypeLib");
    return $.mktgcartrequesttool.services.businessLayer.messageType.messageTypeLib;
}

function getNews(){
    $.import("mktgcartrequesttool.services.businessLayer.news","newsLib");
    return $.mktgcartrequesttool.services.businessLayer.news.newsLib;
}

function getImage(){
    $.import("mktgcartrequesttool.services.businessLayer.news","imageLib");
    return $.mktgcartrequesttool.services.businessLayer.news.imageLib;
}

function getCartRequest(){
    $.import("mktgcartrequesttool.services.businessLayer.processingReport","cartRequestLib");
    return $.mktgcartrequesttool.services.businessLayer.processingReport.cartRequestLib;
}

function getInquiryStatus(){
    $.import("mktgcartrequesttool.services.businessLayer.processingReport","inquiryLib");
    return $.mktgcartrequesttool.services.businessLayer.processingReport.inquiryLib;
}

function getModal(){
    $.import("mktgcartrequesttool.services.businessLayer.modal","modalLib");
    return $.mktgcartrequesttool.services.businessLayer.modal.modalLib;
}

function getCrtType(){
    $.import("mktgcartrequesttool.services.businessLayer.crtType","crtTypeLib");
    return $.mktgcartrequesttool.services.businessLayer.crtType.crtTypeLib;
}

function getInquiryMessage() {
    $.import("mktgcartrequesttool.services.businessLayer.inquiry","inquiryMessageLib");
    return $.mktgcartrequesttool.services.businessLayer.inquiry.inquiryMessageLib;
}

function getAttachmentInquiry() {
    $.import("mktgcartrequesttool.services.businessLayer.inquiry","attachmentInquiryLib");
    return $.mktgcartrequesttool.services.businessLayer.inquiry.attachmentInquiryLib;
}

function getTemplateType() {
    $.import("mktgcartrequesttool.services.businessLayer.template","templateTypeLib");
    return $.mktgcartrequesttool.services.businessLayer.template.templateTypeLib;
}

function getTeam() {
    $.import("mktgcartrequesttool.services.businessLayer.team","teamLib");
    return $.mktgcartrequesttool.services.businessLayer.team.teamLib;
}

function getCatalogType() {
    $.import("mktgcartrequesttool.services.businessLayer.catalog","catalogTypeLib");
    return $.mktgcartrequesttool.services.businessLayer.catalog.catalogTypeLib;
}

function getCatalog() {
    $.import("mktgcartrequesttool.services.businessLayer.catalog", "catalogLib");
    return $.mktgcartrequesttool.services.businessLayer.catalog.catalogLib;
}

function getSpecialRequest() {
    $.import("mktgcartrequesttool.services.businessLayer.specialRequest", "specialRequestLib");
    return $.mktgcartrequesttool.services.businessLayer.specialRequest.specialRequestLib;
}

function getInfraOfWork() {
    $.import("mktgcartrequesttool.services.businessLayer.newCartRequest", "infraOfWorkLib");
    return $.mktgcartrequesttool.services.businessLayer.newCartRequest.infraOfWorkLib;
}

function getLocOfWork() {
    $.import("mktgcartrequesttool.services.businessLayer.newCartRequest", "locOfWorkLib");
    return $.mktgcartrequesttool.services.businessLayer.newCartRequest.locOfWorkLib;
}

function getNewCartRequest() {
    $.import("mktgcartrequesttool.services.businessLayer.newCartRequest", "newCartRequestLib");
    return $.mktgcartrequesttool.services.businessLayer.newCartRequest.newCartRequestLib;
}

function getLogin(){
    $.import("mktgcartrequesttool.services.businessLayer.admin","loginLib");
    return $.mktgcartrequesttool.services.businessLayer.admin.loginLib;
}

function getUserRole(){
    $.import("mktgcartrequesttool.services.businessLayer.admin","userRoleLib");
    return $.mktgcartrequesttool.services.businessLayer.admin.userRoleLib;
}

function getRolePermission(){
    $.import("mktgcartrequesttool.services.businessLayer.admin","rolePermissionLib");
    return $.mktgcartrequesttool.services.businessLayer.admin.rolePermissionLib;
}

function getPermission(){
    $.import("mktgcartrequesttool.services.businessLayer.admin","permissionLib");
    return $.mktgcartrequesttool.services.businessLayer.admin.permissionLib;
}

function getResource(){
    $.import("mktgcartrequesttool.services.businessLayer.admin","resourceLib");
    return $.mktgcartrequesttool.services.businessLayer.admin.resourceLib;
}

function getRole(){
    $.import("mktgcartrequesttool.services.businessLayer.admin","roleLib");
    return $.mktgcartrequesttool.services.businessLayer.admin.roleLib;
}

function getUtil() {
    $.import("mktgcartrequesttool.services.businessLayer.util","utilLib");
    return $.mktgcartrequesttool.services.businessLayer.util.utilLib;
}

function getNoteTypeLib() {
    $.import("mktgcartrequesttool.services.businessLayer.newCartRequest","noteTypeLib");
    return $.mktgcartrequesttool.services.businessLayer.newCartRequest.noteTypeLib;
}

function getVendorMessage() {
    $.import("mktgcartrequesttool.services.businessLayer.vendorRequestInquiry","vendorMessageLib");
    return $.mktgcartrequesttool.services.businessLayer.vendorRequestInquiry.vendorMessageLib;
}

function getTopic() {
    $.import("mktgcartrequesttool.services.businessLayer.topic","topicLib");
    return $.mktgcartrequesttool.services.businessLayer.topic.topicLib;
}

function getProcessingReportMessage(){
    $.import("mktgcartrequesttool.services.businessLayer.processingReport","processingReportMessageLib");
    return $.mktgcartrequesttool.services.businessLayer.processingReport.processingReportMessageLib;
}

function getRequestMessage(){
	$.import("mktgcartrequesttool.services.businessLayer.shoppingCartHistory","requestMessageLib");
	return $.mktgcartrequesttool.services.businessLayer.shoppingCartHistory.requestMessageLib;
}

function getStatus(){
	$.import("mktgcartrequesttool.services.businessLayer.status","statusLib");
	return $.mktgcartrequesttool.services.businessLayer.status.statusLib;
}

function getCommodity(){
    $.import("mktgcartrequesttool.services.businessLayer.commodity","commodityLib");
    return $.mktgcartrequesttool.services.businessLayer.commodity.commodityLib;
}

function getCountry(){
    $.import("mktgcartrequesttool.services.businessLayer.country","countryLib");
    return $.mktgcartrequesttool.services.businessLayer.country.countryLib;
}

function getAttachmentStore(){
    $.import("mktgcartrequesttool.services.businessLayer.attachment","attachmentStoreLib");
    return $.mktgcartrequesttool.services.businessLayer.attachment.attachmentStoreLib;
}

function getVendorDataProtection() {
	$.import("mktgcartrequesttool.services.businessLayer.vendorRequestInquiry","vendorDataProtectionLib");
    return $.mktgcartrequesttool.services.businessLayer.vendorRequestInquiry.vendorDataProtectionLib;
}

function getChangeVendorSupportingDocumentation() {
	$.import("mktgcartrequesttool.services.businessLayer.vendorRequestInquiry","changeVendorSupportingDocumentationLib");
    return $.mktgcartrequesttool.services.businessLayer.vendorRequestInquiry.changeVendorSupportingDocumentationLib;
}

function getChangeVendorSelection() {
	$.import("mktgcartrequesttool.services.businessLayer.vendorRequestInquiry","changeVendorSelectionLib");
    return $.mktgcartrequesttool.services.businessLayer.vendorRequestInquiry.changeVendorSelectionLib;
}

function getBudgetYear() {
	$.import("mktgcartrequesttool.services.businessLayer.admin","budgetYearLib");
    return $.mktgcartrequesttool.services.businessLayer.admin.budgetYearLib;
}

function getService(){
    $.import("mktgcartrequesttool.services.businessLayer.processingReport","serviceLib");
    return $.mktgcartrequesttool.services.businessLayer.processingReport.serviceLib;
}

function getUserTeam(){
    $.import("mktgcartrequesttool.services.businessLayer.admin","userTeamLib");
    return $.mktgcartrequesttool.services.businessLayer.admin.userTeamLib;
}

function getReport(){
    $.import("mktgcartrequesttool.services.businessLayer.report","reportLib");
    return $.mktgcartrequesttool.services.businessLayer.report.reportLib;
}

function getApi(){
	$.import("mktgcartrequesttool.services.businessLayer.api","apiLib");
    return $.mktgcartrequesttool.services.businessLayer.api.apiLib;
}

function getRequestChangedColumn(){
	$.import("mktgcartrequesttool.services.businessLayer.util","requestChangedColumnLib");
    return $.mktgcartrequesttool.services.businessLayer.util.requestChangedColumnLib;
}

function getUserDataProtection(){
	$.import("mktgcartrequesttool.services.businessLayer.admin","dataProtectionLib");
    return $.mktgcartrequesttool.services.businessLayer.admin.dataProtectionLib;
}

function getApplication(){
	$.import("mktgcartrequesttool.services.businessLayer.admin","applicationLib");
    return $.mktgcartrequesttool.services.businessLayer.admin.applicationLib;
}

/************Data Layer Mapper*****************/

function getdbHelper(){
    $.import("mktgcartrequesttool.services.dataLayer.util","dbHelper");
    return $.mktgcartrequesttool.services.dataLayer.util.dbHelper;
}

function getDataApi(){
	$.import("mktgcartrequesttool.services.dataLayer.api","dataApi");
    return $.mktgcartrequesttool.services.dataLayer.api.dataApi;
}

function getDataMailTemplate(){
    $.import("mktgcartrequesttool.services.dataLayer.util","dataMailTemplate");
    return $.mktgcartrequesttool.services.dataLayer.util.dataMailTemplate;
}

function getDataPopUp(){
    $.import("mktgcartrequesttool.services.dataLayer.util","dataPopUp");
    return $.mktgcartrequesttool.services.dataLayer.util.dataPopUp;
}

function getDataLogError(){
    $.import("mktgcartrequesttool.services.dataLayer.util","dataLogError");
    return $.mktgcartrequesttool.services.dataLayer.util.dataLogError;
}

function getDataLevel3(){
    $.import("mktgcartrequesttool.services.dataLayer.teamPlanHierarchy","dataLevel3");
    return $.mktgcartrequesttool.services.dataLayer.teamPlanHierarchy.dataLevel3;
}

function getDataLevel4(){
    $.import("mktgcartrequesttool.services.dataLayer.teamPlanHierarchy","dataLevel4");
    return $.mktgcartrequesttool.services.dataLayer.teamPlanHierarchy.dataLevel4;
}

function getDataUser(){
    $.import("mktgcartrequesttool.services.dataLayer.admin","dataUser");
    return $.mktgcartrequesttool.services.dataLayer.admin.dataUser;
}

function getDataPlan(){
    $.import("mktgcartrequesttool.services.dataLayer.teamPlanHierarchy","dataPlan");
    return $.mktgcartrequesttool.services.dataLayer.teamPlanHierarchy.dataPlan;
}

function getDataRegion(){
    $.import("mktgcartrequesttool.services.dataLayer.teamPlanHierarchy","dataRegion");
    return $.mktgcartrequesttool.services.dataLayer.teamPlanHierarchy.dataRegion;
}

function getDataSubRegion(){
    $.import("mktgcartrequesttool.services.dataLayer.teamPlanHierarchy","dataSubRegion");
    return $.mktgcartrequesttool.services.dataLayer.teamPlanHierarchy.dataSubRegion;
}

function getDataRequest(){
    $.import("mktgcartrequesttool.services.dataLayer.shoppingCartHistory","dataRequest");
    return $.mktgcartrequesttool.services.dataLayer.shoppingCartHistory.dataRequest;
}

function getDataRequestMessage(){
    $.import("mktgcartrequesttool.services.dataLayer.newCartRequest","dataRequestMessage");
    return $.mktgcartrequesttool.services.dataLayer.newCartRequest.dataRequestMessage;
}

function getDataService(){
    $.import("mktgcartrequesttool.services.dataLayer.newCartRequest","dataService");
    return $.mktgcartrequesttool.services.dataLayer.newCartRequest.dataService;
}

function getDataRequestService(){
    $.import("mktgcartrequesttool.services.dataLayer.shoppingCartHistory","dataRequestService");
    return $.mktgcartrequesttool.services.dataLayer.shoppingCartHistory.dataRequestService;
}

function getDataRequestCostObject(){
    $.import("mktgcartrequesttool.services.dataLayer.newCartRequest","dataRequestCostObject");
    return $.mktgcartrequesttool.services.dataLayer.newCartRequest.dataRequestCostObject;
}

function getDataAttachmentVendor(){
    $.import("mktgcartrequesttool.services.dataLayer.vendorRequestInquiry","dataAttachmentVendor");
    return $.mktgcartrequesttool.services.dataLayer.vendorRequestInquiry.dataAttachmentVendor;
}

function getDataAttachment(){
    $.import("mktgcartrequesttool.services.dataLayer.attachment","dataAttachment");
    return $.mktgcartrequesttool.services.dataLayer.attachment.dataAttachment;
}

function getDataChangeVendorRequest(){
    $.import("mktgcartrequesttool.services.dataLayer.vendorRequestInquiry","dataChangeVendorRequest");
    return $.mktgcartrequesttool.services.dataLayer.vendorRequestInquiry.dataChangeVendorRequest;
}

function getDataExtendVendorRequest(){
    $.import("mktgcartrequesttool.services.dataLayer.vendorRequestInquiry","dataExtendVendorRequest");
    return $.mktgcartrequesttool.services.dataLayer.vendorRequestInquiry.dataExtendVendorRequest;
}

function getDataVendorInquiry(){
    $.import("mktgcartrequesttool.services.dataLayer.vendorRequestInquiry","dataVendorInquiry");
    return $.mktgcartrequesttool.services.dataLayer.vendorRequestInquiry.dataVendorInquiry;
}

function getDataVendorRequest(){
    $.import("mktgcartrequesttool.services.dataLayer.vendorRequestInquiry","dataVendorRequest");
    return $.mktgcartrequesttool.services.dataLayer.vendorRequestInquiry.dataVendorRequest;
}

function getDataRequestDataProtection(){
    $.import("mktgcartrequesttool.services.dataLayer.newCartRequest","requestDataProtection");
    return $.mktgcartrequesttool.services.dataLayer.newCartRequest.requestDataProtection;
}

function getDataDataProtection(){
    $.import("mktgcartrequesttool.services.dataLayer.dataProtection","dataDataProtectionLib");
    return $.mktgcartrequesttool.services.dataLayer.dataProtection.dataDataProtectionLib;
}

function getDataVendorMessage() {
    $.import("mktgcartrequesttool.services.dataLayer.vendorRequestInquiry","dataVendorMessage");
    return $.mktgcartrequesttool.services.dataLayer.vendorRequestInquiry.dataVendorMessage;
}

function getDataEntity(){
    $.import("mktgcartrequesttool.services.dataLayer.entity","dataEntity");
    return $.mktgcartrequesttool.services.dataLayer.entity.dataEntity;
}
function getDataVendor(){
    $.import("mktgcartrequesttool.services.dataLayer.vendor","dataVendor");
    return $.mktgcartrequesttool.services.dataLayer.vendor.dataVendor;
}
function getDataVendorContactInformation(){
    $.import("mktgcartrequesttool.services.dataLayer.vendor","dataVendorContactInfo");
    return $.mktgcartrequesttool.services.dataLayer.vendor.dataVendorContactInfo;
}
function getDataNonSapVendor(){
    $.import("mktgcartrequesttool.services.dataLayer.nonSAPVendor","dataNonSapVendor");
    return $.mktgcartrequesttool.services.dataLayer.nonSAPVendor.dataNonSapVendor;
}
function getDataVendorEntity(){
    $.import("mktgcartrequesttool.services.dataLayer.vendor","dataVendorEntity");
    return $.mktgcartrequesttool.services.dataLayer.vendor.dataVendorEntity;
}


function getDataMaterial(){
    $.import("mktgcartrequesttool.services.dataLayer.newCartRequest","dataMaterial");
    return $.mktgcartrequesttool.services.dataLayer.newCartRequest.dataMaterial;
}

function getDataInquiry() {
    $.import("mktgcartrequesttool.services.dataLayer.inquiry","dataInquiry");
    return $.mktgcartrequesttool.services.dataLayer.inquiry.dataInquiry;
}

function getDataInquiryMessage() {
    $.import("mktgcartrequesttool.services.dataLayer.inquiry","dataInquiryMessage");
    return $.mktgcartrequesttool.services.dataLayer.inquiry.dataInquiryMessage;
}

function getDataTraining() {
    $.import("mktgcartrequesttool.services.dataLayer.training","dataTraining");
    return $.mktgcartrequesttool.services.dataLayer.training.dataTraining;
}

function getDataVendorRequestInquiryStatus() {
    $.import("mktgcartrequesttool.services.dataLayer.processingReport","dataVendorRequestInquiryStatus");
    return $.mktgcartrequesttool.services.dataLayer.processingReport.dataVendorRequestInquiryStatus;
}

function getDataTemplate() {
    $.import("mktgcartrequesttool.services.dataLayer.template","dataTemplate");
    return $.mktgcartrequesttool.services.dataLayer.template.dataTemplate;
}

function getDataTemplateSection() {
    $.import("mktgcartrequesttool.services.dataLayer.template","dataTemplateSection");
    return $.mktgcartrequesttool.services.dataLayer.template.dataTemplateSection;
}

function getDataSection(){
    $.import("mktgcartrequesttool.services.dataLayer.template","dataSection");
    return $.mktgcartrequesttool.services.dataLayer.template.dataSection;
}

function getDataVendorRequestInquiry(){
    $.import("mktgcartrequesttool.services.dataLayer.vendorRequestInquiry","dataVendorRequestInquiry");
    return $.mktgcartrequesttool.services.dataLayer.vendorRequestInquiry.dataVendorRequestInquiry;
}

function getDataCountry(){
    $.import("mktgcartrequesttool.services.dataLayer.country","dataCountry");
    return $.mktgcartrequesttool.services.dataLayer.country.dataCountry;
}

function getDataCurrency(){
    $.import("mktgcartrequesttool.services.dataLayer.currency","dataCurrency");
    return $.mktgcartrequesttool.services.dataLayer.currency.dataCurrency;
}

function getDataAttachmentRequest(){
    $.import("mktgcartrequesttool.services.dataLayer.newCartRequest","dataAttachmentCRLib");
    return $.mktgcartrequesttool.services.dataLayer.newCartRequest.dataAttachmentCRLib;
}

function getDataNoteRequest(){
    $.import("mktgcartrequesttool.services.dataLayer.newCartRequest","dataNoteRequest");
    return $.mktgcartrequesttool.services.dataLayer.newCartRequest.dataNoteRequest;
}

function getDataShoppingNoteRequest(){
    $.import("mktgcartrequesttool.services.dataLayer.shoppingCartHistory","dataNoteRequest");
    return $.mktgcartrequesttool.services.dataLayer.shoppingCartHistory.dataNoteRequest;
}

function getDataSubject(){
    $.import("mktgcartrequesttool.services.dataLayer.subject","dataSubject");
    return $.mktgcartrequesttool.services.dataLayer.subject.dataSubject;
}

function getDataMessageType(){
    $.import("mktgcartrequesttool.services.dataLayer.messageType","dataMessageType");
    return $.mktgcartrequesttool.services.dataLayer.messageType.dataMessageType;
}

function getDataCrtMessageType(){
    $.import("mktgcartrequesttool.services.dataLayer.messageType","dataCrtMessageType");
    return $.mktgcartrequesttool.services.dataLayer.messageType.dataCrtMessageType;
}

function getDataNews(){
    $.import("mktgcartrequesttool.services.dataLayer.news","dataNews");
    return $.mktgcartrequesttool.services.dataLayer.news.dataNews;
}

function getDataImage(){
    $.import("mktgcartrequesttool.services.dataLayer.news","dataImage");
    return $.mktgcartrequesttool.services.dataLayer.news.dataImage;
}

function getDataCartRequest(){
    $.import("mktgcartrequesttool.services.dataLayer.processingReport","dataCartRequest");
    return $.mktgcartrequesttool.services.dataLayer.processingReport.dataCartRequest;
}

function getDataCommodity(){
    $.import("mktgcartrequesttool.services.dataLayer.commodity","dataCommodity");
    return $.mktgcartrequesttool.services.dataLayer.commodity.dataCommodity;
}

function getDataInfrastructureOfWork(){
    $.import("mktgcartrequesttool.services.dataLayer.infrastructureOfWork","dataInfrastructureOfWork");
    return $.mktgcartrequesttool.services.dataLayer.infrastructureOfWork.dataInfrastructureOfWork;
}

function getDataLocationOfWork(){
    $.import("mktgcartrequesttool.services.dataLayer.locationOfWork","dataLocationOfWork");
    return $.mktgcartrequesttool.services.dataLayer.locationOfWork.dataLocationOfWork;
}

function getDataModal(){
    $.import("mktgcartrequesttool.services.dataLayer.modal","dataModal");
    return $.mktgcartrequesttool.services.dataLayer.modal.dataModal;
}

function getDataCrtSubject() {
    $.import("mktgcartrequesttool.services.dataLayer.subject","dataCrtSubject");
    return $.mktgcartrequesttool.services.dataLayer.subject.dataCrtSubject;
}

function getDataCrtType() {
    $.import("mktgcartrequesttool.services.dataLayer.crtType","dataCrtType");
    return $.mktgcartrequesttool.services.dataLayer.crtType.dataCrtType;
}

function getDataLayoutSection() {
    $.import("mktgcartrequesttool.services.dataLayer.layoutSection","dataLayoutSection");
    return $.mktgcartrequesttool.services.dataLayer.layoutSection.dataLayoutSection;
}

function getDataAttachmentInquiry() {
    $.import("mktgcartrequesttool.services.dataLayer.inquiry","dataAttachmentInquiry");
    return $.mktgcartrequesttool.services.dataLayer.inquiry.dataAttachmentInquiry;
}

function getDataTemplateType() {
    $.import("mktgcartrequesttool.services.dataLayer.template","dataTemplateType");
    return $.mktgcartrequesttool.services.dataLayer.template.dataTemplateType;
}

function getDataTeam() {
    $.import("mktgcartrequesttool.services.dataLayer.team","dataTeam");
    return $.mktgcartrequesttool.services.dataLayer.team.dataTeam;
}

function getDataTrainingType() {
    $.import("mktgcartrequesttool.services.dataLayer.training","dataTrainingType");
    return $.mktgcartrequesttool.services.dataLayer.training.dataTrainingType;
}

function getDataCatalogType() {
    $.import("mktgcartrequesttool.services.dataLayer.catalog","dataCatalogType");
    return $.mktgcartrequesttool.services.dataLayer.catalog.dataCatalogType;
}

function getDataCatalog() {
    $.import("mktgcartrequesttool.services.dataLayer.catalog", "dataCatalog");
    return $.mktgcartrequesttool.services.dataLayer.catalog.dataCatalog;
}

function getDataSpecialRequest() {
    $.import("mktgcartrequesttool.services.dataLayer.specialRequest", "dataSpecialRequest");
    return $.mktgcartrequesttool.services.dataLayer.specialRequest.dataSpecialRequest;
}


function getDataNewCartRequest() {
    $.import("mktgcartrequesttool.services.dataLayer.newCartRequest", "dataRequest");
    return $.mktgcartrequesttool.services.dataLayer.newCartRequest.dataRequest;
}

function getDataNewCartRequestService() {
    $.import("mktgcartrequesttool.services.dataLayer.newCartRequest", "dataRequestService");
    return $.mktgcartrequesttool.services.dataLayer.newCartRequest.dataRequestService;
}

function getDataNewCartRequestRiskFunded() {
    $.import("mktgcartrequesttool.services.dataLayer.newCartRequest", "dataRequestRiskFunded");
    return $.mktgcartrequesttool.services.dataLayer.newCartRequest.dataRequestRiskFunded;
}

function getDataUserRole(){
    $.import("mktgcartrequesttool.services.dataLayer.admin","dataUserRole");
    return $.mktgcartrequesttool.services.dataLayer.admin.dataUserRole;
}

function getDataRole(){
    $.import("mktgcartrequesttool.services.dataLayer.admin","dataRole");
    return $.mktgcartrequesttool.services.dataLayer.admin.dataRole;
}

function getDataPermission(){
    $.import("mktgcartrequesttool.services.dataLayer.admin","dataPermission");
    return $.mktgcartrequesttool.services.dataLayer.admin.dataPermission;
}

function getDataRolePermission(){
    $.import("mktgcartrequesttool.services.dataLayer.admin","dataRolePermission");
    return $.mktgcartrequesttool.services.dataLayer.admin.dataRolePermission;
}

function getDataResource(){
    $.import("mktgcartrequesttool.services.dataLayer.admin","dataResource");
    return $.mktgcartrequesttool.services.dataLayer.admin.dataResource;
}

function getDataConfig(){
    $.import("mktgcartrequesttool.services.dataLayer.util","dataConfiguration");
    return $.mktgcartrequesttool.services.dataLayer.util.dataConfiguration;
}

function getDataRequestRiskFunded() {
    $.import("mktgcartrequesttool.services.dataLayer.shoppingCartHistory", "dataRequestRiskFunded");
    return $.mktgcartrequesttool.services.dataLayer.shoppingCartHistory.dataRequestRiskFunded;
}

function getDataShoppingCartHistoryRequestCostObject() {
    $.import("mktgcartrequesttool.services.dataLayer.shoppingCartHistory", "dataRequestCostObject");
    return $.mktgcartrequesttool.services.dataLayer.shoppingCartHistory.dataRequestCostObject;
}

function getDataNoteType() {
    $.import("mktgcartrequesttool.services.dataLayer.newCartRequest", "dataNoteType");
    return $.mktgcartrequesttool.services.dataLayer.newCartRequest.dataNoteType;
}

function getDataLogin(){
    $.import("mktgcartrequesttool.services.dataLayer.admin","dataLogin");
    return $.mktgcartrequesttool.services.dataLayer.admin.dataLogin;
}

function getDataTopic(){
    $.import("mktgcartrequesttool.services.dataLayer.topic","dataTopic");
    return $.mktgcartrequesttool.services.dataLayer.topic.dataTopic;
}

function getDataProcessingReportMessage(){
    $.import("mktgcartrequesttool.services.dataLayer.processingReport","dataProcessingReportMessage");
    return $.mktgcartrequesttool.services.dataLayer.processingReport.dataProcessingReportMessage;
}

function getDataRequestMessage(){
	$.import("mktgcartrequesttool.services.dataLayer.shoppingCartHistory","dataRequestMessage");
	return $.mktgcartrequesttool.services.dataLayer.shoppingCartHistory.dataRequestMessage;
}

function getDataStatus(){
	$.import("mktgcartrequesttool.services.dataLayer.status","dataStatus");
	return $.mktgcartrequesttool.services.dataLayer.status.dataStatus;
}

function getDataCommodity(){
    $.import("mktgcartrequesttool.services.dataLayer.commodity","dataCommodity");
    return $.mktgcartrequesttool.services.dataLayer.commodity.dataCommodity;
}

function getDataCountry(){
    $.import("mktgcartrequesttool.services.dataLayer.country","dataCountry");
    return $.mktgcartrequesttool.services.dataLayer.country.dataCountry;
}

function getDataAttachmentStore(){
    $.import("mktgcartrequesttool.services.dataLayer.attachment","dataAttachmentStore");
    return $.mktgcartrequesttool.services.dataLayer.attachment.dataAttachmentStore;
}

function getDataVendorDataProtection() {
	$.import("mktgcartrequesttool.services.dataLayer.vendorRequestInquiry","dataVendorDataProtection");
    return $.mktgcartrequesttool.services.dataLayer.vendorRequestInquiry.dataVendorDataProtection;
}

function getDataChangeVendorSupportingDocumentation() {
	$.import("mktgcartrequesttool.services.dataLayer.vendorRequestInquiry","dataChangeVendorSupportingDocumentation");
    return $.mktgcartrequesttool.services.dataLayer.vendorRequestInquiry.dataChangeVendorSupportingDocumentation;
}

function getDataChangeVendorSelection() {
	$.import("mktgcartrequesttool.services.dataLayer.vendorRequestInquiry","dataChangeVendorSelection");
    return $.mktgcartrequesttool.services.dataLayer.vendorRequestInquiry.dataChangeVendorSelection;
}

function getDataBudgetYear() {
	$.import("mktgcartrequesttool.services.dataLayer.admin","dataBudgetYear");
    return $.mktgcartrequesttool.services.dataLayer.admin.dataBudgetYear;
}

function getDataPurchaseOrderService() {
    $.import("mktgcartrequesttool.services.dataLayer.processingReport","dataPurchaseOrderService");
    return $.mktgcartrequesttool.services.dataLayer.processingReport.dataPurchaseOrderService;
}

function getDataInquiryStatus() {
    $.import("mktgcartrequesttool.services.dataLayer.processingReport","dataInquiry");
    return $.mktgcartrequesttool.services.dataLayer.processingReport.dataInquiry;
}

function getDataUserTeam() {
    $.import("mktgcartrequesttool.services.dataLayer.admin","dataUserTeam");
    return $.mktgcartrequesttool.services.dataLayer.admin.dataUserTeam;
}

function getDataReport(){
    $.import("mktgcartrequesttool.services.dataLayer.report","dataReport");
    return $.mktgcartrequesttool.services.dataLayer.report.dataReport;
}

function getDataRequestChangedColumn(){
	$.import("mktgcartrequesttool.services.dataLayer.util","dataRequestChangedColumn");
    return $.mktgcartrequesttool.services.dataLayer.util.dataRequestChangedColumn;
}

function getDataUserDataProtection(){
	$.import("mktgcartrequesttool.services.dataLayer.admin","dataDataProtection");
    return $.mktgcartrequesttool.services.dataLayer.admin.dataDataProtection;
}

function getDataApplication(){
	$.import("mktgcartrequesttool.services.dataLayer.admin","dataApplication");
    return $.mktgcartrequesttool.services.dataLayer.admin.dataApplication;
}

/********************
* E-MAILS TEMPLATES *
********************/

function getCartRequestMail() {
    $.import("mktgcartrequesttool.services.mails","cartRequestMail");
    return $.mktgcartrequesttool.services.mails.cartRequestMail;
}

function getCartRequestMailSend() {
    $.import("mktgcartrequesttool.services.businessLayer.shoppingCartHistory","cartRequestMailSendLib");
    return $.mktgcartrequesttool.services.businessLayer.shoppingCartHistory.cartRequestMailSendLib;
}

function getChangeVendorMail() {
    $.import("mktgcartrequesttool.services.mails","changeVendorMail");
    return $.mktgcartrequesttool.services.mails.changeVendorMail;
}

function getChangeVendorMailSend() {
    $.import("mktgcartrequesttool.services.businessLayer.vendorRequestInquiry.mailSend","changeVendorMailSendLib");
    return $.mktgcartrequesttool.services.businessLayer.vendorRequestInquiry.mailSend.changeVendorMailSendLib;
}

function getCrtInquiryMail() {
    $.import("mktgcartrequesttool.services.mails","crtInquiryMail");
    return $.mktgcartrequesttool.services.mails.crtInquiryMail;
}

function getCrtInquiryMailSend() {
    $.import("mktgcartrequesttool.services.businessLayer.inquiry","inquiryMailSendLib");
    return $.mktgcartrequesttool.services.businessLayer.inquiry.inquiryMailSendLib;
}

function getExtendVendorMail() {
    $.import("mktgcartrequesttool.services.mails","extendVendorMail");
    return $.mktgcartrequesttool.services.mails.extendVendorMail;
}

function getExtendVendorMailSend() {
    $.import("mktgcartrequesttool.services.businessLayer.vendorRequestInquiry.mailSend","extendVendorMailSendLib");
    return $.mktgcartrequesttool.services.businessLayer.vendorRequestInquiry.mailSend.extendVendorMailSendLib;
}

function getVendorInquiryMail() {
    $.import("mktgcartrequesttool.services.mails","vendorInquiryMail");
    return $.mktgcartrequesttool.services.mails.vendorInquiryMail;
}

function getVendorInquiryMailSend() {
    $.import("mktgcartrequesttool.services.businessLayer.vendorRequestInquiry.mailSend","vendorInquiryMailSendLib");
    return $.mktgcartrequesttool.services.businessLayer.vendorRequestInquiry.mailSend.vendorInquiryMailSendLib;
}

function getVendorMail() {
    $.import("mktgcartrequesttool.services.mails","vendorMail");
    return $.mktgcartrequesttool.services.mails.vendorMail;
}

function getVendorRequestMailSend() {
    $.import("mktgcartrequesttool.services.businessLayer.vendorRequestInquiry.mailSend","vendorRequestMailSendLib");
    return $.mktgcartrequesttool.services.businessLayer.vendorRequestInquiry.mailSend.vendorRequestMailSendLib;
}
