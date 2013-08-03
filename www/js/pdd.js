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
		
})(jQuery);
