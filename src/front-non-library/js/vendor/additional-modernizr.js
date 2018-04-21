!(function(Modernizr, document) {
// IE10
	Modernizr.addTest('ie10', function() {
		// http://stackoverflow.com/questions/9900311/how-do-i-target-only-internet-explorer-10-for-certain-situations-like-internet-e
		return (/*@cc_on!@*/false && document.documentMode === 10);
	});

// IE11
	Modernizr.addTest('ie11', function() {
		// https://en.wikipedia.org/wiki/Internet_Explorer_11
		// var ua = navigator.userAgent;
		// var match = /Trident.*rv[\s:]11\./i.test(ua);
		// ('msTransform' in document.body.style)
		const match = (!!document.documentMode &&
			!document.all &&
			(!!window.matchMedia || !!window.msMatchMedia) &&
			!Modernizr.websqldatabase &&
			!Modernizr.cssreflections);

		return match && (window.navigator.userAgent.indexOf('Edge/') === -1);
	});

}(Modernizr, document));
