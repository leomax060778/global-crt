function validateIsNumber(value){
	return !isNaN(value);
}

function validateIsNatural(value){
	return (validateIsNumber(value) && value >= 0);
}

function validateIsEmail(value){
	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	 return re.test(value);
}

function validateIsPassword(value){
//	var re = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
//	return re.test(value);
	return true;
}

function validateIsDecimal(value){
	return isNumeric(value);
}

function validateLength(value, max, min){
	if(max)
		if(value.length > max) return false;
	if(min)
		if(value.length < min) return false;
		
	return true;
}

function validateIsString(value){
	return (typeof value == "string");
}

function extractObject(object) {
	var aux = {};
		if(object){
		Object.keys(object).forEach(function(key){
			aux[key] = object[key];
		});
	}
	return aux;
}

function validateObjectAttributes(objReq, userId, keys ,serviceUrl, validateTypeFunction) {
	if (!userId) {
		throw ErrorLib.getErrors().BadRequest(
				"The Parameter userId is not found", serviceUrl, userId);
	}
	var isValid = false;
	var errors = {};
	var BreakException = {};

	if (!objReq) {
		throw ErrorLib.getErrors().CustomError("", serviceUrl,
				"The objectRequest is not found");
	}

	try {
		keys.forEach(function(key) {
			if (objReq[key] === null || objReq[key] === undefined) {
				errors[key] = null;
				throw BreakException;
			} else {
				// validate attribute type
				isValid = validateTypeFunction(key, objReq[key]);
				if (!isValid) {
					errors[key] = objReq[key];
					throw BreakException;
				}
			}
		});
		isValid = true;
	} catch (e) {
		if (e !== BreakException) {
			throw ErrorLib.getErrors().CustomError("", serviceUrl, e.toString());
		} else {
			throw ErrorLib.getErrors().CustomError("", serviceUrl,
					JSON.stringify(errors));
		}
	}
	return isValid;
}

function validateDateEndMayorStart(dateStart,dateEnd)
{
	if(dateStart>=dateEnd)
	{
		return true;
	}
	return false;
}

/**
 * @param {string} dateFormat - receives the format to parse the date
 * @returns {string} - return formatted current date
 */
function getCurrentFormattedDate(dateFormat) {
    var currentDate = new Date();
    var year = currentDate.getFullYear();
    var month = currentDate.getMonth() + 1;
    var day = currentDate.getDate();
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var currentFormattedDate = "";
    switch (dateFormat) {
        case "YYYY-MM-DD":
            currentFormattedDate = year + "-" + ("0" + month).slice(-2) + "-" + ("0" + day).slice(-2);
            break;
        case "YYYY-DD-MM":
            currentFormattedDate = year + "-" + ("0" + day).slice(-2) + "-" + ("0" + month).slice(-2);
            break;
        case "MM-DD-YYYY":
            currentFormattedDate = ("0" + month).slice(-2) + "-" + ("0" + day).slice(-2) + "-" + year;
            break;
        case "MM-DD-YYYY HH:MI":
        	currentFormattedDate = ("0" + month).slice(-2) + "-" + ("0" + day).slice(-2) + "-" + year + " " + ("0" + hours).slice(-2) + ":" + ("0" + minutes).slice(-2) + " (GMT+0)";
            break;
        default:
            //Currently the default format is MM-DD-YYYY HH:MI
            currentFormattedDate = ("0" + month).slice(-2) + "-" + ("0" + day).slice(-2) + "-" + year + " " + ("0" + hours).slice(-2) + ":" + ("0" + minutes).slice(-2) + " (GMT+0)";
            break;
    }
    return currentFormattedDate;
}