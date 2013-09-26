/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-time' : '&#xf017;',
			'icon-road' : '&#xf018;',
			'icon-cog' : '&#xf013;',
			'icon-trash' : '&#xf014;',
			'icon-refresh' : '&#xf021;',
			'icon-tag' : '&#xf02b;',
			'icon-flag' : '&#xf024;',
			'icon-lock' : '&#xf023;',
			'icon-map-marker' : '&#xf041;',
			'icon-calendar-empty' : '&#xf133;',
			'icon-chevron-down' : '&#xf078;',
			'icon-search' : '&#xf002;',
			'icon-caret-right' : '&#xf0da;',
			'icon-unlock-alt' : '&#xf13e;',
			'icon-pause' : '&#xf04c;',
			'icon-print' : '&#xf02f;',
			'icon-download-alt' : '&#xf019;',
			'icon-ticket' : '&#xf145;',
			'icon-reply' : '&#xf112;',
			'icon-ok' : '&#xf00c;',
			'icon-share-alt' : '&#xf064;',
			'icon-phone' : '&#xf095;',
			'icon-bullhorn' : '&#xf0a1;',
			'icon-globe' : '&#xf0ac;',
			'icon-wifi' : '&#xe000;',
			'icon-plug' : '&#xe001;',
			'icon-tint' : '&#xf043;',
			'icon-remove' : '&#xf00d;',
			'icon-remove-sign' : '&#xf057;',
			'icon-busbud-logo' : '&#xe002;',
			'icon-calendar' : '&#xf073;',
			'icon-repeat' : '&#xf01e;',
			'icon-shopping-cart' : '&#xf07a;',
			'icon-list' : '&#xf03a;',
			'icon-list-alt' : '&#xf022;',
			'icon-location-arrow' : '&#xf124;',
			'icon-resize-horizontal' : '&#xf07e;',
			'icon-check' : '&#xf046;',
			'icon-dollar' : '&#xf155;',
			'icon-chevron-right' : '&#xf054;',
			'icon-user' : '&#xe003;',
			'icon-users' : '&#xe004;',
			'icon-bus' : '&#xe005;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};