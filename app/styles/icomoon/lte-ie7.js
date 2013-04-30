/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-search' : '&#xe001;',
			'icon-arrow-left' : '&#xe002;',
			'icon-cancel' : '&#xe000;',
			'icon-cart' : '&#xe003;',
			'icon-bars' : '&#xe004;',
			'icon-tree-view' : '&#xe005;',
			'icon-pie' : '&#xe006;',
			'icon-star' : '&#xe007;',
			'icon-star-2' : '&#xe008;',
			'icon-star-3' : '&#xe009;',
			'icon-bookmark' : '&#xe00a;',
			'icon-bookmark-2' : '&#xe00b;',
			'icon-heart' : '&#xe00c;',
			'icon-heart-stroke' : '&#xe00d;',
			'icon-info' : '&#xe00e;',
			'icon-info-2' : '&#xe00f;',
			'icon-bars-2' : '&#xe010;',
			'icon-arrow-right' : '&#xe011;',
			'icon-arrow-up' : '&#xe012;',
			'icon-arrow-down' : '&#xe013;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
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