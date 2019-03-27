var _paq = window._paq || [];
/* tracker methods like "setCustomDimension" should be called before "trackPageView" */
_paq.push(['trackPageView']);
_paq.push(['enableLinkTracking']);
(function () {
	var u = "https://matomo.edjw.co.uk/";
	_paq.push(['setTrackerUrl', u + 'matomo.php']);
	_paq.push(['setSiteId', '4']);
	var d = document,
		g = d.createElement('script'),
		s = d.getElementsByTagName('script')[0];
	g.type = 'text/javascript';
	g.async = true;
	g.defer = true;
	g.src = u + 'matomo.js';
	s.parentNode.insertBefore(g, s);
})();