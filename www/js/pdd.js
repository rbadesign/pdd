$(document).on("vclick",".exit",function(event) {
	if (event.preventDefault) { event.preventDefault(); } else { event.returnValue = false; }
    navigator.app.exitApp();
	return false;
});
