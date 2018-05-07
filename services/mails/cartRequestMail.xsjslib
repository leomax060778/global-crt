$.import("mktgcartrequesttool.services.commonLib", "mapper");
var mapper = $.mktgcartrequesttool.services.commonLib.mapper;
var utilLib = mapper.getUtil();
/** ***********END INCLUDE LIBRARIES*************** */

function parseReturnToRequest(cartRequestObj, basicData, userName) {
    var mailObj = {};
    var completePath = basicData.URL_BASE + basicData.PATH + '/' + cartRequestObj.REQUEST_ID;
    completePath = (basicData.ADDITIONAL_PARAM) ? completePath + basicData.ADDITIONAL_PARAM : completePath;

    var requestId = 'CR' + cartRequestObj.REQUEST_ID;
    mailObj.body = 'Dear ' + userName + ',<br /> <br /> Your <b>Cart Request</b> has been returned ' +
        'to you with an <b>Action and/or Response that is required</b> in order to process ' +
        'your request.<br /> <br /> A message has been added to the Message History for your ' +
        'request <b>CR' + cartRequestObj.REQUEST_ID + '</b> in the <b>Cart Request Tool.</b><br /> <br /> Log in to ' +
        'CRT, then click the following link to process this specific request: ' +
        '<a href="' + completePath + '" style="font-weight: bold">' + requestId + '</a><br/><br />';
    mailObj.subject = basicData.ENVIRONMENT + ' CRT Request ID: CR' + cartRequestObj.REQUEST_ID + ' - Action/Response Required Message - ' + utilLib.getCurrentFormattedDate();
    return mailObj;
}

function parseCancelled(cartRequestObj, basicData, userName) {
    var mailObj = {};
    var completePath = basicData.URL_BASE + basicData.PATH + '/' + cartRequestObj.REQUEST_ID;
    completePath = (basicData.ADDITIONAL_PARAM) ? completePath + basicData.ADDITIONAL_PARAM : completePath;

    var requestId = 'CR' + cartRequestObj.REQUEST_ID;
    mailObj.body = 'Dear ' + userName + ',<br /><br />Your <b>CR' + cartRequestObj.REQUEST_ID + '</b> has been <b>Cancelled.</b><br />' +
        '<br />The reason for cancellation has been recorded in the Message History as FYI Only, ' +
        'requiring no response.<br /><br />Log in to CRT, then click ' +
        'the following link to process this specific request:' +
        '<a href="' + completePath + '" style="font-weight: bold">' + requestId + '</a><br/><br />';
    mailObj.subject = basicData.ENVIRONMENT + 'CRT Request ID: CR' + cartRequestObj.REQUEST_ID + ' - Cart Request - has been Cancelled - ' + utilLib.getCurrentFormattedDate();
    return mailObj;
}

function parseSubmit(cartRequestObj, basicData, userName) {
    var mailObj = {};
    var completePath = basicData.URL_BASE + basicData.PATH + '/' + cartRequestObj.REQUEST_ID;
    var requestId = 'CR' + cartRequestObj.REQUEST_ID;
    mailObj.body = '<b>Dear ' + userName + ',</b> <br /> <br /> You have new activity within the ' +
        '<b>Cart Request Tool.</b> <br /> <br /> <b>' + cartRequestObj.CURRENT_USER_ROLE + ' ' + cartRequestObj.CURRENT_USER_NAME + ' has created a ' +
        'CR' + cartRequestObj.REQUEST_ID + '</b> <br /> <br /> Log in to CRT, ' +
        'and click the following link to process this specific request: ' +
        '<a href="' + completePath + '" style="font-weight: bold">' + requestId + '</a><br/><br />';
    mailObj.subject = basicData.ENVIRONMENT + 'CRT Request ID: CR' + cartRequestObj.REQUEST_ID + ' - Cart Request Created - ' + utilLib.getCurrentFormattedDate();
    return mailObj;
}

function parseResubmitted(cartRequestObj, basicData, userName) {
    var mailObj = {};
    var completePath = basicData.URL_BASE + basicData.PATH + '/' + cartRequestObj.REQUEST_ID;
    var requestId = 'CR' + cartRequestObj.REQUEST_ID;
    mailObj.body = '<b>Dear ' + userName + ',</b><br /><br /> You have new activity within the ' +
        '<b>Cart Request Tool.</b><br /><br /> <b>' + cartRequestObj.CURRENT_USER_ROLE + ' ' + cartRequestObj.CURRENT_USER_NAME + '</b> has re-submitted a ' +
        '<b>CR' + cartRequestObj.REQUEST_ID + '</b><br /><br /> Log in to CRT, and ' +
        'click the following link to process this specific request: ' +
        '<a href="' + completePath + '" style="font-weight: bold">' + requestId + '</a><br/><br />';
    mailObj.subject = basicData.ENVIRONMENT + 'CRT Request ID: CR' + cartRequestObj.REQUEST_ID + ' - Cart Request Re-Submitted - ' + utilLib.getCurrentFormattedDate();
    return mailObj;
}

function parseApproved(cartRequestObj, basicData, userName) {
    var mailObj = {};
    var completePath = basicData.URL_BASE + basicData.PATH + '/' + cartRequestObj.REQUEST_ID;
    var requestId = 'CR' + cartRequestObj.REQUEST_ID;
    mailObj.body = 'Dear ' + userName + ',<br /><br /> Your cart for <b>' + cartRequestObj.VENDOR_NAME + '</b> is now <b>Approved.</b><br /><br />' +
        parseTablePO(cartRequestObj) + '<br /><br /> Log in to CRT, and click the ' +
        'following link to process this specific request: ' +
        '<a href="' + completePath + '" style="font-weight: bold">' + requestId + '</a><br/><br />';
    mailObj.subject = basicData.ENVIRONMENT + 'CRT Request ID: CR' + cartRequestObj.REQUEST_ID + ' - Cart Request Approved - ' + utilLib.getCurrentFormattedDate();
    return mailObj;
}

function parseInProcess(cartRequestObj, basicData, userName) {
    var mailObj = {};
    var completePath = basicData.URL_BASE + basicData.PATH + '/' + cartRequestObj.REQUEST_ID;
    var requestId = 'CR' + cartRequestObj.REQUEST_ID;
    mailObj.body = 'Dear ' + userName + ',<br /><br />Your <b>Cart Request </b> is now <b>In Process.</b>' +
        '<br /><br /><b>Shopping Cart #: ' + cartRequestObj.SHOPPING_CART + '</b> has been submitted.<br /><br />' +
        '<br />Log in to CRT' +
        ', then click the following link to process this specific request: ' +
        '<a href="' + completePath + '" style="font-weight: bold">' + requestId + '</a><br/><br />';
    mailObj.subject = basicData.ENVIRONMENT + 'CRT Request ID: CR' + cartRequestObj.REQUEST_ID + ' - Cart Request is In Process - ' + utilLib.getCurrentFormattedDate();
    return mailObj;
}

function parseNewMessage(cartRequestObj, basicData, userName) {
    var mailObj = {};
    var completePath = basicData.URL_BASE + basicData.PATH + '/' + cartRequestObj.REQUEST_ID;
    completePath = (basicData.ADDITIONAL_PARAM) ? completePath + basicData.ADDITIONAL_PARAM : completePath;

    var requestId = 'CR' + cartRequestObj.REQUEST_ID;
    mailObj.body = '<b>Dear ' + userName + ',</b><br /><br />A message has been ' +
        'added to the Message History tab for <b>CR' + cartRequestObj.REQUEST_ID + '</b> in the <b>Cart Request Tool.</b>' +
        '<br /><br /> Log in to CRT, then click the ' +
        'following link to process this specific request: ' +
        '<a href="' + completePath + '" style="font-weight: bold">' + requestId + '</a><br/><br />';
    mailObj.subject = basicData.ENVIRONMENT + 'CRT Request ID: CR' + cartRequestObj.REQUEST_ID + ' - New Message - ' + utilLib.getCurrentFormattedDate();
    return mailObj;
}

function parseFYI(cartRequestObj, basicData, userName) {
    var mailObj = {};
    var completePath = basicData.URL_BASE + basicData.PATH + '/' + cartRequestObj.REQUEST_ID;
    completePath = (basicData.ADDITIONAL_PARAM) ? completePath + basicData.ADDITIONAL_PARAM : completePath;

    var requestId = 'CR' + cartRequestObj.REQUEST_ID;
    mailObj.body = '<b>Dear ' + userName + ',</b><br /><br />A message has been added to the ' +
        'Message History tab for your request <b>CR' + cartRequestObj.REQUEST_ID + '</b> in the ' +
        '<b>Cart Request Tool.</b><br /><br />The message is <b>FYI Only, ' +
        'requiring no response.</b><br /><br />Log in to CRT, ' +
        'then click the following link to process this specific request: ' +
        '<a href="' + completePath + '" style="font-weight: bold">' + requestId + '</a><br/><br />';
    mailObj.subject = basicData.ENVIRONMENT + 'CRT Request ID: CR' + cartRequestObj.REQUEST_ID + ' - FYI Only Message - ' + utilLib.getCurrentFormattedDate();
    return mailObj;
}

function parseTablePO(cartRequestObj) {
    var tablePO = '';

    tablePO = '<table border="1" style="width:100%;border-collapse:collapse; ">';
    tablePO = tablePO + '<tr>';
    tablePO = tablePO + '<td style="text-align:center;"><span style="font-weight:bold;font-size:13px">Item#</span></td>';
    tablePO = tablePO + '<td style="text-align:center;"><span style="font-weight:bold;font-size:13px">Start Date</span></td>';
    tablePO = tablePO + '<td style="text-align:center;"><span style="font-weight:bold;font-size:13px">End Date</span></td>';
    tablePO = tablePO + '<td style="text-align:center;"><span style="font-weight:bold;font-size:13px">Description on PO</span></td>';
    tablePO = tablePO + '<td style="text-align:center;"><span style="font-weight:bold;font-size:13px">Amount</span></td>';
    tablePO = tablePO + '<td style="text-align:center;"><span style="font-weight:bold;font-size:13px">SC #</span></td>';
    tablePO = tablePO + '<td style="text-align:center;"><span style="font-weight:bold;font-size:13px">Cart Date</span></td>';
    tablePO = tablePO + '<td style="text-align:center;"><span style="font-weight:bold;font-size:13px">PO #</span></td>';
    tablePO = tablePO + '<td style="text-align:center;"><span style="font-weight:bold;font-size:13px">PO Date</span></td>';
    if (Array.isArray(cartRequestObj.SERVICES) && cartRequestObj.SERVICES.length > 0) {
        tablePO = tablePO + '<td style="text-align:center;"><span style="font-weight:bold;font-size:13px">Line #</span></td>';
        tablePO = tablePO + '</tr>';
        cartRequestObj.SERVICES.forEach(function (service) {
            tablePO = tablePO + '<tr>' +
                '<td style="text-align:center;"><span style="font-size:13px">' + (service.SERVICE_ITEM_NUMBER || '') + '</span></td>'
                + '<td style="text-align:center;"><span style="font-size:13px">' + ( service.SERVICE_START_DATE || '' ) + '</span></td>'
                + '<td style="text-align:center;"><span style="font-size:13px">' + ( service.SERVICE_END_DATE || '') + '</span></td>'
                + '<td style="text-align:center;"><span style="font-size:13px">' + ( service.SERVICE_DESCRIPTION || '' ) + '</span></td>'
                + '<td style="text-align:center;"><span style="font-size:13px">' + ( service.SERVICE_AMOUNT || '' ) + '</span></td>'
                + '<td style="text-align:center;"><span style="font-size:13px">' + ( service.PURCHASE_ORDER_SHOPPING_CART_NUMBER || '') + '</span></td>'
                + '<td style="text-align:center;"><span style="font-size:13px">' + ( service.PURCHASE_ORDER_CART_DATE || '') + '</span></td>'
                + '<td style="text-align:center;"><span style="font-size:13px">' + ( service.PURCHASE_ORDER_NUMBER || '') + '</span></td>'
                + '<td style="text-align:center;"><span style="font-size:13px">' + ( service.PURCHASE_ORDER_DATE || '') + '</span></td>'
                + '<td style="text-align:center;"><span style="font-size:13px">' + ( service.SERVICE_LINE_NUMBER || '') + '</span></td>' +
                '</tr>';
        });
    } else if (Array.isArray(cartRequestObj.SPECIAL_REQUEST) && cartRequestObj.SPECIAL_REQUEST.length > 0) {
        tablePO = tablePO + '</tr>';
        cartRequestObj.SPECIAL_REQUEST.forEach(function (special_request) {
            tablePO = tablePO + '<tr>' +
                '<td style="text-align:center;"><span style="font-size:13px">' + (special_request.SPECIAL_REQUEST_ITEM_NUMBER || '') + '</span></td>'
                + '<td style="text-align:center;"><span style="font-size:13px">' + ( special_request.SPECIAL_REQUEST_START_DATE || '' ) + '</span></td>'
                + '<td style="text-align:center;"><span style="font-size:13px">' + ( special_request.SPECIAL_REQUEST_END_DATE || '') + '</span></td>'
                + '<td style="text-align:center;"><span style="font-size:13px">' + ( special_request.DESCRIPTION || '' ) + '</span></td>'
                + '<td style="text-align:center;"><span style="font-size:13px">' + ( special_request.SPECIAL_REQUEST_AMOUNT || '' ) + '</span></td>'
                + '<td style="text-align:center;"><span style="font-size:13px">' + ( special_request.PURCHASE_ORDER_SHOPPING_CART_NUMBER || '') + '</span></td>'
                + '<td style="text-align:center;"><span style="font-size:13px">' + ( special_request.PURCHASE_ORDER_CART_DATE || '') + '</span></td>'
                + '<td style="text-align:center;"><span style="font-size:13px">' + ( special_request.PURCHASE_ORDER_NUMBER || '') + '</span></td>'
                + '<td style="text-align:center;"><span style="font-size:13px">' + ( special_request.PURCHASE_ORDER_DATE || '') + '</span></td>' +
                '</tr>';
        });
    }
    tablePO = tablePO + '</table>';
    return tablePO;
}