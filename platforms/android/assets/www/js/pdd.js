///////////////////////////////////////////////
//
// PDD application
//
// Copyright (c) RBA DESIGN INTERNATIONAL LLC
// http://rbadesign.us
//
// Developer: Dmitry Protopopov
// protopopov@narod.ru
//
///////////////////////////////////////////////

(function ($) {
	
	$(document).on("vclick",".exit",function(event) {
		if (event.preventDefault) { event.preventDefault(); } else { event.returnValue = false; }
		navigator.app.exitApp();
		return false;
	});

	$(document).on("vclick",".buy-pro",function(event) {
		if (event.preventDefault) { event.preventDefault(); } else { event.returnValue = false; }
		try {
			var devicePlatform = window.device.platform || "default";
			switch(devicePlatform) {
				case "Android": openExternalURL("https://play.google.com/store/apps/details?id=com.rbadesign.pddpro"); break;
				case "BlackBerry": openExternalURL("http://rbadesign.us/pddpro"); break;
				case "iPhone": openExternalURL("http://rbadesign.us/pddpro"); break;
				case "webOS": openExternalURL("http://rbadesign.us/pddpro"); break;
				case "default": openExternalURL("http://rbadesign.us/pddpro"); break;
			}
		} catch (e) {
			window.open("http://rbadesign.us/pddpro","_blank");
		}
		return false;
	});
		
})(jQuery);
