/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referring to this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-time': '&#xe600;',
		'icon-road': '&#xe601;',
		'icon-cog': '&#xe602;',
		'icon-trash': '&#xe603;',
		'icon-repeat': '&#xe604;',
		'icon-tag': '&#xe605;',
		'icon-flag': '&#xe606;',
		'icon-lock': '&#xe607;',
		'icon-unlock-alt': '&#xe608;',
		'icon-map-marker': '&#xe609;',
		'icon-calendar': '&#xe60a;',
		'icon-print': '&#xe60b;',
		'icon-download-alt': '&#xe60c;',
		'icon-chevron-down': '&#xe60d;',
		'icon-chevron-right': '&#xe60e;',
		'icon-caret-right': '&#xe60f;',
		'icon-pause': '&#xe610;',
		'icon-ticket': '&#xe611;',
		'icon-check': '&#xe612;',
		'icon-ok': '&#xe613;',
		'icon-reply': '&#xe614;',
		'icon-share-alt': '&#xe615;',
		'icon-phone': '&#xe616;',
		'icon-bullhorn': '&#xe617;',
		'icon-globe': '&#xe618;',
		'icon-tint': '&#xe619;',
		'icon-remove': '&#xe61a;',
		'icon-remove-sign': '&#xe61b;',
		'icon-shopping-cart': '&#xe61c;',
		'icon-list': '&#xe61d;',
		'icon-list-alt': '&#xe61e;',
		'icon-location-arrow': '&#xe61f;',
		'icon-resize-horizontal': '&#xe620;',
		'icon-dollar': '&#xe621;',
		'icon-search': '&#xe622;',
		'icon-twitter': '&#xe623;',
		'icon-facebook-sign': '&#xe624;',
		'icon-rss': '&#xe625;',
		'icon-users': '&#xe626;',
		'icon-user': '&#xe627;',
		'icon-busbud-logo': '&#xe628;',
		'icon-bus': '&#xe629;',
		'icon-refresh': '&#xe62c;',
		'icon-calendar-empty': '&#xe62d;',
		'icon-star': '&#xe630;',
		'icon-envelope': '&#xe631;',
		'icon-connection': '&#xe62a;',
		'icon-power-cord': '&#xe62b;',
		'icon-radio-checked': '&#xe62e;',
		'icon-radio-unchecked': '&#xe62f;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
