$(document).bind('mobileinit',function(){
	$.mobile.selectmenu.prototype.options.nativeMenu = false;
	$.support.cors = true;
	$.mobile.allowCrossDomainPages = true;
	$.mobile.phonegapNavigationEnabled = true;
	$.mobile.page.prototype.options.domCache = false;
	$.mobile.ajaxEnabled=true;
	$.mobile.pushStateEnabled=false;
	$.mobile.listview.prototype.options.filterPlaceholder = "Поиск ...";
});
