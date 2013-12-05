// This file holds all the constants used in the Demos.

window.HereMapsConstants = {
	//	Set authentication token and appid
	//	WARNING: this is a demo-only key
	//
	// Add your own appId and token here
	// sign in and register on http://developer.here.com
	// and obtain your own developer's API key
	AppIdAndToken : {
		appId : "DemoAppId01082013GAL",
		appCode : "AJKnXv84fjrb0KIHawS0Tg",
		language : "en-US",
		serviceMode : "cit",
	},
	// Initial center and zoom level of the map
	InitialLocation : {
		longitude : 52.53,
		latitude : 13.39,
		zoomLevel : 14
	},

	JSLibs : {
		// versioned URL to load the HERE maps API.
		// Check on:  http://developer.here.com/versions
		// to obtain the latest version.
		HereMapsUrl : "http://js.cit.api.here.com/se/2.5.3/jsl.js?blank=true",
		// versioned URL to load jQuery
		jQueryUrl : 'http://ajax.googleapis.com/ajax/libs/jquery/1.8/jquery.min.js',
		jQueryUIUrl : 'http://ajax.googleapis.com/ajax/libs/jqueryui/1.9.2/jquery-ui.min.js'
	},
	NS : "nokia"

}