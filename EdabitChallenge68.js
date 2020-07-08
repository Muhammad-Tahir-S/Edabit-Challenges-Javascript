//You need to detect what browser is being used. Create a function that takes a string (browser identifier) and returns the browser name.

function detectBrowser(userAgent){
	if (userAgent.includes('Firefox')) {
		return "Mozilla Firefox";
	} else if (userAgent.includes('Chrome')){
		return "Google Chrome";
	} else {
		return "Internet Explorer";
	}

}