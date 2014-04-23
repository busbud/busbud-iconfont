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
		'icon-users': '&#xe626;',
		'icon-user': '&#xe627;',
		'icon-busbud-logo': '&#xe628;',
		'icon-bus': '&#xe629;',
		'icon-search': '&#xe622;',
		'icon-envelope': '&#xe631;',
		'icon-star': '&#xe630;',
		'icon-star-empty': '&#xe635;',
		'icon-ok': '&#xe613;',
		'icon-remove': '&#xe61a;',
		'icon-zoom-in': '&#xe639;',
		'icon-cog': '&#xe602;',
		'icon-trash': '&#xe603;',
		'icon-time': '&#xe600;',
		'icon-road': '&#xe601;',
		'icon-download-alt': '&#xe60c;',
		'icon-repeat': '&#xe604;',
		'icon-refresh': '&#xe62c;',
		'icon-list-alt': '&#xe61e;',
		'icon-lock': '&#xe607;',
		'icon-flag': '&#xe606;',
		'icon-tag': '&#xe605;',
		'icon-print': '&#xe60b;',
		'icon-list': '&#xe61d;',
		'icon-pencil': '&#xe634;',
		'icon-map-marker': '&#xe609;',
		'icon-tint': '&#xe619;',
		'icon-check': '&#xe612;',
		'icon-pause': '&#xe610;',
		'icon-chevron-left': '&#xe632;',
		'icon-chevron-right': '&#xe60e;',
		'icon-remove-sign': '&#xe61b;',
		'icon-ok-sign': '&#xe63a;',
		'icon-question-sign': '&#xe63b;',
		'icon-info-sign': '&#xe63c;',
		'icon-share-alt': '&#xe615;',
		'icon-exclamation-sign': '&#xe63d;',
		'icon-warning-sign': '&#xe63e;',
		'icon-calendar': '&#xe60a;',
		'icon-random': '&#xe638;',
		'icon-chevron-up': '&#xe633;',
		'icon-chevron-down': '&#xe60d;',
		'icon-shopping-cart': '&#xe61c;',
		'icon-resize-horizontal': '&#xe620;',
		'icon-facebook-sign': '&#xe624;',
		'icon-phone': '&#xe616;',
		'icon-twitter': '&#xe623;',
		'icon-rss': '&#xe625;',
		'icon-bullhorn': '&#xe617;',
		'icon-globe': '&#xe618;',
		'icon-caret-left': '&#xe637;',
		'icon-caret-right': '&#xe60f;',
		'icon-exchange': '&#xe636;',
		'icon-angle-left': '&#xe63f;',
		'icon-angle-right': '&#xe640;',
		'icon-angle-up': '&#xe641;',
		'icon-angle-down': '&#xe642;',
		'icon-reply': '&#xe614;',
		'icon-smile': '&#xe643;',
		'icon-frown': '&#xe644;',
		'icon-location-arrow': '&#xe61f;',
		'icon-calendar-empty': '&#xe62d;',
		'icon-unlock-alt': '&#xe608;',
		'icon-ticket': '&#xe611;',
		'icon-dollar': '&#xe621;',
		'icon-female': '&#xe645;',
		'icon-male': '&#xe646;',
		'icon-sun': '&#xe647;',
		'icon-moon': '&#xe648;',
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
